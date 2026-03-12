export const siteMeta = {
  name: "Government Shutdown",
  description:
    "Independent federal funding watch covering government shutdown deadlines, agency impacts, federal worker guidance, and service-specific explainers.",
  deadlineIso: "2026-09-30T23:59:59-04:00",
  deadlineLabel: "FY 2027 appropriations deadline",
  deadlineNote:
    "Congress has to fund the federal government again before the standing September 30 fiscal-year cutoff. This is the annual hard date every shutdown watcher keeps on the board.",
  statusEyebrow: "Funding Clock",
  statusTitle: "A federal shutdown search spike happens when the clock feels real.",
  statusSummary:
    "This site is built for the moment people need a straight answer: what a shutdown is, which agencies are affected, whether pay or travel will be disrupted, and what to watch next."
};

export const homepagePillars = [
  {
    title: "Event page",
    copy: "Use the annual watch page as the live brief. It should absorb breaking search demand and surface the current state in one screen.",
    href: "/government-shutdown-2026/"
  },
  {
    title: "Worker pay",
    copy: "Federal employees and contractors search with urgency. Worker pay, furlough rules, and practical next steps are core pages, not side topics.",
    href: "/government-shutdown-federal-workers/"
  },
  {
    title: "Travel impact",
    copy: "Airports, passports, TSA, and national parks translate news curiosity into concrete service questions with strong recurring demand.",
    href: "/government-shutdown-passports/"
  },
  {
    title: "Benefit checks",
    copy: "Social Security, VA benefits, Medicare, and SNAP pages capture high-volume searches from people trying to confirm whether money or services are safe.",
    href: "/government-shutdown-social-security/"
  }
];

export const quickAnswers = [
  {
    question: "Does a shutdown mean every agency closes?",
    answer: "No. Essential and excepted functions keep running, but staffing, support, and processing can still slow down."
  },
  {
    question: "Do federal workers stop getting paid?",
    answer: "Pay timing depends on role and any later back-pay legislation, but furloughs and delayed paychecks are a real risk during a lapse."
  },
  {
    question: "Are Social Security checks at risk?",
    answer: "Benefits generally continue, but customer service and some administrative processing can become slower."
  },
  {
    question: "Should travelers expect TSA or passport delays?",
    answer: "Operations usually continue in some form, but staffing strain and uneven office capacity can create real delays."
  }
];

export const featuredSlugs = [
  "government-shutdown-2026",
  "government-shutdown-countdown",
  "government-shutdown-federal-workers",
  "government-shutdown-tax-refunds",
  "government-shutdown-passports",
  "government-shutdown-social-security"
];

export const timelineEvents = [
  {
    date: "Sep 30, 2025",
    title: "FY 2026 funding lapsed",
    description: "A shutdown begins when appropriations authority runs out and Congress has not passed new funding."
  },
  {
    date: "Nov 12, 2025",
    title: "Full funding restored",
    description: "The 42-day lapse ends, but the search behavior and agency backlog questions keep spilling over afterward."
  },
  {
    date: "Feb 14, 2026",
    title: "Homeland Security dispute escalates",
    description: "A partial funding fight puts fresh pressure on travel and border-related search topics."
  },
  {
    date: "Sep 30, 2026",
    title: "Next annual hard deadline",
    description: "This is the standing date to watch for the next government-wide funding cliff."
  }
];
