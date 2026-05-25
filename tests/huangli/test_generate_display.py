import json
import tempfile
import unittest
from pathlib import Path

from scripts.huangli import generate_display


class GenerateDisplayTest(unittest.TestCase):
    def test_adds_display_without_changing_source_fields(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            latest = {"months": ["2026-05"]}
            month = {
                "month": "2026-05",
                "days": {
                    "2026-05-19": {
                        "date": "2026-05-19",
                        "day_quality": {
                            "peng_taboo": "己不破券 二比并亡,亥不嫁娶 不利新郎",
                            "black_yellow": "黄道日",
                            "twelve_officer": "破",
                        },
                        "activities": {"good": ["沐浴"], "bad": ["嫁娶"]},
                        "directions": {"wealth": "正北"},
                        "clothing": {"lucky": ["白色"], "avoid": ["黑色"]},
                    }
                },
            }
            (root / "latest.json").write_text(json.dumps(latest), encoding="utf-8")
            month_path = root / "2026-05.json"
            month_path.write_text(json.dumps(month, ensure_ascii=False), encoding="utf-8")

            def fake_generate(record):
                self.assertEqual(record["date"], "2026-05-19")
                return {
                    "summary": "适合清理旧事，别急着定大事。",
                    "pitfall": "合同、承诺和婚嫁类决定先核清楚。",
                    "action_advice": [
                        {"label": "工作", "title": "先清旧账", "body": "整理流程和旧问题。"},
                        {"label": "沟通", "title": "慢点定", "body": "重要承诺别当天拍死。"},
                        {"label": "生活", "title": "轻一点", "body": "适合洗护和整理。"},
                    ],
                    "scenes": [
                        {"id": "tidy", "label": "整理", "title": "清掉旧负担", "body": "先收尾。"},
                        {"id": "writing", "label": "写作", "title": "修旧稿", "body": "先改结构。"},
                        {"id": "study", "label": "学习", "title": "补基础", "body": "少贪多。"},
                        {"id": "client", "label": "见客户", "title": "先对齐", "body": "少即兴。"},
                        {"id": "deal", "label": "签约", "title": "慢落笔", "body": "多核条款。"},
                    ],
                }

            updated = generate_display.update_display(root, display_generator=fake_generate)

            self.assertEqual(updated, 1)
            result = json.loads(month_path.read_text(encoding="utf-8"))
            record = result["days"]["2026-05-19"]
            self.assertEqual(record["activities"], month["days"]["2026-05-19"]["activities"])
            self.assertEqual(record["display"]["summary"], "适合清理旧事，别急着定大事。")
            self.assertEqual(len(record["display"]["scenes"]), 5)

    def test_rejects_invalid_display_shape(self):
        with self.assertRaises(generate_display.DisplayValidationError):
            generate_display.validate_display(
                {
                    "summary": "太短",
                    "pitfall": "缺少行动建议",
                    "action_advice": [],
                    "scenes": [],
                }
            )


if __name__ == "__main__":
    unittest.main()
