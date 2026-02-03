export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接 */
  link: string
  /** 期数（用于周更分类） */
  weekNumber?: number
  /** 发布日期 */
  publishDate?: string
}

export interface WeeklyIndex {
  weekNumber: number
  dateRange: string
  title: string
}
