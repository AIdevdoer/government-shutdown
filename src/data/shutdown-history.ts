import type { Locale } from "./locales";

export interface ShutdownHistoryEvent {
  year: string;
  span: string;
  fiscalYear: string;
  duration: string;
  title: string;
  summary: string;
}

interface HistoryStat {
  value: string;
  label: string;
  note?: string;
}

export interface ShutdownHistoryContent {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  disclaimerTitle: string;
  disclaimerText: string;
  stats: HistoryStat[];
  highlightTitle: string;
  highlightText: string;
  railLabel: string;
  railInstruction: string;
  highlightCtaLabel: string;
  fullTitle: string;
  fullText: string;
  sourcesTitle: string;
  sources: { label: string; href: string }[];
  highlights: ShutdownHistoryEvent[];
  events: ShutdownHistoryEvent[];
}

const sourceLinks = [
  {
    label: "CRS: Shutdown of the Federal Government",
    href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html"
  },
  {
    label: "GAO: Lapses in Appropriations",
    href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations"
  }
];

export const shutdownHistoryByLocale: Record<Locale, ShutdownHistoryContent> = {
  en: {
    pageTitle: "U.S. Government Shutdown History Timeline",
    pageDescription:
      "A timeline of U.S. government shutdowns and funding gaps from 1976 through 2025, including durations, fiscal years, and the biggest modern standoffs.",
    eyebrow: "History timeline",
    heading: "Why does the U.S. keep coming close to shutdowns? This timeline starts in the 1970s.",
    intro:
      "This page shows the bigger picture. U.S. government shutdowns are not common, but they have happened again and again since the federal fiscal year moved to October 1.",
    disclaimerTitle: "Important context",
    disclaimerText:
      "CRS counts 21 funding gaps since FY1977. The older cases did not always look like a modern shutdown, because the 1980 and 1981 Civiletti opinions changed how agencies handled lapses in appropriations.",
    stats: [
      { value: "1976-2025", label: "Years covered" },
      { value: "21", label: "Funding gaps since FY1977" },
      { value: "42 days", label: "Longest gap", note: "FY2026 lapse ending November 12, 2025" }
    ],
    highlightTitle: "If you only want the big moments, start with these years.",
    highlightText:
      "Most people do not need all 21 entries first. These are the years readers usually recognize right away.",
    railLabel: "Drag the timeline",
    railInstruction: "Drag left or right, then open the year you want.",
    highlightCtaLabel: "See the full timeline",
    fullTitle: "Every shutdown and funding gap on the list",
    fullText:
      "This list follows the CRS chronology. It starts with the first post-fiscal-year funding gap in 1976 and runs through the FY2026 lapse that lasted 42 days.",
    sourcesTitle: "Official sources",
    sources: sourceLinks,
    highlights: [
      {
        year: "1976",
        span: "Oct 1-11, 1976",
        fiscalYear: "FY 1977",
        duration: "10 days",
        title: "First post-fiscal-year funding gap",
        summary: "A 10-day gap soon after the federal fiscal year shifted to October 1."
      },
      {
        year: "1995-96",
        span: "Nov 14-19, 1995 and Dec 16, 1995-Jan 6, 1996",
        fiscalYear: "FY 1996",
        duration: "5 + 21 days",
        title: "The Clinton-Gingrich confrontation",
        summary: "Two shutdowns in one fiscal year turned the budget fight into a defining political event."
      },
      {
        year: "2013",
        span: "Oct 1-17, 2013",
        fiscalYear: "FY 2014",
        duration: "16 days",
        title: "Affordable Care Act standoff",
        summary: "A shutdown tied to a high-profile fight over spending and health policy."
      },
      {
        year: "2018-19",
        span: "Dec 22, 2018-Jan 25, 2019",
        fiscalYear: "FY 2019",
        duration: "34 days",
        title: "The longest modern shutdown until 2025",
        summary: "This became the record-holder until the FY2026 lapse lasted even longer."
      },
      {
        year: "2025",
        span: "Sep 30-Nov 12, 2025",
        fiscalYear: "FY 2026",
        duration: "42 days",
        title: "A new longest funding gap",
        summary: "CRS records the FY2026 lapse as the longest in the timeline."
      }
    ],
    events: [
      {
        year: "1976",
        span: "Oct 1-11, 1976",
        fiscalYear: "FY 1977",
        duration: "10 days",
        title: "First post-fiscal-year funding gap",
        summary: "This 10-day gap came soon after the federal fiscal year moved to October 1."
      },
      {
        year: "1977",
        span: "Nov 1-9, 1977",
        fiscalYear: "FY 1978",
        duration: "8 days",
        title: "First FY1978 lapse",
        summary: "Congress resolved this gap with another short-term funding measure."
      },
      {
        year: "1977",
        span: "Dec 1-9, 1977",
        fiscalYear: "FY 1978",
        duration: "8 days",
        title: "Second FY1978 lapse",
        summary: "A second FY1978 funding gap followed one month later."
      },
      {
        year: "1978",
        span: "Oct 1-13, 1978",
        fiscalYear: "FY 1979",
        duration: "12 days",
        title: "Longest gap of the 1970s",
        summary: "The FY1979 lapse lasted 12 days and showed how hard appropriations fights could become."
      },
      {
        year: "1979",
        span: "Sep 30-Oct 8, 1979",
        fiscalYear: "FY 1980",
        duration: "8 days",
        title: "Last pre-Civiletti gap",
        summary: "This happened before the 1980 and 1981 legal opinions that shaped the modern shutdown model."
      },
      {
        year: "1981",
        span: "Nov 21-23, 1981",
        fiscalYear: "FY 1982",
        duration: "3 days",
        title: "Early modern shutdown-era lapse",
        summary: "After the Civiletti opinions, funding lapses were treated more strictly and became more operationally visible."
      },
      {
        year: "1982",
        span: "Sep 30-Oct 2, 1982",
        fiscalYear: "FY 1983",
        duration: "2 days",
        title: "Short FY1983 lapse",
        summary: "A brief funding break as lawmakers argued over spending and appropriations timing."
      },
      {
        year: "1982",
        span: "Dec 17-19, 1982",
        fiscalYear: "FY 1983",
        duration: "3 days",
        title: "Second 1982 gap",
        summary: "Another short lapse showed how quickly appropriations fights could repeat."
      },
      {
        year: "1983",
        span: "Nov 10-14, 1983",
        fiscalYear: "FY 1984",
        duration: "3 days",
        title: "FY1984 gap",
        summary: "A brief shutdown-era funding lapse continued the pattern of 1980s brinkmanship."
      },
      {
        year: "1984",
        span: "Sep 30-Oct 3, 1984",
        fiscalYear: "FY 1985",
        duration: "2 days",
        title: "FY1985 gap, part one",
        summary: "The first of two closely spaced gaps in late 1984."
      },
      {
        year: "1984",
        span: "Oct 3-5, 1984",
        fiscalYear: "FY 1985",
        duration: "1 day",
        title: "FY1985 gap, part two",
        summary: "A follow-on lapse that ended quickly but underlined how unstable the budget process had become."
      },
      {
        year: "1986",
        span: "Oct 17-18, 1986",
        fiscalYear: "FY 1987",
        duration: "1 day",
        title: "FY1987 brief gap",
        summary: "A one-day lapse, short but still part of the broader pattern."
      },
      {
        year: "1987",
        span: "Dec 18-20, 1987",
        fiscalYear: "FY 1988",
        duration: "1 day",
        title: "FY1988 brief gap",
        summary: "Another short lapse late in the decade."
      },
      {
        year: "1990",
        span: "Oct 5-9, 1990",
        fiscalYear: "FY 1991",
        duration: "3 days",
        title: "FY1991 gap",
        summary: "A three-day funding lapse at the start of the 1990s."
      },
      {
        year: "1995",
        span: "Nov 14-19, 1995",
        fiscalYear: "FY 1996",
        duration: "5 days",
        title: "Clinton-Gingrich showdown, part one",
        summary: "The first of two shutdowns tied to a major budget confrontation."
      },
      {
        year: "1995-96",
        span: "Dec 16, 1995-Jan 6, 1996",
        fiscalYear: "FY 1996",
        duration: "21 days",
        title: "Clinton-Gingrich showdown, part two",
        summary: "For years, this 21-day shutdown stood as the longest in the modern era."
      },
      {
        year: "2013",
        span: "Oct 1-17, 2013",
        fiscalYear: "FY 2014",
        duration: "16 days",
        title: "Affordable Care Act standoff",
        summary: "A 16-day shutdown during the Obama administration."
      },
      {
        year: "2018",
        span: "Jan 20-22, 2018",
        fiscalYear: "FY 2018",
        duration: "2 days",
        title: "January 2018 gap",
        summary: "A short weekend lapse that temporarily closed federal agencies."
      },
      {
        year: "2018",
        span: "Feb 9, 2018",
        fiscalYear: "FY 2018",
        duration: "Overnight",
        title: "Brief February 2018 gap",
        summary: "An overnight lapse that lasted only hours but still counted in the broader funding-gap chronology."
      },
      {
        year: "2018-19",
        span: "Dec 22, 2018-Jan 25, 2019",
        fiscalYear: "FY 2019",
        duration: "34 days",
        title: "Record-setting Trump-era shutdown",
        summary: "A 34-day shutdown that became the longest on record until the FY2026 lapse."
      },
      {
        year: "2025",
        span: "Sep 30-Nov 12, 2025",
        fiscalYear: "FY 2026",
        duration: "42 days",
        title: "FY2026 lapse sets a new record",
        summary: "CRS records this 42-day lapse as the longest funding gap in the timeline."
      }
    ]
  },
  zh: {
    pageTitle: "美国政府停摆历史时间线",
    pageDescription: "按时间顺序梳理美国从 1976 年到 2025 年的政府停摆与拨款中断，包括持续时间、财年和几次最有代表性的停摆。",
    eyebrow: "历史时间线",
    heading: "美国政府为什么会一次次接近停摆？这条时间线从 1970 年代讲到今天。",
    intro:
      "这页不是只讲某一次停摆，而是先帮你看全貌：美国政府停摆不算常见，但也绝不是只发生过一次。",
    disclaimerTitle: "先说明白",
    disclaimerText:
      "CRS 统计自 FY1977 以来共有 21 次拨款中断。需要注意的是，早期并不是每一次都呈现出今天大家理解的“现代停摆”样子，因为 1980 和 1981 年的 Civiletti 意见改变了联邦机构处理拨款失效的方式。",
    stats: [
      { value: "1976-2025", label: "时间范围" },
      { value: "21 次", label: "1977 财年以来拨款中断次数" },
      { value: "42 天", label: "最长一次", note: "FY2026 拨款中断，至 2025 年 11 月 12 日结束" }
    ],
    highlightTitle: "如果你只想先看最重要的几次，就从下面这些年份开始。",
    highlightText:
      "大多数人不需要一开始就把整条长时间线看完，先抓住这几个年份就够了。",
    railLabel: "拖动时间线",
    railInstruction: "左右拖动年份，再点开你想看的那一次。",
    highlightCtaLabel: "查看完整时间线",
    fullTitle: "完整时间线",
    fullText:
      "下面这条列表按 CRS 的时间顺序整理，从 1976 年第一轮 post-fiscal-year funding gap，一直到持续 42 天的 FY2026 拨款中断。",
    sourcesTitle: "主要来源",
    sources: [
      {
        label: "CRS：联邦政府停摆",
        href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html"
      },
      {
        label: "GAO：拨款中断",
        href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations"
      }
    ],
    highlights: [
      {
        year: "1976",
        span: "1976 年 10 月 1 日至 10 月 11 日",
        fiscalYear: "FY 1977",
        duration: "10 天",
        title: "财政年度改到 10 月 1 日后的第一轮中断",
        summary: "这是财政年度时间调整后最早的一次 10 天拨款中断。"
      },
      {
        year: "1995-96",
        span: "1995 年 11 月 14 日至 19 日，以及 1995 年 12 月 16 日至 1996 年 1 月 6 日",
        fiscalYear: "FY 1996",
        duration: "5 天 + 21 天",
        title: "克林顿与共和党国会的预算对峙",
        summary: "同一财年内两次停摆，让预算僵局第一次以全球可识别的政治事件出现。"
      },
      {
        year: "2013",
        span: "2013 年 10 月 1 日至 17 日",
        fiscalYear: "FY 2014",
        duration: "16 天",
        title: "围绕奥巴马医保的停摆",
        summary: "一次与支出和医保政策冲突绑定的 16 天停摆。"
      },
      {
        year: "2018-19",
        span: "2018 年 12 月 22 日至 2019 年 1 月 25 日",
        fiscalYear: "FY 2019",
        duration: "34 天",
        title: "在 2025 年之前的最长停摆",
        summary: "这次 34 天停摆，直到 FY2026 中断出现前，一直是现代纪录保持者。"
      },
      {
        year: "2025",
        span: "2025 年 9 月 30 日至 11 月 12 日",
        fiscalYear: "FY 2026",
        duration: "42 天",
        title: "新的最长纪录",
        summary: "CRS 记录这次 FY2026 拨款中断为目前时间线中持续最长的一次。"
      }
    ],
    events: [
      {
        year: "1976",
        span: "1976 年 10 月 1 日至 10 月 11 日",
        fiscalYear: "FY 1977",
        duration: "10 天",
        title: "财政年度改期后的第一轮拨款中断",
        summary: "这是联邦财政年度改到 10 月 1 日之后，最早出现的一次 10 天拨款中断。"
      },
      {
        year: "1977",
        span: "1977 年 11 月 1 日至 11 月 9 日",
        fiscalYear: "FY 1978",
        duration: "8 天",
        title: "FY1978 的第一次中断",
        summary: "国会后来用新的短期拨款措施结束了这轮中断。"
      },
      {
        year: "1977",
        span: "1977 年 12 月 1 日至 12 月 9 日",
        fiscalYear: "FY 1978",
        duration: "8 天",
        title: "FY1978 的第二次中断",
        summary: "同一个财年里，一个月后又出现了第二次拨款中断。"
      },
      {
        year: "1978",
        span: "1978 年 10 月 1 日至 10 月 13 日",
        fiscalYear: "FY 1979",
        duration: "12 天",
        title: "1970 年代持续时间最长的一次",
        summary: "FY1979 这次中断持续了 12 天，显示出拨款谈判可以拖得比市场想象更久。"
      },
      {
        year: "1979",
        span: "1979 年 9 月 30 日至 10 月 8 日",
        fiscalYear: "FY 1980",
        duration: "8 天",
        title: "Civiletti 时代之前的最后一次",
        summary: "这次发生在 1980 和 1981 年 Civiletti 法律意见之前，因此表现方式和后来的现代停摆并不完全一样。"
      },
      {
        year: "1981",
        span: "1981 年 11 月 21 日至 11 月 23 日",
        fiscalYear: "FY 1982",
        duration: "3 天",
        title: "现代停摆处理方式早期阶段",
        summary: "在 Civiletti 意见之后，拨款失效被更严格地处理，停摆影响也开始变得更“看得见”。"
      },
      {
        year: "1982",
        span: "1982 年 9 月 30 日至 10 月 2 日",
        fiscalYear: "FY 1983",
        duration: "2 天",
        title: "FY1983 的短暂中断",
        summary: "一次围绕开支和拨款时点的短促中断。"
      },
      {
        year: "1982",
        span: "1982 年 12 月 17 日至 12 月 19 日",
        fiscalYear: "FY 1983",
        duration: "3 天",
        title: "1982 年第二次中断",
        summary: "再次出现的短期中断，说明同一财年内也可能反复卡壳。"
      },
      {
        year: "1983",
        span: "1983 年 11 月 10 日至 11 月 14 日",
        fiscalYear: "FY 1984",
        duration: "3 天",
        title: "FY1984 中断",
        summary: "一次典型的 1980 年代拨款僵局式中断。"
      },
      {
        year: "1984",
        span: "1984 年 9 月 30 日至 10 月 3 日",
        fiscalYear: "FY 1985",
        duration: "2 天",
        title: "FY1985 中断，第一段",
        summary: "1984 年晚些时候两次相邻中断中的第一段。"
      },
      {
        year: "1984",
        span: "1984 年 10 月 3 日至 10 月 5 日",
        fiscalYear: "FY 1985",
        duration: "1 天",
        title: "FY1985 中断，第二段",
        summary: "一次很快结束的后续中断，但也说明预算过程当时已经相当不稳定。"
      },
      {
        year: "1986",
        span: "1986 年 10 月 17 日至 10 月 18 日",
        fiscalYear: "FY 1987",
        duration: "1 天",
        title: "FY1987 的短促中断",
        summary: "只有一天，但仍属于 1980 年代频繁拨款僵局的一部分。"
      },
      {
        year: "1987",
        span: "1987 年 12 月 18 日至 12 月 20 日",
        fiscalYear: "FY 1988",
        duration: "1 天",
        title: "FY1988 的短促中断",
        summary: "1980 年代末又一次持续极短的拨款中断。"
      },
      {
        year: "1990",
        span: "1990 年 10 月 5 日至 10 月 9 日",
        fiscalYear: "FY 1991",
        duration: "3 天",
        title: "FY1991 中断",
        summary: "1990 年代初的一次 3 天拨款中断。"
      },
      {
        year: "1995",
        span: "1995 年 11 月 14 日至 11 月 19 日",
        fiscalYear: "FY 1996",
        duration: "5 天",
        title: "克林顿-金里奇对峙，第一段",
        summary: "这是那轮大预算对峙中的第一次停摆。"
      },
      {
        year: "1995-96",
        span: "1995 年 12 月 16 日至 1996 年 1 月 6 日",
        fiscalYear: "FY 1996",
        duration: "21 天",
        title: "克林顿-金里奇对峙，第二段",
        summary: "这次 21 天停摆在很长时间里都是现代美国停摆的最长纪录。"
      },
      {
        year: "2013",
        span: "2013 年 10 月 1 日至 10 月 17 日",
        fiscalYear: "FY 2014",
        duration: "16 天",
        title: "围绕奥巴马医保的僵局",
        summary: "奥巴马政府时期持续 16 天的一次停摆。"
      },
      {
        year: "2018",
        span: "2018 年 1 月 20 日至 1 月 22 日",
        fiscalYear: "FY 2018",
        duration: "2 天",
        title: "2018 年 1 月中断",
        summary: "一次发生在周末的短期拨款中断，曾让联邦机构短暂停摆。"
      },
      {
        year: "2018",
        span: "2018 年 2 月 9 日",
        fiscalYear: "FY 2018",
        duration: "隔夜",
        title: "2018 年 2 月短促中断",
        summary: "一次只持续数小时的隔夜拨款中断，但在时间线上仍然算作一次 funding gap。"
      },
      {
        year: "2018-19",
        span: "2018 年 12 月 22 日至 2019 年 1 月 25 日",
        fiscalYear: "FY 2019",
        duration: "34 天",
        title: "特朗普时期超长停摆",
        summary: "这次 34 天停摆直到 FY2026 中断出现前，一直是最长纪录。"
      },
      {
        year: "2025",
        span: "2025 年 9 月 30 日至 11 月 12 日",
        fiscalYear: "FY 2026",
        duration: "42 天",
        title: "FY2026 中断刷新纪录",
        summary: "CRS 把这次持续 42 天的 FY2026 拨款中断列为目前历史上最长的一次。"
      }
    ]
  }
};

export function getShutdownHistory(locale: Locale) {
  return shutdownHistoryByLocale[locale];
}
