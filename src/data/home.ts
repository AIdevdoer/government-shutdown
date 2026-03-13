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
      "Find out whether a U.S. government shutdown is happening, when the next funding deadline is, and how workers, travel, taxes, and benefits could be affected.",
    deadlineIso,
    deadlineLabel: "Next federal funding deadline",
    deadlineNote:
      "Congress needs to pass new funding before September 30. If lawmakers miss that date, shutdown risk rises quickly.",
    statusEyebrow: "Government shutdown",
    statusTitle: "Is the U.S. government getting closer to a shutdown?",
    statusSummary:
      "Use this page to see the next funding deadline, what could be affected, and where to go if your question is about pay, benefits, travel, taxes, or the bigger picture.",
    signalTitle: "Most people come here for one simple answer.",
    signalText:
      "Is a shutdown already happening? Could pay be delayed? Will Social Security, TSA, or passports be affected? Start with the section that matches your question.",
    architectureTitle: "Start with the part of the shutdown that affects you.",
    architectureDescription:
      "These guides are organized around the questions people usually need answered first: current status, work and pay, travel, and benefits.",
    pillars: [
      {
        title: "Current status",
        copy: "Check whether funding is active, what deadline matters next, and which agencies or services are under the most pressure right now.",
        href: "/government-shutdown-2026/"
      },
      {
        title: "Federal workers",
        copy: "If you are worried about furlough status, reporting instructions, or paycheck timing, start with the worker and pay guides.",
        href: "/government-shutdown-federal-workers/"
      },
      {
        title: "Travel",
        copy: "If you have a trip coming up, use the travel guides to check what may change for passports, airport screening, and national parks.",
        href: "/government-shutdown-passports/"
      },
      {
        title: "Benefits",
        copy: "If you need to know whether checks or services may slow down, go straight to the Social Security and VA guides.",
        href: "/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "Four questions people usually ask first.",
    quickAnswers: [
      {
        question: "Does a shutdown mean every agency closes?",
        answer: "No. Essential and excepted work often continues, but staffing, support, and processing can still slow down."
      },
      {
        question: "Do federal workers stop getting paid?",
        answer: "Some workers keep working, some are furloughed, and paycheck timing can still become a problem during a lapse."
      },
      {
        question: "Are Social Security checks at risk?",
        answer: "Benefit payments generally continue, but customer service and some administrative processing can become slower."
      },
      {
        question: "Should travelers expect TSA or passport delays?",
        answer: "Some services continue, but staffing strain and uneven office capacity can still create real delays."
      }
    ],
    timelineTitle: "Why these dates matter",
    timelineDescription:
      "If you know when the last lapse happened, when the next deadline is, and what the latest dispute is about, the headlines make much more sense.",
    timelineEvents: [
      {
        date: "Sep 30, 2025",
        title: "FY 2026 funding lapsed",
        description: "A shutdown begins when appropriations authority runs out and Congress has not passed new funding."
      },
      {
        date: "Nov 12, 2025",
        title: "Full funding restored",
        description: "The 42-day lapse ended, but agency backlogs and service questions lasted much longer."
      },
      {
        date: "Feb 14, 2026",
        title: "Homeland Security dispute escalated",
        description: "A partial funding fight renewed concern about travel, border operations, and agency staffing."
      },
      {
        date: "Sep 30, 2026",
        title: "Next annual hard deadline",
        description: "This is the next standing federal funding cutoff to keep in view."
      }
    ],
    featuredTitle: "Start with the pages people open most often.",
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
    description: "帮你快速看清美国政府有没有停摆、下一个拨款截止日是什么，以及工资、福利、旅行和税务会不会受影响。",
    deadlineIso,
    deadlineLabel: "下一次联邦拨款截止日",
    deadlineNote: "国会必须在 9 月 30 日前通过新的联邦拨款。如果赶不上这个日期，停摆风险就会迅速升高。",
    statusEyebrow: "美国政府停摆",
    statusTitle: "美国政府是不是又在接近停摆？",
    statusSummary:
      "这个首页会帮你先看下一个拨款截止日、哪些服务可能受影响，以及你的问题该从哪一页开始看。",
    signalTitle: "大多数人来这里，只想先弄清一个问题。",
    signalText:
      "现在是不是已经停摆？工资会不会延迟？Social Security、TSA 或护照会不会受影响？先点进和你问题最接近的那一栏。",
    architectureTitle: "先看最可能影响你的那一部分。",
    architectureDescription: "这些内容按读者最常见的实际问题来分组：当前状态、工作与工资、旅行，以及福利服务。",
    pillars: [
      {
        title: "当前状态",
        copy: "先确认现在是否已经停摆、下一个关键截止日是什么，以及哪些机构或服务眼下压力最大。",
        href: "/zh/government-shutdown-2026/"
      },
      {
        title: "联邦雇员",
        copy: "如果你担心 furlough、报到指令或工资到账时间，就先看联邦雇员和工资相关页面。",
        href: "/zh/government-shutdown-federal-workers/"
      },
      {
        title: "旅行影响",
        copy: "如果你近期要出行，可以直接看护照、机场安检和国家公园相关页面，确认哪些环节可能变化。",
        href: "/zh/government-shutdown-passports/"
      },
      {
        title: "福利服务",
        copy: "如果你最在意的是支票是否继续发、客服是否变慢，就从 Social Security 和 VA 相关页面开始。",
        href: "/zh/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "大多数人最先会问的四个问题。",
    quickAnswers: [
      {
        question: "政府停摆是不是等于所有机构都关门？",
        answer: "不是。必要职能和例外职能通常会继续运行，但人手、客服和处理速度仍可能受到影响。"
      },
      {
        question: "联邦雇员会不会停发工资？",
        answer: "有些人继续上班，有些人会被 furlough，而工资到账时间在停摆期间也可能成为问题。"
      },
      {
        question: "Social Security 支票会不会受影响？",
        answer: "福利发放通常会继续，但客服、回电和部分行政处理速度可能变慢。"
      },
      {
        question: "TSA 或护照业务会不会延误？",
        answer: "部分服务会继续，但人员压力和窗口能力波动仍可能带来真实延误。"
      }
    ],
    timelineTitle: "为什么这些日期值得看",
    timelineDescription: "知道上一轮拨款中断、下一次截止日和最近一次争议发生在什么时候，你就更容易看懂后面的新闻。",
    timelineEvents: [
      {
        date: "2025-09-30",
        title: "2026 财年拨款失效",
        description: "当拨款授权到期而国会又没通过新法案时，政府停摆就会发生。"
      },
      {
        date: "2025-11-12",
        title: "全面拨款恢复",
        description: "42 天的拨款中断结束，但机构积压和服务疑问持续了更久。"
      },
      {
        date: "2026-02-14",
        title: "国土安全部争议升级",
        description: "部分拨款争议再次引发大家对旅行、边境运行和机构人手的担忧。"
      },
      {
        date: "2026-09-30",
        title: "下一次年度硬截止",
        description: "这是下一次最值得持续关注的联邦拨款截止时间。"
      }
    ],
    featuredTitle: "先看大家最常打开的几页。",
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
