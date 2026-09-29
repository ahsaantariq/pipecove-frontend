import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { BILLING_NOTES, FAQS, MATRIX, PLANS, planIncludes, type PlanId } from "@/content/product";
import { APP } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Pipecove" },
      {
        name: "description",
        content:
          "Starter, Growth, and Scale for Pipecove. The subscription is separate from the prepaid wallet for SMS, calls, and numbers.",
      },
    ],
  }),
});

function PricingPage() {
  return (
    <Shell>
      <PageHero
        kicker="Pricing"
        title="Pay for the desk. Prepay the messages."
        lede="Starter is the trial. Growth adds the phone. Scale adds calling, WhatsApp, custom objects, and the higher limits. Checkout inside the app is the catalog that bills."
      >
        <a href={APP.login} className="btn btn-primary">
          Create a workspace
        </a>
      </PageHero>

      <Band>
        <div className="grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.id === "growth"
                  ? "flex flex-col rounded-2xl border border-primary bg-card p-6"
                  : "flex flex-col rounded-2xl border border-line bg-card p-6"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                {plan.trial ? (
                  <span className="rounded-full bg-foam px-2 py-1 text-xs font-semibold text-primary">{plan.trial}</span>
                ) : (
                  <span className="text-xs font-semibold tracking-wide text-mist uppercase">USD</span>
                )}
              </div>
              <p className="mt-5 font-display text-5xl tabular-nums">{plan.price}</p>
              <p className="text-sm text-mist">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-6">{plan.summary}</p>
              <p className="mt-1 text-sm text-mist">{plan.fit}</p>
              <ul className="mt-5 grid flex-1 gap-2">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href={APP.login} className={plan.id === "growth" ? "btn btn-signal mt-6" : "btn btn-line mt-6"}>
                {plan.price === "$0" ? "Start free" : `Choose ${plan.name}`}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-mist">
          Standard catalog from the terms: Starter $0 with a 14-day trial, Growth $49 per month, Scale $99 per month.
          Seats, contacts, pipelines, and the rest are enforced from the live plan. If a super admin changes a price,
          the app checkout wins over this page.
        </p>
      </Band>

      <Band>
        <h2 className="font-display text-4xl">What each plan includes</h2>
        <p className="mt-3 max-w-2xl text-mist">
          A mark means the feature is on that plan and every plan above it. Limits, not this grid, decide how many
          records you can add.
        </p>
        <div className="mt-8 grid gap-8">
          {MATRIX.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">{group.group}</h3>
              <div className="mt-3 overflow-hidden rounded-2xl border border-line">
                <div className="hidden grid-cols-[1.4fr_repeat(3,0.6fr)] bg-secondary text-sm font-semibold sm:grid">
                  <div className="px-4 py-3">Feature</div>
                  {PLANS.map((plan) => (
                    <div key={plan.id} className="px-3 py-3 text-center">
                      {plan.name}
                    </div>
                  ))}
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 border-t border-line bg-card px-4 py-3 sm:grid-cols-[1.4fr_repeat(3,0.6fr)] sm:items-center sm:gap-0"
                  >
                    <p className="text-sm">{row.label}</p>
                    <div className="grid grid-cols-3 sm:contents">
                      {PLANS.map((plan) => (
                        <PlanMark key={plan.id} plan={plan.id} from={row.from} name={plan.name} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="grid gap-4 sm:grid-cols-2">
          {BILLING_NOTES.map((note) => (
            <article key={note.title} className="rounded-2xl border border-line bg-card p-5">
              <h2 className="text-lg font-semibold">{note.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist">{note.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-mist">
          The written rules are the{" "}
          <Link to="/legal/$slug" params={{ slug: "terms" }} className="font-medium text-primary">
            Terms of Service
          </Link>{" "}
          and the{" "}
          <Link to="/legal/$slug" params={{ slug: "refunds" }} className="font-medium text-primary">
            Refund & Cancellation Policy
          </Link>
          .
        </p>
      </Band>

      <Band>
        <h2 className="font-display text-4xl">Questions, answered from the product</h2>
        <div className="mt-6 grid gap-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-line bg-card px-5 py-4">
              <summary className="cursor-pointer list-none text-base font-semibold">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-mist group-open:hidden">+</span>
                  <span className="hidden text-mist group-open:inline">–</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-mist">{item.a}</p>
            </details>
          ))}
        </div>
      </Band>
    </Shell>
  );
}

function PlanMark({ plan, from, name }: { plan: PlanId; from: PlanId; name: string }) {
  const on = planIncludes(from, plan);
  return (
    <p className="text-center text-sm">
      <span className="mb-1 block text-xs text-mist sm:hidden">{name}</span>
      {on ? <span className="font-semibold text-primary">Yes</span> : <span className="text-mist">—</span>}
    </p>
  );
}
