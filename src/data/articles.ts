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
    category: "Latest status",
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
      "what-happens-during-a-government-shutdown",
      "government-shutdown-countdown",
      "who-gets-paid-during-a-government-shutdown"
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
    category: "How it happens",
    title: "How does a U.S. government shutdown happen?",
    description:
      "A plain-language explanation of the mechanism behind a U.S. government shutdown: funding deadlines, appropriations lapses, and why some services keep running.",
    updated: "Updated March 13, 2026",
    kicker: "A shutdown happens when funding runs out, not because the government literally disappears overnight.",
    takeaways: [
      "A shutdown starts when Congress misses a funding deadline and affected agencies no longer have appropriations authority.",
      "The key mechanism is a lapse in funding, often after annual spending bills or a temporary funding bill expires.",
      "Not everything stops. Some services continue because they are legally excepted, funded another way, or tied to safety and core operations."
    ],
    sections: [
      {
        title: "The mechanism in simple terms",
        paragraphs: [
          "The basic mechanism is simple: Congress has to pass funding, and the president has to sign it before existing funding runs out. If that does not happen in time, affected agencies lose the legal basis to keep operating normally.",
          "That is why shutdown risk is really a deadline problem. The political fight may look complicated, but the trigger is usually the same: lawmakers miss a funding date."
        ]
      },
      {
        title: "Why October 1 and temporary funding bills matter",
        paragraphs: [
          "The federal fiscal year starts on October 1. If Congress has not passed the regular appropriations bills by then, it often relies on a temporary funding bill, commonly called a continuing resolution or CR.",
          "Shutdown risk rises when regular funding is unfinished and the temporary funding bill is about to expire. That is often the moment people suddenly see shutdown headlines everywhere."
        ]
      },
      {
        title: "Why some services continue",
        paragraphs: [
          "The word shutdown sounds absolute, but the real effect is uneven. Some employees keep working because their roles are tied to safety, national security, benefit delivery, or other protected functions.",
          "A better way to think about it is this: some services continue, some slow down, and some public-facing work pauses until funding returns."
        ],
        bullets: [
          "National security and public safety roles often continue.",
          "Benefit payments may continue while customer support slows down.",
          "Applications and case processing may become less predictable."
        ]
      },
      {
        title: "Why this keeps happening",
        paragraphs: [
          "The United States does not shut down because the whole system forgets how to function. It happens because federal funding depends on repeated deadlines, and political fights over spending can easily spill past those deadlines.",
          "So the recurring pattern is not mysterious: a hard calendar date arrives, Congress and the White House disagree, and agencies start preparing for a lapse."
        ]
      }
    ],
    faqs: [
      {
        question: "Is a shutdown the same thing as a debt ceiling crisis?",
        answer: "No. A shutdown is about Congress failing to pass funding in time. The debt ceiling is a different issue about how much the Treasury can borrow."
      },
      {
        question: "Why doesn't everything stop at once?",
        answer: "Because some activities are legally excepted, some are funded differently, and some continue for safety or essential operations even during a lapse."
      },
      {
        question: "Why does this issue keep coming back?",
        answer: "Because the federal funding system creates recurring deadlines, and political fights over spending can reopen shutdown risk every time those deadlines approach."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "what-is-a-funding-gap",
      "why-does-september-30-matter",
      "why-does-the-government-shut-down",
      "what-is-a-continuing-resolution",
      "government-shutdown-vs-debt-ceiling"
    ],
    actionBox: {
      title: "Want the next deadline after you understand the mechanism?",
      text: "The countdown page keeps the next federal funding cutoff in one place, so you can watch the date that could turn this mechanism into a real shutdown.",
      ctaLabel: "Open the countdown page",
      ctaHref: "/government-shutdown-countdown/"
    }
  },
  {
    slug: "why-does-the-government-shut-down",
    category: "Why it keeps happening",
    title: "Why does the U.S. government keep shutting down?",
    description:
      "A plain-language explanation of why shutdown threats keep returning: repeated deadlines, unresolved spending fights, and the politics of governing at the brink.",
    updated: "Updated March 13, 2026",
    kicker: "Shutdowns keep coming back because the funding system runs on hard deadlines and political fights often last longer than the clock.",
    takeaways: [
      "Shutdown risk returns because Congress has to revisit federal funding again and again rather than solve it permanently once.",
      "The most dangerous moments usually come when lawmakers leave major spending disputes unresolved until the last days before a deadline.",
      "A temporary deal can reopen government, but it often just moves the same argument to the next date on the calendar."
    ],
    sections: [
      {
        title: "The system is built around repeated deadlines",
        paragraphs: [
          "The federal government does not get one permanent spending law and move on forever. Congress has to keep passing appropriations or temporary funding to keep agencies operating.",
          "That means shutdown risk is not a rare glitch in an otherwise deadline-free system. The system itself creates recurring pressure points."
        ]
      },
      {
        title: "Why lawmakers so often wait until the brink",
        paragraphs: [
          "Spending fights usually involve larger arguments about policy, priorities, and leverage. As long as the existing funding deadline has not arrived, leaders often keep bargaining and try to extract concessions late.",
          "That is why shutdown headlines tend to spike in the final stretch. The real dispute may have been building for weeks or months before the public feels the time pressure."
        ]
      },
      {
        title: "Why the same drama can return after a deal",
        paragraphs: [
          "A reopening deal does not always settle the deeper disagreement. Sometimes Congress passes a short-term continuing resolution, which keeps government open for a while but sets up another deadline soon after.",
          "So the pattern many people notice is real: a deal arrives at the last minute, the crisis fades, and then the same questions come back when the temporary funding runs out."
        ],
        bullets: [
          "Annual appropriations deadlines keep returning.",
          "Short-term funding can delay a shutdown without resolving the core dispute.",
          "Political leverage is often strongest close to the deadline."
        ]
      }
    ],
    faqs: [
      {
        question: "Why does September 30 matter so much?",
        answer: "Because the federal fiscal year ends then, so it is a recurring cutoff for annual appropriations."
      },
      {
        question: "Does a reopening deal mean the problem is solved?",
        answer: "Not always. If the deal is temporary, shutdown risk can return when that temporary funding expires."
      },
      {
        question: "Is this mainly about bad planning or political conflict?",
        answer: "Political conflict is usually the bigger reason. The hard deadline is known in advance, but the fight over spending terms often lasts until the brink."
      }
    ],
    citations: [
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" },
      { label: "U.S. Senate: Appropriations Process", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" }
    ],
    related: [
      "what-is-a-government-shutdown",
      "why-does-september-30-matter",
      "what-is-a-continuing-resolution",
      "government-shutdown-countdown",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Want to see the temporary fix that often delays a shutdown?",
      text: "The continuing resolution guide explains why Congress uses short-term funding so often and why the risk can return when that patch expires.",
      ctaLabel: "Open the CR guide",
      ctaHref: "/what-is-a-continuing-resolution/"
    }
  },
  {
    slug: "what-happens-during-a-government-shutdown",
    category: "What changes",
    title: "What happens during a government shutdown?",
    description:
      "A plain-language guide to what usually changes during a shutdown, including agency operations, employee status, benefits, travel services, and public-facing delays.",
    updated: "Updated March 13, 2026",
    kicker: "A shutdown rarely means everything stops. It usually means some services continue, some slow down, and some pause.",
    takeaways: [
      "The effects are uneven: some functions continue, some public-facing services slow down, and some activities pause until funding returns.",
      "Federal workers may be told to keep working or may be furloughed depending on how their roles are classified.",
      "For the public, the biggest changes often show up as delays, weaker customer support, and less predictable processing times."
    ],
    sections: [
      {
        title: "What usually changes first",
        paragraphs: [
          "The first visible changes are often about staffing and response time. Phone support, application review, case processing, and in-person services may become slower or less available.",
          "That is why people often notice confusion before they notice a total stop. The public experience can become uneven long before every headline catches up."
        ]
      },
      {
        title: "What often keeps running",
        paragraphs: [
          "Some functions continue because they are tied to safety, national security, benefit delivery, or other activities the government treats differently during a lapse.",
          "That does not mean people feel no effect. A service can remain technically open while still running with less staff, weaker support, or longer waits."
        ],
        bullets: [
          "Safety and national security roles often continue.",
          "Benefit payments may continue while help lines and casework slow down.",
          "Travel operations may keep moving, but staffing pressure can still affect the experience."
        ]
      },
      {
        title: "Why your experience depends on the agency",
        paragraphs: [
          "There is no single universal shutdown experience. Each agency prepares a contingency plan, and those plans determine who works, what pauses, and how public service is handled.",
          "That is why the most useful next step is usually to check the guide for the specific service you rely on, whether that is passports, TSA, Social Security, VA, parks, or tax refunds."
        ]
      }
    ],
    faqs: [
      {
        question: "Does everything close during a shutdown?",
        answer: "No. Some activities continue, some slow down, and some stop, depending on the legal status of the work and the agency plan."
      },
      {
        question: "Do benefit checks always stop?",
        answer: "Not necessarily. Some payments may continue even when customer service and administrative support become harder to access."
      },
      {
        question: "Why do some websites, lines, or offices seem normal while others do not?",
        answer: "Because each agency handles lapses through its own contingency plan, and some functions depend more heavily on on-site staff or manual processing than others."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "government-shutdown-2026",
      "government-shutdown-essential-workers",
      "government-shutdown-contractors",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-social-security",
      "government-shutdown-passports"
    ],
    actionBox: {
      title: "Need to know whether this is already happening right now?",
      text: "The current-status page is the fastest way to check whether the latest deadline has already turned into an active shutdown or a service disruption.",
      ctaLabel: "Open the current-status page",
      ctaHref: "/government-shutdown-2026/"
    }
  },
  {
    slug: "government-shutdown-vs-debt-ceiling",
    category: "Compare",
    title: "Government shutdown vs. debt ceiling: what is the difference?",
    description:
      "A simple comparison of a government shutdown and a debt ceiling crisis, including what triggers each one, what each one affects, and why people often mix them up.",
    updated: "Updated March 13, 2026",
    kicker: "They both involve Congress and deadlines, but they are different problems with different triggers.",
    takeaways: [
      "A shutdown happens when Congress fails to pass funding in time for affected agencies.",
      "A debt ceiling crisis is about Treasury's ability to keep borrowing to pay obligations the government already has.",
      "One problem does not automatically solve the other, even if both show up in the same political season."
    ],
    sections: [
      {
        title: "A shutdown is about new funding authority",
        paragraphs: [
          "A shutdown starts when appropriations lapse. In plain language, Congress did not pass the funding authority needed for affected agencies to keep operating normally.",
          "That is why shutdown coverage focuses on agency operations, furloughs, and service disruptions."
        ]
      },
      {
        title: "The debt ceiling is about paying existing obligations",
        paragraphs: [
          "The debt ceiling is different. Treasury describes it as the total amount the United States is authorized to borrow to meet existing legal obligations.",
          "So the debt ceiling is not about approving a new agency budget for the year. It is about whether the government can keep financing commitments that already exist."
        ]
      },
      {
        title: "Why people confuse the two",
        paragraphs: [
          "Both stories involve Congress, deadlines, and the possibility of serious disruption. Both also create last-minute political drama, which makes the headlines sound similar.",
          "But the fix for one is not automatically the fix for the other. Passing a funding bill can help avoid a shutdown, while debt ceiling action addresses borrowing capacity."
        ],
        bullets: [
          "Shutdown: appropriations problem.",
          "Debt ceiling: borrowing authority problem.",
          "Either one can dominate the political calendar, but they are not interchangeable."
        ]
      }
    ],
    faqs: [
      {
        question: "Can the government face both problems around the same time?",
        answer: "Yes. They are separate issues, so political fights over each one can overlap even though the trigger is different."
      },
      {
        question: "Does raising the debt ceiling keep the government open?",
        answer: "No. Debt ceiling action does not replace the need for appropriations or temporary funding."
      },
      {
        question: "Does a funding deal automatically solve the debt ceiling?",
        answer: "No. A funding bill and a debt ceiling measure address different legal and fiscal questions."
      }
    ],
    citations: [
      { label: "U.S. Treasury: Debt Limit", href: "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/debt-limit" },
      { label: "CRS: Debt Limit Suspensions", href: "https://www.congress.gov/crs-product/IN11829" }
    ],
    related: [
      "what-is-a-government-shutdown",
      "why-does-the-government-shut-down",
      "what-is-a-funding-gap",
      "government-shutdown-countdown",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Need the shutdown mechanism first?",
      text: "If you want the plain-language version of how a shutdown itself starts, the main explainer walks through the funding deadline and lapse process step by step.",
      ctaLabel: "Open the shutdown explainer",
      ctaHref: "/what-is-a-government-shutdown/"
    }
  },
  {
    slug: "what-is-a-continuing-resolution",
    category: "Funding terms",
    title: "What is a continuing resolution, and how does it stop a shutdown?",
    description:
      "A plain-language explainer on continuing resolutions, or CRs, including what they do, why Congress uses them, and why shutdown risk returns when a CR is about to expire.",
    updated: "Updated March 13, 2026",
    kicker: "A continuing resolution is the temporary funding patch Congress uses when full-year spending bills are not ready yet.",
    takeaways: [
      "A continuing resolution keeps agencies funded temporarily when regular appropriations are not finished.",
      "CRs can prevent or end a shutdown, but they often just move the next funding fight to a new deadline.",
      "That is why shutdown coverage gets louder again when a CR nears expiration."
    ],
    sections: [
      {
        title: "What a continuing resolution actually does",
        paragraphs: [
          "A continuing resolution, usually shortened to CR, provides temporary funding when Congress has not enacted the regular appropriations bills on time.",
          "In practical terms, it buys time. Agencies can keep operating for the period covered by the CR instead of shutting down immediately."
        ]
      },
      {
        title: "Why Congress uses CRs so often",
        paragraphs: [
          "Congress uses CRs because full-year spending negotiations are often unfinished when the fiscal year starts or when an earlier temporary measure is about to expire.",
          "A CR is the quickest way to avoid an immediate lapse while lawmakers keep negotiating the bigger package."
        ]
      },
      {
        title: "Why a CR can stop a shutdown without ending the larger fight",
        paragraphs: [
          "A CR solves the short-term clock problem, not necessarily the underlying political disagreement. If lawmakers still disagree when the CR expires, shutdown risk comes back.",
          "That is why people who follow shutdown news should always ask two questions: is there a CR in place now, and when does it expire?"
        ],
        bullets: [
          "A CR is temporary by design.",
          "It can keep government open even when major budget disputes remain unresolved.",
          "When the CR expires, the pressure returns."
        ]
      }
    ],
    faqs: [
      {
        question: "Is a CR the same as a full budget deal?",
        answer: "No. A CR is temporary funding, not the same thing as finishing the regular appropriations process."
      },
      {
        question: "Can a CR end a shutdown that already started?",
        answer: "Yes. If Congress passes and the president signs a CR after a lapse begins, it can reopen affected agencies for the period the CR covers."
      },
      {
        question: "Why do shutdown headlines come back after a CR?",
        answer: "Because a CR sets a new expiration date. If lawmakers still have not agreed on longer-term funding by then, the risk returns."
      }
    ],
    citations: [
      { label: "CRS: Overview of Continuing Appropriations for FY2026", href: "https://www.congress.gov/crs-product/R48765" },
      { label: "U.S. Senate: Appropriations Process", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" }
    ],
    related: [
      "what-is-a-government-shutdown",
      "why-does-the-government-shut-down",
      "why-does-september-30-matter",
      "government-shutdown-countdown",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Want to watch the next date after you understand CRs?",
      text: "The countdown page keeps the next federal funding deadline visible, which is the date to watch once you know how temporary funding works.",
      ctaLabel: "Open the countdown page",
      ctaHref: "/government-shutdown-countdown/"
    }
  },
  {
    slug: "government-shutdown-contractors",
    category: "Contractors",
    title: "Government shutdown contractors: what federal contractors should expect",
    description:
      "A practical guide for federal contractors on stop-work risk, invoice delays, contract-specific uncertainty, and why contractors are not treated the same way as federal employees.",
    updated: "Updated March 13, 2026",
    kicker: "Federal contractors usually need contract guidance, not federal employee guidance.",
    takeaways: [
      "Contractors are usually affected through contract terms, employer instructions, and agency contracting decisions rather than the federal employee pay system.",
      "A shutdown can bring stop-work orders, delayed option decisions, slower invoice processing, or mixed guidance across contracts.",
      "The most useful first step is to check your employer, your contracting officer guidance, and whether your specific contract has active funding."
    ],
    sections: [
      {
        title: "Why contractors are treated differently from federal employees",
        paragraphs: [
          "Contractors and federal employees are not in the same legal bucket. Federal employee shutdown rules focus on employee status, while contractors are usually governed by contract funding, employer direction, and agency contracting decisions.",
          "That is why contractor questions should start with the contract and the employer, not with assumptions drawn from federal civilian worker headlines."
        ]
      },
      {
        title: "What can change during a shutdown",
        paragraphs: [
          "A shutdown can affect whether work continues, whether invoices move quickly, whether new work is authorized, and whether contract options or modifications are delayed.",
          "The effect is rarely uniform. One contract may keep moving while another pauses, depending on funding, the agency, and the work involved."
        ],
        bullets: [
          "Ask whether the contract is currently funded.",
          "Check whether any stop-work or pause notice has been issued.",
          "Treat invoicing, modifications, and option timing as separate questions."
        ]
      },
      {
        title: "What contractors should check first",
        paragraphs: [
          "The fastest way to reduce confusion is to confirm who is giving instructions, what the contract currently says, and whether the work supports functions that continue during a lapse.",
          "If you need a household answer, separate three issues: whether work continues, whether your employer pays during any interruption, and whether delayed invoicing could ripple into pay timing."
        ]
      }
    ],
    faqs: [
      {
        question: "Are contractors guaranteed back pay like federal employees?",
        answer: "No. Contractor pay is usually tied to contract terms and employer decisions rather than the federal employee back-pay framework."
      },
      {
        question: "Can some contractors keep working during a shutdown?",
        answer: "Yes. It depends on the contract, the agency, the funding source, and whether the work is still authorized."
      },
      {
        question: "What should contractors check before assuming work will stop?",
        answer: "Check employer guidance, the contracting officer's direction, and whether the contract has active funding and a stop-work notice."
      }
    ],
    citations: [
      { label: "CRS Legal Sidebar: Effects of a Government Shutdown on Federal Contracts and Contracting", href: "https://www.congress.gov/crs_external_products/LSB/HTML/LSB10243.web.html" },
      { label: "OPM FAQ: Can federal contractors telework?", href: "https://www.opm.gov/frequently-asked-questions/telework-faq/employee/can-federal-contractors-telework/" }
    ],
    related: [
      "government-shutdown-essential-workers",
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-federal-workers",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Need the federal employee version too?",
      text: "If you are comparing your situation with a federal employee in the same office, the pay guide explains why the rules often diverge so sharply.",
      ctaLabel: "Open the pay guide",
      ctaHref: "/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "what-is-a-funding-gap",
    category: "Funding terms",
    title: "What is a funding gap in the U.S. government?",
    description:
      "A plain-language explainer on what a funding gap means, how it relates to a shutdown, and why the term shows up in congressional and budget coverage.",
    updated: "Updated March 13, 2026",
    kicker: "A funding gap is the period after old funding expires and before new funding becomes law.",
    takeaways: [
      "A funding gap begins when appropriations authority runs out before replacement funding is enacted.",
      "Some funding gaps are brief, but they are the legal and practical basis for a shutdown risk or an active lapse.",
      "The term matters because budget experts and official reports often describe shutdown episodes as funding gaps or lapses in appropriations."
    ],
    sections: [
      {
        title: "The plain-language definition",
        paragraphs: [
          "A funding gap is the stretch of time between old funding expiring and new funding taking effect. In official budget language, this is often described as a lapse in appropriations.",
          "That is why the phrase comes up in GAO and CRS material even when news headlines prefer the word shutdown."
        ]
      },
      {
        title: "How a funding gap becomes a shutdown story",
        paragraphs: [
          "Once a funding gap starts, agencies have to follow the legal rules that apply when appropriations lapse. That is the moment shutdown planning, contingency guidance, and service questions become real.",
          "Some gaps are short and end quickly. Others last long enough for the public to feel the disruption much more directly."
        ]
      },
      {
        title: "Why the term matters in coverage",
        paragraphs: [
          "If you understand funding gap, you can read official material more clearly. You will see that some reports focus on the legal lapse itself, while public coverage focuses on what that lapse feels like in daily life.",
          "Both describe the same core problem from different angles: funding expired before lawmakers replaced it."
        ]
      }
    ],
    faqs: [
      {
        question: "Is a funding gap the same as a shutdown?",
        answer: "They are closely connected, but funding gap is the more technical term for the lapse in funding authority that can trigger shutdown effects."
      },
      {
        question: "Can a funding gap be very short?",
        answer: "Yes. Some gaps are resolved quickly, which can limit public-facing disruption even though the lapse technically occurred."
      },
      {
        question: "Why do official reports use this term so often?",
        answer: "Because it describes the legal appropriations problem directly, while shutdown is the more public-facing description of what follows."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "what-is-a-government-shutdown",
      "what-is-a-continuing-resolution",
      "government-shutdown-countdown",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Want the non-technical version of what people feel during a lapse?",
      text: "The main shutdown explainer translates the funding-gap language into the questions most readers actually ask about work, benefits, and services.",
      ctaLabel: "Open the shutdown explainer",
      ctaHref: "/what-is-a-government-shutdown/"
    }
  },
  {
    slug: "why-does-september-30-matter",
    category: "Deadlines",
    title: "Why does September 30 matter in a U.S. government shutdown?",
    description:
      "A plain-language explanation of why September 30 appears so often in shutdown coverage, how it connects to the federal fiscal year, and why October 1 headlines follow.",
    updated: "Updated March 13, 2026",
    kicker: "September 30 matters because it is the last day of the federal fiscal year.",
    takeaways: [
      "September 30 is the recurring fiscal-year cutoff that often turns funding fights into immediate shutdown risk.",
      "If Congress has not passed appropriations or a temporary funding measure by then, October 1 becomes the moment people watch most closely.",
      "Even when government stays open, September 30 still matters because it often forces lawmakers into a short-term deal or another deadline."
    ],
    sections: [
      {
        title: "It is the fiscal-year cutoff",
        paragraphs: [
          "The federal fiscal year ends on September 30, and a new one begins on October 1. That makes September 30 the natural point where unfinished funding fights stop feeling abstract and start carrying operational risk.",
          "If lawmakers have not finished the appropriations process by then, they usually need a continuing resolution or another stopgap to avoid a lapse."
        ]
      },
      {
        title: "Why October 1 headlines show up next",
        paragraphs: [
          "September 30 is the last day of the old funding period. If there is no replacement funding in time, the consequences show up as October 1 begins.",
          "That is why the news often talks about a September 30 deadline and an October 1 shutdown threat in the same breath."
        ]
      },
      {
        title: "Why this date matters even when there is no shutdown",
        paragraphs: [
          "The government can stay open after September 30 if Congress passes a temporary funding bill. But that does not make the date unimportant. It means the deadline forced lawmakers into a patch that creates another date to watch later.",
          "So September 30 remains one of the most useful dates for readers to remember, even in years when the immediate crisis is delayed."
        ]
      }
    ],
    faqs: [
      {
        question: "Does every shutdown start on September 30?",
        answer: "No. The risk often peaks there because of the fiscal-year cutoff, but temporary funding measures can move the next crisis point to a later date."
      },
      {
        question: "Why does October 1 come up so often too?",
        answer: "Because October 1 is the first day after the September 30 fiscal-year deadline passes."
      },
      {
        question: "If Congress passes a CR, does September 30 still matter?",
        answer: "Yes. It still mattered because it forced a funding decision and set the timing for the next deadline."
      }
    ],
    citations: [
      { label: "U.S. Senate: Appropriations Process", href: "https://www.senate.gov/reference/reference_index_subjects/Appropriations_vrd.htm" },
      { label: "CRS: Shutdown of the Federal Government", href: "https://www.congress.gov/crs_external_products/RS/HTML/RS20348.web.html" }
    ],
    related: [
      "government-shutdown-countdown",
      "what-is-a-continuing-resolution",
      "why-does-the-government-shut-down",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Want the actual date tracker after you understand why it matters?",
      text: "The countdown page keeps the next federal funding deadline visible so you can connect the civics explanation to the next live calendar risk.",
      ctaLabel: "Open the countdown page",
      ctaHref: "/government-shutdown-countdown/"
    }
  },
  {
    slug: "government-shutdown-essential-workers",
    category: "Workers",
    title: "Government shutdown essential workers: who keeps working?",
    description:
      "A plain-language guide to the workers often called essential during a shutdown, why the official terms can differ, and what continued work does and does not guarantee about pay.",
    updated: "Updated March 13, 2026",
    kicker: "The media may say essential workers, but the official categories can be more specific than that.",
    takeaways: [
      "The workers people call essential are usually the ones agencies direct to keep working because of safety, security, or core operational duties.",
      "Official shutdown guidance may use terms such as excepted or emergency functions instead of the media shorthand essential.",
      "Being told to work does not automatically guarantee a normal paycheck timeline during a lapse."
    ],
    sections: [
      {
        title: "Why the word essential is only part of the story",
        paragraphs: [
          "Essential is the phrase many people search, but official shutdown plans often use more formal categories. The underlying idea is still familiar: some roles keep working because the government treats them as necessary to continue.",
          "That is why the most useful answer is not a vocabulary fight. It is understanding whether your role is being directed to report and how your agency explains that decision."
        ]
      },
      {
        title: "Who may still report to work",
        paragraphs: [
          "Workers tied to national security, public safety, operations that cannot pause, or other protected functions may be told to continue reporting during a lapse.",
          "But continued work and continued pay timing are not the same promise, which is why households still need to watch payroll updates closely."
        ],
        bullets: [
          "Check whether your agency has classified your role to continue working.",
          "Separate work status from paycheck timing.",
          "Use agency contingency plans and OPM guidance instead of headlines alone."
        ]
      },
      {
        title: "What workers should confirm immediately",
        paragraphs: [
          "Start with reporting instructions, timekeeping rules, and payroll expectations. Those three answers usually matter more in the first 24 hours than any political recap.",
          "If your household budget is tight, treat even a short delay as something to plan around, not something to assume away."
        ]
      }
    ],
    faqs: [
      {
        question: "Is essential the official term every agency uses?",
        answer: "Not always. Agencies may use more formal shutdown categories even though the public often says essential workers."
      },
      {
        question: "If I am essential, do I definitely get paid on time?",
        answer: "No. A worker may be required to report and still face delayed pay if funding has lapsed."
      },
      {
        question: "What should essential workers check first?",
        answer: "Check agency reporting instructions, contingency-plan language, and payroll guidance in that order."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "OPM: Furlough Guidance", href: "https://www.opm.gov/policy-data-oversight/pay-leave/furlough-guidance/" }
    ],
    related: [
      "who-gets-paid-during-a-government-shutdown",
      "government-shutdown-federal-workers",
      "government-shutdown-contractors",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Need the paycheck version of this question?",
      text: "The pay guide goes one step further and explains how continued work, furlough status, and delayed pay can diverge during a shutdown.",
      ctaLabel: "Open the pay guide",
      ctaHref: "/who-gets-paid-during-a-government-shutdown/"
    }
  },
  {
    slug: "government-shutdown-irs",
    category: "Taxes",
    title: "Government shutdown and the IRS: what taxpayers should expect",
    description:
      "A plain-language IRS explainer covering tax filing, refunds, customer support, and why the answer can depend on the timing and scope of the funding lapse.",
    updated: "Updated March 13, 2026",
    kicker: "For most taxpayers, the real question is not just whether the IRS is open, but which IRS functions are still moving.",
    takeaways: [
      "Taxpayers should separate filing, refunds, automated tools, phone support, and complex casework instead of asking one all-purpose IRS question.",
      "The answer can change depending on the time of year and the specific lapse, so the latest IRS operations page matters more than broad commentary.",
      "Refunds and filing may continue more normally than live support or manually reviewed cases."
    ],
    sections: [
      {
        title: "Why the IRS answer can feel uneven",
        paragraphs: [
          "IRS operations are not a single on-off switch. Electronic filing, refund tracking, and certain automated functions may behave differently from phone assistance, in-person support, or case-specific reviews.",
          "That is why the most honest answer is often split into smaller parts: can you file, can you track a refund, and can you reach a person if something unusual happens."
        ]
      },
      {
        title: "What taxpayers should check first",
        paragraphs: [
          "Start with the IRS page describing current operations under the funding situation, then check the filing and refund tools you actually need. Those sources tell you much more than a generic shutdown headline.",
          "If you are waiting on a special case, amended return, or human review, assume those are the areas most likely to feel staffing pressure first."
        ],
        bullets: [
          "Check the current IRS operations notice.",
          "Use official filing and refund tools before relying on rumors.",
          "Expect live support and complex casework to be less predictable."
        ]
      },
      {
        title: "Why tax season timing matters",
        paragraphs: [
          "The IRS can look very different during a busy filing season than during a quieter period. The workload, staffing need, and public dependence on refunds all shape how people experience a lapse.",
          "So even if you read older shutdown coverage, always pair it with the latest IRS operations page for the current year."
        ]
      }
    ],
    faqs: [
      {
        question: "Can taxpayers still file returns during a shutdown?",
        answer: "Often yes, especially through electronic systems, but the best answer comes from the latest IRS operations notice for the current lapse."
      },
      {
        question: "Will refunds always keep moving normally?",
        answer: "Not automatically. Refund timing can depend on the filing season setup and which IRS functions are still operating smoothly."
      },
      {
        question: "What part of the IRS is most likely to feel strain first?",
        answer: "Live support, phone assistance, in-person help, and manually handled cases are often the most vulnerable to staffing pressure."
      }
    ],
    citations: [
      { label: "IRS: Operations Under the 2026 Lapse in Appropriations", href: "https://www.irs.gov/newsroom/irs-continues-normal-activities-under-the-2026-lapse-in-appropriations" },
      { label: "IRS Refunds", href: "https://www.irs.gov/refunds" }
    ],
    related: [
      "government-shutdown-tax-refunds",
      "government-shutdown-2026",
      "what-happens-during-a-government-shutdown",
      "what-is-a-government-shutdown"
    ],
    actionBox: {
      title: "Need the shorter refund-first version?",
      text: "The tax refund guide is the fastest route if your immediate concern is whether filing continues and how refund timing may change.",
      ctaLabel: "Open the refund guide",
      ctaHref: "/government-shutdown-tax-refunds/"
    }
  },
  {
    slug: "government-shutdown-medicare-medicaid-social-security",
    category: "Benefits",
    title: "Government shutdown and Medicare, Medicaid, Social Security: what is different?",
    description:
      "A plain-language comparison of Medicare, Medicaid, and Social Security during a shutdown, focusing on why these programs are not interchangeable and where people are most likely to feel differences.",
    updated: "Updated March 13, 2026",
    kicker: "These programs are often grouped together in searches, but they work differently and can feel different during a shutdown.",
    takeaways: [
      "Social Security is a cash-benefit system, while Medicare and Medicaid are health-coverage programs with different structures and service channels.",
      "A shutdown question about these programs is often really a question about payments, claims, enrollment, support, or state administration, not one single issue.",
      "Many people feel the difference first through customer service, claims processing, or local administration rather than through an immediate stop in core benefits."
    ],
    sections: [
      {
        title: "Why these three programs should not be treated as one thing",
        paragraphs: [
          "People often search these names together because they all sound like federal benefits. But they are not the same type of program. Social Security centers on cash benefits, Medicare centers on federal health coverage, and Medicaid involves joint federal-state administration.",
          "That means a shutdown can create different kinds of pressure depending on whether you are asking about a monthly payment, a health claim, an enrollment issue, or a local support office."
        ]
      },
      {
        title: "Where the public often feels the difference",
        paragraphs: [
          "For Social Security, people usually care first about monthly benefit continuity and then about claims or service delays. For Medicare and Medicaid, the questions are more likely to center on coverage use, provider billing, eligibility support, or administrative follow-up.",
          "So the practical experience can differ even if the headline treats all three as part of the same shutdown story."
        ],
        bullets: [
          "Social Security questions often start with monthly checks and claim processing.",
          "Medicare questions often center on coverage use and claims handling.",
          "Medicaid questions can vary more by state administration and local support."
        ]
      },
      {
        title: "What to check first if one of these affects you",
        paragraphs: [
          "Start by identifying which program you actually mean and what action you need right now. A person waiting on a Social Security claim needs a different answer from a Medicare beneficiary using care or a Medicaid enrollee dealing with state paperwork.",
          "Then go straight to the official program source instead of relying on a generic shutdown roundup."
        ]
      }
    ],
    faqs: [
      {
        question: "Are Social Security, Medicare, and Medicaid handled the same way during a shutdown?",
        answer: "No. They have different funding structures, administrative systems, and public touchpoints, so people may feel disruption differently."
      },
      {
        question: "Does a shutdown automatically stop Medicare or Medicaid coverage?",
        answer: "Not as a simple blanket rule. The more useful question is whether your issue is about care access, claims, enrollment, or support channels."
      },
      {
        question: "Why can Medicaid feel different from Social Security?",
        answer: "Because Medicaid involves state administration and health coverage operations, while Social Security is primarily a federal cash-benefit and claims system."
      }
    ],
    citations: [
      { label: "GAO: Lapses in Appropriations", href: "https://www.gao.gov/legal/appropriations-law/lapses-in-appropriations" },
      { label: "SSA: About Social Security", href: "https://www.ssa.gov/about-ssa" },
      { label: "Medicare Basics", href: "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/how-does-medicare-work" },
      { label: "Medicaid.gov", href: "https://www.medicaid.gov/index.html" }
    ],
    related: [
      "government-shutdown-social-security",
      "government-shutdown-va-benefits",
      "what-happens-during-a-government-shutdown",
      "government-shutdown-2026"
    ],
    actionBox: {
      title: "Need the Social Security-specific answer first?",
      text: "If your question is really only about checks, claims, or SSA support, the Social Security page is the quickest path.",
      ctaLabel: "Open the Social Security guide",
      ctaHref: "/government-shutdown-social-security/"
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
      "government-shutdown-essential-workers",
      "government-shutdown-contractors",
      "government-shutdown-federal-workers",
      "government-shutdown-military-pay"
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
      "government-shutdown-irs",
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
      "government-shutdown-medicare-medicaid-social-security",
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
      "government-shutdown-essential-workers",
      "government-shutdown-contractors",
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
      "what-is-a-continuing-resolution",
      "why-does-september-30-matter",
      "government-shutdown-federal-workers"
    ],
    actionBox: {
      title: "Need the full current status?",
      text: "After the date, the next question is usually whether a shutdown is active and which services are most exposed right now.",
      ctaLabel: "See the latest status",
      ctaHref: "/government-shutdown-2026/"
    }
  }
];

export const articleMap = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleMap.get(slug);
}
