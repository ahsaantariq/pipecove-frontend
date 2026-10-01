import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { CONTROLS } from "@/content/product";
import { JsonLd, breadcrumbLd, canonical } from "@/lib/seo";
import { SITE_ORIGIN } from "@/lib/site";

const TITLE = "Security and data — Pipecove CRM";
const DESCRIPTION =
  "How Pipecove runs: our own server, PostgreSQL, and Mailcow mail, plus Stripe, Twilio, and Meta only when you use those channels. No sale of personal information.";

const STACK = [
  ["Our server", "The app runs on a virtual private server we administer. We do not rent the product from another CRM."],
  ["PostgreSQL", "Contacts, messages, files metadata, and billing state live in a Postgres database we operate."],
  ["Mailcow", "Sign-in, billing, and support email is sent from a mail server we run. Your connected IMAP mailbox is separate."],
  ["Stripe", "Card payments. We do not store full card numbers."],
  ["Twilio", "SMS, voice, and WhatsApp numbers for Australia and the United Kingdom, including the country details Twilio requires before a number is sold."],
  ["Meta", "Facebook Messenger and Instagram DMs, only after a workspace connects its own Page and professional account. Used to carry that inbox, not to advertise."],
];

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: canonical("/security") }],
  }),
});

function SecurityPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: TITLE,
        description: DESCRIPTION,
        url: `${SITE_ORIGIN}/security`,
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Security", path: "/security" },
      ]),
    ],
  };

  return (
    <Shell>
      <JsonLd data={schema} />
      <PageHero
        kicker="Security"
        title="A quiet product, with the doors labeled."
        lede="Who can sign in, who can see a phone number, where the database sits, and which companies touch a message. We do not claim a certificate we do not hold."
      />
      <Band>
        <div className="grid gap-4 md:grid-cols-2">
          {CONTROLS.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-display text-2xl text-primary">0{index + 1}</p>
              <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist">{item.body}</p>
            </article>
          ))}
        </div>
      </Band>
      <Band>
        <p className="kicker">What actually processes data</p>
        <h2 className="mt-3 font-display text-4xl">Our stack, and the short list beside it.</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Google is on this list only if you connect Google Calendar or use a Google sign-in. Pipecove’s use of information from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
        </p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {STACK.map(([name, body]) => (
            <div key={name} className="rounded-2xl border border-line bg-card p-5">
              <dt className="text-lg font-semibold">{name}</dt>
              <dd className="mt-2 text-sm leading-6 text-mist">{body}</dd>
            </div>
          ))}
        </dl>
      </Band>
      <Band>
        <div className="rounded-2xl bg-ink p-6 text-paper sm:p-8">
          <h2 className="font-display text-4xl">Where the data sits in the relationship</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-signal">Workspace customer</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                You are the controller of the leads you upload. You need a lawful reason to store them and to message them, including on WhatsApp, Messenger, and Instagram.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-signal">Pipecove</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                We process that data to provide the CRM. We do not sell it, and we do not use Meta or Google data to build ads.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-signal">Phone markets</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                Numbers are sold for Australia and the United Kingdom. The privacy rights of a contact still follow the law of the place they live.
              </p>
            </div>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/legal/$slug" params={{ slug: "privacy" }} className="font-medium text-signal">
              Privacy Policy
            </Link>
            <Link to="/legal/$slug" params={{ slug: "dpa" }} className="font-medium text-signal">
              Data Processing Addendum
            </Link>
            <Link to="/legal/$slug" params={{ slug: "cookies" }} className="font-medium text-signal">
              Cookie Policy
            </Link>
            <Link to="/legal/$slug" params={{ slug: "acceptable-use" }} className="font-medium text-signal">
              Acceptable use
            </Link>
          </p>
        </div>
      </Band>
    </Shell>
  );
}
