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
      title: "Independent, source-linked, and focused on practical answers.",
      body:
        "If you are trying to figure out whether work, benefits, travel, or a federal service could be affected, start with the update date and official sources on each page.",
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
      heroUpdated: "Updated March 13, 2026",
      signalLabel: "Start here",
      architectureEyebrow: "Main Guides",
      lanePrefix: "Guide",
      openPage: "Open page",
      fastAnswersEyebrow: "Fast Answers",
      timelineEyebrow: "Timeline",
      featuredEyebrow: "Featured Pages"
    },
    article: {
      heroNote:
        "Start with the update date, then use the key points and official sources below to confirm what applies to you.",
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
      title: "独立整理、附带来源链接，并只讲实际影响。",
      body:
        "如果你担心工作、福利、旅行或某项联邦服务会不会受影响，就先看对应页面的更新时间和官方来源。",
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
      heroUpdated: "更新于 2026 年 3 月 13 日",
      signalLabel: "从这里开始",
      architectureEyebrow: "核心指南",
      lanePrefix: "指南",
      openPage: "进入页面",
      fastAnswersEyebrow: "快速答案",
      timelineEyebrow: "时间线",
      featuredEyebrow: "核心页面"
    },
    article: {
      heroNote: "先看更新时间，再看下方关键要点和官方来源，快速确认哪些信息与你有关。",
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
