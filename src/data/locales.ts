export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function normalizePath(path = "") {
  if (!path || path === "/") {
    return "/";
  }

  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

export function localizePath(locale: Locale, path = "") {
  const normalized = normalizePath(path);
  if (locale === "en") {
    return normalized;
  }

  return normalized === "/" ? "/zh/" : `/zh${normalized}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}

export function hreflang(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en";
}

export const uiCopy = {
  en: {
    siteName: "Government Shutdown",
    languageSwitch: "中文",
    header: {
      noticeLabel: "Independent Watch",
      noticeText:
        "Not affiliated with the U.S. government. This site summarizes public information and publishes independent analysis.",
      brandTitle: "Government Shutdown",
      brandSubtitle: "Federal funding clock, agency impacts, and worker guidance.",
      navLabel: "Primary navigation",
      links: [
        { href: localizePath("en"), label: "Watch" },
        { href: localizePath("en", "government-shutdown-federal-workers"), label: "Workers" },
        { href: localizePath("en", "government-shutdown-tax-refunds"), label: "Taxes" },
        { href: localizePath("en", "government-shutdown-passports"), label: "Travel" },
        { href: localizePath("en", "government-shutdown-social-security"), label: "Benefits" },
        { href: localizePath("en", "about"), label: "About" }
      ]
    },
    footer: {
      eyebrow: "Read This First",
      title: "Independent, source-linked, and built for high-stakes search moments.",
      body:
        "Government shutdown searches spike when people need a fast answer. This project is designed to explain the funding clock, who is affected, and where to verify details with official agencies.",
      linksEyebrow: "Policy Links",
      links: [
        { href: localizePath("en", "about"), label: "About" },
        { href: localizePath("en", "editorial-policy"), label: "Editorial Policy" },
        { href: localizePath("en", "affiliate-disclosure"), label: "Affiliate Disclosure" },
        { href: localizePath("en", "privacy-policy"), label: "Privacy Policy" }
      ],
      contact: "Questions or correction requests: editor@government-shutdown.com"
    },
    home: {
      pageTitle: "Federal Funding Clock, Agency Impact Guides, and Worker Answers",
      heroCta: "Open the current watch page",
      heroUpdated: "Updated for March 2026",
      signalLabel: "Search intent",
      architectureEyebrow: "Coverage Architecture",
      lanePrefix: "Lane",
      openPage: "Open page",
      fastAnswersEyebrow: "Fast Answers",
      timelineEyebrow: "Timeline",
      featuredEyebrow: "Featured Pages"
    },
    article: {
      heroNote:
        "Every high-stakes page on this site is written to answer the practical question first, show the update date clearly, and point readers toward official sources.",
      keyPoints: "Key points",
      nextMove: "Next Move",
      faqHeading: "Frequently asked",
      sourcesHeading: "Official sources",
      relatedHeading: "Related guides",
      readGuide: "Read guide"
    },
    common: {
      xDefault: localizePath("en")
    }
  },
  zh: {
    siteName: "美国政府停摆",
    languageSwitch: "English",
    header: {
      noticeLabel: "独立观察",
      noticeText: "本网站与美国政府无隶属关系，内容基于公开资料整理，并提供独立分析。",
      brandTitle: "美国政府停摆",
      brandSubtitle: "联邦拨款时钟、机构影响与联邦雇员指南。",
      navLabel: "主导航",
      links: [
        { href: localizePath("zh"), label: "总览" },
        { href: localizePath("zh", "government-shutdown-federal-workers"), label: "雇员" },
        { href: localizePath("zh", "government-shutdown-tax-refunds"), label: "税务" },
        { href: localizePath("zh", "government-shutdown-passports"), label: "出行" },
        { href: localizePath("zh", "government-shutdown-social-security"), label: "福利" },
        { href: localizePath("zh", "about"), label: "关于" }
      ]
    },
    footer: {
      eyebrow: "先看这里",
      title: "独立整理、附带来源链接，并专为高风险搜索时刻设计。",
      body:
        "当美国政府停摆相关搜索飙升时，用户需要的是快速答案。这个站点的目标是解释拨款倒计时、谁会受影响，以及去哪里核对官方信息。",
      linksEyebrow: "政策页面",
      links: [
        { href: localizePath("zh", "about"), label: "关于本站" },
        { href: localizePath("zh", "editorial-policy"), label: "编辑政策" },
        { href: localizePath("zh", "affiliate-disclosure"), label: "联盟披露" },
        { href: localizePath("zh", "privacy-policy"), label: "隐私政策" }
      ],
      contact: "纠错或合作联系：editor@government-shutdown.com"
    },
    home: {
      pageTitle: "美国政府停摆时间表、机构影响与联邦雇员指南",
      heroCta: "查看当前专题页",
      heroUpdated: "2026 年 3 月版",
      signalLabel: "搜索意图",
      architectureEyebrow: "站点架构",
      lanePrefix: "栏目",
      openPage: "进入页面",
      fastAnswersEyebrow: "快速答案",
      timelineEyebrow: "时间线",
      featuredEyebrow: "核心页面"
    },
    article: {
      heroNote: "本站的高价值页面都遵循同一个原则：先回答实际问题，明确更新时间，再把读者导向官方来源。",
      keyPoints: "关键要点",
      nextMove: "下一步",
      faqHeading: "常见问题",
      sourcesHeading: "官方来源",
      relatedHeading: "相关文章",
      readGuide: "查看指南"
    },
    common: {
      xDefault: localizePath("en")
    }
  }
} as const;

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}
