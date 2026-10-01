import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { BILLING_NOTES, FAQS, LIMITS, MATRIX, PLANS, planIncludes, type PlanId } from "@/content/product";
import { JsonLd, breadcrumbLd, canonical } from "@/lib/seo";
import { APP, SITE_ORIGIN } from "@/lib/site";

const TITLE = "Pipecove pricing — Free, Solo, Growth, and Agency";
const DESCRIPTION =
  "Free is $0. Solo is $19, Growth is $49, Agency is $99 per month. SMS, calls, WhatsApp, and AU/UK numbers are prepaid. See every limit and what each plan includes.";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: canonical("/pricing") }],
  }),
});

function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/pricing#page`,
        url: `${SITE_ORIGIN}/pricing`,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@type": "WebSite", url: `${SITE_ORIGIN}/` },
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Pricing", path: "/pricing" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "Product",
        name: "Pipecove CRM",
        description: DESCRIPTION,
        brand: { "@type": "Brand", name: "Pipecove" },
        offers: PLANS.map((plan) => ({
          "@type": "Offer",
          name: `${plan.name} plan`,
          price: plan.amount,
          priceCurrency: "USD",
          url: `${SITE_ORIGIN}/pricing#${plan.id}`,
          availability: "https://schema.org/InStock",
          description: plan.summary,
        })),
      },
    ],
  };

  return (
    <Shell>
      <JsonLd data={schema} />
      <PageHero
        kicker="Pricing"
        title="Free, Solo, Growth, Agency."
        lede="The monthly price is the desk. SMS, calls, WhatsApp usage, and phone numbers are prepaid from a wallet, at the rate the workspace shows before you spend it. Prices are US dollars and exclude tax."
      >
        <a href={APP.login} className="btn btn-primary">
          Create a workspace
        </a>
      </PageHero>

      <Band>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              id={plan.id}
              className={
                plan.id === "growth"
                  ? "flex flex-col rounded-2xl border border-primary bg-card p-6"
                  : "flex flex-col rounded-2xl border border-line bg-card p-6"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                {plan.badge ? (
                  <span className="rounded-full bg-foam px-2 py-1 text-xs font-semibold text-primary">{plan.badge}</span>
                ) : (
                  <span className="text-xs font-semibold tracking-wide text-mist uppercase">USD</span>
                )}
              </div>
              <p className="mt-5 font-display text-5xl tabular-nums">{plan.price}</p>
              <p className="text-sm text-mist">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-6">{plan.summary}</p>
              <p className="mt-1 text-sm text-mist">{plan.audience}</p>
              <ul className="mt-5 grid flex-1 gap-2">
                {plan.highlights.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href={APP.login} className={plan.id === "growth" ? "btn btn-signal mt-6" : "btn btn-line mt-6"}>
                {plan.amount === 0 ? "Start free" : `Choose ${plan.name}`}
              </a>
            </article>
          ))}
        </div>
      </Band>

      <Band>
        <h2 className="font-display text-4xl">The caps, in one place</h2>
        <p className="mt-3 max-w-2xl text-mist">
          These are the numbers the plan enforces. Unlimited means the plan does not count that object. It does not mean a carrier will send without limit.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <caption className="sr-only">Plan limits for Free, Solo, Growth, and Agency</caption>
            <thead className="bg-secondary text-left">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Limit
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.id} scope="col" className="px-3 py-3 text-center font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIMITS.map((row) => (
                <tr key={row.label} className="border-t border-line bg-card">
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    {row.label}
                    <span className="mt-0.5 block font-normal text-mist">{row.hint}</span>
                  </th>
                  {PLANS.map((plan) => (
                    <td key={plan.id} className="px-3 py-3 text-center font-semibold tabular-nums">
                      {row.values[plan.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Band>

      <Band>
        <h2 className="font-display text-4xl">What each plan includes</h2>
        <p className="mt-3 max-w-2xl text-mist">
          A yes means the feature is on that plan and every plan above it. The caps in the table above still apply.
        </p>
        <div className="mt-8 grid gap-8">
          {MATRIX.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">{group.group}</h3>
              <div className="mt-3 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[44rem] border-collapse text-sm">
                  <caption className="sr-only">{group.group} features by plan</caption>
                  <thead className="bg-secondary">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left font-semibold">
                        Feature
                      </th>
                      {PLANS.map((plan) => (
                        <th key={plan.id} scope="col" className="px-3 py-3 text-center font-semibold">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-t border-line bg-card">
                        <th scope="row" className="px-4 py-3 text-left font-medium">
                          {row.label}
                          {row.note ? <span className="mt-0.5 block font-normal text-mist">{row.note}</span> : null}
                        </th>
                        {PLANS.map((plan) => (
                          <td key={plan.id} className="px-3 py-3 text-center">
                            <PlanMark plan={plan.id} from={row.from} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band id="numbers">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="kicker">Numbers and channels</p>
            <h2 className="mt-3 font-display text-4xl">Australia and the United Kingdom. That is the phone list today.</h2>
            <p className="mt-4 text-mist">
              Solo and above can buy a number for SMS and calling. Growth and Agency can also use that number for WhatsApp.
              Other countries are not for sale yet. When one is added, it will show up in the app before it shows up as a promise here.
            </p>
          </div>
          <ol className="grid gap-3">
            {[
              ["1", "Submit the country details", "Australia and the UK both require identity and address information before a number can be sold. You enter it in the workspace."],
              ["2", "We send it to Twilio", "Pipecove does not approve the bundle. Twilio applies that country’s requirements and approves or rejects it."],
              ["3", "Then you can buy", "Rental and usage come out of the wallet at the rate shown before you confirm. A rejected bundle is not charged the rental."],
              ["4", "Social is separate", "Facebook Messenger and Instagram DMs are on Growth and Agency. You connect your own Page and professional account. No number purchase is required for those two."],
            ].map(([step, title, body]) => (
              <li key={step} className="rounded-2xl border border-line bg-card p-5">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">Step {step}</p>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-mist">{body}</p>
              </li>
            ))}
          </ol>
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
          </Link>
          , the{" "}
          <Link to="/legal/$slug" params={{ slug: "refunds" }} className="font-medium text-primary">
            Refund & Cancellation Policy
          </Link>
          , and the{" "}
          <Link to="/legal/$slug" params={{ slug: "acceptable-use" }} className="font-medium text-primary">
            Acceptable Use & Messaging Policy
          </Link>
          .
        </p>
      </Band>

      <Band>
        <h2 className="font-display text-4xl">Questions</h2>
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

function PlanMark({ plan, from }: { plan: PlanId; from: PlanId }) {
  const on = planIncludes(from, plan);
  return on ? (
    <span className="font-semibold text-primary">Yes</span>
  ) : (
    <span className="text-mist">No</span>
  );
}
