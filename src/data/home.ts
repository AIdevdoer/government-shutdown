import type { Locale } from "./locales";

export interface HomeContent {
  description: string;
  deadlineIso: string;
  deadlineLabel: string;
  deadlineNote: string;
  statusEyebrow: string;
  statusTitle: string;
  statusSummary: string;
  signalTitle: string;
  signalText: string;
  architectureTitle: string;
  architectureDescription: string;
  pillars: {
    title: string;
    copy: string;
    href: string;
  }[];
  fastAnswersTitle: string;
  quickAnswers: {
    question: string;
    answer: string;
  }[];
  timelineTitle: string;
  timelineDescription: string;
  timelineEvents: {
    date: string;
    title: string;
    description: string;
  }[];
  featuredTitle: string;
  featuredSlugs: string[];
}

const deadlineIso = "2026-09-30T23:59:59-04:00";

export const homeContentByLocale: Record<Locale, HomeContent> = {
  en: {
    description:
      "Independent federal funding watch covering government shutdown deadlines, agency impacts, federal worker guidance, and service-specific explainers.",
    deadlineIso,
    deadlineLabel: "FY 2027 appropriations deadline",
    deadlineNote:
      "Congress has to fund the federal government again before the standing September 30 fiscal-year cutoff. This is the annual hard date every shutdown watcher keeps on the board.",
    statusEyebrow: "Funding Clock",
    statusTitle: "A federal shutdown search spike happens when the clock feels real.",
    statusSummary:
      "This site is built for the moment people need a straight answer: what a shutdown is, which agencies are affected, whether pay or travel will be disrupted, and what to watch next.",
    signalTitle:
      "People do not search this topic for theory. They search because a service, paycheck, trip, or claim feels exposed.",
    signalText:
      "The site is built around those moments: current watch coverage, worker guidance, travel disruption pages, and benefit-specific explainers that answer the operational question first.",
    architectureTitle: "The site is split like an emergency desk, not a blog.",
    architectureDescription:
      "Each lane captures a different kind of search intent so the homepage can route readers quickly and keep the whole project useful between crises.",
    pillars: [
      {
        title: "Event page",
        copy: "Use the annual watch page as the live brief. It should absorb breaking search demand and surface the current state in one screen.",
        href: "/government-shutdown-2026/"
      },
      {
        title: "Worker pay",
        copy: "Federal employees and contractors search with urgency. Worker pay, furlough rules, and practical next steps are core pages, not side topics.",
        href: "/government-shutdown-federal-workers/"
      },
      {
        title: "Travel impact",
        copy: "Airports, passports, TSA, and national parks translate news curiosity into concrete service questions with strong recurring demand.",
        href: "/government-shutdown-passports/"
      },
      {
        title: "Benefit checks",
        copy: "Social Security, VA benefits, Medicare, and SNAP pages capture high-volume searches from people trying to confirm whether money or services are safe.",
        href: "/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "Four questions that always come first.",
    quickAnswers: [
      {
        question: "Does a shutdown mean every agency closes?",
        answer: "No. Essential and excepted functions keep running, but staffing, support, and processing can still slow down."
      },
      {
        question: "Do federal workers stop getting paid?",
        answer: "Pay timing depends on role and any later back-pay legislation, but furloughs and delayed paychecks are a real risk during a lapse."
      },
      {
        question: "Are Social Security checks at risk?",
        answer: "Benefits generally continue, but customer service and some administrative processing can become slower."
      },
      {
        question: "Should travelers expect TSA or passport delays?",
        answer: "Operations usually continue in some form, but staffing strain and uneven office capacity can create real delays."
      }
    ],
    timelineTitle: "The federal funding story only feels sudden if you are not watching the dates.",
    timelineDescription:
      "Shutdown traffic jumps when the deadline becomes tangible. The timeline gives the site a standing narrative spine even between headline weeks.",
    timelineEvents: [
      {
        date: "Sep 30, 2025",
        title: "FY 2026 funding lapsed",
        description: "A shutdown begins when appropriations authority runs out and Congress has not passed new funding."
      },
      {
        date: "Nov 12, 2025",
        title: "Full funding restored",
        description: "The 42-day lapse ends, but the search behavior and agency backlog questions keep spilling over afterward."
      },
      {
        date: "Feb 14, 2026",
        title: "Homeland Security dispute escalates",
        description: "A partial funding fight puts fresh pressure on travel and border-related search topics."
      },
      {
        date: "Sep 30, 2026",
        title: "Next annual hard deadline",
        description: "This is the standing date to watch for the next government-wide funding cliff."
      }
    ],
    featuredTitle: "Start with the pages that answer money, travel, and benefits questions.",
    featuredSlugs: [
      "government-shutdown-2026",
      "government-shutdown-countdown",
      "government-shutdown-federal-workers",
      "government-shutdown-tax-refunds",
      "government-shutdown-passports",
      "government-shutdown-social-security"
    ]
  },
  zh: {
    description: "独立整理美国政府停摆期限、机构影响、联邦雇员处境和具体服务解释页面的双语站点。",
    deadlineIso,
    deadlineLabel: "2027 财年拨款截止时间",
    deadlineNote: "美国国会必须在 9 月 30 日财政年度截止前完成新的联邦拨款。这是每一个停摆观察者都必须盯住的硬日期。",
    statusEyebrow: "拨款时钟",
    statusTitle: "当截止日期变得具体时，政府停摆这个词才会真正冲上搜索。",
    statusSummary:
      "这个站点就是为那一刻准备的：用户需要立刻知道什么是停摆、哪些机构会受影响、工资和旅行会不会出问题，以及接下来该盯哪些节点。",
    signalTitle: "用户不是为了理论而搜这个词，他们是在担心某项服务、某张工资单、某次行程或某个申请会不会出问题。",
    signalText: "所以站点围绕这些高风险场景来设计：当前专题页、联邦雇员指南、旅行中断页，以及把实际问题放在第一位的福利解释页。",
    architectureTitle: "这个站点应该像一个应急信息台，而不是普通博客。",
    architectureDescription: "每个栏目都对应一种不同的搜索意图，让首页能够快速分发流量，并在非事件期依然保持价值。",
    pillars: [
      {
        title: "事件专题页",
        copy: "把年度专题页当成实时简报。它要承接新闻爆发流量，并在一个屏幕内给出当前状态和关键链接。",
        href: "/zh/government-shutdown-2026/"
      },
      {
        title: "雇员与工资",
        copy: "联邦雇员和承包商的搜索通常带着强烈焦虑。工资、停薪休假规则和实际应对建议必须是核心页面。",
        href: "/zh/government-shutdown-federal-workers/"
      },
      {
        title: "旅行与通关",
        copy: "机场、护照、TSA 和国家公园会把政治新闻转化成非常具体的服务问题，这类页面需求会反复出现。",
        href: "/zh/government-shutdown-passports/"
      },
      {
        title: "福利与支票",
        copy: "社保、退伍军人福利、Medicare 等页面可以覆盖高频搜索，承接用户对钱和服务是否安全的确认需求。",
        href: "/zh/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "最先被问到的四个问题。",
    quickAnswers: [
      {
        question: "政府停摆是不是等于所有机构都关门？",
        answer: "不是。必要职能和例外职能通常会继续运行，但人手、客服和处理速度仍可能受到影响。"
      },
      {
        question: "联邦雇员会不会立刻停发工资？",
        answer: "取决于岗位和之后的补发工资立法，但停薪休假和工资延迟的风险确实存在。"
      },
      {
        question: "Social Security 支票会不会停？",
        answer: "福利发放通常会继续，但客服、回电和部分行政处理速度可能变慢。"
      },
      {
        question: "TSA 或护照业务会不会明显延误？",
        answer: "很多业务会继续，但人员压力和窗口能力波动可能带来真实延误。"
      }
    ],
    timelineTitle: "如果你一直盯着日期，联邦拨款这件事其实并不突然。",
    timelineDescription: "当截止日期变得可感知时，停摆搜索量才会真正跳涨。时间线让站点在非爆发期也有持续叙事骨架。",
    timelineEvents: [
      {
        date: "2025-09-30",
        title: "2026 财年拨款失效",
        description: "当拨款授权到期而国会又没通过新法案时，政府停摆就会发生。"
      },
      {
        date: "2025-11-12",
        title: "全面拨款恢复",
        description: "42 天的拨款中断结束，但相关搜索和机构积压问题会延续更久。"
      },
      {
        date: "2026-02-14",
        title: "国土安全部争议升级",
        description: "部分拨款争议再次把旅行和边境相关搜索推高。"
      },
      {
        date: "2026-09-30",
        title: "下一次年度硬截止",
        description: "这是下一次全国性联邦拨款悬崖最值得关注的时间点。"
      }
    ],
    featuredTitle: "先看那些最能回答钱、旅行和福利问题的页面。",
    featuredSlugs: [
      "government-shutdown-2026",
      "government-shutdown-countdown",
      "government-shutdown-federal-workers",
      "government-shutdown-tax-refunds",
      "government-shutdown-passports",
      "government-shutdown-social-security"
    ]
  }
};

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale];
}
