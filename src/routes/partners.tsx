import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { APP } from "@/lib/site";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: "Partners — Pipecove" },
      {
        name: "description",
        content:
          "The Pipecove partner program. A separate login from the workspace, with referral links, commissions, and payouts on the partner desk.",
      },
    ],
  }),
});

const STEPS = [
  {
    title: "A partner account, not a workspace login",
    body: "Partners sign in on their own screen. It is not the same account as a CRM admin or agent. Create it from the app, then the desk remembers you.",
  },
  {
    title: "A link that ties the signup",
    body: "Your partner desk gives you a link aimed at the app sign-up, with your code on it. A new workspace that comes through that link is attributed to you.",
  },
  {
    title: "Commission with a shape, not a slogan",
    body: "Earnings are a first-month rate plus a recurring rate. Recurring can run for the life of the subscription or stop after a set number of months. Pipecove can also set a custom rate on one partner.",
  },
  {
    title: "A hold, then a payout window",
    body: "Commission clears after a hold. Withdrawals open on a monthly window, to a wallet address you save on the desk. There is a minimum. The live numbers in your account are the ones that pay.",
  },
];

function PartnersPage() {
  return (
    <Shell>
      <PageHero
        kicker="Partners"
        title="Send a team to Pipecove. Get paid when they stay."
        lede="The partner program is part of the app, with its own sign-in. This page is the overview. Referrals, balances, and payouts are handled after you log in."
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="kicker">What does not earn</p>
            <h2 className="mt-3 font-display text-4xl">Self-referrals are excluded.</h2>
            <p className="mt-4 text-mist">
              A signup that matches your email, card, or IP does not earn commission. Share the link with other teams,
              not with a second account of your own.
            </p>
          </div>
          <div className="rounded-2xl bg-ink p-6 text-paper sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-signal uppercase">On the partner desk</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-haze">
              <li>Your referral code and the link that carries it.</li>
              <li>Workspaces attributed to you, and the commission on each.</li>
              <li>What is pending, what has cleared, and what has been paid.</li>
              <li>The wallet address withdrawals are sent to.</li>
            </ul>
            <a href={APP.affiliate} className="btn btn-signal mt-6">
              Open the partner desk
            </a>
          </div>
        </div>
      </Band>
    </Shell>
  );
}
