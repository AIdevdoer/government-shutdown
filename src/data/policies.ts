import type { Locale } from "./locales";

export interface PolicySection {
  title: string;
  paragraphs: string[];
}

export interface PolicyPageContent {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  sections: PolicySection[];
}

export type PolicyKey = "about" | "editorial-policy" | "affiliate-disclosure" | "privacy-policy";

export const policyPages: Record<Locale, Record<PolicyKey, PolicyPageContent>> = {
  en: {
    about: {
      title: "About",
      description: "About Government Shutdown, an independent site covering federal funding deadlines, service impacts, and worker guidance.",
      eyebrow: "About",
      heading: "Independent guidance on federal funding deadlines and practical service impacts.",
      intro:
        "Government Shutdown is an independent information site focused on federal funding deadlines, shutdown risk, agency service impacts, and common questions about workers, travel, taxes, and benefits.",
      sections: [
        {
          title: "What this site is for",
          paragraphs: [
            "The site is designed to help readers move from vague anxiety to clear next steps. That means answering operational questions first: whether a benefit check is affected, whether passport processing may slow down, whether TSA remains open, and where federal workers should look for official guidance."
          ]
        },
        {
          title: "What this site is not",
          paragraphs: [
            "This is not an official U.S. government website and is not affiliated with any federal agency. It does not provide legal advice, employment advice, or agency-specific determinations. Readers should confirm critical details using the official sources linked on each page."
          ]
        },
        {
          title: "How to contact us",
          paragraphs: [
            "Editorial questions, correction requests, and partnership inquiries can be sent to editor@government-shutdown.com."
          ]
        }
      ]
    },
    "editorial-policy": {
      title: "Editorial Policy",
      description: "Editorial standards for Government Shutdown, including sourcing, corrections, timestamps, and update practices.",
      eyebrow: "Editorial Policy",
      heading: "Source-led, timestamped, and built for high-stakes utility.",
      sections: [
        {
          title: "Source hierarchy",
          paragraphs: [
            "We prioritize primary sources such as federal agencies, CRS, GAO, congressional materials, and direct public documentation. News reporting may be used for context, but operational claims should be anchored in primary sources whenever possible."
          ]
        },
        {
          title: "Update policy",
          paragraphs: [
            "Every core guide should display a visible update date. During active funding disputes, pages may be revised multiple times to reflect new deadlines, contingency guidance, or agency notices."
          ]
        },
        {
          title: "Corrections",
          paragraphs: [
            "If a material error is identified, we correct the page and update the timestamp. Readers can request a review by emailing editor@government-shutdown.com."
          ]
        },
        {
          title: "Writing standard",
          paragraphs: [
            "We aim to answer the practical question first, separate payment continuity from service continuity, and avoid vague reassurance. Pages should be clear enough for stressed readers to understand quickly."
          ]
        }
      ]
    },
    "affiliate-disclosure": {
      title: "Affiliate Disclosure",
      description: "Affiliate disclosure for Government Shutdown, covering future tax, budgeting, travel, and related recommendations.",
      eyebrow: "Affiliate Disclosure",
      heading: "Some resource recommendations may later use affiliate links.",
      sections: [
        {
          title: "How recommendations are handled",
          paragraphs: [
            "Government Shutdown may earn a commission when readers click certain links and complete a qualifying action. If affiliate links are used, they will generally appear in pages tied to practical next steps such as tax filing, budgeting, or travel disruption planning.",
            "Affiliate relationships do not determine the editorial answer to whether a service is affected or what readers should do first. Operational guidance is written independently, and affiliate links are intended to sit beside relevant solution-oriented content, not replace it."
          ]
        },
        {
          title: "Disclosure standard",
          paragraphs: [
            "When affiliate links are active, we aim to disclose them clearly and close to the recommendation so readers do not have to guess about the relationship."
          ]
        }
      ]
    },
    "privacy-policy": {
      title: "Privacy Policy",
      description: "Privacy policy for Government Shutdown, covering analytics, cookies, advertising, and contact requests.",
      eyebrow: "Privacy Policy",
      heading: "What this site may collect and how that information is used.",
      sections: [
        {
          title: "Advertising and analytics",
          paragraphs: [
            "Government Shutdown may use standard web-hosting logs, analytics tools, cookies, and advertising technology to understand traffic and support the site. This can include device information, browser data, page views, referral sources, and interaction data.",
            "If advertising or analytics providers are added, those services may use cookies or similar technologies to measure usage, personalize content, or deliver ads. Provider-specific disclosures should be added as those services go live."
          ]
        },
        {
          title: "Email and contact requests",
          paragraphs: [
            "If you contact us directly, we may retain your email and the information included in your message in order to respond, handle corrections, or manage business communication."
          ]
        },
        {
          title: "Your choices",
          paragraphs: [
            "You can limit cookies through your browser settings. Questions about this policy can be sent to editor@government-shutdown.com."
          ]
        }
      ]
    }
  },
  zh: {
    about: {
      title: "关于本站",
      description: "关于 Government Shutdown，这是一家围绕美国联邦拨款截止、服务影响与联邦雇员处境整理信息的独立网站。",
      eyebrow: "关于本站",
      heading: "围绕美国联邦拨款截止与实际服务影响的独立信息站。",
      intro:
        "Government Shutdown 是一个独立信息网站，重点整理美国联邦拨款时间点、停摆风险、机构服务影响，以及联邦雇员、旅行、税务和福利相关的常见问题。",
      sections: [
        {
          title: "这个站点要解决什么",
          paragraphs: [
            "它的目标是帮助读者从模糊焦虑走到明确行动。也就是说，先回答最实际的问题：福利支票会不会受影响、护照办理会不会变慢、TSA 是否照常运行、联邦雇员应该去哪里看官方通知。"
          ]
        },
        {
          title: "这个站点不是什么",
          paragraphs: [
            "本网站不是美国政府官方网站，也不隶属于任何联邦机构。它不提供法律建议、就业建议或机构层面的最终认定。涉及重要决策时，读者应以每一页链接的官方来源为准。"
          ]
        },
        {
          title: "如何联系",
          paragraphs: [
            "编辑问题、纠错请求或合作沟通，请发邮件到 editor@government-shutdown.com。"
          ]
        }
      ]
    },
    "editorial-policy": {
      title: "编辑政策",
      description: "Government Shutdown 的编辑标准，包括信息来源、纠错、更新时间和内容维护方式。",
      eyebrow: "编辑政策",
      heading: "以来源为先，标明时间，并围绕高风险实用场景写作。",
      sections: [
        {
          title: "来源优先级",
          paragraphs: [
            "我们优先引用联邦机构、CRS、GAO、国会公开材料以及直接公共文档。新闻报道可以作为背景，但涉及运行状态的关键结论应尽量落在一手来源上。"
          ]
        },
        {
          title: "更新机制",
          paragraphs: [
            "每个核心页面都应显示明确的更新时间。在联邦拨款争议激烈时期，页面可能根据新截止日、应急方案或机构通知多次更新。"
          ]
        },
        {
          title: "纠错政策",
          paragraphs: [
            "一旦发现实质性错误，我们会更新内容并刷新时间戳。读者可以通过 editor@government-shutdown.com 发起复核请求。"
          ]
        },
        {
          title: "写作标准",
          paragraphs: [
            "我们的目标是先回答实际问题，把“付款是否继续”和“服务是否继续”拆开讲清楚，并避免空泛安慰。页面必须足够清晰，让处于压力中的读者也能快速看懂。"
          ]
        }
      ]
    },
    "affiliate-disclosure": {
      title: "联盟披露",
      description: "Government Shutdown 的联盟披露页面，说明未来税务、预算、旅行等相关推荐可能使用联盟链接。",
      eyebrow: "联盟披露",
      heading: "部分资源推荐未来可能会带有联盟链接。",
      sections: [
        {
          title: "推荐怎么处理",
          paragraphs: [
            "当读者点击某些链接并完成符合条件的操作时，Government Shutdown 可能获得佣金。如果站内启用联盟链接，它们通常会出现在税务申报、预算安排或旅行中断应对这类强操作场景的页面里。",
            "联盟关系不会决定页面对“某项服务是否受影响”或“读者应该先做什么”的编辑结论。实际指导仍然独立撰写，联盟链接只是放在相关解决方案旁边，而不是替代内容本身。"
          ]
        },
        {
          title: "披露标准",
          paragraphs: [
            "当联盟链接启用后，我们会尽量在推荐附近清晰披露相关关系，而不是让读者自己去猜。"
          ]
        }
      ]
    },
    "privacy-policy": {
      title: "隐私政策",
      description: "Government Shutdown 的隐私政策，涵盖分析工具、Cookie、广告以及联系表单信息的使用方式。",
      eyebrow: "隐私政策",
      heading: "这个站点可能收集什么信息，以及这些信息如何被使用。",
      sections: [
        {
          title: "广告与分析",
          paragraphs: [
            "Government Shutdown 可能使用标准的主机日志、分析工具、Cookie 和广告技术来理解流量并支持站点运行。这些数据可能包括设备信息、浏览器数据、页面访问、来源渠道和交互行为。",
            "如果后续接入广告或分析服务，这些服务可能会使用 Cookie 或类似技术来衡量使用情况、个性化内容或投放广告。具体服务上线后，应补充相应的服务商披露。"
          ]
        },
        {
          title: "邮件与联系请求",
          paragraphs: [
            "如果你直接联系我们，我们可能会保留你的邮箱地址和邮件内容，以便回复、处理纠错请求或进行业务沟通。"
          ]
        },
        {
          title: "你的选择",
          paragraphs: [
            "你可以通过浏览器设置限制 Cookie。关于本政策的问题，可发送到 editor@government-shutdown.com。"
          ]
        }
      ]
    }
  }
};

export function getPolicyPage(locale: Locale, key: PolicyKey) {
  return policyPages[locale][key];
}
