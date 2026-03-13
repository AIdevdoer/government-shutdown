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
    title: "Government Shutdown 2026: status, deadlines, and who could be affected",
    description:
      "A current-status guide covering the latest funding posture, the next deadline, and where to check likely impacts on workers, travel, taxes, and benefits.",
    updated: "Updated March 13, 2026",
    kicker: "Start here if you need the current federal funding picture fast.",
    takeaways: [
      "Check whether funding is active, partial, or lapsed before assuming a shutdown is already in effect.",
      "Watch the next congressional deadline, because that is often when risk becomes immediate.",
      "Use the related guides below if your question is really about pay, benefits, passports, TSA, or tax refunds."
    ],
    sections: [
      {
        title: "What to check first",
        paragraphs: [
          "Most people need three answers first: is a shutdown active, what deadline matters next, and which services or paychecks are most likely to feel strain first.",
          "That is why this guide keeps the current status, the next date, and the most commonly affected topics close together."
        ]
      },
      {
        title: "How to use this guide",
        paragraphs: [
          "Federal funding fights can change quickly. A temporary funding bill, a new deadline, or an agency notice can shift what matters for workers and the public.",
          "Use the update date at the top, then follow the official sources and related guides that match your own situation."
        ],
        bullets: [
          "Check whether funding is active, partial, or lapsed.",
          "Note the next date Congress has to act.",
          "Open the worker, travel, tax, or benefit guide that matches your concern."
        ]
      }
    ],
    faqs: [
      {
        question: "Is a shutdown active right now?",
        answer: "Check the update date at the top of this guide and the official sources below. During fast-moving negotiations, status can change quickly."
      },
      {
        question: "Why does the next deadline matter so much?",
        answer: "Because federal funding fights usually turn on hard calendar dates. As the deadline gets closer, the risk becomes much more concrete."
      },
      {
        question: "What should I read after this guide?",
        answer: "Go next to the page that matches your actual concern, such as federal workers, tax refunds, passports, TSA, Social Security, or VA benefits."
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
      title: "Need the next deadline at a glance?",
      text: "If the date is the main thing you want to track, the countdown guide keeps the next federal funding cutoff front and center.",
      ctaLabel: "Open the countdown guide",
      ctaHref: "/government-shutdown-countdown/"
    }
  },
  {
    slug: "what-is-a-government-shutdown",
    category: "Explainer",
    title: "What is a government shutdown?",
    description:
      "A plain-language explainer on how a shutdown starts, why some services continue, and why others pause or slow down.",
    updated: "Updated March 13, 2026",
    kicker: "A shutdown is a funding lapse, not a total disappearance of government.",
    takeaways: [
      "A shutdown begins when funding authority lapses and Congress has not enacted new appropriations in time.",
      "Not every service stops. Some work continues because it is legally excepted or funded another way.",
      "Even when services continue, staffing and processing backlogs can still affect the public."
    ],
    sections: [
      {
        title: "How a shutdown starts",
        paragraphs: [
          "The trigger is a lapse in appropriations. If Congress and the president have not put new funding in place before existing authority expires, affected agencies lose the legal basis to keep operating normally.",
          "That is why shutdown risk usually comes into focus around fiscal deadlines and temporary funding fights."
        ]
      },
      {
        title: "Why some services continue",
        paragraphs: [
          "The word shutdown sounds total, but the reality is more uneven. Some employees keep working because their roles are tied to safety, national security, or other protected functions.",
          "A better way to think about it is disruption by category: some services continue, some slow down, and some public-facing work pauses."
        ],
        bullets: [
          "National security and public safety roles often continue.",
          "Benefit payments may continue while customer support slows down.",
          "Applications and case processing may become less predictable."
        ]
      }
    ],
    faqs: [
      {
        question: "Does a shutdown affect every federal program?",
        answer: "No. The effect depends on how the program is funded and whether the work is classified as excepted."
      },
      {
        question: "Why does this issue keep coming back?",
        answer: "Because the federal funding calendar creates recurring deadlines, and political fights over those deadlines can reopen shutdown risk."
      },
      {
        question: "Can delays continue after funding resumes?",
        answer: "Yes. Even a short lapse can create backlogs that last beyond the shutdown itself."
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
      title: "Need the current version of the story?",
      text: "The current watch guide is the fastest way to see the latest funding status, next deadline, and the questions people usually ask next.",
      ctaLabel: "Go to the current watch guide",
      ctaHref: "/government-shutdown-2026/"
    }
  },
  {
    slug: "who-gets-paid-during-a-government-shutdown",
    category: "Workers",
    title: "Who gets paid during a government shutdown?",
    description:
      "A practical guide to excepted work, furloughed status, delayed pay, and what back-pay promises do and do not solve in real time.",
    updated: "Updated March 13, 2026",
    kicker: "The key question is not only who works, but when money actually arrives.",
    takeaways: [
      "Some employees continue working during a lapse, but that does not always mean pay arrives on the normal schedule.",
      "Furloughed workers may stop working entirely until funding returns.",
      "The difference between legal entitlement and paycheck timing matters for household planning."
    ],
    sections: [
      {
        title: "Excepted employees versus furloughed employees",
        paragraphs: [
          "These are two different situations. Some workers are ordered to keep working because their jobs are treated as necessary for safety or core operations. Others are furloughed and told not to work.",
          "That distinction shapes almost every next question, including reporting instructions, timekeeping, and paycheck expectations."
        ]
      },
      {
        title: "What pay timing usually means in practice",
        paragraphs: [
          "Even when later back pay becomes law, households still feel the gap in real time. That is why the most useful answer is not abstract reassurance but clear guidance on what to watch right now.",
          "Check official agency notices, union messages, and HR guidance before assuming that continued work means normal pay timing."
        ],
        bullets: [
          "Keep links to agency contingency plans close by.",
          "Separate back-pay law from the timing of the next paycheck.",
          "Use plain language for what is known and what is still uncertain."
        ]
      }
    ],
    faqs: [
      {
        question: "Do workers always receive back pay after a shutdown?",
        answer: "Back pay has become common for federal employees, but the timing and details still matter when a paycheck is close to missing."
      },
      {
        question: "Are contractors treated the same way as federal employees?",
        answer: "No. Contractor pay and protections can be much less predictable, so contract-specific guidance matters."
      },
      {
        question: "Does excepted status guarantee normal pay timing?",
        answer: "No. An employee may be required to work and still face delayed pay if funding has lapsed."
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
      text: "The federal worker guide covers furlough mechanics, reporting instructions, and the first questions many households need answered.",
      ctaLabel: "Open the federal worker guide",
      ctaHref: "/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-tax-refunds",
    category: "Taxes",
    title: "Government shutdown tax refunds: what filers should expect",
    description:
      "A practical explanation of refund timing, filing during a lapse, and where to check official IRS tools and updates.",
    updated: "Updated March 13, 2026",
    kicker: "The main questions are whether filing continues, whether refunds move, and how hard it is to get help.",
    takeaways: [
      "Many filers want to know whether they can still file, whether refunds continue moving, and which IRS services may slow down.",
      "The clearest answer separates filing, refund tracking, customer support, and case-specific processing.",
      "Official IRS tools matter more than general commentary when a filing deadline or refund is on the line."
    ],
    sections: [
      {
        title: "What a shutdown can change for tax season",
        paragraphs: [
          "The answer is rarely a simple yes or no. Tax filing may continue, refund tools may still work, and automated systems can keep moving while phone support or in-person help becomes harder to access.",
          "That is why it helps to separate filing, refund tracking, support channels, and case-specific delays instead of treating tax season as one single switch."
        ]
      },
      {
        title: "What filers should check first",
        paragraphs: [
          "If you need to file or are waiting on a refund, start with the IRS tools that tell you what is still operating. That gives you a much better answer than broad shutdown headlines.",
          "It also helps to distinguish between what can continue automatically and what may depend on staffing, call centers, or manual review."
        ],
        bullets: [
          "Check the IRS refund and filing tools near the top of the page.",
          "Look for whether automated processes are still moving.",
          "Treat phone support and complex casework as the most likely bottlenecks."
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
        answer: "Not necessarily. Refund flow depends on the filing-season setup and which IRS operations remain active."
      },
      {
        question: "What should filers check first?",
        answer: "Start with the official IRS filing and refund tools, then check whether support or case-specific processing appears to be slower."
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
      title: "Also worried about your paycheck?",
      text: "If a funding lapse could affect both your tax refund and your household income, the worker guide is the best next read.",
      ctaLabel: "Read the worker impact guide",
      ctaHref: "/government-shutdown-federal-workers/"
    }
  },
  {
    slug: "government-shutdown-passports",
    category: "Travel",
    title: "Government shutdown passports: can you still apply or renew?",
    description:
      "A travel-focused guide to passport office availability, application timing, and what to do if a trip is coming up soon.",
    updated: "Updated March 13, 2026",
    kicker: "If you have upcoming travel, check office access, timing, and urgent options first.",
    takeaways: [
      "Most travelers care more about appointments and processing than the politics behind the shutdown.",
      "Passport operations may continue differently depending on office funding and staffing.",
      "If travel is close, acting early matters more than waiting for broad headlines to settle."
    ],
    sections: [
      {
        title: "What travelers are really asking",
        paragraphs: [
          "Most people searching this topic want to know whether they can still submit an application, whether appointments are open, and whether an upcoming trip is now at risk.",
          "That is why the most useful answer starts with timing, office access, and urgent-travel options before anything else."
        ]
      },
      {
        title: "How to use the answer",
        paragraphs: [
          "Start with a short current-status check, then separate routine applications from urgent travel. A traveler leaving soon needs a different answer from someone planning months ahead.",
          "That split also helps you figure out whether to wait, act immediately, or contact an official passport channel."
        ],
        bullets: [
          "Check official passport application and status resources first.",
          "Separate normal processing from urgent travel cases.",
          "Build extra time into your plans whenever staffing looks strained."
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
        question: "What if my trip is close?",
        answer: "Use the official urgent-travel guidance immediately rather than assuming routine processing will be fast enough."
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
      title: "Need the airport side of the story?",
      text: "If you are flying soon, the TSA guide helps you plan for the part of the trip that starts after you reach the airport.",
      ctaLabel: "See the TSA guide",
      ctaHref: "/government-shutdown-tsa/"
    }
  },
  {
    slug: "government-shutdown-tsa",
    category: "Travel",
    title: "Government shutdown TSA: what airport travelers should expect",
    description:
      "An airport-focused guide explaining why screening usually continues, where strain shows up, and how to plan when staffing pressure rises.",
    updated: "Updated March 13, 2026",
    kicker: "Airport screening may continue, but travel days can still get more stressful.",
    takeaways: [
      "Screening may continue even during a lapse, but that does not guarantee a normal traveler experience.",
      "Staffing pressure can show up as wait-time volatility, morale issues, and uneven operations.",
      "The safest planning assumption during a funding fight is to allow more buffer than usual."
    ],
    sections: [
      {
        title: "Why TSA becomes a practical concern fast",
        paragraphs: [
          "TSA is one of the clearest examples of a service that can keep operating while still feeling disrupted. Travelers want to know whether they should arrive earlier and whether delays are realistic.",
          "That makes clear travel advice more useful than a long explanation of government procedure."
        ]
      },
      {
        title: "What travelers should do",
        paragraphs: [
          "The shortest honest answer is this: screening usually continues, but staffing strain can still affect the experience. If the dispute is active, give yourself more room than normal.",
          "Then check official TSA guidance and airport updates instead of relying on a single headline or rumor."
        ],
        bullets: [
          "Plan extra airport time during active funding fights.",
          "Check official TSA travel tips and airport status information.",
          "Avoid assuming normal wait times if staffing tension is rising."
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
        question: "Where should travelers check for live updates?",
        answer: "Check TSA travel guidance, your airline, and the airport you are using for the latest operating information."
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
      "A service-focused explainer that separates benefit payments from customer-service delays and other administrative slowdowns.",
    updated: "Updated March 13, 2026",
    kicker: "Start by separating benefit payments from customer-service delays.",
    takeaways: [
      "Most people asking about Social Security want to know first whether monthly payments continue.",
      "Benefit checks and administrative support should be explained separately.",
      "Pending claims, callbacks, and office support may face slower service even if payments continue."
    ],
    sections: [
      {
        title: "What people usually mean by this question",
        paragraphs: [
          "Most people are not asking a civics question. They want to know whether their money will stop, whether a claim or callback may slip, and whether they need to act immediately.",
          "That is why it helps to separate payments, phone support, field-office service, and processing delays instead of treating everything as one issue."
        ]
      },
      {
        title: "Why payments and service are not the same thing",
        paragraphs: [
          "A common mistake is to treat the whole Social Security system like a single on-off switch. In practice, payment continuity and customer-service capacity can behave differently during funding disruption.",
          "If you keep those two ideas separate, it becomes much easier to understand what is urgent and what is simply slower."
        ],
        bullets: [
          "Check the expected status of payments first.",
          "Then look at support channels and case-processing delays.",
          "Use SSA notices for the most current operational details."
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
        question: "What if I have a pending claim or callback?",
        answer: "Expect the possibility of slower handling, and check SSA contact channels or notices for the latest guidance."
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
    title: "Government shutdown military pay: what service members and families should watch",
    description:
      "A guide to active-duty pay concerns, defense funding context, and the family-facing questions that become urgent when shutdown risk rises.",
    updated: "Updated March 13, 2026",
    kicker: "Service members and families need current pay guidance, not broad assumptions.",
    takeaways: [
      "Military pay questions can develop differently from civilian worker questions.",
      "Service members need to know what funding authority exists, what legislation may change, and where to verify current policy.",
      "Families often need to plan around timing risk, not just legal wording."
    ],
    sections: [
      {
        title: "Why military pay needs its own answer",
        paragraphs: [
          "Defense funding and payroll decisions can move under different political and legal pressure than civilian agency operations. That means service members and families usually need a narrower answer than a general worker guide can offer.",
          "The most useful approach is to focus on current authority, current notices, and what those updates mean for household planning."
        ]
      },
      {
        title: "What to monitor during an active lapse",
        paragraphs: [
          "Keep the focus on the questions families actually have: will pay arrive on time, what should we watch next, and which official source confirms the latest position.",
          "When those answers are concrete and source-led, people can make better decisions about bills, travel, and cash flow."
        ],
        bullets: [
          "Check DFAS and DoD updates first.",
          "Watch for new legislation that changes pay protection.",
          "Treat timing questions as seriously as legal entitlement questions."
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
        answer: "Defense Finance and Accounting Service updates and official service-branch communications are the best starting points."
      },
      {
        question: "What should families prepare for even if pay continues?",
        answer: "Families should still watch for timing changes, mixed reporting on policy, and any ripple effects on household budgeting."
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
      "A veteran-focused guide covering benefit payments, health-care continuity, and claims-processing slowdowns that may matter during a funding lapse.",
    updated: "Updated March 13, 2026",
    kicker: "Veterans usually need a quick answer on payments, health care, and claims.",
    takeaways: [
      "Veterans often need direct answers on payment continuity, care access, and claims activity.",
      "Health care, disability compensation, and administrative processing should be explained separately.",
      "Clear sourcing matters because veterans and families may be making decisions under pressure."
    ],
    sections: [
      {
        title: "What veterans usually need to confirm",
        paragraphs: [
          "People checking VA impacts are often trying to confirm whether compensation, health care, or claims work will continue. Those are different systems, so they should not be blended into one answer.",
          "The quickest way to reduce confusion is to say what is likely to continue, what may slow down, and where veterans can verify current notices."
        ]
      },
      {
        title: "How to read this topic without getting lost",
        paragraphs: [
          "Short sections and clear source links are especially important here. Many veterans and family members read these pages under stress and need the answer quickly.",
          "Use the update date, scan the specific service area that affects you, and go straight to VA sources when the situation is changing."
        ],
        bullets: [
          "Separate health care from benefit payments.",
          "Check VA updates and contact channels directly.",
          "Treat claims processing as a separate timing question."
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
        question: "Where should veterans check current notices?",
        answer: "Use official VA updates and contact channels for the latest operational information that applies to your case."
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
      "A park-focused guide explaining why impacts can vary by location and what travelers should verify before heading out.",
    updated: "Updated March 13, 2026",
    kicker: "National park impacts can vary sharply by location.",
    takeaways: [
      "Park operations can differ by site, so a single blanket answer is rarely reliable.",
      "Travelers need to check local park status before assuming gates, visitor centers, or amenities are operating normally.",
      "Trip planning is safest when you verify the individual park, not just the national headline."
    ],
    sections: [
      {
        title: "Why this question becomes urgent fast",
        paragraphs: [
          "National parks sit right where policy news meets real family plans. When shutdown risk rises, people quickly want to know whether gates, visitor services, campgrounds, and amenities may be affected.",
          "That urgency is exactly why local verification matters more than a one-line national answer."
        ]
      },
      {
        title: "What travelers should emphasize",
        paragraphs: [
          "The most important message is not that every park will close or stay open. It is that conditions may vary by site, staffing, and available resources.",
          "Check the National Park Service and the specific park you plan to visit before you drive or fly."
        ],
        bullets: [
          "Use the park-service homepage and individual park alerts.",
          "Expect uncertainty around visitor centers, staffing, and amenities.",
          "Verify again before departure if your plans are time-sensitive."
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
        question: "What parts of a visit are most likely to change?",
        answer: "Visitor centers, staffing levels, certain facilities, and on-site services are often the first things travelers notice."
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
      "A practical worker guide on reporting instructions, contingency plans, household planning, and where to find reliable agency updates.",
    updated: "Updated March 13, 2026",
    kicker: "If you are a federal worker, start with reporting instructions, role status, and pay timing.",
    takeaways: [
      "Federal workers usually need practical steps first, not general political commentary.",
      "Agency contingency plans are often the fastest route to role-specific guidance.",
      "The most useful worker guidance turns legal status into clear household decisions."
    ],
    sections: [
      {
        title: "First 24-hour questions many workers have",
        paragraphs: [
          "When a lapse becomes likely, workers and families usually ask the same questions in the same order: should I report to work, how will my role be classified, when is the next paycheck, and where is my agency posting instructions.",
          "If you start there, the rest of the shutdown coverage becomes much easier to interpret."
        ]
      },
      {
        title: "What to do next",
        paragraphs: [
          "Treat this guide like a response checklist. Find your agency contingency plan, confirm whether your role is excepted or furloughed, and watch closely for any pay-timing changes.",
          "It also helps to gather the household information you would want quickly if a paycheck is delayed or reporting rules change."
        ],
        bullets: [
          "Check OPM, your agency notices, and your contingency plan.",
          "Use plain-language payroll guidance, not assumptions.",
          "Keep a short household checklist for bills, leave, and documentation."
        ]
      }
    ],
    faqs: [
      {
        question: "Where should workers look first for updates?",
        answer: "Agency contingency plans, official HR guidance, and OPM resources are usually the most useful first stops."
      },
      {
        question: "Should contractors follow the same guidance?",
        answer: "Not completely. Contractors can face different rules, funding paths, and paycheck risks."
      },
      {
        question: "What household steps are worth taking early?",
        answer: "Review upcoming bills, save key HR or payroll documents, and watch for role-specific instructions from your agency."
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
      title: "Still unsure about pay timing?",
      text: "The pay guide focuses specifically on who works, who is furloughed, and why the timing of the next paycheck can still change.",
      ctaLabel: "Open the pay guide",
      ctaHref: "/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "government-shutdown-countdown",
    category: "Countdown",
    title: "Government shutdown countdown: the next federal funding deadline to watch",
    description:
      "A plain-language countdown to the next major federal funding deadline, plus why the date matters and what questions usually follow.",
    updated: "Updated March 13, 2026",
    kicker: "If you only need one date right now, this is it.",
    takeaways: [
      "The countdown helps you see when the next major federal funding decision point arrives.",
      "The date matters because shutdown risk usually becomes more immediate as the deadline approaches.",
      "The clock makes more sense when you pair it with the current-status and worker guides."
    ],
    sections: [
      {
        title: "Why this date matters",
        paragraphs: [
          "Shutdown risk feels abstract until a deadline is close enough to affect real plans. A visible date helps you judge when negotiations, agency notices, and service questions may become more urgent.",
          "That is why the standing fiscal-year cutoff is useful even when there is no active shutdown."
        ]
      },
      {
        title: "What to watch besides the clock",
        paragraphs: [
          "The date by itself is not the whole story. You also need to know whether Congress is working on a temporary funding bill, whether agencies are posting contingency guidance, and whether any specific service is already under strain.",
          "Use the related guides below if your real concern is work, pay, travel, or benefits."
        ],
        bullets: [
          "Watch the next major federal funding deadline.",
          "Check whether Congress is advancing temporary funding.",
          "Use the current-status and worker guides for the broader picture."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the countdown enough on its own?",
        answer: "No. The date is useful, but it needs context from the current funding status and agency-specific guidance."
      },
      {
        question: "Why does September 30 come up so often?",
        answer: "Because it is the annual federal fiscal-year cutoff, which makes it a recurring pressure point for appropriations fights."
      },
      {
        question: "What should I watch besides the clock?",
        answer: "Pay attention to temporary funding talks, agency contingency plans, and the specific services you rely on most."
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
      title: "Need the full current status?",
      text: "After the date, the next question is usually whether a shutdown is active and which services are most exposed right now.",
      ctaLabel: "Open the current watch guide",
      ctaHref: "/government-shutdown-2026/"
    }
  }
];

export const articleMap = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleMap.get(slug);
}
