import type { Article } from "./articles";

export const articlesZh: Article[] = [
  {
    slug: "government-shutdown-2026",
    category: "当前专题",
    title: "2026 美国政府停摆：当拨款时钟收紧时应该更新的专题页",
    description: "这个年度专题页解释当前拨款状态、最新时间线，以及读者下一步该去看哪些关于雇员、旅行、税务和福利的页面。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "这是事件流量进入站点的正门。",
    takeaways: [
      "一旦联邦拨款争议进入热搜，这个页面就应该承担实时简报的角色。",
      "首页要尽快把用户导向具体服务页面，而不是让他们陷在长篇政治叙事里。",
      "更新时间和来源链接必须足够显眼，让读者知道信息是否新鲜。"
    ],
    sections: [
      {
        title: "这个页面首先要回答什么",
        paragraphs: [
          "当“government shutdown”开始爆量搜索时，读者通常先问三件事：停摆是否已经发生、下一个关键截止日是什么、以及某项服务或工资会不会出问题。",
          "所以这个页面应该像公告板，而不是文章列表。把当前状态、下一个日期，以及最常受影响机构的入口摆在最上面。"
        ]
      },
      {
        title: "如何在非危机时期保持价值",
        paragraphs: [
          "停摆站点不能只在新闻爆发时出现。年度专题页应持续解释 9 月 30 日财政年度截止这个常驻节点，概括最近一次停摆，并链接到常青解释页。",
          "这样既能保证全年被索引，也能在谈判升温时更快切换成实时页。"
        ],
        bullets: [
          "即使没有实际停摆，也要刷新日期标记。",
          "始终保留一段关于当前拨款姿态的说明。",
          "根据当下搜索热点轮换推荐入口。"
        ]
      }
    ],
    faqs: [
      {
        question: "这个页面要不要把所有机构都讲完？",
        answer: "不用。它应该先回答顶层状态，再快速把读者导向更具体的页面。"
      },
      {
        question: "既然有首页，为什么还要保留年份页？",
        answer: "年份页能承接年度搜索意图，也更方便保留时间线而不破坏首页结构。"
      },
      {
        question: "这类页面最重要的是什么？",
        answer: "清晰、及时，以及对更深层答案的明显入口。"
      }
    ],
    citations: [
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" },
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: ["government-shutdown-countdown", "government-shutdown-federal-workers", "government-shutdown-passports"],
    actionBox: {
      title: "用倒计时页提高回访率",
      text: "用户未必记得所有政策细节，但会反复回来确认一个清晰的截止时间。",
      ctaLabel: "打开倒计时页",
      ctaHref: "/zh/government-shutdown-countdown/"
    }
  },
  {
    slug: "what-is-a-government-shutdown",
    category: "基础解释",
    title: "什么是美国政府停摆？",
    description: "用尽量清楚的方式解释停摆如何开始、什么叫必要服务，以及为什么有些职能继续运行、有些则暂停或明显变慢。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "这是站点的常青解释锚点页。",
    takeaways: [
      "当拨款授权失效且国会没有及时完成新的拨款，政府停摆就会发生。",
      "停摆不等于所有服务同时停止，有些工作会因例外规则继续。",
      "即使头条服务继续运行，处理积压和响应变慢仍然会影响用户。"
    ],
    sections: [
      {
        title: "停摆是怎么开始的",
        paragraphs: [
          "最核心的触发点就是拨款失效。如果国会和总统没能在现有授权到期前把新拨款落地，受影响的机构就失去继续正常运行的法律基础。",
          "这也是为什么停摆搜索通常会在财政年度截止和临时拨款谈判节点集中爆发。"
        ]
      },
      {
        title: "为什么有些服务还会继续",
        paragraphs: [
          "公众一听到 shutdown 往往会以为一切立刻停摆。实际上，有些雇员会继续工作，因为他们的岗位被认定为安全所必需，或者资金来源不同。",
          "更准确的理解是“非均匀中断”：有些办公室继续运转，有些服务明显变慢，有些面对公众的职能暂停。"
        ],
        bullets: [
          "国家安全和公共安全岗位往往继续运行。",
          "福利发放可能继续，但客服会变慢。",
          "申请和审批的可预测性通常会下降。"
        ]
      }
    ],
    faqs: [
      {
        question: "停摆会影响每一个联邦项目吗？",
        answer: "不会，影响大小取决于该项目的资金来源以及职能是否被列为例外。"
      },
      {
        question: "为什么这个词几乎每年都会被搜起来？",
        answer: "因为美国联邦拨款日历会周期性制造政治截止日，反复把停摆风险推回公众视线。"
      },
      {
        question: "拨款恢复后，积压还会持续吗？",
        answer: "会。哪怕停摆不长，流程延迟和积压也可能持续更久。"
      }
    ],
    citations: [
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: ["government-shutdown-countdown", "who-gets-paid-during-a-government-shutdown", "government-shutdown-social-security"],
    actionBox: {
      title: "想看当前版本？",
      text: "年度专题页是最快了解当前日期、当前状态和具体服务入口的地方。",
      ctaLabel: "进入实时专题页",
      ctaHref: "/zh/government-shutdown-2026/"
    }
  },
  {
    slug: "who-gets-paid-during-a-government-shutdown",
    category: "雇员",
    title: "美国政府停摆期间，谁还能领工资？",
    description: "这个页面解释例外岗位、停薪休假、延迟发薪以及停摆结束后补发工资政治现实之间的区别。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "工资类页面带有极强的紧迫搜索意图。",
    takeaways: [
      "有些雇员在停摆期间继续工作，但不等于一定按原节奏拿到工资。",
      "被 furlough 的雇员可能会被要求停工等待拨款恢复。",
      "读者需要的是按岗位拆开的指导，而不是泛泛政治评论。"
    ],
    sections: [
      {
        title: "例外雇员和停薪休假雇员的区别",
        paragraphs: [
          "停摆报道常把两种完全不同的处境混在一起。有些人因岗位涉及安全或核心运行，被要求继续上班；另一些人则被 furlough，暂时停工。",
          "这一区分决定了读者接下来最关心的一切：是否上班、怎样计时、工资何时到账。"
        ]
      },
      {
        title: "发薪时间在现实中的意义",
        paragraphs: [
          "即便后续通过补发工资法案，家庭现金流压力也会先真实发生。工资类搜索量升高，往往说明用户正在判断在补发之前该怎么熬过去。",
          "所以这类页面比政治表态更需要实用指导：去哪里看机构通知、工会消息、HR 指引。"
        ],
        bullets: [
          "保留机构 contingency plan 的链接。",
          "把“法律上是否最终补发”和“这期工资会不会延迟”分开说。",
          "尽量用白话，避免模糊安慰。"
        ]
      }
    ],
    faqs: [
      {
        question: "联邦雇员一定会拿到补发工资吗？",
        answer: "补发工资现在已经很常见，但时间点和具体适用范围依然很重要。"
      },
      {
        question: "承包商和正式联邦雇员一样吗？",
        answer: "不一样。承包商的付款与保障通常更不稳定，需要单独说明。"
      },
      {
        question: "为什么这个页面对 SEO 很重要？",
        answer: "因为它精确匹配高紧迫度搜索，用户往往正在为收入问题找答案。"
      }
    ],
    citations: [
      { label: "OPM：薪酬与休假", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" },
      { label: "GAO：拨款中断", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: ["government-shutdown-federal-workers", "government-shutdown-military-pay", "government-shutdown-countdown"],
    actionBox: {
      title: "还需要更完整的雇员指南？",
      text: "联邦雇员页会更完整地解释 furlough 机制、官方计划文件和前 48 小时最关键的决策点。",
      ctaLabel: "打开联邦雇员指南",
      ctaHref: "/zh/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-tax-refunds",
    category: "税务",
    title: "美国政府停摆与退税：报税人应该预期什么",
    description: "围绕退税到账时间、停摆期间能否报税，以及如何把读者导向真正有用的 IRS 官方工具进行实用解释。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "税务问题是站内最强商业意图之一。",
    takeaways: [
      "读者最在意能不能报税、退税会不会继续发、以及 IRS 哪些服务会变慢。",
      "表现最好的税务页必须回答操作问题，而不是理论问题。",
      "这也是未来接税务软件联盟链接最自然的位置。"
    ],
    sections: [
      {
        title: "停摆可能如何影响报税季",
        paragraphs: [
          "答案很少是简单的“会”或“不会”。报税可能继续，退税工具可能继续可用，而自动化系统也许照常运行，但电话客服或线下支持会更难接通。",
          "所以这页最好把“能否提交”“退税查询”“客服支持”“复杂个案处理”拆开说明，而不是一句话一把抓。"
        ]
      },
      {
        title: "怎样让这页对行动型读者更有用",
        paragraphs: [
          "来这页的人不是在学公民课，他们通常正准备报税、查退税，或判断现在该不该行动。",
          "页面应把用户尽快送到 IRS 官方入口，说明可能出现的瓶颈，并给未来税务联盟推荐留出空间。"
        ],
        bullets: [
          "把 IRS 退税和报税入口放在上方。",
          "说清楚哪些流程可能自动继续。",
          "凡是受年度运营方案影响的地方都要明确标出。"
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
        question: "为什么这页的商业价值高？",
        answer: "因为用户已经进入决策状态，税务软件推荐与搜索意图天然贴合。"
      }
    ],
    citations: [
      { label: "IRS：退税", href: "https://www.irs.gov/refunds" },
      { label: "IRS：报税信息", href: "https://www.irs.gov/filing" }
    ],
    related: ["government-shutdown-2026", "government-shutdown-federal-workers", "what-is-a-government-shutdown"],
    actionBox: {
      title: "未来联盟链接最适合放在这里",
      text: "如果以后接税务软件链接，应该把它们放在实际报税建议旁边，而不是塞进一个泛用广告位。",
      ctaLabel: "查看联邦雇员影响页",
      ctaHref: "/zh/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-passports",
    category: "出行",
    title: "美国政府停摆与护照：还能申请或续签吗？",
    description: "给出旅行用户最关心的护照窗口开放情况、办理时效和临近出行时该怎么办的指导。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "旅行中断类页面把政治新闻转成了个人时间线风险。",
    takeaways: [
      "搜索 shutdown 加 passports 的用户更关心窗口和处理时间，而不是政治概念。",
      "护照页通常有很高搜索量，因为旅行日期本身就是硬约束。",
      "页面要尽早把读者导向国务院的官方资源。"
    ],
    sections: [
      {
        title: "用户真正想问的是什么",
        paragraphs: [
          "大多数用户不是来上公民教育课的。他们真正想知道的是：还能不能递交申请、预约开不开、眼前的行程会不会受威胁。",
          "因此页面开头应该优先回答时间、窗口和紧急旅行处理，而不是铺陈背景。"
        ]
      },
      {
        title: "如何组织答案更实用",
        paragraphs: [
          "先给出简短结论，然后把“普通申请”和“紧急出行”分开。离出发日期很近的读者和只是提前规划的读者，需求完全不同。",
          "这样结构清晰，也更方便在拨款条件变化时快速更新。"
        ],
        bullets: [
          "直接链接到护照申请和状态查询资源。",
          "明确说明窗口运营和整体人手紧张不是一回事。",
          "提醒读者给行程预留更多缓冲。"
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
        question: "为什么这是站里很强的一页？",
        answer: "因为旅行日期带来极强的紧迫感，这种搜索会在每次拨款风波里反复出现。"
      }
    ],
    citations: [
      { label: "美国国务院：护照", href: "https://travel.state.gov/content/travel/en/passports.html" },
      { label: "美国国务院：护照帮助", href: "https://travel.state.gov/content/travel/en/contact-us/passports.html" }
    ],
    related: ["government-shutdown-tsa", "government-shutdown-national-parks", "government-shutdown-2026"],
    actionBox: {
      title: "旅行读者往往需要完整中断图景",
      text: "护照问题通常不会单独出现。把机场、TSA 和国家公园链接都放近一点。",
      ctaLabel: "查看 TSA 页面",
      ctaHref: "/zh/government-shutdown-tsa/"
    }
  },
  {
    slug: "government-shutdown-tsa",
    category: "出行",
    title: "美国政府停摆与 TSA：机场旅客应该预期什么",
    description: "解释为什么安检通常会继续运行、压力会体现在哪些环节，以及旅客在人员紧张时应该怎样安排时间。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "TSA 页面会把抽象政治直接转成即时出行行为。",
    takeaways: [
      "即使安检继续运行，也不代表旅客体验完全正常。",
      "人员压力会体现为等待时间波动、士气问题和运行紧张。",
      "页面必须以旅客行动建议为中心。"
    ],
    sections: [
      {
        title: "为什么 TSA 会反复变成热搜问题",
        paragraphs: [
          "机场安检是最典型的“继续运行但依然会感觉被扰动”的服务。旅客真正想知道的是需不需要更早出门，以及延误是否现实存在。",
          "因此，这一页最有价值的地方在于把政策语言翻译成出行建议。"
        ]
      },
      {
        title: "实用建议应该长什么样",
        paragraphs: [
          "答案应该很简单：安检通常继续，但人员压力仍可能影响体验。然后告诉用户如何准备，以及去哪里看官方提醒。",
          "这种结构最贴近真实搜索意图，也让页面在非危机期依旧有价值。"
        ],
        bullets: [
          "在活跃争议期建议旅客预留更多时间。",
          "链接官方 TSA 出行提示和机场状态资源。",
          "不要对排队时间作过度承诺。"
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
        answer: "在拨款争议激烈时，尤其是大机场，宁可多留缓冲。"
      },
      {
        question: "这页最适合和哪个页面互相导流？",
        answer: "护照页，因为用户经常会在同一次搜索里同时关心这两个问题。"
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
    description: "围绕福利发放和客服处理速度的区别做清楚解释，让焦虑中的读者能快速读懂。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "这页的信任感来自于把“发钱”和“服务变慢”分开讲清楚。",
    takeaways: [
      "搜这页的人通常是在确认每月钱款是否安全。",
      "福利支付和客服处理必须分开说明。",
      "只有能被资金结构支持的结论，才应该用安抚式表达。"
    ],
    sections: [
      {
        title: "用户在问这个问题时真正关心什么",
        paragraphs: [
          "搜索 Social Security 的读者并不是在问政治概念，他们想知道支票会不会停、申请或回电会不会拖延，以及自己需不需要立刻行动。",
          "所以这页应分别处理福利支付、电话支持、窗口服务和审批延迟，而不是混成一段。"
        ]
      },
      {
        title: "为什么付款和服务不是一回事",
        paragraphs: [
          "一个常见错误是把整个 Social Security 系统当成一个开关。实际上，付款连续性和客服处理能力在停摆期间可能表现得完全不同。",
          "只要把这个区别讲清楚，这页的可用性和复访价值都会提高。"
        ],
        bullets: [
          "先说支票大概率状态。",
          "再解释支持和个案处理的不确定性。",
          "引导读者去 SSA 官方通知核实。"
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
        question: "为什么这页的 SEO 价值高？",
        answer: "因为每次拨款风波都会把这个问题重新推回公众视野，而且受众极广。"
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
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "军人工资页需要更高精度，因为读者往往在做即时预算决策。",
    takeaways: [
      "军人工资不应该被并入普通联邦雇员页面里一笔带过。",
      "读者需要知道当前资金授权、特殊立法可能带来的影响，以及应该去哪里核实。",
      "军人家庭搜索这个话题时，关注的是下一张工资单，而不是政治表演。"
    ],
    sections: [
      {
        title: "为什么军人工资不能只放进普通工资答案里",
        paragraphs: [
          "国防资金安排和工资处理常常受到与普通文职岗位不同的政治与法律因素影响。这样一来，搜军人工资的读者就需要比一般雇员页更窄、更明确的答案。",
          "这页应围绕当前授权、当前官方通知和家庭现金流风险展开。"
        ]
      },
      {
        title: "停摆期间最值得盯的点",
        paragraphs: [
          "组织内容时要围绕读者的真实问题：工资是否准时、家庭应该注意什么、官方确认从哪里来。",
          "只要这页足够具体并带着来源，它就会成为可靠参考，而不是又一篇评论文章。"
        ],
        bullets: [
          "链接 DFAS 和 DoD 更新。",
          "不要作忽略立法变化的宽泛结论。",
          "对时间差和现金流风险说得足够明确。"
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
        question: "为什么要单独做一页？",
        answer: "因为这类读者的风险和搜索方式都和普通联邦雇员不同。"
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
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "退伍军人相关搜索高度依赖信任，所以页面必须克制且来源优先。",
    takeaways: [
      "退伍军人关心的是福利发放、医疗可用性和理赔流程。",
      "健康服务、残障补偿和行政处理必须分别说明。",
      "这类页面的首要任务是建立可信度，而不是堆砌流量型写法。"
    ],
    sections: [
      {
        title: "这个受众通常最需要什么",
        paragraphs: [
          "来到 VA 页面的人通常是在确认补偿金、医疗服务或理赔流程是否继续。它们不是同一个系统，也不应该被混成一段。",
          "最快建立信任的方法，是直接写出哪些大概率继续、哪些可能变慢，以及应该去哪里核实。"
        ]
      },
      {
        title: "如何快速降低理解成本",
        paragraphs: [
          "这类页面最好短句、分节、来源清楚。很多退伍军人或家属是在压力状态下阅读，不会愿意看一篇密不透风的长文。",
          "它应该像一份实战笔记：先给结论，再分服务解释，再给官方链接和下一页。"
        ],
        bullets: [
          "把医疗和福利支付分开写。",
          "链接 VA 官方更新和联系方式。",
          "更新时间要放在明显位置。"
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
        answer: "会有可能。即使核心服务继续，行政处理也可能感受到压力。"
      },
      {
        question: "为什么不能和 Social Security 放成一页？",
        answer: "因为受众、术语和具体运营问题差异很大，值得独立处理。"
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
    description: "解释国家公园为什么可能因站点而异，以及旅行者在停摆期间最不该想当然的地方。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "国家公园页能同时承接新闻、旅行和家庭计划型搜索。",
    takeaways: [
      "国家公园运行状况可能因公园而异，不能给一刀切答案。",
      "用户需要的是出发前如何确认，而不是抽象政治解读。",
      "这类页面和护照、TSA 能形成很自然的旅行簇。"
    ],
    sections: [
      {
        title: "为什么国家公园会很快变成热搜问题",
        paragraphs: [
          "国家公园处在政治新闻和真实周末计划的交叉点。每当停摆风险升高，家庭游客都会立刻问：大门开不开、游客中心开不开、露营和设施会不会受影响。",
          "这类紧迫性让页面即使在答案因园区而异时，也依然很有价值。"
        ]
      },
      {
        title: "页面最该强调什么",
        paragraphs: [
          "最重要的信息不是“全部关闭”或“全部正常”，而是不同园区情况不同。用户应该被明确提醒去 NPS 和目标园区查看最新状态。",
          "一个好的公园页面应该解释不确定性的类型，而不是假装所有地方都会一样。"
        ],
        bullets: [
          "链接 NPS 首页和园区状态资源。",
          "说明游客中心、人员和设施的不确定性。",
          "提醒出发前再次核实。"
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
        question: "为什么这类页面适合停摆站？",
        answer: "因为当家庭计划可能受影响时，旅行和休闲搜索会与政策新闻一起爆发。"
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
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "这是站点的联邦雇员操作手册页。",
    takeaways: [
      "联邦雇员需要的是操作清单，不是泛泛评论。",
      "机构 contingency plan 应该成为这页结构的核心组成部分。",
      "最好的雇员页会把法律状态翻译成家庭决策。"
    ],
    sections: [
      {
        title: "前 24 小时联邦雇员最常问什么",
        paragraphs: [
          "当拨款失效风险升高时，联邦雇员和家属几乎总是按同样顺序发问：我明天要不要上班、我的岗位会被怎么分类、下一张工资单会怎样、我的机构把通知发在哪里。",
          "强页面就应该按这个顺序来组织，而不是先写政治背景。"
        ]
      },
      {
        title: "这页应该帮助读者做什么",
        paragraphs: [
          "它应该像一份应对清单：去哪里找机构 contingency plan、怎样理解 excepted status 和 furlough、如果工资可能延迟要盯什么。",
          "这种结构在谣言期和真实停摆期都同样有用。"
        ],
        bullets: [
          "链接 OPM、机构公告和 contingency plan。",
          "用白话解释工资到账时间的风险。",
          "保留一个简短的家庭现金流与资料整理清单。"
        ]
      }
    ],
    faqs: [
      {
        question: "联邦雇员应该先看哪里？",
        answer: "机构 contingency plan、官方 HR 指引和 OPM 资源通常是最有用的第一站。"
      },
      {
        question: "承包商也应该在这页里提吗？",
        answer: "应该提，但最好也单独做页面，因为规则和风险并不相同。"
      },
      {
        question: "为什么这页是全站核心？",
        answer: "因为它服务的是高风险受众，同时还能自然串联工资、税务和福利页面。"
      }
    ],
    citations: [
      { label: "OPM", href: "https://www.opm.gov/" },
      { label: "OPM：薪酬与休假", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" }
    ],
    related: ["who-gets-paid-during-a-government-shutdown", "government-shutdown-military-pay", "government-shutdown-tax-refunds"],
    actionBox: {
      title: "把这页和工资解释页配套使用",
      text: "联邦雇员页帮助用户建立整体判断，工资页则回答他们下一秒最想问的问题。",
      ctaLabel: "打开工资解释页",
      ctaHref: "/zh/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "government-shutdown-countdown",
    category: "倒计时",
    title: "美国政府停摆倒计时：每个观察页都该长期展示的那个日期",
    description: "围绕年度联邦拨款截止日建立一个可反复回访的工具页，解释为什么这个日期会持续带来搜索需求。",
    updated: "更新于 2026 年 3 月 12 日",
    kicker: "倒计时页让用户在平时也愿意回来。",
    takeaways: [
      "倒计时页把抽象政策节点变成了具体可感的回访工具。",
      "它是承接下一次财政年度截止搜索的天然页面。",
      "这类页面也适合作为站内高权重内链中枢。"
    ],
    sections: [
      {
        title: "为什么倒计时页很重要",
        paragraphs: [
          "政治搜索通常在日期变得清晰时才会真正触发。倒计时页把风险具体化，也给了用户收藏和回访的理由。",
          "它还能让站点在 generic 新闻词之外，占住一个更具体的搜索角度。"
        ]
      },
      {
        title: "除了时钟，还应该放什么",
        paragraphs: [
          "倒计时页不能只放一个数字。还需要简短说明这个截止日为什么重要、年度财政截止和短期 stopgap funding 的区别，以及几篇最关键的影响页入口。",
          "这样即便政治姿态变化，页面依然有信息价值。"
        ],
        bullets: [
          "显示下一次最关键的联邦拨款截止日期。",
          "用一段话说明这个日期为什么值得盯。",
          "链接年度专题页和联邦雇员页。"
        ]
      }
    ],
    faqs: [
      {
        question: "只有倒计时够不够？",
        answer: "不够。页面仍然需要上下文和链接，才能成为真正的信息页，而不是噱头页。"
      },
      {
        question: "为什么它要和首页分开？",
        answer: "因为它能独立承接“截止时间”型搜索，并形成稳定回访。"
      },
      {
        question: "默认最该显示哪个日期？",
        answer: "9 月 30 日这个财政年度拨款截止日，是最适合长期展示的常驻节点。"
      }
    ],
    citations: [
      { label: "美国参议院：拨款流程", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" },
      { label: "CRS：联邦政府停摆", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: ["government-shutdown-2026", "what-is-a-government-shutdown", "government-shutdown-federal-workers"],
    actionBox: {
      title: "倒计时页应该始终回链到实时专题",
      text: "因为为了日期进来的人，下一步通常就想知道当前到底发生了什么。",
      ctaLabel: "打开当前专题页",
      ctaHref: "/zh/government-shutdown-2026/"
    }
  }
];

const articleZhMap = new Map(articlesZh.map((article) => [article.slug, article]));

export function getArticleZh(slug: string) {
  return articleZhMap.get(slug);
}
