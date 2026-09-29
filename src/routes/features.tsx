import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, Shell } from "@/components/site/shell";
import { FEATURE_GROUPS } from "@/content/product";
import { APP } from "@/lib/site";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Product — Pipecove" },
      {
        name: "description",
        content:
          "A full overview of the Pipecove workspace: contacts, pipelines, inbox, calendar, automations, custom objects, and team access.",
      },
    ],
  }),
});

function FeaturesPage() {
  return (
    <Shell>
      <PageHero
        kicker="Product"
        title="Everything the workspace is for."
        lede="Pipecove is a sales desk: people, deals, messages, and the calendar that follows them. The sections below match the product, not a roadmap."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={APP.login} className="btn btn-primary">
            Create a workspace
          </a>
          <a href={APP.home} className="btn btn-line">
            Open the dashboard
          </a>
        </div>
      </PageHero>
      <div className="sticky top-16 z-30 border-b border-line bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {FEATURE_GROUPS.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="btn btn-line shrink-0 py-2">
              {group.nav}
            </a>
          ))}
        </div>
      </div>
      {FEATURE_GROUPS.map((group) => (
        <Band key={group.id} id={group.id}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-display text-3xl text-primary">{group.index}</p>
              <h2 className="mt-2 font-display text-4xl">{group.title}</h2>
              <p className="mt-4 text-mist">{group.lede}</p>
            </div>
            <ul className="grid gap-2">
              {group.points.map((point) => (
                <li key={point} className="rounded-xl border border-line bg-card px-4 py-3 text-sm leading-6">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Band>
      ))}
      <Band>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-ink p-6 text-paper sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-display text-3xl">Wallet, not a surprise invoice</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-haze">
              The subscription covers the CRM. SMS, voice minutes, and number rental spend a prepaid balance you can see before you send.
            </p>
          </div>
          <a href={APP.login} className="btn btn-signal">
            See plans in the app
          </a>
        </div>
      </Band>
    </Shell>
  );
}
