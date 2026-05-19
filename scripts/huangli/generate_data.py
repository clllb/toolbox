#!/usr/bin/env python3
"""Generate static Huangli JSON data for Toolbox."""

from __future__ import annotations

import argparse
import calendar
import datetime as dt
import json
import re
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


DATA_VERSION = "2026-05-v1"
SOURCE = "cnlunar"
TIMEZONE = "Asia/Shanghai"

COLOR_RULES: dict[str, dict[str, list[str]]] = {
    "木": {
        "lucky": ["红色", "紫色", "粉色", "橙色"],
        "supportive": ["绿色", "青色", "翠色"],
        "neutral": ["黑色", "蓝色", "深蓝色"],
        "not_recommended": ["白色", "银色", "灰色"],
        "avoid": ["黄色", "棕色", "咖啡色", "米色"],
    },
    "火": {
        "lucky": ["黄色", "棕色", "咖啡色", "米色"],
        "supportive": ["红色", "紫色", "粉色", "橙色"],
        "neutral": ["绿色", "青色", "翠色"],
        "not_recommended": ["黑色", "蓝色", "深蓝色"],
        "avoid": ["白色", "银色", "灰色"],
    },
    "土": {
        "lucky": ["白色", "银色", "灰色"],
        "supportive": ["黄色", "棕色", "咖啡色", "米色"],
        "neutral": ["红色", "紫色", "粉色", "橙色"],
        "not_recommended": ["绿色", "青色", "翠色"],
        "avoid": ["黑色", "蓝色", "深蓝色"],
    },
    "金": {
        "lucky": ["黑色", "蓝色", "深蓝色"],
        "supportive": ["白色", "银色", "灰色"],
        "neutral": ["黄色", "棕色", "咖啡色", "米色"],
        "not_recommended": ["红色", "紫色", "粉色", "橙色"],
        "avoid": ["绿色", "青色", "翠色"],
    },
    "水": {
        "lucky": ["绿色", "青色", "翠色"],
        "supportive": ["黑色", "蓝色", "深蓝色"],
        "neutral": ["白色", "银色", "灰色"],
        "not_recommended": ["黄色", "棕色", "咖啡色", "米色"],
        "avoid": ["红色", "紫色", "粉色", "橙色"],
    },
}


def clothing_for_day_element(day_element: str) -> dict[str, Any]:
    normalized = day_element.replace("属", "").strip()
    colors = COLOR_RULES.get(normalized)
    if not colors:
        colors = {
            "lucky": [],
            "supportive": [],
            "neutral": [],
            "not_recommended": [],
            "avoid": [],
        }
    return {"day_element": normalized, **colors}


def months_to_generate(today: dt.date) -> list[tuple[int, int]]:
    next_month = today.replace(day=28) + dt.timedelta(days=4)
    return [(today.year, today.month), (next_month.year, next_month.month)]


def extract_day_element(today5: list[Any]) -> str:
    for index, value in enumerate(today5):
        if value == "天干" and index + 2 < len(today5):
            return str(today5[index + 2]).replace("属", "")
    for value in today5:
        match = re.fullmatch(r"属([木火土金水])", str(value))
        if match:
            return match.group(1)
    return ""


def parse_lucky_directions(items: list[str]) -> dict[str, str]:
    mapping = {
        "喜神": "joy",
        "财神": "wealth",
        "福神": "fortune",
        "阳贵": "yang_noble",
        "阴贵": "yin_noble",
    }
    result: dict[str, str] = {}
    for item in items:
        for label, key in mapping.items():
            if item.startswith(label):
                result[key] = item.removeprefix(label)
    return result


def serialize_lunar(lunar: Any) -> dict[str, Any]:
    today5 = list(lunar.get_today5Elements())
    day_element = extract_day_element(today5)
    twelve_officer = lunar.get_today12DayOfficer()
    holidays = [
        value
        for value in [
            lunar.get_legalHolidays(),
            lunar.get_otherHolidays(),
            lunar.get_otherLunarHolidays(),
        ]
        if value
    ]

    return {
        "date": lunar.date.strftime("%Y-%m-%d"),
        "source": SOURCE,
        "calendar": {
            "gregorian": lunar.date.strftime("%Y-%m-%d"),
            "weekday": lunar.weekDayCn,
            "solar_term_today": lunar.todaySolarTerms,
            "next_solar_term": {
                "name": lunar.nextSolarTerm,
                "date": list(lunar.nextSolarTermDate),
                "year": lunar.nextSolarTermYear,
            },
            "season": lunar.lunarSeason,
            "holidays": holidays,
        },
        "lunar": {
            "year": lunar.lunarYear,
            "month": lunar.lunarMonth,
            "day": lunar.lunarDay,
            "is_leap_month": lunar.isLunarLeapMonth,
            "text": f"{lunar.lunarYearCn} {lunar.year8Char}[{lunar.chineseYearZodiac}]年 {lunar.lunarMonthCn}{lunar.lunarDayCn}",
        },
        "ganzhi": {
            "year": lunar.year8Char,
            "month": lunar.month8Char,
            "day": lunar.day8Char,
            "current_two_hour": lunar.twohour8Char,
            "two_hour_list": list(lunar.twohour8CharList),
        },
        "zodiac": {
            "year": lunar.chineseYearZodiac,
            "clash": lunar.chineseZodiacClash,
            "western": lunar.starZodiac,
            "east": lunar.todayEastZodiac,
            "triad": list(lunar.zodiacMark3List),
            "six_harmony": lunar.zodiacMark6,
        },
        "day_quality": {
            "peng_taboo": lunar.get_pengTaboo(),
            "twelve_officer": twelve_officer[0],
            "duty_god": twelve_officer[1],
            "black_yellow": twelve_officer[2],
            "twenty_eight_star": lunar.get_the28Stars(),
            "nine_flying_star": lunar.get_the9FlyStar(),
            "level": lunar.todayLevelName,
        },
        "five_elements": {
            "raw": today5,
            "day_element": day_element,
            "nayin": lunar.get_nayin(),
        },
        "directions": parse_lucky_directions(list(lunar.get_luckyGodsDirection())),
        "fetal_god": lunar.get_fetalGod(),
        "gods": {
            "good": list(lunar.goodGodName),
            "bad": list(lunar.badGodName),
            "angel_demon": lunar.angelDemon,
        },
        "activities": {
            "good": list(lunar.goodThing),
            "bad": list(lunar.badThing),
        },
        "two_hour": {
            "lucky_list": list(lunar.get_twohourLuckyList()),
            "meridians": lunar.meridians,
        },
        "clothing": clothing_for_day_element(day_element),
    }


def build_lunar(day: dt.date) -> Any:
    try:
        import cnlunar
    except ImportError as exc:
        raise SystemExit(
            "Missing dependency: cnlunar. Install with `python3 -m pip install -r scripts/huangli/requirements.txt`."
        ) from exc
    return cnlunar.Lunar(dt.datetime(day.year, day.month, day.day), godType="8char")


def generate_month(year: int, month: int) -> dict[str, Any]:
    days: dict[str, Any] = {}
    for day in range(1, calendar.monthrange(year, month)[1] + 1):
        date = dt.date(year, month, day)
        days[date.isoformat()] = serialize_lunar(build_lunar(date))
    return {
        "schema_version": DATA_VERSION,
        "source": SOURCE,
        "timezone": TIMEZONE,
        "month": f"{year:04d}-{month:02d}",
        "days": days,
    }


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def generate(output_dir: Path, today: dt.date) -> list[str]:
    generated_at = dt.datetime.now(ZoneInfo(TIMEZONE)).isoformat(timespec="seconds")
    months: list[str] = []
    for year, month in months_to_generate(today):
        payload = generate_month(year, month)
        month_key = payload["month"]
        months.append(month_key)
        write_json(output_dir / f"{month_key}.json", payload)

    latest = {
        "schema_version": DATA_VERSION,
        "generated_at": generated_at,
        "months": months,
        "source": SOURCE,
        "timezone": TIMEZONE,
    }
    write_json(output_dir / "latest.json", latest)
    return months


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Toolbox Huangli static JSON.")
    parser.add_argument("--date", help="Reference date in YYYY-MM-DD. Defaults to today in Asia/Shanghai.")
    parser.add_argument(
        "--output-dir",
        default="docs/public/huangli/data",
        help="Output directory for month JSON files.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    if args.date:
        today = dt.date.fromisoformat(args.date)
    else:
        today = dt.datetime.now(ZoneInfo(TIMEZONE)).date()
    months = generate(Path(args.output_dir), today)
    print(f"Generated Huangli data for: {', '.join(months)}")


if __name__ == "__main__":
    main()
