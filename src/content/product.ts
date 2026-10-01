export const PLAN_IDS = ["free", "solo", "growth", "agency"] as const;
export type PlanId = (typeof PLAN_IDS)[number];

const RANK: Record<PlanId, number> = { free: 0, solo: 1, growth: 2, agency: 3 };

export function planIncludes(from: PlanId, plan: PlanId) {
  return RANK[plan] >= RANK[from];
}

export const PLANS: Array<{
  id: PlanId;
  name: string;
  price: string;
  amount: number;
  cadence: string;
  badge: string | null;
  audience: string;
  summary: string;
  highlights: string[];
}> = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    amount: 0,
    cadence: "forever",
    badge: "Free forever",
    audience: "A first pipeline, not a phone team.",
    summary: "One person, one workspace, enough of the desk to see if the record is worth keeping.",
    highlights: [
      "Shared email inbox and message templates",
      "Dashboard, contacts, one pipeline, one automation",
      "CSV import and two-factor sign-in",
      "Usage wallet ready for when you upgrade",
    ],
  },
  {
    id: "solo",
    name: "Solo",
    price: "$19",
    amount: 19,
    cadence: "per month",
    badge: null,
    audience: "An agent or consultant who works the phone alone.",
    summary: "The Free desk, plus SMS, calling, and a number in Australia or the United Kingdom.",
    highlights: [
      "SMS, voice calling, and phone numbers",
      "Australia and UK numbers, after Twilio’s country check",
      "Calendar, public booking, and appointments",
      "Custom fields and a public API",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$49",
    amount: 49,
    cadence: "per month",
    badge: "Most chosen",
    audience: "A small team that already lives in chat apps.",
    summary: "Five seats. WhatsApp, Facebook Messenger, and Instagram DMs in the same timeline as the deal.",
    highlights: [
      "WhatsApp on the contact timeline",
      "Facebook Messenger and Instagram DMs from the CRM",
      "Custom objects, agents, and roles",
      "Unlimited pipelines",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: "$99",
    amount: 99,
    cadence: "per month",
    badge: null,
    audience: "A brokerage or agency running more than one book.",
    summary: "Fifteen seats across three workspaces, with the limits taken off contacts and automations.",
    highlights: [
      "3 workspaces on one subscription",
      "15 agent seats",
      "Unlimited contacts, pipelines, and automations",
      "Everything in Growth",
    ],
  },
];

export const LIMITS: Array<{ label: string; hint: string; values: Record<PlanId, string> }> = [
  {
    label: "Agent seats",
    hint: "People who can sign in to the workspace.",
    values: { free: "1", solo: "1", growth: "5", agency: "15" },
  },
  {
    label: "Workspaces",
    hint: "Separate desks on the subscription.",
    values: { free: "1", solo: "1", growth: "1", agency: "3" },
  },
  {
    label: "Contacts",
    hint: "People and companies stored in the workspace.",
    values: { free: "100", solo: "2,000", growth: "10,000", agency: "Unlimited" },
  },
  {
    label: "Opportunities",
    hint: "Deals on the pipeline.",
    values: { free: "25", solo: "Unlimited", growth: "Unlimited", agency: "Unlimited" },
  },
  {
    label: "Automations",
    hint: "Workflows you can publish.",
    values: { free: "1", solo: "5", growth: "25", agency: "Unlimited" },
  },
  {
    label: "Pipelines",
    hint: "Boards with their own stages.",
    values: { free: "1", solo: "3", growth: "Unlimited", agency: "Unlimited" },
  },
];

export const MATRIX: Array<{
  group: string;
  rows: Array<{ label: string; note?: string; from: PlanId }>;
}> = [
  {
    group: "Workspace",
    rows: [
      { label: "Dashboard and pipeline snapshot", from: "free" },
      { label: "Workspace currency on deals", from: "free" },
      { label: "Command search", from: "free" },
      { label: "Trash and restore for admins", from: "free" },
      { label: "Usage wallet", note: "Prepaid balance for messages and numbers", from: "free" },
    ],
  },
  {
    group: "CRM",
    rows: [
      { label: "Contacts, tags, owners, notes, timeline", from: "free" },
      { label: "CSV import", from: "free" },
      { label: "Custom fields, including unique fields", from: "solo" },
      { label: "Documents on the contact", from: "solo" },
      { label: "Custom objects", note: "Properties, projects, or anything with its own fields", from: "growth" },
    ],
  },
  {
    group: "Pipeline",
    rows: [
      { label: "Pipelines, stages, and a kanban", from: "free" },
      { label: "Stage changes that start a workflow", from: "free" },
      { label: "Bulk moves and deal filters", from: "free" },
    ],
  },
  {
    group: "Inbox",
    rows: [
      { label: "Shared email inbox (IMAP / SMTP)", from: "free" },
      { label: "Email and SMS templates with merge fields", from: "free" },
      { label: "SMS send and receive", note: "Wallet. Australia and United Kingdom numbers.", from: "solo" },
      { label: "Voice calling", note: "Wallet. Per-minute rates shown before you call.", from: "solo" },
      { label: "Phone numbers", note: "Australia and the UK only, after Twilio’s country check.", from: "solo" },
      { label: "WhatsApp", note: "Same countries. Wallet rates shown before you send.", from: "growth" },
      { label: "Facebook Messenger and Instagram DMs", note: "Reply from the CRM on your own Page and Instagram account.", from: "growth" },
    ],
  },
  {
    group: "Scheduling",
    rows: [
      { label: "Team calendar", from: "solo" },
      { label: "Appointments that can enroll a workflow", from: "solo" },
      { label: "Public booking page", from: "solo" },
      { label: "Optional Google Calendar", from: "solo" },
    ],
  },
  {
    group: "Team and access",
    rows: [
      { label: "Two-factor sign-in", from: "free" },
      { label: "Public API for new contacts", from: "solo" },
      { label: "Agents and roles", note: "Turn features on per person.", from: "growth" },
    ],
  },
];

export const MODULES = [
  {
    index: "01",
    name: "Dashboard",
    href: "/features#dashboard",
    summary: "Pipeline value, open deals, new leads, win rate, and what the team did today.",
  },
  {
    index: "02",
    name: "Contacts",
    href: "/features#contacts",
    summary: "People and companies with tags, owners, notes, documents, and a timeline that remembers.",
  },
  {
    index: "03",
    name: "Opportunities",
    href: "/features#pipeline",
    summary: "Deals on a kanban. Value, probability, owner, close date. Drag a stage and the total moves.",
  },
  {
    index: "04",
    name: "Calendar",
    href: "/features#calendar",
    summary: "Meetings, appointments, and a booking page leads can use without an account. Solo and above.",
  },
  {
    index: "05",
    name: "Conversations",
    href: "/features#inbox",
    summary: "Email on every plan. SMS and calls on Solo. WhatsApp, Messenger, and Instagram on Growth.",
  },
  {
    index: "06",
    name: "Automations",
    href: "/features#automation",
    summary: "A trigger, conditions, and one clear action. Run history so you can see what fired.",
  },
  {
    index: "07",
    name: "Custom objects",
    href: "/features#objects",
    summary: "On Growth and Agency, when a contact is not enough: properties, projects, subscriptions.",
  },
  {
    index: "08",
    name: "Settings",
    href: "/features#team",
    summary: "Templates, team access, wallet, API keys, billing, and the currency the workspace sells in.",
  },
] as const;

export const DAY = [
  {
    time: "08:14",
    title: "A lead lands",
    body: "A form hits the API. The contact is created with source, owner, and tags. The dashboard count moves.",
  },
  {
    time: "08:14",
    title: "A workflow answers",
    body: "Because the lead was tagged Inbound, Pipecove sends the first-reply template and keeps the stage at New.",
  },
  {
    time: "11:02",
    title: "They book themselves",
    body: "The public booking link offers the hours you published. Thursday at 2:00 lands on the team calendar.",
  },
  {
    time: "14:06",
    title: "The deal moves",
    body: "Appointment becomes Proposal. Value and close date stay on the card. The pipeline total updates.",
  },
  {
    time: "16:40",
    title: "The reply stays on the record",
    body: "SMS, a call, or an Instagram DM confirms the visit. The thread sits on one timeline. Nobody hunts a second app.",
  },
] as const;

export const FEATURE_GROUPS = [
  {
    id: "dashboard",
    index: "01",
    nav: "Dashboard",
    title: "Dashboard",
    lede: "The morning view. Not a wall of charts — the numbers a sales desk actually checks.",
    points: [
      "Contacts, open deals, pipeline value, and win rate.",
      "A pipeline chart for the week, without exporting a spreadsheet.",
      "Workspace currency, so the figures match how you sell.",
      "Team activity, so an admin can see follow-up without opening every record.",
      "Command search: jump to a contact, a deal, or a page from anywhere.",
    ],
  },
  {
    id: "contacts",
    index: "02",
    nav: "Contacts",
    title: "Contacts and leads",
    lede: "A person is more than a row. The contact holds the commercial history.",
    points: [
      "Name, email, phone, country code, company, tags, and an owner.",
      "Notes and an activity timeline for assignments, messages, and stage changes.",
      "Custom fields on Solo and above — text, date, select, and number — including fields that must stay unique.",
      "CSV import that maps columns onto standard fields, owners, tags, and custom fields.",
      "Documents stored on the contact from Solo upward, and files attached to messages.",
      "Filters, bulk actions, and a drawer so you can edit without losing the list.",
      "Trash for admins, so a delete can be undone.",
      "Caps are real: 100 contacts on Free, 2,000 on Solo, 10,000 on Growth, unlimited on Agency.",
    ],
  },
  {
    id: "pipeline",
    index: "03",
    nav: "Pipeline",
    title: "Opportunities and pipelines",
    lede: "Build the stages your team already uses. Move deals. Watch the total.",
    points: [
      "Free publishes one pipeline and 25 opportunities. Solo adds two more pipelines and lifts the deal cap. Growth and Agency do not cap pipelines.",
      "Kanban for value, probability, owner, and close date.",
      "Bulk moves when a stage needs a cleanup, not a card-by-card drag.",
      "Deal filters so an agent sees their book, not the whole company.",
      "Email and phone on a deal stay hidden unless that person also has Contacts.",
      "Stage changes can enroll the deal into an automation, within the automation cap on your plan.",
    ],
  },
  {
    id: "inbox",
    index: "04",
    nav: "Inbox",
    title: "Conversations",
    lede: "Follow-up lives next to the lead. Email is on every plan. The phone and the social inboxes open as you move up.",
    points: [
      "Connect IMAP and SMTP and send from the CRM. Replies thread back onto the contact. That mailbox’s own limits apply — it is not billed from the wallet.",
      "HTML email, quoted-reply cleanup, and attachments.",
      "Templates with merge fields such as the contact’s name, for email and SMS.",
      "SMS and voice from Solo upward, sent from a workspace number and drawn from the prepaid wallet at the rate shown before you send or call.",
      "Buy, assign, and release numbers for Australia and the United Kingdom only. More countries are not for sale yet.",
      "Before a number can be purchased, the workspace submits the identity and address details Twilio requires for that country. Pipecove sends those details to Twilio. Twilio decides whether the country requirements are met.",
      "WhatsApp on Growth and Agency, on an approved Australia or United Kingdom number, on the same timeline.",
      "Facebook Messenger and Instagram direct messages on Growth and Agency. The workspace connects its own Facebook Page and Instagram professional account and replies from the CRM. Meta’s messaging rules still apply, including who you may message and when.",
      "Sign-in, billing, and support email from Pipecove is sent from a mail server we operate. It is separate from the mailbox you connect.",
    ],
  },
  {
    id: "calendar",
    index: "05",
    nav: "Calendar",
    title: "Calendar, appointments, booking",
    lede: "On Solo and above, the meeting is part of the pipeline, not a side calendar nobody updates.",
    points: [
      "Team calendar for meetings and follow-ups.",
      "Appointments that can start a workflow.",
      "A public booking page: the lead picks a slot from the hours you publish.",
      "Optional Google Calendar so events are not typed twice. If you connect it, we use that Google data only to show and update those events.",
    ],
  },
  {
    id: "automation",
    index: "06",
    nav: "Automations",
    title: "Automations",
    lede: "Small, explicit workflows. A trigger, conditions, and an action. The count is capped by the plan.",
    points: [
      "Free includes 1 workflow. Solo includes 5. Growth includes 25. Agency does not cap them.",
      "Run when a lead is created, tagged, assigned, or moved between stages.",
      "Send email or SMS, reassign the owner, or change the stage.",
      "Conditions so a workflow does not fire for every record.",
      "A run history, so you can see what the automation did.",
      "Duplicate a workflow instead of rebuilding it.",
    ],
  },
  {
    id: "objects",
    index: "07",
    nav: "Objects",
    title: "Custom objects",
    lede: "On Growth and Agency, when a contact and a deal are not the whole business.",
    points: [
      "Model properties, projects, subscriptions, or anything else with its own fields.",
      "The same field types you already use on contacts.",
      "Listed in the sidebar only for people who are allowed to see them.",
    ],
  },
  {
    id: "team",
    index: "08",
    nav: "Team",
    title: "Team, access, and API",
    lede: "Free and Solo are a single seat. Growth and Agency are where an admin starts handing out a narrower desk.",
    points: [
      "Growth: up to 5 agents in one workspace. Agency: up to 15 agents across up to 3 workspaces.",
      "Roles are admin or agent. Features turn on per agent: dashboard, contacts, opportunities, calendar, conversations, automations, custom objects, settings.",
      "Assigned leads stay with that agent.",
      "Two-factor with an authenticator app, on every plan. Five failed sign-ins lock the account.",
      "A password reset signs out other sessions.",
      "API keys from Solo upward, so a form can create a contact without a manual paste.",
      "In-app support for workspace admins.",
    ],
  },
] as const;

export const CONTROLS = [
  {
    title: "Sign-in you can lock down",
    body: "Email and password, with an authenticator code when two-factor is on. Five failed attempts lock the sign-in. A password reset signs out other sessions.",
  },
  {
    title: "Roles with a hard edge",
    body: "On Growth and Agency, workspace admins invite agents and choose which parts of the CRM each person can open. Agents do not inherit the whole desk by default. Free and Solo are a single seat.",
  },
  {
    title: "Assigned work stays assigned",
    body: "A lead given to an agent is that agent’s book. Deal lists hide email and phone unless the person also has access to Contacts.",
  },
  {
    title: "Infrastructure we actually run",
    body: "The product runs on a virtual private server we administer, with PostgreSQL as the database, and product email from a Mailcow server we operate. We do not rent the CRM from another CRM.",
  },
  {
    title: "You own the customer data",
    body: "Contacts, notes, messages, and files you enter belong to you. Pipecove hosts and processes them so the CRM can run. We do not sell personal information, and we do not use Facebook, Instagram, or Google data to advertise.",
  },
  {
    title: "Deletes are recoverable, then gone",
    body: "Admins have a trash view. After you cancel, workspace data is kept for 60 days so you can come back, then deleted or anonymized, except where the law requires a longer hold, such as billing records.",
  },
] as const;

export const BILLING_NOTES = [
  {
    title: "Free is not a trial",
    body: "The Free plan stays at $0. It does not ask for a card, and it does not convert itself into Solo. You move up only when you choose a paid plan in the app.",
  },
  {
    title: "Cancel when you want",
    body: "Paid plans are monthly. Cancellation takes effect at the end of the period you already paid for. You keep the workspace until that date. Monthly fees are not refunded mid-cycle.",
  },
  {
    title: "Wallet",
    body: "SMS, voice, WhatsApp usage, and phone-number rental spend a prepaid balance. Wallet funds are not the subscription. Unused balance stays available while the account is in good standing and does not expire on a timer.",
  },
  {
    title: "Numbers, today",
    body: "You can buy numbers for Australia and the United Kingdom only, for SMS, calling, and WhatsApp. A purchase waits on the country details Twilio requires. Other countries are not available yet.",
  },
] as const;

export const FAQS = [
  {
    q: "Where do I sign in?",
    a: "The workspace is at app.pipecove.com. This site is the overview. Sign in, create a workspace, billing, and the partner desk all open on the app.",
  },
  {
    q: "Is Free really free?",
    a: "Yes. Free is $0 and it stays that way: 1 seat, 1 workspace, 100 contacts, 25 opportunities, 1 pipeline, and 1 automation, plus email and two-factor sign-in. It does not require a card and it does not turn into a paid plan by itself.",
  },
  {
    q: "What does the subscription cover, and what does the wallet cover?",
    a: "The monthly price covers the CRM on that plan: seats, records, pipelines, automations, email in the product, and — on Growth and Agency — Facebook Messenger and Instagram DMs. SMS, voice minutes, WhatsApp usage, and number rental are prepaid from the wallet, at the rates shown in the workspace before you send, call, or buy.",
  },
  {
    q: "Which plans include SMS, calling, WhatsApp, and social DMs?",
    a: "Free is email. Solo adds SMS, voice calling, and phone numbers. Growth and Agency add WhatsApp plus Facebook Messenger and Instagram direct messages, so the team can reply from the CRM. Social channels use the Page and Instagram account you connect. They are not a second Pipecove inbox you can message the public from.",
  },
  {
    q: "Which countries can I buy a number in?",
    a: "Australia and the United Kingdom only, for SMS, calling, and WhatsApp. We will add more countries later. Until a country is listed in the app, you cannot buy a number there.",
  },
  {
    q: "Why do I have to submit details before a number is purchased?",
    a: "Twilio, which provisions the numbers, requires identity and address information for Australia and the United Kingdom before a number can be sold. You enter those details in Pipecove. We send them to Twilio for that country’s regulatory check. Twilio approves or rejects the bundle. We do not skip the check, and we do not invent a looser one.",
  },
  {
    q: "Can the limits change?",
    a: "The caps published here are the catalog: seats, workspaces, contacts, opportunities, pipelines, and automations. If checkout in the app shows a different cap or price, checkout is what bills. Downgrading means the lower cap applies and you may need to remove seats, records, or channels the lower plan does not include.",
  },
  {
    q: "Who can message my leads?",
    a: "You can. Pipecove does not prospect for you. Commercial email, SMS, calls, WhatsApp, and social messages need a lawful reason under the law that applies to that person, and they need to follow Meta’s and the carriers’ rules. The acceptable-use policy is the short version.",
  },
  {
    q: "Do you host this on someone else’s CRM?",
    a: "No. Pipecove runs on a virtual private server we administer, stores workspace data in PostgreSQL, and sends its own product email from a Mailcow server we operate. Card payments go through Stripe. SMS, voice, WhatsApp numbers, and delivery go through Twilio. Messenger and Instagram go through Meta when you connect them.",
  },
  {
    q: "What happens to data if we leave?",
    a: "You own what you put in. After cancellation we keep the workspace for 60 days so it can be reactivated, then delete or anonymize it, except where the law requires a longer hold, such as invoices. You can also email privacy@pipecove.com to ask for deletion sooner.",
  },
  {
    q: "How do partners get paid?",
    a: "A partner earns 60% of the first subscription payment from a workspace that signs up with their link, then 20% of later subscription payments from that same workspace for 12 months. Wallet top-ups, number rentals, taxes, and refunds are not commissioned. The partner terms spell out the exclusions.",
  },
] as const;

export const PARTNER_TERMS = {
  firstRate: "60%",
  laterRate: "20%",
  window: "12 months",
  examplePlan: "Growth",
  examplePrice: "$49",
  exampleFirst: "$29.40",
  exampleLater: "$9.80",
} as const;
