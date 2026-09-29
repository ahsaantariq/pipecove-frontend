import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { CONTROLS } from "@/content/product";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security and data — Pipecove" },
      {
        name: "description",
        content: "How Pipecove handles sign-in, roles, lead access, and the data workspaces store.",
      },
    ],
  }),
});

function SecurityPage() {
  return (
    <Shell>
      <PageHero
        kicker="Security"
        title="A quiet product, with the doors labeled."
        lede="Pipecove is meant to feel simple. The controls underneath are specific: who can sign in, who can see a phone number, and who owns the data."
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
        <div className="rounded-2xl bg-ink p-6 text-paper sm:p-8">
          <h2 className="font-display text-4xl">Where the data sits in the relationship</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-signal">Workspace customer</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                You are the controller of the leads you upload. You need a lawful reason to store them and to message them.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-signal">Pipecove</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                We process that data to provide the CRM: hosting, search, sending, and billing. We do not sell personal information.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-signal">Regions</p>
              <p className="mt-2 text-sm leading-6 text-haze">
                The policies cover teams in the United States, United Kingdom, Canada, Australia, and New Zealand.
              </p>
            </div>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/legal/$slug" params={{ slug: "privacy" }} className="font-medium text-signal">
              Privacy Policy
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
