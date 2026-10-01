export const PLANS = [
  {
    id: "starter",
    name: "Free Starter",
    price: "$0",
    cadence: "to start",
    trial: "Free forever",
    summary: "Solopreneurs testing the waters or lightweight users who want to see how the dashboard works.",
    fit: "A new workspace finding its first pipeline.",
    points: [
      "Agent seats: 1",
      "Workspaces: 1",
      "Contacts limit: 100",
      "Opportunities limit: 25",
      "Automations: 1",
      "Pipelines: 1",
      "Dashboard",
      "Contacts & leads",
      "CSV import",
      "Pipelines & stages",
      "Opportunities",
      "Workflow automations",
      "Message templates",
      "Shared email inbox",
      "Two-factor sign-in",
      "Usage wallet",
    ],
  },
  {
    id: "solo",
    name: "Solo Sales",
    price: "$19",
    cadence: "per month",
    trial: null,
    summary: "Independent Real Estate Agents, Freelancers, or Solo Consultants who handle their own pipeline.",
    fit: "",
    points: [
      "Agent seats: 1",
      "Workspaces: 1",
      "Contacts limit: 2000",
      "Opportunities limit: Unlimited",
      "Automations: 5",
      "Pipelines: 3",
      "Dashboard",
      "Contacts & leads",
      "CSV import",
      "Custom fields",
      "Pipelines & stages",
      "Opportunities",
      "Workflow automations",
      "Message templates",
      "Shared email inbox",
      "SMS messaging",
      "Voice calling",
      "Phone numbers",
      "Team calendar",
      "Public booking page",
      "Appointments",
      "Two-factor sign-in",
      "Public API",
      "Usage wallet",
    ],
  },
  {
    id: "growth",
    name: "Growth Team",
    price: "$49",
    cadence: "per month",
    trial: null,
    summary: "Real Estate Teams, Home Services (HVAC/Roofing), and Small Agencies running phone/SMS campaigns.",
    fit: "",
    points: [
      "Agent seats: 5",
      "Workspaces: 1",
      "Contacts limit: 10000",
      "Opportunities limit: Unlimited",
      "Automations: 25",
      "Pipelines: Unlimited",
      "Dashboard",
      "Contacts & leads",
      "CSV import",
      "Custom fields",
      "Pipelines & stages",
      "Opportunities",
      "Workflow automations",
      "Message templates",
      "Shared email inbox",
      "SMS messaging",
      "WhatsApp",
      "FB & IG Dms:,
      "Voice calling",
      "Phone numbers",
      "Team calendar",
      "Public booking page",
      "Appointments",
      "Custom objects",
      "Agents & roles",
      "Two-factor sign-in",
      "Public API",
      "Usage wallet",
    ],
  },
  {
    id: "agency",
    name: "Pro Agency",
    price: "$99",
    cadence: "per month",
    trial: null,
    summary: "Established Brokerages, Multi-project Agencies, and Power Users needing custom data structures.",
    fit: "",
    points: [
      "Agent seats: 15",
      "Workspaces: 3",
      "Contacts limit: Unlimited",
      "Opportunities limit: Unlimited",
      "Automations: Unlimited",
      "Pipelines: Unlimited",
      "Dashboard",
      "Contacts & leads",
      "CSV import",
      "Custom fields",
      "Pipelines & stages",
      "Opportunities",
      "Workflow automations",
      "Message templates",
      "Shared email inbox",
      "SMS messaging",
      "WhatsApp",
      "FB & IG Dms:,
      "Voice calling",
      "Phone numbers",
      "Team calendar",
      "Public booking page",
      "Appointments",
      "Custom objects",
      "Agents & roles",
      "Two-factor sign-in",
      "Public API",
      "Usage wallet",
    ],
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];

export const MATRIX: Array<{
  group: string;
  rows: Array<{ label: string; from: PlanId }>;
}> = [
  {
    group: "Workspace",
    rows: [
      { label: "Dashboard and pipeline snapshot", from: "starter" },
      { label: "Workspace currency on deals", from: "starter" },
      { label: "Command search", from: "starter" },
      { label: "Trash and restore for admins", from: "starter" },
      { label: "Usage wallet and auto-recharge", from: "growth" },
    ],
  },
  {
    group: "CRM",
    rows: [
      { label: "Contacts, tags, owners, notes", from: "starter" },
      { label: "Activity timeline", from: "starter" },
      { label: "CSV import with owners and custom fields", from: "starter" },
      { label: "Custom fields, including unique fields", from: "starter" },
      { label: "Documents on the contact", from: "starter" },
      { label: "Filters and bulk actions", from: "starter" },
    ],
  },
  {
    group: "Pipeline",
    rows: [
      { label: "Pipelines, stages, and a kanban", from: "starter" },
      { label: "Stage changes that start a workflow", from: "starter" },
    ],
  },
  {
    group: "Inbox",
    rows: [
      { label: "IMAP / SMTP email, threads, HTML, attachments", from: "starter" },
      { label: "Email and SMS templates with merge fields", from: "starter" },
      { label: "SMS send and receive", from: "growth" },
      { label: "Phone numbers", from: "growth" },
      { label: "WhatsApp", from: "scale" },
      { label: "Voice calling", from: "scale" },
    ],
  },
  {
    group: "Scheduling",
    rows: [
      { label: "Team calendar", from: "starter" },
      { label: "Appointments that can enroll a workflow", from: "starter" },
      { label: "Optional Google Calendar", from: "starter" },
      { label: "Public booking link", from: "growth" },
    ],
  },
  {
    group: "Team and data",
    rows: [
      { label: "Admin and agent roles", from: "starter" },
      { label: "Per-agent feature access", from: "starter" },
      { label: "Two-factor sign-in", from: "starter" },
      { label: "Public API for new contacts", from: "starter" },
      { label: "Custom objects", from: "scale" },
    ],
  },
];

const RANK: Record<PlanId, number> = { starter: 0, growth: 1, scale: 2 };

export function planIncludes(from: PlanId, plan: PlanId) {
  return RANK[plan] >= RANK[from];
}

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
    summary: "Meetings, appointments, and a booking page leads can use without an account.",
  },
  {
    index: "05",
    name: "Conversations",
    href: "/features#inbox",
    summary: "Email, SMS, WhatsApp, and calls. The thread stays on the person, not in another inbox.",
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
    summary: "When a contact is not enough: properties, projects, subscriptions, each with its own fields.",
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
    title: "Follow-up stays on the record",
    body: "SMS confirms the visit. The reply, the call, and the note sit on one timeline. Nobody hunts a second app.",
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
      "Custom fields — text, date, select, and number — including fields that must stay unique.",
      "CSV import that maps columns onto standard fields, owners, tags, and custom fields.",
      "Documents stored on the contact, and files attached to messages.",
      "Filters, bulk actions, and a drawer so you can edit without losing the list.",
      "A contact value you can track beside the deal.",
      "Trash for admins, so a delete can be undone.",
    ],
  },
  {
    id: "pipeline",
    index: "03",
    nav: "Pipeline",
    title: "Opportunities and pipelines",
    lede: "Build the stages your team already uses. Move deals. Watch the total.",
    points: [
      "Pipelines with their own stages. Starter publishes one; higher plans add more, as checkout shows.",
      "Kanban for value, probability, owner, and close date.",
      "Bulk moves when a stage needs a cleanup, not a card-by-card drag.",
      "Deal filters so an agent sees their book, not the whole company.",
      "Email and phone on a deal stay hidden unless that person also has Contacts.",
      "Stage changes can enroll the deal into an automation.",
    ],
  },
  {
    id: "inbox",
    index: "04",
    nav: "Inbox",
    title: "Conversations",
    lede: "Follow-up lives next to the lead, not in a separate inbox you forget to check.",
    points: [
      "Connect IMAP and SMTP and send from the CRM. Replies thread back onto the contact.",
      "HTML email, quoted-reply cleanup, and attachments.",
      "Templates with merge fields such as the contact’s name, for email and SMS.",
      "SMS from workspace numbers, sent and received, drawn from the prepaid wallet.",
      "WhatsApp on the same timeline, on Scale.",
      "Click-to-call and inbound voice, billed per minute from the same wallet.",
      "Buy, assign, and release local or mobile numbers.",
      "Platform email includes a free monthly allowance before the wallet is charged.",
    ],
  },
  {
    id: "calendar",
    index: "05",
    nav: "Calendar",
    title: "Calendar, appointments, booking",
    lede: "The meeting is part of the pipeline, not a side calendar nobody updates.",
    points: [
      "Team calendar for meetings and follow-ups.",
      "Appointments that can start a workflow.",
      "A public booking page: the lead picks a slot from the hours you publish.",
      "Optional Google Calendar so events are not typed twice.",
    ],
  },
  {
    id: "automation",
    index: "06",
    nav: "Automations",
    title: "Automations",
    lede: "Small, explicit workflows. A trigger, conditions, and an action.",
    points: [
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
    lede: "On Scale, when a contact and a deal are not the whole business.",
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
    lede: "The admin decides who sees what. Agents are not handed the whole desk by default.",
    points: [
      "Invite agents by email. Roles are admin or agent.",
      "Turn features on per agent: dashboard, contacts, opportunities, calendar, conversations, automations, custom objects, settings.",
      "Assigned leads stay with that agent.",
      "Two-factor with an authenticator app. Five failed sign-ins lock the account.",
      "A password reset signs out other sessions.",
      "API keys so a form can create a contact without a manual paste.",
      "In-app support for workspace admins, and a changelog the platform publishes.",
      "Browser notifications, and an installable icon for the desk you keep open.",
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
    body: "Workspace admins invite agents and choose which parts of the CRM each person can open. Agents do not inherit the whole desk by default.",
  },
  {
    title: "Assigned work stays assigned",
    body: "A lead given to an agent is that agent’s book. Deal lists hide email and phone unless the person also has access to Contacts.",
  },
  {
    title: "You own the customer data",
    body: "Contacts, notes, messages, and files you enter belong to you. Pipecove hosts and processes them so the CRM can run. We do not sell personal information.",
  },
  {
    title: "A workspace can be stopped",
    body: "The platform can deactivate a workspace. Deactivated teams cannot keep working in it until it is turned back on.",
  },
  {
    title: "Deletes are recoverable",
    body: "Admins have a trash view. A mistaken delete does not have to be the end of the record.",
  },
] as const;

export const BILLING_NOTES = [
  {
    title: "Trial",
    body: "Starter includes a 14-day trial on a new workspace. No payment is required to begin. Cancel before it ends and the card is not charged. A reminder goes out before the trial ends.",
  },
  {
    title: "Cancel when you want",
    body: "Cancellation takes effect at the end of the period you already paid for. You keep the workspace until that date. Monthly fees are not refunded mid-cycle.",
  },
  {
    title: "Wallet",
    body: "SMS, voice, and phone-number rental spend a prepaid balance. Wallet funds are not the subscription. Unused balance stays available while the account is in good standing, and does not expire.",
  },
  {
    title: "Taxes and changes",
    body: "Prices are exclusive of tax. Applicable tax is added where the law requires it. Catalog changes for existing subscribers come with at least 30 days’ notice.",
  },
] as const;

export const FAQS = [
  {
    q: "Where do I sign in?",
    a: "The workspace is at app.pipecove.com. This site is the overview. Sign in, create a workspace, billing, and the partner desk all open on the app.",
  },
  {
    q: "Is signup a different address?",
    a: "No. New teams and returning teams use the same sign-in screen. Choose Sign up there if this is your first workspace. You will verify email, pick a plan, and land in the desk.",
  },
  {
    q: "What does the subscription actually cover?",
    a: "The CRM: contacts, pipeline, calendar, automations, team access, and email in the product. SMS, calls, and number rental are prepaid from the wallet, at the rates shown before you send.",
  },
  {
    q: "Can limits change?",
    a: "Yes. Seats, workspaces, contacts, opportunities, pipelines, and automations are caps on the plan. The numbers at checkout are the ones enforced. A published Starter desk is a small team with one pipeline.",
  },
  {
    q: "Who can message my leads?",
    a: "You can. Pipecove does not prospect for you. Commercial email, SMS, and calls require consent under the law that applies to that person. The acceptable-use policy spells out identification and opt-out.",
  },
  {
    q: "What happens to data if we leave?",
    a: "You own what you put in. After cancellation, data is retained for 60 days so the workspace can be reactivated, then deleted or anonymized, except where the law requires a longer hold, such as billing records.",
  },
] as const;
