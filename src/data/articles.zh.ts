import type { Article } from "./articles";

export const articlesZh: Article[] = [
  {
    slug: "government-shutdown-2026",
    category: "最新情况",
    title: "2026 美国政府停摆：当前状态、关键日期与可能受影响的人群",
    description: "一页看当前联邦拨款状态、下一个关键截止日，以及联邦雇员、旅行、税务和福利最可能受影响的地方。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "如果你只想先快速看清眼下的联邦拨款局势，就从这里开始。",
    takeaways: [
      "先确认现在到底是正常拨款、部分中断，还是已经进入停摆状态，不要先入为主。",
      "盯住下一次国会必须行动的日期，因为风险往往会在那个节点前后突然变得具体。",
      "如果你的真实问题是工资、福利、护照、TSA 或退税，就继续点进下方对应指南。"
    ],
    sections: [
      {
        title: "最先该确认什么",
        paragraphs: [
          "大多数人其实只需要先确认三件事：停摆是不是已经发生、下一个关键截止日是什么、以及哪些服务或工资最可能先感受到压力。",
          "所以这篇指南把当前状态、下一次日期和最常见受影响主题都放在一起，方便你快速判断下一步该看哪里。"
        ]
      },
      {
        title: "怎么使用这篇指南",
        paragraphs: [
          "联邦拨款争议变化很快。临时拨款法案、延期谈判或机构通知，都可能在短时间内改变真正重要的信息。",
          "先看顶部更新时间，再结合下方官方来源和相关文章，找到与你自己情况最相关的那一部分。"
        ],
        bullets: [
          "先确认当前是不是已经发生拨款中断。",
          "记下国会下一次必须动作的时间点。",
          "如果你关心工作、旅行、税务或福利，就直接进入对应专题。"
        ]
      }
    ],
    faqs: [
      {
        question: "现在已经进入政府停摆了吗？",
        answer: "先看本页顶部的更新时间和下方官方来源。拨款谈判变化快，状态也可能随时改变。"
      },
      {
        question: "为什么下一个截止日这么重要？",
        answer: "因为联邦拨款争议通常都会卡在明确的日历节点上，日期一近，风险就会明显变得更现实。"
      },
      {
        question: "看完这页之后我该去哪一页？",
        answer: "去看和你真实问题最接近的那篇，例如联邦雇员、工资、退税、护照、TSA、Social Security 或 VA。"
      }
    ],
    citations: [
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" },
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: ["government-shutdown-countdown", "government-shutdown-federal-workers", "government-shutdown-passports"],
    actionBox: {
      title: "如果你主要想盯住下一个日期",
      text: "倒计时页会把下一次联邦拨款截止时间直接放在最显眼的位置，方便你反复查看。",
      ctaLabel: "打开倒计时页",
      ctaHref: "/zh/government-shutdown-countdown/"
    }
  },
  {
    slug: "what-is-a-government-shutdown",
    category: "基础解释",
    title: "什么是美国政府停摆？",
    description: "用尽量清楚的方式解释停摆如何开始、为什么有些服务继续、有些却暂停或明显变慢。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "政府停摆的本质是拨款失效，而不是整个政府突然消失。",
    takeaways: [
      "当拨款授权失效且国会没有及时完成新的拨款，政府停摆就会发生。",
      "停摆不等于所有服务同时停止，有些工作会因例外规则或其他资金来源继续。",
      "即使服务继续，处理积压和响应变慢也会影响普通人。"
    ],
    sections: [
      {
        title: "停摆是怎么开始的",
        paragraphs: [
          "最核心的触发点就是拨款失效。如果国会和总统没能在现有授权到期前把新拨款落地，受影响的机构就会失去继续正常运行的法律基础。",
          "这也是为什么停摆风险往往会在财政年度截止日或临时拨款即将到期时突然升高。"
        ]
      },
      {
        title: "为什么有些服务还会继续",
        paragraphs: [
          "很多人一听到 shutdown 就以为所有事情都会立刻停住。实际上，有些岗位会继续工作，因为它们涉及安全、核心运行，或者资金来源不同。",
          "更准确的理解方式是：影响并不平均。有些服务继续，有些变慢，有些面对公众的业务会暂停。"
        ],
        bullets: [
          "国家安全和公共安全相关岗位往往继续运行。",
          "福利发放可能继续，但客服会变慢。",
          "申请和审批流程通常会变得更难预测。"
        ]
      }
    ],
    faqs: [
      {
        question: "停摆会影响每一个联邦项目吗？",
        answer: "不会，影响大小取决于该项目的资金来源以及职能是否被列为例外。"
      },
      {
        question: "为什么这个问题会反复出现？",
        answer: "因为美国联邦拨款日历有周期性截止日，政治争议会不断把停摆风险重新推回公众视线。"
      },
      {
        question: "拨款恢复后，延迟会马上消失吗？",
        answer: "不会。哪怕停摆不长，积压和处理延迟也可能继续存在。"
      }
    ],
    citations: [
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: ["government-shutdown-countdown", "who-gets-paid-during-a-government-shutdown", "government-shutdown-social-security"],
    actionBox: {
      title: "想看眼下正在发生什么？",
      text: "最新情况页会更快告诉你现在的拨款状态、下一个截止日，以及大家下一步最常会问的几个问题。",
      ctaLabel: "看最新情况",
      ctaHref: "/zh/government-shutdown-2026/"
    }
  },
  {
    slug: "who-gets-paid-during-a-government-shutdown",
    category: "雇员",
    title: "美国政府停摆期间，谁还能领工资？",
    description: "围绕 excepted work、furlough、延迟发薪以及补发工资能解决什么、不能解决什么，给出更实际的解释。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "真正关键的问题不只是“谁继续工作”，而是“钱什么时候真正到账”。",
    takeaways: [
      "有些雇员在停摆期间继续工作，但不等于一定按原节奏拿到工资。",
      "被 furlough 的雇员可能会被要求停工等待拨款恢复。",
      "对家庭来说，“法律上最终能否补发”和“眼下这次工资会不会延迟”是两回事。"
    ],
    sections: [
      {
        title: "例外雇员和停薪休假雇员的区别",
        paragraphs: [
          "这两种处境完全不同。有些人因岗位涉及安全或核心运行，被要求继续上班；另一些人则被 furlough，暂时停工。",
          "这一区分会直接影响你后面最关心的事：要不要上班、如何计时、工资什么时候到。"
        ]
      },
      {
        title: "发薪时间在现实中的意义",
        paragraphs: [
          "即便后续通过补发工资法案，家庭现金流压力也会先真实发生。所以真正有用的答案，不是抽象安慰，而是告诉你现在该盯什么。",
          "先看机构通知、工会消息和 HR 指引，再判断继续工作是否真的意味着工资会照常到账。"
        ],
        bullets: [
          "保留机构 contingency plan 的链接。",
          "把“最终是否补发”和“这次工资是否延迟”分开理解。",
          "对确定信息和不确定信息都尽量说清楚。"
        ]
      }
    ],
    faqs: [
      {
        question: "联邦雇员一定会拿到补发工资吗？",
        answer: "补发工资现在已经很常见，但时间点和具体适用范围依然很重要，尤其是在下一张工资单临近时。"
      },
      {
        question: "承包商和正式联邦雇员一样吗？",
        answer: "不一样。承包商的付款与保障通常更不稳定，最好按合同和雇主通知单独判断。"
      },
      {
        question: "如果我是 excepted status，就一定按时拿工资吗？",
        answer: "不一定。你可能会被要求继续工作，但在拨款失效期间，发薪时间依然可能受到影响。"
      }
    ],
    citations: [
      { label: "OPM：薪酬与休假", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" },
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: ["government-shutdown-federal-workers", "government-shutdown-military-pay", "government-shutdown-countdown"],
    actionBox: {
      title: "还需要更完整的联邦雇员指南？",
      text: "联邦雇员页会更完整地解释 furlough 机制、报到指令，以及很多家庭在前 24 小时最需要搞清楚的问题。",
      ctaLabel: "打开联邦雇员指南",
      ctaHref: "/zh/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-tax-refunds",
    category: "税务",
    title: "美国政府停摆与退税：报税人应该预期什么",
    description: "围绕退税到账时间、停摆期间能否报税，以及去哪里看 IRS 官方工具与通知，做实用解释。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "大多数人真正想知道的是：还能不能报、退税会不会动、求助会不会更难。",
    takeaways: [
      "很多报税人最关心的，是能不能继续报税、退税是否继续流转，以及 IRS 哪些服务会变慢。",
      "最清楚的解释方式，是把报税、退税查询、客服支持和个案处理分开讲。",
      "在报税时点或退税等待期，IRS 官方工具比泛泛新闻更有用。"
    ],
    sections: [
      {
        title: "停摆可能如何影响报税季",
        paragraphs: [
          "答案很少是简单的“会”或“不会”。报税可能继续，退税工具可能继续可用，而自动化系统也许照常运行，但电话客服或线下支持会更难接通。",
          "所以更好的理解方式，是把报税、退税查询、支持渠道和复杂个案处理拆开来看。"
        ]
      },
      {
        title: "报税人最该先查什么",
        paragraphs: [
          "如果你正在准备报税，或者已经在等退税，先去看 IRS 官方工具还能回答什么。这通常比单纯看停摆新闻更接近真实情况。",
          "也别忘了区分哪些流程可能自动继续，哪些则更依赖人手、电话中心或人工审核。"
        ],
        bullets: [
          "先看 IRS 官方报税和退税查询工具。",
          "留意自动流程是否仍在继续运行。",
          "默认把电话支持和复杂个案视为最容易变慢的环节。"
        ]
      }
    ],
    faqs: [
      {
        question: "停摆期间还能报税吗？",
        answer: "很多情况下可以，但支持渠道和处理能力会因时间点与停摆范围不同而变化。"
      },
      {
        question: "退税会自动停止发放吗？",
        answer: "不一定，具体取决于当年报税季安排和 IRS 当时仍在运行的部分。"
      },
      {
        question: "报税人最该先查什么？",
        answer: "先看 IRS 官方报税和退税工具，再确认支持渠道或个案处理是否出现明显变慢。"
      }
    ],
    citations: [
      { label: "IRS：退税", href: "https://www.irs.gov/refunds" },
      { label: "IRS：报税信息", href: "https://www.irs.gov/filing" }
    ],
    related: ["government-shutdown-2026", "government-shutdown-federal-workers", "what-is-a-government-shutdown"],
    actionBox: {
      title: "如果你也在担心工资问题",
      text: "一旦拨款中断既影响退税判断，也影响家庭现金流，联邦雇员指南通常是最值得接着看的页面。",
      ctaLabel: "查看联邦雇员影响页",
      ctaHref: "/zh/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-passports",
    category: "出行",
    title: "美国政府停摆与护照：还能申请或续签吗？",
    description: "给出旅行者最关心的护照窗口开放情况、办理时效，以及行程临近时该怎么办的指导。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "如果你最近要出行，最先该查的是窗口、时效和紧急处理渠道。",
    takeaways: [
      "大多数旅行者更关心预约和处理时效，而不是停摆背后的政治争论。",
      "护照业务是否继续、如何继续，往往取决于具体办公室的资金和人手情况。",
      "如果出发日期已经很近，越早行动越重要。"
    ],
    sections: [
      {
        title: "旅行者真正想问的是什么",
        paragraphs: [
          "大多数人搜索这个问题，是想知道还能不能递交申请、预约开不开、眼前的行程会不会受威胁。",
          "所以最有用的答案，应该先解决时间、窗口和紧急旅行方案，而不是先讲大段背景。"
        ]
      },
      {
        title: "怎么用这份答案",
        paragraphs: [
          "先确认当前状态，再把“普通申请”和“紧急出行”分开看。离出发日期很近的人，和只是提前规划的人，面对的不是同一个问题。",
          "这样也更容易判断你是应该马上行动，还是可以继续观察官方更新。"
        ],
        bullets: [
          "优先查看官方护照申请和状态查询资源。",
          "把普通处理和紧急出行情况分开判断。",
          "只要人手显得紧张，就给行程预留更多缓冲。"
        ]
      }
    ],
    faqs: [
      {
        question: "停摆时护照业务一定会停吗？",
        answer: "不一定，具体影响取决于相关办公室的资金来源和当时的人手情况。"
      },
      {
        question: "旅行者最该先做什么？",
        answer: "先看美国国务院护照页面，并尽早行动，尤其是临近出行时。"
      },
      {
        question: "如果我的行程已经很近怎么办？",
        answer: "不要再按普通节奏等待，直接查看官方紧急旅行渠道，看自己是否符合快速处理条件。"
      }
    ],
    citations: [
      { label: "美国国务院：护照", href: "https://travel.state.gov/content/travel/en/passports.html" },
      { label: "美国国务院：护照帮助", href: "https://travel.state.gov/content/travel/en/contact-us/passports.html" }
    ],
    related: ["government-shutdown-tsa", "government-shutdown-national-parks", "government-shutdown-2026"],
    actionBox: {
      title: "还想看机场安检那一段会不会受影响？",
      text: "如果你近期要飞，TSA 页面会帮助你判断到达机场之后可能遇到的变化。",
      ctaLabel: "查看 TSA 页面",
      ctaHref: "/zh/government-shutdown-tsa/"
    }
  },
  {
    slug: "government-shutdown-tsa",
    category: "出行",
    title: "美国政府停摆与 TSA：机场旅客应该预期什么",
    description: "解释为什么安检通常会继续运行、压力会体现在哪些环节，以及旅客在人员紧张时应该怎样安排时间。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "安检可能继续，但你的出行体验仍然可能明显变差。",
    takeaways: [
      "即使安检继续运行，也不代表旅客体验完全正常。",
      "人员压力会体现为等待时间波动、士气问题和运行不均衡。",
      "在拨款争议激烈时，多留缓冲通常比照常出发更安全。"
    ],
    sections: [
      {
        title: "为什么 TSA 会很快变成现实问题",
        paragraphs: [
          "TSA 是最典型的那类服务之一：它可能继续运行，但旅客仍然会明显感到被扰动。大家真正想知道的是要不要更早到机场，以及延误风险是不是现实存在。",
          "所以清楚的出行建议，往往比程序性的政治解释更有用。"
        ]
      },
      {
        title: "旅客应该怎么做",
        paragraphs: [
          "最短也最诚实的答案是：安检通常继续，但人手压力仍可能影响体验。如果争议已经进入实质阶段，就按比平时更保守的时间安排自己。",
          "然后再去看 TSA 官方提醒、机场信息和航空公司通知，而不是只看一条新闻标题。"
        ],
        bullets: [
          "在活跃争议期给自己预留更多机场时间。",
          "查看官方 TSA 提示和机场状态信息。",
          "不要默认排队时间一定与平时相同。"
        ]
      }
    ],
    faqs: [
      {
        question: "TSA 会不会完全停摆？",
        answer: "通常不会，但运行压力仍会影响旅客体验。"
      },
      {
        question: "旅客应该提前多久到机场？",
        answer: "在争议活跃期，尤其是大机场，宁可多留缓冲，也不要按平时的最低时间去赌。"
      },
      {
        question: "旅客应该去哪里看实时更新？",
        answer: "优先看 TSA 官方出行信息、你所用机场的运行提示，以及航空公司的最新通知。"
      }
    ],
    citations: [
      { label: "TSA：出行建议", href: "https://www.tsa.gov/travel/travel-tips" },
      { label: "TSA：联系中心", href: "https://www.tsa.gov/contact-center" }
    ],
    related: ["government-shutdown-passports", "government-shutdown-national-parks", "government-shutdown-2026"]
  },
  {
    slug: "government-shutdown-social-security",
    category: "福利",
    title: "美国政府停摆与 Social Security：支票和服务会受影响吗？",
    description: "把福利发放和客服延迟、行政处理变慢分开讲清楚，帮助读者更快判断哪些影响与你有关。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "先把“福利是否继续发”和“客服是否变慢”这两个问题分开看。",
    takeaways: [
      "大多数人在问这个问题时，最先担心的是每月钱款是否继续发放。",
      "福利支票和行政支持必须分开说明，不能混成一句话。",
      "即使支票继续发，回电、个案处理和窗口服务也可能变慢。"
    ],
    sections: [
      {
        title: "大家问这个问题时真正担心什么",
        paragraphs: [
          "很多人不是在问政治概念，而是在确认钱会不会停、申请或回电会不会拖延，以及自己需不需要马上行动。",
          "所以更清楚的做法，是把福利支付、电话支持、窗口服务和审批延迟拆开看。"
        ]
      },
      {
        title: "为什么付款和服务不是一回事",
        paragraphs: [
          "一个常见误解，是把整个 Social Security 系统当成一个开关。实际上，付款连续性和客服处理能力在停摆期间可能表现得完全不同。",
          "只要把这两个概念分开，你就更容易判断眼前到底是需要立刻担心，还是只是要为更慢的处理速度做准备。"
        ],
        bullets: [
          "先看福利支票的大概率状态。",
          "再看客服渠道和个案处理是否可能变慢。",
          "需要最新判断时，优先看 SSA 官方通知。"
        ]
      }
    ],
    faqs: [
      {
        question: "Social Security 支票通常会停吗？",
        answer: "通常福利发放会继续，但服务和处理速度可能放慢。"
      },
      {
        question: "什么环节更可能变难？",
        answer: "客服响应、个案处理和某些行政事务都可能更慢。"
      },
      {
        question: "如果我有待处理申请或回电怎么办？",
        answer: "要做好处理时间拉长的准备，并尽量通过 SSA 官方联系方式查看最新说明。"
      }
    ],
    citations: [
      { label: "Social Security Administration", href: "https://www.ssa.gov/" },
      { label: "SSA：联系和办公室信息", href: "https://www.ssa.gov/agency/contact/" }
    ],
    related: ["government-shutdown-va-benefits", "what-is-a-government-shutdown", "government-shutdown-2026"]
  },
  {
    slug: "government-shutdown-military-pay",
    category: "雇员",
    title: "美国政府停摆与军人工资：现役军人和家庭最该盯什么",
    description: "围绕现役军人工资、国防资金安排以及军人家庭最在意的现金流问题给出解释。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "现役军人和家庭需要的是当前工资判断，不是宽泛假设。",
    takeaways: [
      "军人工资问题的发展节奏，可能和普通联邦雇员并不完全一样。",
      "现役军人需要知道当前资金授权、可能改变局势的立法，以及去哪里核实最新政策。",
      "对家庭来说，时间差和现金流压力往往和法律表述一样重要。"
    ],
    sections: [
      {
        title: "为什么军人工资需要单独看",
        paragraphs: [
          "国防资金和工资处理常常受到与普通文职岗位不同的政治与法律因素影响。所以搜军人工资的人，通常需要比一般雇员页更窄、更明确的答案。",
          "最有用的方式，是直接围绕当前授权、当前通知，以及这些变化对家庭预算意味着什么来理解。"
        ]
      },
      {
        title: "停摆期间最值得盯的点",
        paragraphs: [
          "把注意力放在家庭真正要回答的问题上：工资是否准时、下一步要看什么、官方确认从哪里来。",
          "这些答案越具体、来源越明确，你就越能更稳地安排账单、出行和现金流。"
        ],
        bullets: [
          "先看 DFAS 和 DoD 更新。",
          "留意是否有新的立法改变工资保护情况。",
          "把“是否受保护”和“何时到账”两个问题分开看。"
        ]
      }
    ],
    faqs: [
      {
        question: "军人工资一定会在停摆中被保护吗？",
        answer: "不是每种情况下都自动受保护，因此当前资金授权和特别立法都很关键。"
      },
      {
        question: "军人家庭应该先看哪里？",
        answer: "首先看 DFAS 更新和官方军种通知。"
      },
      {
        question: "就算工资继续发，家庭还要准备什么？",
        answer: "仍然要关注到账时间、政策表述变化，以及这些变化对短期预算安排的影响。"
      }
    ],
    citations: [
      { label: "DFAS", href: "https://www.dfas.mil/" },
      { label: "美国国防部", href: "https://www.defense.gov/" }
    ],
    related: ["government-shutdown-federal-workers", "who-gets-paid-during-a-government-shutdown", "government-shutdown-2026"]
  },
  {
    slug: "government-shutdown-va-benefits",
    category: "福利",
    title: "美国政府停摆与 VA 福利：退伍军人最该先查什么",
    description: "围绕福利支付、医疗连续性和理赔处理速度，为退伍军人和家庭提供更有区分度的说明。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "退伍军人通常最先需要确认的是福利、医疗和理赔这三件事。",
    takeaways: [
      "退伍军人和家属通常最关心的是福利发放、医疗服务是否继续，以及理赔流程会不会变慢。",
      "健康服务、残障补偿和行政处理必须分别说明。",
      "在这个主题上，来源清晰比任何概括性表态都更重要。"
    ],
    sections: [
      {
        title: "退伍军人通常最需要确认什么",
        paragraphs: [
          "来到 VA 页面的人，往往是在确认补偿金、医疗服务或理赔流程是否继续。它们不是同一个系统，所以也不该被混成一句话。",
          "最快降低焦虑的方法，就是直接写清哪些大概率继续、哪些可能变慢，以及去哪里看最新官方通知。"
        ]
      },
      {
        title: "怎么读这类信息才不容易被带偏",
        paragraphs: [
          "短句、分节和清楚来源在这里尤其重要。很多退伍军人和家属是在压力状态下阅读，需要很快抓住重点。",
          "先看更新时间，再看与你有关的具体服务部分，然后直接去 VA 官方链接确认最新状态。"
        ],
        bullets: [
          "把医疗服务和福利支付分开看。",
          "直接查看 VA 更新和联系方式。",
          "把理赔处理速度当成独立问题来判断。"
        ]
      }
    ],
    faqs: [
      {
        question: "VA 福利一定会停吗？",
        answer: "不会。很多支付和服务会继续，但具体影响取决于资金结构和涉及的职能。"
      },
      {
        question: "理赔处理会不会变慢？",
        answer: "有可能。即使核心服务继续，行政处理也可能感受到压力。"
      },
      {
        question: "退伍军人应该去哪里看最新通知？",
        answer: "优先使用 VA 官方更新页面和联系方式，确认与你个人情况最相关的那部分。"
      }
    ],
    citations: [
      { label: "美国退伍军人事务部", href: "https://www.va.gov/" },
      { label: "VA：联系我们", href: "https://www.va.gov/contact-us/" }
    ],
    related: ["government-shutdown-social-security", "government-shutdown-federal-workers", "government-shutdown-2026"]
  },
  {
    slug: "government-shutdown-national-parks",
    category: "出行",
    title: "美国政府停摆与国家公园：关闭、人员与行程规划",
    description: "解释国家公园为什么可能因地点而异，以及旅行者在停摆期间最该提前核实哪些事。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "国家公园在停摆期间最容易出现的问题，是不同地点的情况差异很大。",
    takeaways: [
      "国家公园运行状况可能因园区而异，很少有一刀切答案。",
      "出发前一定要确认目标公园的最新状态，不要只看全国层面的新闻。",
      "真正影响行程的，往往是游客中心、设施、人手和现场服务。"
    ],
    sections: [
      {
        title: "为什么这个问题会一下子变得很急",
        paragraphs: [
          "国家公园处在政治新闻和真实家庭计划的交叉点。每当停摆风险升高，游客都会立刻问：大门开不开、游客中心开不开、露营和设施会不会受影响。",
          "这也是为什么只看全国 headline 不够，具体到单个公园的核实往往更重要。"
        ]
      },
      {
        title: "旅行者最该强调什么",
        paragraphs: [
          "最重要的信息不是“全部关闭”或“全部正常”，而是不同园区情况不同。真正安全的做法，是直接去看 NPS 和你计划前往的那个公园。",
          "如果你的行程时间很敏感，出发前最好再确认一次。"
        ],
        bullets: [
          "查看 NPS 首页和具体园区提醒。",
          "默认游客中心、人员和设施都有可能变化。",
          "如果行程时间固定，出发前再次核实。"
        ]
      }
    ],
    faqs: [
      {
        question: "停摆时所有国家公园都会关吗？",
        answer: "不会。运行状况可能因园区、人手和可用资源不同而变化。"
      },
      {
        question: "出发前该做什么？",
        answer: "查看 National Park Service 官网和具体园区的最新提醒。"
      },
      {
        question: "一趟公园旅行里，最可能变化的是哪些部分？",
        answer: "游客中心、人员安排、部分设施和现场服务，通常是最先出现变化的地方。"
      }
    ],
    citations: [
      { label: "National Park Service", href: "https://www.nps.gov/" },
      { label: "NPS：查找公园", href: "https://www.nps.gov/findapark/index.htm" }
    ],
    related: ["government-shutdown-passports", "government-shutdown-tsa", "government-shutdown-2026"]
  },
  {
    slug: "government-shutdown-federal-workers",
    category: "雇员",
    title: "美国政府停摆与联邦雇员：停薪休假规则、工资压力与第一步该做什么",
    description: "给联邦雇员看的实用操作页，围绕报到指令、应急预案、家庭现金流以及最可靠的机构更新入口来组织内容。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "如果你是联邦雇员，先看报到指令、岗位状态和工资时间。",
    takeaways: [
      "联邦雇员通常最需要的是操作步骤，而不是大段政治评论。",
      "机构 contingency plan 往往是最快的岗位级信息来源。",
      "最有用的雇员指南，会把法律状态翻译成清楚的家庭决策。"
    ],
    sections: [
      {
        title: "前 24 小时最常见的几个问题",
        paragraphs: [
          "当拨款失效风险升高时，联邦雇员和家属通常都会按同样顺序发问：我明天要不要上班、我的岗位会被怎么分类、下一张工资单会怎样、我的机构把通知发在哪里。",
          "先把这几件事搞清楚，后面的停摆新闻就更容易理解。"
        ]
      },
      {
        title: "接下来该怎么做",
        paragraphs: [
          "把这份指南当成应对清单来用。先找到你的 agency contingency plan，确认自己的岗位是 excepted 还是 furloughed，再盯紧工资时间是否出现变化。",
          "同时也最好提前整理一下家庭会立刻用到的信息，例如账单、工资资料和休假文件。"
        ],
        bullets: [
          "先看 OPM、机构公告和 contingency plan。",
          "不要靠猜测理解工资到账时间。",
          "准备一个家庭现金流和资料整理的小清单。"
        ]
      }
    ],
    faqs: [
      {
        question: "联邦雇员应该先看哪里？",
        answer: "机构 contingency plan、官方 HR 指引和 OPM 资源通常是最有用的第一站。"
      },
      {
        question: "承包商可以按同样方式判断吗？",
        answer: "不能完全一样。承包商面对的规则、资金路径和工资风险都可能不同。"
      },
      {
        question: "家庭层面有哪些事值得提前准备？",
        answer: "先看近期账单、保存关键 HR 或工资文件，并留意机构发出的岗位级通知。"
      }
    ],
    citations: [
      { label: "OPM", href: "https://www.opm.gov/" },
      { label: "OPM：薪酬与休假", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" }
    ],
    related: ["who-gets-paid-during-a-government-shutdown", "government-shutdown-military-pay", "government-shutdown-tax-refunds"],
    actionBox: {
      title: "如果你最担心的是工资到账时间",
      text: "工资解释页会专门说明谁继续工作、谁会被 furlough，以及为什么下一张工资单的时间仍可能变化。",
      ctaLabel: "打开工资解释页",
      ctaHref: "/zh/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "government-shutdown-countdown",
    category: "倒计时",
    title: "美国政府停摆倒计时：下一次联邦拨款截止日是什么时候",
    description: "用最直观的方式展示下一次关键联邦拨款截止日，并解释这个日期为什么重要、接下来该看什么。",
    updated: "更新于 2026 年 3 月 13 日",
    kicker: "如果你现在只需要记住一个日期，那就是这里显示的这个。",
    takeaways: [
      "倒计时能帮你直接看到下一次联邦拨款的重要决策节点。",
      "这个日期之所以重要，是因为停摆风险通常会在截止日逼近时快速升高。",
      "如果想看全貌，最好把这个时钟和当前状态页、联邦雇员页一起看。"
    ],
    sections: [
      {
        title: "为什么这个日期重要",
        paragraphs: [
          "在日期逼近之前，停摆风险往往显得很抽象。一个明确的截止日，可以帮你判断谈判、机构通知和服务影响什么时候会变得更急。",
          "也正因为如此，即使现在还没有真正停摆，这个年度截止日也值得长期盯着。"
        ]
      },
      {
        title: "除了时钟，还该看什么",
        paragraphs: [
          "日期本身不是全部。你还要看国会是否在推进临时拨款、机构是否已经发布 contingency guidance，以及你自己最依赖的服务有没有出现压力迹象。",
          "如果你真正关心的是工作、工资、旅行或福利，就继续点进下方相关页面。"
        ],
        bullets: [
          "盯住下一次联邦拨款关键截止日。",
          "留意国会是否推进临时拨款方案。",
          "把当前状态页和联邦雇员页一起看，理解会更完整。"
        ]
      }
    ],
    faqs: [
      {
        question: "只有倒计时够不够？",
        answer: "不够。日期很有用，但还需要结合当前拨款状态和机构级通知来看。"
      },
      {
        question: "为什么 9 月 30 日总是反复出现？",
        answer: "因为它是美国联邦财政年度的固定截止日，所以常常成为拨款争议的压力点。"
      },
      {
        question: "除了这个时钟，我还该看什么？",
        answer: "还要看临时拨款谈判、机构 contingency plan，以及你自己最依赖的服务是否已经出现变化。"
      }
    ],
    citations: [
      { label: "美国参议院：拨款流程", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" },
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: ["government-shutdown-2026", "what-is-a-government-shutdown", "government-shutdown-federal-workers"],
    actionBox: {
      title: "如果你还想知道现在到底发生了什么",
      text: "在日期之后，很多人下一步最想确认的，就是现在是否已经停摆，以及哪些服务最容易先受影响。",
      ctaLabel: "看最新情况",
      ctaHref: "/zh/government-shutdown-2026/"
    }
  }
];

const articleZhMap = new Map(articlesZh.map((article) => [article.slug, article]));

export function getArticleZh(slug: string) {
  return articleZhMap.get(slug);
}
