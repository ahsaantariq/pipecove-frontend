import { useState } from "react";
import { cn } from "@/lib/utils";

const PANELS = [
  { id: "pipeline", label: "Pipeline" },
  { id: "contact", label: "Contact" },
  { id: "inbox", label: "Inbox" },
  { id: "automation", label: "Automation" },
] as const;

type PanelId = (typeof PANELS)[number]["id"];

const NAV = ["Dashboard", "Contacts", "Opportunities", "Calendar", "Conversations", "Automations"];

export function Desk() {
  const [panel, setPanel] = useState<PanelId>("pipeline");

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-panel">
      <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <p className="ml-1 text-xs font-medium tracking-wide text-mist">app.pipecove.com · Harbor desk</p>
      </div>
      <div className="flex gap-1 overflow-x-auto border-b border-line bg-card px-3 py-2" role="tablist" aria-label="Desk preview">
        {PANELS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={panel === item.id}
            className={cn(
              "min-h-11 shrink-0 rounded-full px-3 text-sm font-medium",
              panel === item.id ? "bg-ink text-paper" : "text-mist hover:bg-secondary hover:text-foreground",
            )}
            onClick={() => setPanel(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-[11rem_1fr]">
        <aside className="hidden border-r border-ink-line bg-ink p-3 text-paper lg:block">
          <p className="px-2 pb-3 text-xs font-medium tracking-wide text-foam">Pipecove</p>
          {NAV.map((item) => {
            const active =
              (panel === "pipeline" && item === "Opportunities") ||
              (panel === "contact" && item === "Contacts") ||
              (panel === "inbox" && item === "Conversations") ||
              (panel === "automation" && item === "Automations");
            return (
              <p
                key={item}
                className={cn(
                  "rounded-md px-2 py-2 text-sm",
                  active ? "bg-ink-line font-medium text-paper" : "text-haze",
                )}
              >
                {item}
              </p>
            );
          })}
        </aside>
        <div className="min-w-0 bg-paper p-4 sm:p-5">
          {panel === "pipeline" ? <PipelinePanel /> : null}
          {panel === "contact" ? <ContactPanel /> : null}
          {panel === "inbox" ? <InboxPanel /> : null}
          {panel === "automation" ? <AutomationPanel /> : null}
        </div>
      </div>
    </div>
  );
}

function PipelinePanel() {
  const columns = [
    {
      name: "New",
      deals: [
        { name: "Brightfold", meta: "Inbound · today", value: "$48,000" },
        { name: "Miller inquiry", meta: "Website form", value: "$14,800" },
      ],
    },
    {
      name: "Appointment",
      deals: [{ name: "14 Harbor Street", meta: "Thu · 2:00 pm", value: "$640,000" }],
    },
    {
      name: "Proposal",
      deals: [{ name: "Northline lease", meta: "Sent yesterday", value: "$18,400" }],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Open deals", "18"],
          ["Pipeline", "$721k"],
          ["Win rate", "32%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-line bg-card px-3 py-2">
            <p className="text-xs text-mist">{label}</p>
            <p className="mt-1 font-display text-xl text-foreground tabular-nums">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {columns.map((column) => (
          <div key={column.name} className="rounded-lg bg-secondary p-2">
            <p className="px-1 py-1 text-xs font-semibold tracking-wide text-mist uppercase">{column.name}</p>
            <div className="grid gap-2">
              {column.deals.map((deal) => (
                <div key={deal.name} className="rounded-md border border-line bg-card px-2.5 py-2">
                  <p className="text-sm font-medium">{deal.name}</p>
                  <p className="text-xs text-mist">{deal.meta}</p>
                  <p className="mt-1 text-sm font-semibold text-primary tabular-nums">{deal.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPanel() {
  const events = [
    ["Email opened", "Intro for the Harbor listing"],
    ["SMS sent", "Confirming Thursday at 2"],
    ["Stage", "New → Appointment"],
    ["Note", "Wants a quiet close. No open house."],
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_1.1fr]">
      <div className="rounded-lg border border-line bg-card p-4">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">Contact</p>
        <h3 className="mt-2 font-display text-3xl">Maya Ellison</h3>
        <p className="mt-1 text-sm text-mist">VP of Growth · Brightfold</p>
        <dl className="mt-4 grid gap-2 text-sm">
          <div className="flex justify-between gap-3 border-t border-line pt-2">
            <dt className="text-mist">Owner</dt>
            <dd>Alex Chen</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-line pt-2">
            <dt className="text-mist">Source</dt>
            <dd>Inbound demo</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-line pt-2">
            <dt className="text-mist">Tags</dt>
            <dd>VIP · SaaS</dd>
          </div>
        </dl>
      </div>
      <ol className="grid content-start gap-2">
        {events.map(([title, body]) => (
          <li key={title} className="rounded-lg border border-line bg-card px-3 py-2.5">
            <p className="text-xs font-semibold tracking-wide text-mist uppercase">{title}</p>
            <p className="mt-1 text-sm">{body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function InboxPanel() {
  const messages = [
    { who: "You", body: "Sending the proposal and the two comps from last spring." },
    { who: "Maya", body: "Thursday works. Can we do 2pm on site?" },
    { who: "You", body: "Locked. I’ll text a reminder the morning of." },
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card">
      <div className="border-b border-line px-4 py-3">
        <p className="text-sm font-semibold">14 Harbor Street</p>
        <p className="text-xs text-mist">Maya Ellison · email · on the contact</p>
      </div>
      <div className="grid gap-3 p-4">
        {messages.map((message) => (
          <div key={message.body} className={cn("max-w-md", message.who === "You" ? "ml-auto" : "")}>
            <p className="text-xs text-mist">{message.who}</p>
            <p
              className={cn(
                "mt-1 rounded-lg px-3 py-2 text-sm",
                message.who === "You" ? "bg-ink text-paper" : "bg-secondary text-foreground",
              )}
            >
              {message.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationPanel() {
  const steps = [
    ["When", "A lead is tagged Inbound"],
    ["If", "Source is Website form"],
    ["Then", "Send template “First reply”"],
    ["And", "Keep the stage at New"],
  ];
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-medium tracking-wide text-primary uppercase">Workflow</p>
          <h3 className="font-display text-2xl">First reply</h3>
        </div>
        <p className="text-xs text-mist">Last run 14 min ago · 3 contacts</p>
      </div>
      <ol className="grid gap-2">
        {steps.map(([label, body], index) => (
          <li key={label} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 rounded-lg border border-line bg-card px-3 py-3">
            <span className="text-xs font-semibold tracking-wide text-mist uppercase">
              {String(index + 1).padStart(2, "0")} {label}
            </span>
            <span className="text-sm">{body}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
