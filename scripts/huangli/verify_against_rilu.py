#!/usr/bin/env python3
"""Spot-check generated Huangli JSON against rilu.cc."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
import urllib.request
from pathlib import Path
from typing import Any


DIRECTIONS = "正东|正南|正西|正北|东北|东南|西北|西南"


def split_cn_list(text: str) -> list[str]:
    return [item.strip() for item in re.split(r"[、,，\s]+", text) if item.strip()]


def strip_tags(text: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.I)
    text = re.sub(r"<[^>]+>", "\n", text)
    text = html.unescape(text)
    return re.sub(r"\n+", "\n", text)


def extract_meta_description(raw_html: str) -> str:
    match = re.search(
        r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']',
        raw_html,
        flags=re.I,
    )
    return html.unescape(match.group(1)) if match else ""


def extract_card_items(raw_html: str, card_class: str) -> list[str]:
    card_match = re.search(
        r'<div[^>]*class=["\'][^"\']*\b'
        + re.escape(card_class)
        + r'\b[^"\']*["\'][^>]*>(.*?)</div>\s*</div>',
        raw_html,
        flags=re.I | re.S,
    )
    if not card_match:
        return []

    items_match = re.search(
        r'<div[^>]*class=(?:["\'])?yiji-items(?:["\'])?[^>]*>(.*?)</div>',
        card_match.group(1),
        flags=re.I | re.S,
    )
    source = items_match.group(1) if items_match else card_match.group(1)
    return [strip_tags(item).strip() for item in re.findall(r"<span[^>]*>(.*?)</span>", source, flags=re.I | re.S) if strip_tags(item).strip()]


def extract_rilu_fields(raw_html: str) -> dict[str, Any]:
    description = extract_meta_description(raw_html)
    text = strip_tags(raw_html)
    source = description or text

    fields: dict[str, Any] = {}
    card_yi = extract_card_items(raw_html, "yi-content-card")
    card_ji = extract_card_items(raw_html, "ji-content-card")
    yiji_match = re.search(r"今日宜(.+?)[；;，,]忌(.+?)[。；;]", source)
    yi_match = re.search(r"今日宜(.+?)[；;，,。]忌", source)
    ji_match = re.search(r"[；;，,]忌(.+?)[。；;，,]", source)
    wealth_match = re.search(r"财神(?:方位)?(?:在)?(" + DIRECTIONS + r")", source)
    black_yellow_match = re.search(r"(黄道日|黑道日)", source)
    clash_match = re.search(r"(冲[鼠牛虎兔龙蛇马羊猴鸡狗猪])", source)
    officer_match = re.search(r"([建除满平定执破危成收开闭]日)\s*-\s*(黄道日|黑道日)", text)

    if card_yi:
        fields["yi"] = card_yi
    if card_ji:
        fields["ji"] = card_ji
    if yiji_match and ("yi" not in fields or "ji" not in fields):
        if "yi" not in fields:
            fields["yi"] = split_cn_list(yiji_match.group(1))
        if "ji" not in fields:
            fields["ji"] = split_cn_list(yiji_match.group(2))
    elif yi_match and "yi" not in fields:
        fields["yi"] = split_cn_list(yi_match.group(1))
    if "ji" not in fields and ji_match:
        fields["ji"] = split_cn_list(ji_match.group(1))
    if wealth_match:
        fields["wealth_direction"] = wealth_match.group(1)
    if black_yellow_match:
        fields["black_yellow"] = black_yellow_match.group(1)
    if clash_match:
        fields["clash"] = clash_match.group(1)
    if officer_match:
        fields["twelve_officer"] = officer_match.group(1).removesuffix("日")

    return fields


def compare_list_overlap(local_items: list[str], remote_items: list[str]) -> bool:
    if not local_items or not remote_items:
        return True
    return bool(set(local_items).intersection(remote_items))


def compare_records(local: dict[str, Any], remote: dict[str, Any]) -> dict[str, Any]:
    differences: dict[str, Any] = {}

    checks = {
        "yi": (local.get("activities", {}).get("good", []), remote.get("yi", [])),
        "ji": (local.get("activities", {}).get("bad", []), remote.get("ji", [])),
        "wealth_direction": (local.get("directions", {}).get("wealth"), remote.get("wealth_direction")),
        "black_yellow": (local.get("day_quality", {}).get("black_yellow"), remote.get("black_yellow")),
        "twelve_officer": (local.get("day_quality", {}).get("twelve_officer"), remote.get("twelve_officer")),
        "clash": (local.get("zodiac", {}).get("clash", ""), remote.get("clash")),
    }

    for key, (local_value, remote_value) in checks.items():
        if remote_value in (None, "", []):
            continue
        if key in {"yi", "ji"}:
            if not compare_list_overlap(list(local_value), list(remote_value)):
                differences[key] = {"local": local_value, "rilu": remote_value}
        elif key == "clash":
            if str(remote_value) not in str(local_value):
                differences[key] = {"local": local_value, "rilu": remote_value}
        elif local_value != remote_value:
            differences[key] = {"local": local_value, "rilu": remote_value}

    return {
        "date": local.get("date"),
        "status": "diff" if differences else "ok",
        "differences": differences,
    }


def load_month(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def load_sample_records(data_dir: Path, months: list[str], sample_size: int) -> list[dict[str, Any]]:
    all_records: list[dict[str, Any]] = []
    for month in months:
        payload = load_month(data_dir / f"{month}.json")
        all_records.extend(payload.get("days", {}).values())

    if len(all_records) <= sample_size:
        return all_records
    if sample_size <= 1:
        return [all_records[0]]

    step = (len(all_records) - 1) / (sample_size - 1)
    indexes = [round(step * i) for i in range(sample_size)]
    return [all_records[index] for index in indexes]


def fetch_rilu(date: str) -> str:
    url = f"https://www.rilu.cc/{date}"
    request = urllib.request.Request(url, headers={"User-Agent": "toolbox-huangli-verifier/1.0"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read().decode("utf-8", errors="replace")


def render_markdown(results: list[dict[str, Any]]) -> str:
    lines = ["# Huangli Source Check", ""]
    for result in results:
        lines.append(f"## {result['date']} - {result['status']}")
        if not result["differences"]:
            lines.append("")
            lines.append("No sampled differences.")
            lines.append("")
            continue
        for key, values in result["differences"].items():
            lines.append(f"- `{key}`")
            lines.append(f"  - local: {values['local']}")
            lines.append(f"  - rilu: {values['rilu']}")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def run_check(data_dir: Path, months: list[str], sample_size: int) -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    for record in load_sample_records(data_dir, months, sample_size):
        try:
            remote = extract_rilu_fields(fetch_rilu(record["date"]))
            results.append(compare_records(record, remote))
        except Exception as exc:  # noqa: BLE001 - report network/source issues in check output.
            results.append({"date": record.get("date"), "status": "error", "error": str(exc), "differences": {}})
    return results


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Spot-check Toolbox Huangli JSON against rilu.cc.")
    parser.add_argument("--data-dir", default="docs/public/huangli/data")
    parser.add_argument("--months", nargs="*", help="YYYY-MM months. Defaults to latest.json months.")
    parser.add_argument("--sample-size", type=int, default=5)
    parser.add_argument("--json-output", default="docs/public/huangli/data/source-check.json")
    parser.add_argument("--markdown-output", default="docs/public/huangli/data/source-check.md")
    parser.add_argument("--fail-on-diff", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    data_dir = Path(args.data_dir)
    if args.months:
        months = args.months
    else:
        latest = json.loads((data_dir / "latest.json").read_text(encoding="utf-8"))
        months = latest["months"]

    results = run_check(data_dir, months, args.sample_size)
    report = {"months": months, "sample_size": args.sample_size, "results": results}

    Path(args.json_output).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    Path(args.markdown_output).write_text(render_markdown(results), encoding="utf-8")
    print(render_markdown(results))

    if args.fail_on_diff and any(result["status"] in {"diff", "error"} for result in results):
        sys.exit(1)


if __name__ == "__main__":
    main()
