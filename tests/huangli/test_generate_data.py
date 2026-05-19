import datetime as dt
import unittest

from scripts.huangli import generate_data


class FakeLunar:
    date = dt.datetime(2026, 5, 19)
    lunarYear = 2026
    lunarMonth = 4
    lunarDay = 3
    isLunarLeapMonth = False
    lunarYearCn = "二零二六"
    year8Char = "丙午"
    month8Char = "癸巳"
    day8Char = "癸巳"
    twohour8Char = "壬子"
    chineseYearZodiac = "马"
    lunarMonthCn = "四月小"
    lunarDayCn = "初三"
    weekDayCn = "星期二"
    todaySolarTerms = "无"
    nextSolarTerm = "小满"
    nextSolarTermDate = (5, 21)
    nextSolarTermYear = 2026
    lunarSeason = "夏"
    twohour8CharList = ["壬子", "癸丑"]
    chineseZodiacClash = "蛇日冲猪"
    starZodiac = "金牛座"
    todayEastZodiac = "实沈"
    zodiacMark3List = ["鸡", "牛"]
    zodiacMark6 = "猴"
    angelDemon = ((["三合"], ["受死"]), (["纳财"], ["出行"]))
    goodGodName = ["三合"]
    badGodName = ["受死"]
    todayLevelName = "无"
    goodThing = ["纳财", "立券交易"]
    badThing = ["出行"]
    meridians = "胆"

    def get_legalHolidays(self):
        return ""

    def get_otherHolidays(self):
        return ""

    def get_otherLunarHolidays(self):
        return ""

    def get_twohourLuckyList(self):
        return ["凶", "吉"]

    def get_pengTaboo(self):
        return "癸不词讼 理弱敌强,巳不远行 财物伏藏"

    def get_today12DayOfficer(self):
        return ("建", "勾陈", "黑道日")

    def get_the28Stars(self):
        return "觜火猴"

    def get_today5Elements(self):
        return ["天干", "癸", "属水", "地支", "巳", "属火"]

    def get_nayin(self):
        return "长流水"

    def get_the9FlyStar(self):
        return "168924573"

    def get_luckyGodsDirection(self):
        return ["喜神东南", "财神正南", "福神东北", "阳贵东南", "阴贵正东"]

    def get_fetalGod(self):
        return "占房床房内北"


class GenerateHuangliDataTest(unittest.TestCase):
    def test_clothing_colors_are_derived_from_day_stem_element(self):
        clothing = generate_data.clothing_for_day_element("水")

        self.assertEqual(clothing["day_element"], "水")
        self.assertEqual(clothing["lucky"], ["绿色", "青色", "翠色"])
        self.assertEqual(clothing["supportive"], ["黑色", "蓝色", "深蓝色"])
        self.assertEqual(clothing["avoid"], ["红色", "紫色", "粉色", "橙色"])

    def test_lunar_record_contains_practical_schema(self):
        record = generate_data.serialize_lunar(FakeLunar())

        self.assertEqual(record["date"], "2026-05-19")
        self.assertEqual(record["source"], "cnlunar")
        self.assertEqual(record["lunar"]["text"], "二零二六 丙午[马]年 四月小初三")
        self.assertEqual(record["ganzhi"]["day"], "癸巳")
        self.assertEqual(record["day_quality"]["peng_taboo"], "癸不词讼 理弱敌强,巳不远行 财物伏藏")
        self.assertEqual(record["day_quality"]["twelve_officer"], "建")
        self.assertEqual(record["day_quality"]["black_yellow"], "黑道日")
        self.assertEqual(record["directions"]["wealth"], "正南")
        self.assertEqual(record["activities"]["good"], ["纳财", "立券交易"])
        self.assertEqual(record["clothing"]["lucky"], ["绿色", "青色", "翠色"])

    def test_months_to_generate_include_current_and_next_month(self):
        months = generate_data.months_to_generate(dt.date(2026, 12, 10))

        self.assertEqual(months, [(2026, 12), (2027, 1)])


if __name__ == "__main__":
    unittest.main()
