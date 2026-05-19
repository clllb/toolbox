import json
import tempfile
import unittest
from pathlib import Path

from scripts.huangli import verify_against_rilu


class VerifyAgainstRiluTest(unittest.TestCase):
    def test_extracts_rilu_fields_from_html(self):
        html = """
        <html><head>
        <meta name="description" content="今天是2026年5月19日，农历四月初三，癸巳日，星期二，黑道日。今日宜祭祀、解除、沐浴；忌诸事不宜。财神方位在正南，冲猪煞东。">
        </head><body>
        <div>建日 - 黑道日</div>
        <div>冲猪（亥）<br>煞东</div>
        </body></html>
        """

        fields = verify_against_rilu.extract_rilu_fields(html)

        self.assertEqual(fields["yi"], ["祭祀", "解除", "沐浴"])
        self.assertEqual(fields["ji"], ["诸事不宜"])
        self.assertEqual(fields["wealth_direction"], "正南")
        self.assertEqual(fields["black_yellow"], "黑道日")
        self.assertEqual(fields["clash"], "冲猪")

    def test_extracts_ji_from_daily_sentence_not_faq_question(self):
        html = """
        <html><head>
        <meta name="description" content="2026年5月1日黄历宜忌是什么？今日宜祭祀、沐浴；忌嫁娶、出行。财神方位在正南，冲猪煞东。">
        </head></html>
        """

        fields = verify_against_rilu.extract_rilu_fields(html)

        self.assertEqual(fields["yi"], ["祭祀", "沐浴"])
        self.assertEqual(fields["ji"], ["嫁娶", "出行"])

    def test_extracts_yiji_from_main_cards_before_faq_text(self):
        html = """
        <div class="info-block yi-content-card"><div class=yiji-items><span>疗病</span><span>破土</span></div></div>
        <div class="info-block ji-content-card"><div class=yiji-items><span>诸事不宜</span></div></div>
        <p>老黄历的"宜"表示今天适合做的事情，"忌"表示今天不适合做的事情。比如忌搬家就是不适合搬家。</p>
        """

        fields = verify_against_rilu.extract_rilu_fields(html)

        self.assertEqual(fields["yi"], ["疗病", "破土"])
        self.assertEqual(fields["ji"], ["诸事不宜"])

    def test_compare_records_reports_differences_without_hiding_them(self):
        local = {
            "date": "2026-05-19",
            "activities": {"good": ["纳财"], "bad": ["出行"]},
            "directions": {"wealth": "正南"},
            "day_quality": {"black_yellow": "黑道日", "twelve_officer": "建"},
            "zodiac": {"clash": "蛇日冲猪"},
            "clothing": {"lucky": ["绿色"], "avoid": ["红色"]},
        }
        remote = {
            "yi": ["祭祀"],
            "ji": ["诸事不宜"],
            "wealth_direction": "正南",
            "black_yellow": "黑道日",
            "clash": "冲猪",
        }

        result = verify_against_rilu.compare_records(local, remote)

        self.assertEqual(result["date"], "2026-05-19")
        self.assertEqual(result["status"], "diff")
        self.assertIn("yi", result["differences"])
        self.assertIn("ji", result["differences"])
        self.assertNotIn("wealth_direction", result["differences"])

    def test_load_sample_dates_picks_stable_subset(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            payload = {
                "days": {
                    f"2026-05-{day:02d}": {"date": f"2026-05-{day:02d}"}
                    for day in range(1, 11)
                }
            }
            (root / "2026-05.json").write_text(json.dumps(payload), encoding="utf-8")

            records = verify_against_rilu.load_sample_records(root, ["2026-05"], sample_size=3)

        self.assertEqual([record["date"] for record in records], ["2026-05-01", "2026-05-05", "2026-05-10"])


if __name__ == "__main__":
    unittest.main()
