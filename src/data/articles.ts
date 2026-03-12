export interface Citation {
  label: string;
  href: string;
}

export interface ArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ActionBox {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  description: string;
  updated: string;
  kicker: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: FaqItem[];
  citations: Citation[];
  related: string[];
  actionBox?: ActionBox;
}

export const articles: Article[] = [
  {
    slug: "government-shutdown-2026",
    category: "Current Watch",
    title: "Government Shutdown 2026: the page to update when the funding clock tightens",
    description:
      "The annual watch page explains the current funding posture, recent timeline, and where readers should go next for worker, travel, tax, and benefit guidance.",
    updated: "Updated March 12, 2026",
    kicker: "This is the front door for event-driven traffic.",
    takeaways: [
      "Use this page as the live situation brief whenever the federal funding fight becomes a top search topic.",
      "Send readers quickly to service-specific explainers instead of burying them in a long narrative.",
      "Keep the date stamp and source links visible so people know what they are reading."
    ],
    sections: [
      {
        title: "What this page should answer first",
        paragraphs: [
          "When shutdown searches break out, the reader usually has three questions before anything else: is a shutdown active, what deadline matters next, and will a specific service or paycheck be affected.",
          "That is why this page should work like a bulletin board rather than a blog archive. Put the current state, next date, and top agency impact links at the top."
        ]
      },
      {
        title: "How to keep it useful between crises",
        paragraphs: [
          "A shutdown site cannot go dark between headline moments. The annual watch page should stay alive by explaining the standing September 30 fiscal-year deadline, summarizing prior lapses, and linking to evergreen explainers.",
          "That approach makes the site indexable all year and gives you a faster publishing surface when negotiations heat up."
        ],
        bullets: [
          "Refresh the date stamp even when no shutdown is active.",
          "Keep one paragraph on the current funding posture.",
          "Rotate featured links based on what users are searching for right now."
        ]
      }
    ],
    faqs: [
      {
        question: "Should this page try to answer every agency question?",
        answer: "No. It should answer the top-line status and route people into more specific pages quickly."
      },
      {
        question: "Why keep a yearly page if the homepage exists?",
        answer: "Year-specific pages capture annual search intent and make it easier to preserve timelines without rewriting your homepage structure."
      },
      {
        question: "What matters most on this page?",
        answer: "Clarity, recency, and visible links to deeper answers."
      }
    ],
    citations: [
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" },
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: [
      "government-shutdown-countdown",
      "government-shutdown-federal-workers",
      "government-shutdown-passports"
    ],
    actionBox: {
      title: "Use the countdown page as a repeat-visit hook",
      text: "Readers do not always remember policy details, but they do come back for a clean deadline clock.",
      ctaLabel: "Open the countdown page",
      ctaHref: "/government-shutdown-countdown/"
    }
  },
  {
    slug: "what-is-a-government-shutdown",
    category: "Explainer",
    title: "What is a government shutdown?",
    description:
      "A clear explainer on how a shutdown starts, what essential services means in practice, and why some functions continue while others pause or slow down.",
    updated: "Updated March 12, 2026",
    kicker: "This is the evergreen explainer that anchors the site.",
    takeaways: [
      "A shutdown happens when funding authority lapses and Congress has not enacted new appropriations.",
      "Not every service stops. Some work continues because it is legally excepted or funded another way.",
      "Even when headline services continue, staffing and processing backlogs can still hit users."
    ],
    sections: [
      {
        title: "How a shutdown starts",
        paragraphs: [
          "The basic trigger is a lapse in appropriations. If Congress and the president have not put new funding in place before the existing authority expires, affected agencies lose the legal authority to keep operating normally.",
          "That is why shutdown coverage often spikes around fiscal deadlines and continuing resolution battles."
        ]
      },
      {
        title: "Why some services continue",
        paragraphs: [
          "The public often hears the word shutdown and imagines a total stop. In practice, some employees keep working because their roles are considered essential, tied to safety, or funded from other sources.",
          "The more accurate mental model is uneven disruption: some offices keep moving, some services slow down, and some public-facing functions pause."
        ],
        bullets: [
          "National security and public safety roles often continue.",
          "Benefit payments may continue while customer support slows.",
          "Application processing may become less predictable."
        ]
      }
    ],
    faqs: [
      {
        question: "Does a shutdown affect every federal program?",
        answer: "No. The effect depends on how that program is funded and whether the work is classified as excepted."
      },
      {
        question: "Why do people keep searching this term every year?",
        answer: "Because the federal funding calendar creates recurring political deadlines that can revive shutdown risk."
      },
      {
        question: "Can backlogs continue after funding resumes?",
        answer: "Yes. Even a short lapse can create processing delays that outlast the shutdown itself."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "government-shutdown-countdown",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-social-security"
    ],
    actionBox: {
      title: "Need the fast version?",
      text: "The annual watch page is the quickest way to see the current date, current state, and links to service-specific answers.",
      ctaLabel: "Go to the live watch page",
      ctaHref: "/government-shutdown-2026/"
    }
  },
  {
    slug: "who-gets-paid-during-a-government-shutdown",
    category: "Workers",
    title: "Who gets paid during a government shutdown?",
    description:
      "This guide explains the difference between excepted work, furloughed status, delayed pay, and the reality of back-pay politics after a funding lapse.",
    updated: "Updated March 12, 2026",
    kicker: "Worker-pay pages carry urgent search intent and deserve clear structure.",
    takeaways: [
      "Some employees continue working during a lapse, but that does not always mean they are paid on the normal schedule.",
      "Furloughed workers may stop working entirely until funding returns.",
      "Readers need role-specific guidance, not general political commentary."
    ],
    sections: [
      {
        title: "Excepted employees versus furloughed employees",
        paragraphs: [
          "Shutdown coverage often collapses two very different situations into one sentence. Some workers are ordered to keep working because their jobs are treated as necessary for safety or core operations. Others are furloughed and sent home.",
          "Those categories matter because they shape everything else the reader wants to know, including timekeeping, reporting instructions, and paycheck expectations."
        ]
      },
      {
        title: "What pay timing usually means in practice",
        paragraphs: [
          "Even when later back pay becomes law, households still feel the gap in real time. Search traffic to worker-pay pages is usually a sign that people are trying to figure out what happens before that relief arrives.",
          "That makes practical guidance more valuable than rhetoric. Tell readers where to check official agency notices, union messages, and HR instructions."
        ],
        bullets: [
          "Keep links to agency contingency plans.",
          "Explain the difference between legal entitlement and paycheck timing.",
          "Use plain language and avoid vague reassurance."
        ]
      }
    ],
    faqs: [
      {
        question: "Do workers always receive back pay after a shutdown?",
        answer: "Back pay has become common for federal employees, but the timing and details still matter when a paycheck is about to miss."
      },
      {
        question: "Are contractors treated the same way as federal employees?",
        answer: "No. Contractor pay and protections can be much less predictable, so they need their own guidance and contract-specific advice."
      },
      {
        question: "Why does this page matter so much for SEO?",
        answer: "It matches high-urgency searches from people whose income may be affected right away."
      }
    ],
    citations: [
      { label: "OPM: Pay and Leave", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" },
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" }
    ],
    related: [
      "government-shutdown-federal-workers",
      "government-shutdown-military-pay",
      "government-shutdown-countdown"
    ],
    actionBox: {
      title: "Need the broader worker guide?",
      text: "The federal worker page covers furlough mechanics, official plan documents, and the decision points readers need during the first 48 hours.",
      ctaLabel: "Open the federal worker guide",
      ctaHref: "/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-tax-refunds",
    category: "Taxes",
    title: "Government shutdown tax refunds: what filers should expect",
    description:
      "A practical explanation of refund timing, filing during a lapse, and how to keep readers moving toward the official IRS tools they actually need.",
    updated: "Updated March 12, 2026",
    kicker: "Tax questions are among the strongest commercial-intent pages on the site.",
    takeaways: [
      "Readers want to know whether they can still file, whether refunds keep moving, and which IRS services may slow down.",
      "The best-performing tax page keeps the answer operational, not theoretical.",
      "This is a natural place for future tax-software affiliate offers once links are ready."
    ],
    sections: [
      {
        title: "What a shutdown can change for tax season",
        paragraphs: [
          "The answer is rarely as simple as yes or no. Tax filing may continue, refund tools may still work, and automated systems can keep moving while phone support or in-person help becomes harder to access.",
          "That is why the page should separate filing, refund tracking, customer support, and case-specific processing instead of giving one catch-all answer."
        ]
      },
      {
        title: "How to make the page useful for action-focused readers",
        paragraphs: [
          "Readers landing here are not browsing for civics class. They usually need to file, track a refund, or decide whether waiting is smarter than acting.",
          "The page should send them to the official IRS refund and filing tools, explain likely bottlenecks, and leave room for future monetization around tax-prep recommendations."
        ],
        bullets: [
          "Keep IRS refund and filing links near the top.",
          "Explain what can still happen automatically.",
          "Mark anything that may depend on annual IRS operating plans."
        ]
      }
    ],
    faqs: [
      {
        question: "Can people still file taxes during a shutdown?",
        answer: "Often yes, but support channels and processing capacity can vary depending on the timing and scope of the lapse."
      },
      {
        question: "Will refund payments automatically stop?",
        answer: "Not necessarily. Refund flow depends on the filing season setup and which IRS operations remain active."
      },
      {
        question: "Why is this page commercially important?",
        answer: "Readers are already in a decision mode, which makes tax-software offers a natural future fit."
      }
    ],
    citations: [
      { label: "IRS Refunds", href: "https://www.irs.gov/refunds" },
      { label: "IRS Filing Information", href: "https://www.irs.gov/filing" }
    ],
    related: [
      "government-shutdown-2026",
      "government-shutdown-federal-workers",
      "what-is-a-government-shutdown"
    ],
    actionBox: {
      title: "Use this page for future affiliate placement",
      text: "When you add tracked tax-prep links, keep them beside practical filing guidance instead of pushing them into a generic ad block.",
      ctaLabel: "Read the worker impact guide",
      ctaHref: "/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-passports",
    category: "Travel",
    title: "Government shutdown passports: can you still apply or renew?",
    description:
      "A travel-focused guide for readers trying to understand passport office availability, application timing, and what to do when a trip is approaching.",
    updated: "Updated March 12, 2026",
    kicker: "Travel disruption pages combine broad search demand with urgent personal timelines.",
    takeaways: [
      "Readers care more about actual appointment and processing impact than the abstract politics of a shutdown.",
      "Passports often become a high-volume search topic because trips have hard dates and little flexibility.",
      "This page should route users to official State Department resources immediately."
    ],
    sections: [
      {
        title: "What readers are really asking",
        paragraphs: [
          "Most users do not want a civics explanation when they search shutdown plus passports. They want to know whether they can still submit an application, whether appointments are open, and whether a pending trip is now at risk.",
          "The page should therefore answer timing, office access, and urgent-travel escalation options before broader context."
        ]
      },
      {
        title: "How to structure the answer",
        paragraphs: [
          "Start with a concise current-state answer, then separate routine applications from urgent travel. Readers with flights booked need a different path than readers doing early planning.",
          "That simple split improves usability and also makes the page easier to update when funding conditions change."
        ],
        bullets: [
          "Link directly to passport application and status resources.",
          "Call out the difference between agency operations and broader staffing strain.",
          "Include a note telling readers to build extra buffer into travel planning."
        ]
      }
    ],
    faqs: [
      {
        question: "Do passport operations always stop during a shutdown?",
        answer: "Not always. The impact depends on how the relevant offices are funded and staffed at that moment."
      },
      {
        question: "What should travelers do first?",
        answer: "Check the official State Department passport pages and act early if travel is close."
      },
      {
        question: "Why is this a strong page for the site?",
        answer: "Because travel deadlines create intense, highly specific searches and strong repeat demand during funding fights."
      }
    ],
    citations: [
      { label: "U.S. State Department: Passports", href: "https://travel.state.gov/content/travel/en/passports.html" },
      { label: "U.S. State Department: Passport Help", href: "https://travel.state.gov/content/travel/en/contact-us/passports.html" }
    ],
    related: [
      "government-shutdown-tsa",
      "government-shutdown-national-parks",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Travel readers often want the full disruption picture",
      text: "Passport questions rarely travel alone. Keep airport, TSA, and national park links close by.",
      ctaLabel: "See the TSA guide",
      ctaHref: "/government-shutdown-tsa/"
    }
  },
  {
    slug: "government-shutdown-tsa",
    category: "Travel",
    title: "Government shutdown TSA: what airport travelers should expect",
    description:
      "An airport-focused page explaining why screening usually continues, where strain shows up, and how travelers should plan when staffing pressure rises.",
    updated: "Updated March 12, 2026",
    kicker: "TSA pages convert abstract politics into immediate travel behavior.",
    takeaways: [
      "Screening may continue even during a lapse, but that does not guarantee a normal traveler experience.",
      "Staffing pressure can show up as wait-time volatility, morale issues, and operational strain.",
      "The page should stay practical and traveler-first."
    ],
    sections: [
      {
        title: "Why TSA remains a live search topic",
        paragraphs: [
          "Airport screening is one of the clearest examples of a service that can keep operating while still feeling disrupted. Travelers do not want a legal distinction; they want to know if they should show up earlier and whether delays are plausible.",
          "That makes the page more useful when it translates policy language into planning advice."
        ]
      },
      {
        title: "What practical guidance should look like",
        paragraphs: [
          "Keep the answer simple: screening usually continues, but staffing tension can still affect the experience. Then tell readers how to prepare and where to check live airport and TSA updates.",
          "That approach respects the real search intent and keeps the page valuable even when no crisis is active."
        ],
        bullets: [
          "Advise extra airport buffer during active funding fights.",
          "Link to official TSA travel tips and airport status resources.",
          "Avoid overpromising on wait times."
        ]
      }
    ],
    faqs: [
      {
        question: "Will TSA shut down completely?",
        answer: "Usually no, but operational strain can still affect the traveler experience."
      },
      {
        question: "How early should travelers arrive?",
        answer: "During an active disruption, more buffer is safer than normal, especially at larger airports."
      },
      {
        question: "What is the best companion page for this one?",
        answer: "The passport page, because many travelers search both topics during the same news cycle."
      }
    ],
    citations: [
      { label: "TSA Travel Tips", href: "https://www.tsa.gov/travel/travel-tips" },
      { label: "TSA Contact Center", href: "https://www.tsa.gov/contact-center" }
    ],
    related: [
      "government-shutdown-passports",
      "government-shutdown-national-parks",
      "government-shutdown-2026"
    ]
  },
  {
    slug: "government-shutdown-social-security",
    category: "Benefits",
    title: "Government shutdown Social Security: are checks and services affected?",
    description:
      "A service-focused explainer covering the difference between benefit payments and customer-service delays, with language clear enough for anxious readers to trust quickly.",
    updated: "Updated March 12, 2026",
    kicker: "This page earns trust by separating payments from administrative friction.",
    takeaways: [
      "Readers are usually trying to protect a monthly payment and need a fast answer.",
      "Benefit checks and administrative support should be explained separately.",
      "The page should prioritize reassurance only when it can be supported by the funding structure."
    ],
    sections: [
      {
        title: "What people mean when they ask this question",
        paragraphs: [
          "Searchers asking about Social Security are usually not asking a policy trivia question. They want to know whether their money will stop, whether a claim or callback may slip, and how fast they need to act.",
          "That is why this page should split out benefit payments, phone support, field-office service, and processing delays into separate chunks."
        ]
      },
      {
        title: "Why payment and service are not the same thing",
        paragraphs: [
          "A common mistake is to treat the entire Social Security system as one on-off switch. In practice, payment continuity and customer-service capacity can behave differently during funding disruption.",
          "If the page explains that distinction clearly, it becomes much more useful and much more likely to win repeat traffic."
        ],
        bullets: [
          "State the expected status of checks first.",
          "Then explain support and case-processing uncertainty.",
          "Point readers to SSA notices for current operational details."
        ]
      }
    ],
    faqs: [
      {
        question: "Do Social Security checks usually stop during a shutdown?",
        answer: "Benefit payments generally continue, but service and processing channels can still slow down."
      },
      {
        question: "What may become harder during a lapse?",
        answer: "Customer-service response, casework timing, and some administrative tasks can be affected."
      },
      {
        question: "Why is this a strong SEO page?",
        answer: "Because the question returns during every funding scare and carries broad public relevance."
      }
    ],
    citations: [
      { label: "Social Security Administration", href: "https://www.ssa.gov/" },
      { label: "SSA Contact and Office Information", href: "https://www.ssa.gov/agency/contact/" }
    ],
    related: [
      "government-shutdown-va-benefits",
      "what-is-a-government-shutdown",
      "government-shutdown-2026"
    ]
  },
  {
    slug: "government-shutdown-military-pay",
    category: "Workers",
    title: "Government shutdown military pay: what service members and families watch for",
    description:
      "A guide to active-duty pay concerns, defense funding context, and the family-facing questions that surface when a shutdown risk becomes real.",
    updated: "Updated March 12, 2026",
    kicker: "Military pay pages need precision because readers are often making immediate budget decisions.",
    takeaways: [
      "Military pay questions deserve their own page because the search intent and stakes differ from generic worker pages.",
      "Readers need to know what funding authority exists, what special legislation may do, and where to verify current policy.",
      "Families search this topic with paycheck urgency, not abstract interest."
    ],
    sections: [
      {
        title: "Why military pay cannot be collapsed into a general worker answer",
        paragraphs: [
          "Defense funding and payroll decisions can move under different political pressure than civilian agency operations. That means readers looking for military-pay information need a narrower answer than the generic worker page can provide.",
          "The page should focus on current authority, current notices, and household planning implications."
        ]
      },
      {
        title: "What to monitor during an active lapse",
        paragraphs: [
          "Keep the guidance organized around the specific question readers bring to the page: will pay arrive on time, what should families watch for, and where is the official confirmation coming from.",
          "When the page stays concrete and source-led, it becomes a reliable reference rather than just another commentary post."
        ],
        bullets: [
          "Link to DFAS and DoD updates.",
          "Avoid broad claims that ignore changing legislation.",
          "Call out timing issues clearly."
        ]
      }
    ],
    faqs: [
      {
        question: "Is military pay always protected during a shutdown?",
        answer: "Not automatically in every scenario, which is why current funding authority and any emergency legislation matter."
      },
      {
        question: "Who should service members monitor first?",
        answer: "Defense Finance and Accounting Service updates and official service-branch communications."
      },
      {
        question: "Why create a dedicated page for this topic?",
        answer: "Because the audience has urgent household-level concerns and searches differently from the broader federal workforce."
      }
    ],
    citations: [
      { label: "DFAS", href: "https://www.dfas.mil/" },
      { label: "U.S. Department of Defense", href: "https://www.defense.gov/" }
    ],
    related: [
      "government-shutdown-federal-workers",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-2026"
    ]
  },
  {
    slug: "government-shutdown-va-benefits",
    category: "Benefits",
    title: "Government shutdown VA benefits: what veterans should check first",
    description:
      "A veteran-focused explainer covering benefit payments, health-care continuity, and the claims-processing friction that often matters more than the headline.",
    updated: "Updated March 12, 2026",
    kicker: "Veteran searches are high-trust and highly specific, so the page must be sober and source-first.",
    takeaways: [
      "Veterans want direct answers on payment continuity, care access, and claims activity.",
      "The page should clearly separate health care, disability compensation, and administrative processing.",
      "Trust matters more here than volume-chasing copy."
    ],
    sections: [
      {
        title: "What this audience usually needs",
        paragraphs: [
          "Readers coming to a VA page are often trying to confirm whether compensation, health care, or claims work will continue. Those are distinct systems and should not be blended into a single paragraph.",
          "The fastest way to build trust is to state what is likely to continue, what may slow down, and where the veteran can verify current notices."
        ]
      },
      {
        title: "How to reduce confusion fast",
        paragraphs: [
          "Make the page scannable with short sections and visible source links. Veterans and families are often reading in a high-stress moment and do not want a dense essay.",
          "This page should function like a practical field note: quick answer, service split, official link, related guide."
        ],
        bullets: [
          "Keep health-care and benefits language separate.",
          "Link to VA updates and contact channels.",
          "Add a clear update stamp at the top."
        ]
      }
    ],
    faqs: [
      {
        question: "Do VA benefits always stop during a shutdown?",
        answer: "No. Many services and payments can continue, but the exact impact depends on funding structure and the function involved."
      },
      {
        question: "Could claims work slow down?",
        answer: "Yes. Administrative processing can feel the strain even if core services continue."
      },
      {
        question: "Why treat VA traffic separately from Social Security traffic?",
        answer: "Because the audience, terminology, and operational questions are different enough to deserve their own page."
      }
    ],
    citations: [
      { label: "U.S. Department of Veterans Affairs", href: "https://www.va.gov/" },
      { label: "VA Contact Us", href: "https://www.va.gov/contact-us/" }
    ],
    related: [
      "government-shutdown-social-security",
      "government-shutdown-federal-workers",
      "government-shutdown-2026"
    ]
  },
  {
    slug: "government-shutdown-national-parks",
    category: "Travel",
    title: "Government shutdown national parks: closures, staffing, and trip planning",
    description:
      "A park-focused page covering what can vary by site, what travelers should not assume, and why park shutdown searches return whenever a lapse becomes likely.",
    updated: "Updated March 12, 2026",
    kicker: "National park pages are strong because they combine news, travel, and family-planning intent.",
    takeaways: [
      "Park operations can vary, so the page should steer readers away from one-size-fits-all assumptions.",
      "Travelers need clear advice on checking local park status before they drive or fly.",
      "This page pairs naturally with passports and TSA."
    ],
    sections: [
      {
        title: "Why park searches spike fast",
        paragraphs: [
          "National parks sit at the intersection of politics and actual weekend plans. When shutdown risk rises, families immediately ask whether gates, visitor services, campgrounds, and amenities will be affected.",
          "That urgency makes park coverage valuable even if the final answer varies by location."
        ]
      },
      {
        title: "What the page should emphasize",
        paragraphs: [
          "The key message is uncertainty by site, not false certainty. Travelers should be told clearly to check the National Park Service and the specific park they plan to visit.",
          "A useful park page explains the categories of disruption without pretending every park will behave the same way."
        ],
        bullets: [
          "Link to the park-service homepage and status resources.",
          "Call out visitor-center, staffing, and amenity uncertainty.",
          "Encourage travelers to verify before departure."
        ]
      }
    ],
    faqs: [
      {
        question: "Do all national parks close during a shutdown?",
        answer: "No. Operations can vary by site, staffing, and available resources."
      },
      {
        question: "What should travelers do before leaving?",
        answer: "Check the National Park Service site and the individual park's latest alerts."
      },
      {
        question: "Why include this topic on a shutdown site?",
        answer: "Because travel and recreation searches often spike alongside policy news when family plans are on the line."
      }
    ],
    citations: [
      { label: "National Park Service", href: "https://www.nps.gov/" },
      { label: "NPS Find a Park", href: "https://www.nps.gov/findapark/index.htm" }
    ],
    related: [
      "government-shutdown-passports",
      "government-shutdown-tsa",
      "government-shutdown-2026"
    ]
  },
  {
    slug: "government-shutdown-federal-workers",
    category: "Workers",
    title: "Government shutdown federal workers: furlough rules, pay pressure, and what to do first",
    description:
      "The practical worker guide for people trying to understand reporting instructions, contingency plans, household planning, and where to find the most reliable agency updates.",
    updated: "Updated March 12, 2026",
    kicker: "This is the operational playbook page for the site.",
    takeaways: [
      "Federal workers need practical steps, not generic commentary.",
      "Agency contingency plans should be a core part of the page structure.",
      "The best worker guide translates legal status into household decisions."
    ],
    sections: [
      {
        title: "First 24-hour questions every worker has",
        paragraphs: [
          "When a lapse becomes likely, workers and families usually ask the same questions in the same order: should I report to work, how will my role be classified, when is the next paycheck, and where does my agency post instructions.",
          "A strong worker page mirrors that sequence instead of leading with political recap."
        ]
      },
      {
        title: "What the worker page should help readers do",
        paragraphs: [
          "This page should work like a response checklist. It should tell readers where to find agency contingency plans, how to think about excepted status versus furlough, and what to watch if a paycheck delay is possible.",
          "That structure keeps the page helpful during both early rumors and actual shutdown periods."
        ],
        bullets: [
          "Link to OPM, agency notices, and contingency plans.",
          "Add a plain-language section on payroll timing.",
          "Keep one short checklist for household planning and documentation."
        ]
      }
    ],
    faqs: [
      {
        question: "Where should workers look first for updates?",
        answer: "Agency contingency plans, official HR guidance, and OPM resources are usually the most useful first stops."
      },
      {
        question: "Should this page mention contractors too?",
        answer: "Yes, but contractors should also be linked to separate role-specific guidance because the rules differ."
      },
      {
        question: "Why is this page central to the whole site?",
        answer: "Because it serves one of the highest-stakes audiences and also links naturally to pay, tax, and benefit pages."
      }
    ],
    citations: [
      { label: "OPM", href: "https://www.opm.gov/" },
      { label: "OPM Pay and Leave", href: "https://www.opm.gov/policy-data-oversight/pay-leave/" }
    ],
    related: [
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-military-pay",
      "government-shutdown-tax-refunds"
    ],
    actionBox: {
      title: "Pair this page with the pay explainer",
      text: "The worker guide gets people oriented. The pay page answers the question they usually ask next.",
      ctaLabel: "Open the pay explainer",
      ctaHref: "/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "government-shutdown-countdown",
    category: "Countdown",
    title: "Government shutdown countdown: the date every watch page should keep visible",
    description:
      "A recurring page built around the annual federal funding deadline, why that date matters for search traffic, and how to turn it into a repeat-visit utility page.",
    updated: "Updated March 12, 2026",
    kicker: "Countdown pages create return behavior even when the news cycle is quiet.",
    takeaways: [
      "The countdown page translates a policy deadline into a simple repeat-visit utility.",
      "It gives you a natural home for the next major fiscal-year cutoff.",
      "This page can become a high-linking internal hub."
    ],
    sections: [
      {
        title: "Why a countdown page matters",
        paragraphs: [
          "Political search topics usually feel abstract until a date is visible. A countdown page makes the risk tangible and gives readers a reason to return, bookmark, and share.",
          "It also helps the site occupy a specific search angle beyond generic headline coverage."
        ]
      },
      {
        title: "What to keep on the page besides the clock",
        paragraphs: [
          "The clock should not stand alone. Add a short explanation of the deadline, the difference between an annual fiscal-year cutoff and a stopgap funding date, and links to the most useful impact pages.",
          "That structure keeps the page valuable even when the exact political posture changes."
        ],
        bullets: [
          "Show the next major federal funding deadline.",
          "Keep one paragraph on why the date matters.",
          "Link to the annual watch page and worker guide."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the countdown itself enough content?",
        answer: "No. The page still needs context and links so it works as an information page, not a gimmick."
      },
      {
        question: "Why should this page exist separately from the homepage?",
        answer: "Because a dedicated utility page can earn repeat traffic and capture readers specifically looking for the date."
      },
      {
        question: "What date should stay visible by default?",
        answer: "The annual September 30 fiscal-year funding cutoff is the standing date to keep on the board."
      }
    ],
    citations: [
      { label: "U.S. Senate: Appropriations Process", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "government-shutdown-2026",
      "what-is-a-government-shutdown",
      "government-shutdown-federal-workers"
    ],
    actionBox: {
      title: "This page should always point back to the live brief",
      text: "Readers who arrive for the date usually want the current narrative next.",
      ctaLabel: "Open the current watch page",
      ctaHref: "/government-shutdown-2026/"
    }
  }
];

export const articleMap = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleMap.get(slug);
}
