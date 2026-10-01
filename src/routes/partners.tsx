import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { PARTNER_TERMS } from "@/content/product";
import { JsonLd, breadcrumbLd, canonical } from "@/lib/seo";
import { APP, SITE_ORIGIN } from "@/lib/site";

const TITLE = "Pipecove partners — 60% then 20% for 12 months";
const DESCRIPTION =
  "Refer a workspace to Pipecove. Earn 60% of its first subscription payment, then 20% of that workspace’s subscription payments for 12 months. Wallet top-ups are excluded.";

const STEPS = [
  {
    title: "A partner account, not a workspace login",
    body: "Partners sign in on their own screen. It is not the same account as a CRM admin or agent. Create it from the app, then the desk remembers you.",
  },
  {
    title: "A link that ties the signup",
    body: "Your partner desk gives you a link aimed at the app sign-up, with your code on it. A new workspace that comes through that link is attributed to you. One workspace, one partner.",
  },
  {
    title: "60% first, then 20% for 12 months",
    body: "You earn 60% of the first subscription payment we collect from that workspace. For 12 months after that payment, you earn 20% of each later subscription payment from the same workspace. Then it stops.",
  },
  {
    title: "Paid on what we collect",
    body: "Commission follows a cleared subscription charge. Refunds and chargebacks reverse it. The partner desk shows pending, cleared, and paid. Self-referrals are excluded.",
  },
];

const FAQS = [
  {
    q: "What counts as the first payment?",
    a: "The first subscription invoice we successfully collect for Solo, Growth, or Agency. Free is $0, so a Free signup earns nothing until that workspace pays.",
  },
  {
    q: "Does the 20% include the wallet?",
    a: "No. Wallet top-ups, SMS, voice, WhatsApp usage, number rental, and tax are excluded. Commission is on the plan fee only.",
  },
  {
    q: "When does the 12 months start and end?",
    a: "It starts on the date of the first successful subscription payment. Later subscription payments charged inside that window earn 20%. Payments after the window earn nothing. If the first payment is fully refunded, the window never starts.",
  },
  {
    q: "Can I refer myself?",
    a: "No. A workspace that matches your email, payment method, or business does not earn. Refer other teams.",
  },
];

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: canonical("/partners") }],
  }),
});

function PartnersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: TITLE,
        description: DESCRIPTION,
        url: `${SITE_ORIGIN}/partners`,
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Partners", path: "/partners" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <Shell>
      <JsonLd data={schema} />
      <PageHero
        kicker="Partners"
        title="60% of the first payment. 20% for the next 12 months."
        lede="Send a team to Pipecove. When that workspace pays for a plan, you earn 60% of the first subscription payment, then 20% of its later subscription payments for 12 months. The wallet is not part of the commission."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={APP.affiliateSignup} className="btn btn-primary">
            Create a partner account
          </a>
          <a href={APP.affiliateLogin} className="btn btn-line">
            Partner sign in
          </a>
        </div>
      </PageHero>
      <Band>
        <ol className="grid gap-4 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-display text-3xl text-primary">0{index + 1}</p>
              <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist">{step.body}</p>
            </li>
          ))}
        </ol>
      </Band>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="kicker">A worked example</p>
            <h2 className="mt-3 font-display text-4xl">
              {PARTNER_TERMS.examplePlan} at {PARTNER_TERMS.examplePrice} a month.
            </h2>
            <p className="mt-4 text-mist">
              If the published price is what they pay, the first invoice earns you {PARTNER_TERMS.exampleFirst} ({PARTNER_TERMS.firstRate}).
              Each later invoice inside the {PARTNER_TERMS.window} earns {PARTNER_TERMS.exampleLater} ({PARTNER_TERMS.laterRate}).
              A wallet top-up earns nothing. If they stay on Free, there is no commission to pay.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">Example partner commission on a Growth subscription</caption>
              <thead className="bg-secondary text-left">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Charge
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    You earn
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                <tr className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    First Growth payment, $49
                  </th>
                  <td className="px-4 py-3">$29.40 (60%)</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    Each later $49 inside 12 months
                  </th>
                  <td className="px-4 py-3">$9.80 (20%)</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    Wallet top-up, any amount
                  </th>
                  <td className="px-4 py-3">$0</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    Subscription after month 12
                  </th>
                  <td className="px-4 py-3">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Band>
      <Band>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="kicker">What does not earn</p>
            <h2 className="mt-3 font-display text-4xl">Self-referrals are excluded.</h2>
            <p className="mt-4 text-mist">
              A signup that matches your email, card, or business does not earn commission. Do not bid on the Pipecove name,
              and do not promise a discount or a phone country the pricing page does not list. The{" "}
              <Link to="/legal/$slug" params={{ slug: "partners" }} className="font-medium text-primary">
                Partner Program Terms
              </Link>{" "}
              are the contract.
            </p>
          </div>
          <div className="rounded-2xl bg-ink p-6 text-paper sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-signal uppercase">On the partner desk</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-haze">
              <li>Your referral code and the link that carries it.</li>
              <li>Workspaces attributed to you, and the commission on each.</li>
              <li>What is pending, what has cleared, and what has been paid.</li>
              <li>The payout details withdrawals are sent to.</li>
            </ul>
            <a href={APP.affiliate} className="btn btn-signal mt-6">
              Open the partner desk
            </a>
          </div>
        </div>
      </Band>
      <Band>
        <h2 className="font-display text-4xl">Partner questions</h2>
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
