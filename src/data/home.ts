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
      "Find out whether a U.S. government shutdown is happening, how it can happen, when the next funding deadline is, and how workers, travel, taxes, and benefits could be affected.",
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
    architectureTitle: "Start with the question you actually want answered.",
    architectureDescription:
      "Most readers need one of four things first: is a shutdown happening now, how can it happen, who still gets paid, and which services might change first.",
    pillars: [
      {
        title: "Is it happening now?",
        copy: "Check whether funding is active, what deadline matters next, and which agencies or services are under the most pressure right now.",
        href: "/government-shutdown-2026/"
      },
      {
        title: "How can it happen?",
        copy: "Start here if you want the mechanism: what Congress must pass, what happens when funding lapses, and why shutdown risk keeps coming back.",
        href: "/what-is-a-government-shutdown/"
      },
      {
        title: "Who still gets paid?",
        copy: "If your real concern is pay, furlough status, or whether work continues during a lapse, go straight to the pay and worker guides.",
        href: "/who-gets-paid-during-a-government-shutdown/"
      },
      {
        title: "What changes first?",
        copy: "If you need to know about checks, customer service, passports, TSA, parks, or tax refunds, start with the service and benefits pages.",
        href: "/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "Four questions people usually ask first.",
    quickAnswers: [
      {
        question: "How can the government shut down at all?",
        answer: "It happens when Congress misses a funding deadline and affected agencies no longer have appropriations authority to keep operating normally."
      },
      {
        question: "Does a shutdown mean every agency closes?",
        answer: "No. Essential and excepted work often continues, but staffing, support, and processing can still slow down."
      },
      {
        question: "Do federal workers stop getting paid?",
        answer: "Some workers keep working, some are furloughed, and paycheck timing can still become a problem during a lapse."
      },
      {
        question: "Are Social Security checks, TSA, or passports affected?",
        answer: "Some services keep running, but staffing strain, slower customer support, and uneven office capacity can still create real disruption."
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
    featuredTitle: "Start with the questions people search most.",
    featuredSlugs: [
      "government-shutdown-2026",
      "what-is-a-government-shutdown",
      "government-shutdown-countdown",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-federal-workers",
      "government-shutdown-social-security"
    ]
  },
  zh: {
    description: "帮你快速看清美国政府有没有停摆、为什么会停摆、下一个拨款截止日是什么，以及工资、福利、旅行和税务会不会受影响。",
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
    architectureTitle: "先看你最想弄清的那个问题。",
    architectureDescription: "大多数读者最先想知道的，其实就四件事：现在有没有停摆、它为什么会发生、谁还能领工资、哪些服务会先受影响。",
    pillars: [
      {
        title: "现在有没有停摆？",
        copy: "先确认现在是否已经停摆、下一个关键截止日是什么，以及哪些机构或服务眼下压力最大。",
        href: "/zh/government-shutdown-2026/"
      },
      {
        title: "它怎么会停摆？",
        copy: "如果你最想先搞清机制，就先看这页：国会到底要通过什么、拨款失效后会怎样、为什么这种风险会反复出现。",
        href: "/zh/what-is-a-government-shutdown/"
      },
      {
        title: "谁还能拿工资？",
        copy: "如果你最关心的是工资、furlough、报到指令或停摆期间谁继续工作，就先看工资和联邦雇员页面。",
        href: "/zh/who-gets-paid-during-a-government-shutdown/"
      },
      {
        title: "哪些服务会先变？",
        copy: "如果你想知道福利、客服、护照、TSA、国家公园或退税会不会变化，就从服务类页面开始。",
        href: "/zh/government-shutdown-social-security/"
      }
    ],
    fastAnswersTitle: "大多数人最先会问的四个问题。",
    quickAnswers: [
      {
        question: "美国政府怎么会停摆？",
        answer: "当国会没能在拨款截止日前通过新法案，受影响机构就会失去继续正常运行的拨款授权。"
      },
      {
        question: "政府停摆是不是等于所有机构都关门？",
        answer: "不是。必要职能和例外职能通常会继续运行，但人手、客服和处理速度仍可能受到影响。"
      },
      {
        question: "联邦雇员会不会停发工资？",
        answer: "有些人继续上班，有些人会被 furlough，而工资到账时间在停摆期间也可能成为问题。"
      },
      {
        question: "Social Security、TSA 或护照会不会受影响？",
        answer: "有些服务会继续，但客服变慢、人手吃紧和窗口能力波动，仍可能带来真实影响。"
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
    featuredTitle: "先看大家最常搜索的几个问题。",
    featuredSlugs: [
      "government-shutdown-2026",
      "what-is-a-government-shutdown",
      "government-shutdown-countdown",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-federal-workers",
      "government-shutdown-social-security"
    ]
  }
};

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale];
}
