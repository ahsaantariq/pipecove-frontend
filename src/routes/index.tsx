import { createFileRoute, Link } from "@tanstack/react-router";
import { Desk } from "@/components/site/desk";
import { Band, Shell } from "@/components/site/shell";
import { DAY, MODULES, PLANS } from "@/content/product";
import { APP } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Pipecove — the client desk" },
      {
        name: "description",
        content:
          "Contacts, pipelines, email, SMS, calls, calendar, and automations in one workspace. Sign in at app.pipecove.com.",
      },
    ],
  }),
});

function Home() {
  return (
    <Shell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
          <div>
            <p className="kicker">CRM for the follow-up</p>
            <h1 className="display mt-4">
              The whole client relationship, <em>on one desk.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-mist">
              Contacts, deals, email, SMS, calls, and the next appointment. Pipecove is the workspace.
              This site is the overview. Sign in, signup, and the desk itself open at app.pipecove.com.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={APP.login} className="btn btn-primary">
                Create a workspace
              </a>
              <a href={APP.login} className="btn btn-line">
                Sign in
              </a>
            </div>
            <p className="mt-4 max-w-md text-sm text-mist">
              New teams choose Sign up on that screen. Starter includes a 14-day trial. SMS, calls, and numbers
              are prepaid, separate from the subscription.
            </p>
          </div>
          <Desk />
        </div>
      </section>

      <Band>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="kicker">The desk</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Eight places. One record at the center.</h2>
          </div>
          <p className="max-w-xl text-lg text-mist">
            Nothing below is a slogan for a feature that is not in the product. This is the sidebar your team
            opens after sign-in.
          </p>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {MODULES.map((item) => (
            <li key={item.name} className="bg-card">
              <a href={item.href} className="flex h-full flex-col gap-3 p-5 transition-colors hover:bg-foam sm:p-6">
                <span className="font-display text-2xl text-primary">{item.index}</span>
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="text-sm leading-6 text-mist">{item.summary}</span>
              </a>
            </li>
          ))}
        </ol>
      </Band>

      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="kicker text-signal">A day on the desk</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">From the form to the follow-up, without a second login.</h2>
          </div>
          <ol className="grid gap-0">
            {DAY.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-ink-line py-5">
                <div>
                  <p className="font-display text-lg text-signal tabular-nums">{step.time}</p>
                  <p className="text-xs tracking-wide text-haze uppercase">0{index + 1}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-haze">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Band>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["The record is the center", "Notes, email, SMS, calls, and stage changes sit on the same person. Search from anywhere. Open a contact without losing the list."],
            ["Agents get an edge, not the whole company", "Admins invite people and turn features on one by one. An assigned lead stays with that agent. Deal lists hide email and phone unless Contacts is on."],
            ["The wallet is visible before you send", "The subscription covers the CRM. SMS, voice minutes, and number rental spend a prepaid balance. Rates are the ones shown in the workspace."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{body}</p>
            </article>
          ))}
        </div>
      </Band>

      <Band className="bg-foam/40" id="plans">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="kicker">Pricing</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Pay for the desk. Prepay the messages.</h2>
          </div>
          <Link to="/pricing" className="btn btn-line">
            Compare every feature
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
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
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.trial ? (
                  <span className="rounded-full bg-foam px-2 py-1 text-xs font-semibold text-primary">{plan.trial}</span>
                ) : null}
              </div>
              <p className="mt-4 font-display text-5xl tabular-nums">{plan.price}</p>
              <p className="text-sm text-mist">{plan.cadence}</p>
              <p className="mt-3 text-sm text-mist">{plan.summary}</p>
              <a href={APP.login} className={plan.id === "growth" ? "btn btn-signal mt-6" : "btn btn-line mt-6"}>
                {plan.price === "$0" ? "Start free" : `Choose ${plan.name}`}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-mist">
          Published catalog: Starter $0, Growth $49 per month, Scale $99 per month. If checkout shows a different
          price or an annual interval, that is the one that bills.
        </p>
      </Band>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Two addresses</p>
            <h2 className="mt-3 font-display text-4xl">Read it here. Run it on the app.</h2>
            <p className="mt-4 max-w-lg text-mist">
              The sites are separate on purpose. Templates and this overview stay on pipecove.com. Login, signup,
              the dashboard, and every workspace action stay on the app.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-mist uppercase">pipecove.com</p>
              <p className="mt-3 font-display text-2xl">The public site</p>
              <p className="mt-2 text-sm leading-6 text-mist">Product, pricing, security, partners, and policies. Nothing here signs you into a workspace.</p>
            </div>
            <div className="rounded-2xl bg-ink p-5 text-paper">
              <p className="text-xs font-semibold tracking-wide text-signal uppercase">app.pipecove.com</p>
              <p className="mt-3 font-display text-2xl">The workspace</p>
              <p className="mt-2 text-sm leading-6 text-haze">Sign in, create a workspace, open the dashboard, or use the separate partner login.</p>
              <a href={APP.login} className="btn btn-signal mt-5">
                Go to the app
              </a>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
