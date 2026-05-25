#!/usr/bin/env python3
"""Generate LLM-written display copy for Toolbox Huangli JSON."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any, Callable


DEFAULT_BASE_URL = "https://api.deepseek.com"
DEFAULT_MODEL = "deepseek-v4-pro"
TIMEOUT_SECONDS = 90
TIMEZONE = "Asia/Shanghai"


class DisplayValidationError(ValueError):
    """Raised when generated display copy does not match the expected schema."""


DisplayGenerator = Callable[[dict[str, Any]], dict[str, Any]]


def require_string(value: Any, field: str) -> str:
    if not isinstance(value, str) or not value.strip():
        raise DisplayValidationError(f"{field} must be a non-empty string")
    return value.strip()


def validate_action_advice(value: Any) -> list[dict[str, str]]:
    if not isinstance(value, list) or len(value) != 3:
        raise DisplayValidationError("action_advice must contain exactly 3 items")

    expected_labels = ["工作", "沟通", "生活"]
    result: list[dict[str, str]] = []
    for index, item in enumerate(value):
        if not isinstance(item, dict):
            raise DisplayValidationError("action_advice items must be objects")
        label = require_string(item.get("label"), f"action_advice[{index}].label")
        if label != expected_labels[index]:
            raise DisplayValidationError(
                f"action_advice[{index}].label must be {expected_labels[index]}"
            )
        result.append(
            {
                "label": label,
                "title": require_string(item.get("title"), f"action_advice[{index}].title"),
                "body": require_string(item.get("body"), f"action_advice[{index}].body"),
            }
        )
    return result


def validate_scenes(value: Any) -> list[dict[str, str]]:
    if not isinstance(value, list) or len(value) != 5:
        raise DisplayValidationError("scenes must contain exactly 5 items")

    result: list[dict[str, str]] = []
    seen_ids: set[str] = set()
    for index, item in enumerate(value):
        if not isinstance(item, dict):
            raise DisplayValidationError("scene items must be objects")
        scene_id = require_string(item.get("id"), f"scenes[{index}].id")
        if scene_id in seen_ids:
            raise DisplayValidationError(f"duplicate scene id: {scene_id}")
        seen_ids.add(scene_id)
        result.append(
            {
                "id": scene_id,
                "label": require_string(item.get("label"), f"scenes[{index}].label"),
                "title": require_string(item.get("title"), f"scenes[{index}].title"),
                "body": require_string(item.get("body"), f"scenes[{index}].body"),
            }
        )
    return result


def validate_display(value: Any) -> dict[str, Any]:
    if not isinstance(value, dict):
        raise DisplayValidationError("display must be an object")
    return {
        "summary": require_string(value.get("summary"), "summary"),
        "pitfall": require_string(value.get("pitfall"), "pitfall"),
        "action_advice": validate_action_advice(value.get("action_advice")),
        "scenes": validate_scenes(value.get("scenes")),
    }


def extract_prompt_record(record: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": record.get("date"),
        "lunar": record.get("lunar"),
        "day_quality": record.get("day_quality"),
        "activities": record.get("activities"),
        "directions": record.get("directions"),
        "clothing": record.get("clothing"),
    }


def build_messages(record: dict[str, Any]) -> list[dict[str, str]]:
    compact = json.dumps(extract_prompt_record(record), ensure_ascii=False, separators=(",", ":"))
    return [
        {
            "role": "system",
            "content": (
                "你是 ToolGuide 今日顺了吗的黄历展示文案编辑。"
                "只根据用户提供的黄历 JSON 写展示文案，不改写事实字段。"
                "语气通俗、现代、轻松，避免算命式绝对断言。"
                "必须返回合法 JSON object，不要 Markdown。"
            ),
        },
        {
            "role": "user",
            "content": (
                "请为这一天生成 display JSON。必须包含："
                "summary 字符串；pitfall 字符串，通俗解释 peng_taboo；"
                "action_advice 数组，正好三项，label 依次为 工作、沟通、生活；"
                "scenes 数组，正好五项，每项有 id、label、title、body。"
                "所有文案应短小、可直接展示。"
                "JSON 示例："
                '{"summary":"适合清理旧事，别急着定大事。",'
                '"pitfall":"合同和承诺先核清楚。",'
                '"action_advice":[{"label":"工作","title":"先清旧账","body":"整理流程和旧问题。"},'
                '{"label":"沟通","title":"慢点定","body":"重要承诺别当天拍死。"},'
                '{"label":"生活","title":"轻一点","body":"适合洗护和整理。"}],'
                '"scenes":[{"id":"tidy","label":"整理","title":"清掉旧负担","body":"先收尾。"},'
                '{"id":"writing","label":"写作","title":"修旧稿","body":"先改结构。"},'
                '{"id":"study","label":"学习","title":"补基础","body":"少贪多。"},'
                '{"id":"client","label":"见客户","title":"先对齐","body":"少即兴。"},'
                '{"id":"deal","label":"签约","title":"慢落笔","body":"多核条款。"}]}'
                "黄历 JSON："
                f"{compact}"
            ),
        },
    ]


def parse_response_content(content: str) -> dict[str, Any]:
    try:
        parsed = json.loads(content)
    except json.JSONDecodeError:
        start = content.find("{")
        end = content.rfind("}")
        if start == -1 or end == -1 or end <= start:
            raise
        parsed = json.loads(content[start : end + 1])
    if not isinstance(parsed, dict):
        raise DisplayValidationError("model response must be a JSON object")
    return parsed


def call_deepseek(
    record: dict[str, Any],
    *,
    api_key: str,
    model: str = DEFAULT_MODEL,
    base_url: str = DEFAULT_BASE_URL,
    timeout: int = TIMEOUT_SECONDS,
) -> dict[str, Any]:
    payload = {
        "model": model,
        "messages": build_messages(record),
        "temperature": 0.7,
        "max_tokens": 2000,
        "response_format": {"type": "json_object"},
    }
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url.rstrip('/')}/chat/completions",
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )

    with urllib.request.urlopen(request, timeout=timeout) as response:
        raw = response.read().decode("utf-8")
    data = json.loads(raw)
    content = data["choices"][0]["message"]["content"]
    return validate_display(parse_response_content(content))


def generate_with_retry(
    record: dict[str, Any],
    *,
    api_key: str,
    model: str,
    base_url: str,
    retries: int,
) -> dict[str, Any]:
    last_error: Exception | None = None
    for attempt in range(retries + 1):
        try:
            return call_deepseek(record, api_key=api_key, model=model, base_url=base_url)
        except (DisplayValidationError, json.JSONDecodeError, KeyError, urllib.error.URLError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"failed to generate display for {record.get('date')}: {last_error}")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, data: Any) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def has_valid_display(record: dict[str, Any]) -> bool:
    try:
        validate_display(record.get("display"))
        return True
    except DisplayValidationError:
        return False


def parse_date(value: str) -> dt.date:
    return dt.date.fromisoformat(value)


def date_in_window(date_key: str, start_date: str | None, days: int | None) -> bool:
    if not start_date or not days:
        return True
    target = parse_date(date_key)
    start = parse_date(start_date)
    end = start + dt.timedelta(days=days)
    return start <= target < end


def update_display(
    data_dir: Path,
    *,
    display_generator: DisplayGenerator,
    force: bool = False,
    start_date: str | None = None,
    days: int | None = None,
) -> int:
    if days is not None and days < 1:
        raise ValueError("days must be at least 1")

    latest = load_json(data_dir / "latest.json")
    months = latest.get("months", [])
    if not isinstance(months, list) or not months:
        raise ValueError("latest.json must contain a non-empty months array")

    updated = 0
    for month in months:
        month_path = data_dir / f"{month}.json"
        payload = load_json(month_path)
        day_records = payload.get("days")
        if not isinstance(day_records, dict):
            raise ValueError(f"{month_path} must contain a days object")

        changed = False
        for date_key in sorted(day_records):
            if not date_in_window(date_key, start_date, days):
                continue
            record = day_records[date_key]
            if not force and has_valid_display(record):
                continue
            record["display"] = validate_display(display_generator(record))
            updated += 1
            changed = True

        if changed:
            write_json(month_path, payload)
    return updated


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate LLM display copy for Huangli data.")
    parser.add_argument("--data-dir", default="docs/public/huangli/data")
    parser.add_argument("--model", default=DEFAULT_MODEL)
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL)
    parser.add_argument("--retries", type=int, default=2)
    parser.add_argument("--start-date", help="First date to update, YYYY-MM-DD. Defaults to all covered dates.")
    parser.add_argument("--days", type=int, help="Number of days to update from --start-date.")
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        raise SystemExit("Missing DEEPSEEK_API_KEY environment variable.")

    def generator(record: dict[str, Any]) -> dict[str, Any]:
        return generate_with_retry(
            record,
            api_key=api_key,
            model=args.model,
            base_url=args.base_url,
            retries=args.retries,
        )

    updated = update_display(
        Path(args.data_dir),
        display_generator=generator,
        force=args.force,
        start_date=args.start_date,
        days=args.days,
    )
    print(f"Generated display copy for {updated} Huangli day(s).")


if __name__ == "__main__":
    main()
