import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyBody } from "@/components/site/policy-body";
import { Shell } from "@/components/site/shell";
import { POLICY_DEFAULTS, policyDefault } from "@/content/policies";
import { JsonLd, breadcrumbLd, canonical } from "@/lib/seo";
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/legal/$slug")({
  component: LegalPage,
  head: ({ params }) => {
    const policy = policyDefault(params.slug);
    const title = policy ? `${policy.title} — Pipecove` : "Policy — Pipecove";
    const description = policy?.summary ?? "Pipecove policies for workspaces, messaging, and partners.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow, max-image-preview:large" },
      ],
      links: [{ rel: "canonical", href: canonical(`/legal/${params.slug}`) }],
    };
  },
});

function LegalPage() {
  const { slug } = Route.useParams();
  const policy = policyDefault(slug);
  const schema = policy
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            name: policy.title,
            description: policy.summary,
            url: `${SITE_ORIGIN}/legal/${policy.slug}`,
            dateModified: "2026-10-01",
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: policy.title, path: `/legal/${policy.slug}` },
          ]),
        ],
      }
    : null;

  return (
    <Shell>
      {schema ? <JsonLd data={schema} /> : null}
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        {policy ? (
          <>
            <p className="kicker">Policy</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">{policy.title}</h1>
            <p className="mt-4 text-lg text-mist">{policy.summary}</p>
            <p className="mt-2 text-sm text-mist">Last updated {policy.updatedLabel}</p>
            <div className="mt-10 border-t border-line pt-8">
              <PolicyBody markdown={policy.body} />
            </div>
          </>
        ) : (
          <>
            <h1 className="font-display text-4xl">That policy is not on this site.</h1>
            <p className="mt-4 text-mist">Choose one of the published documents.</p>
          </>
        )}
        <nav className="mt-12 border-t border-line pt-6" aria-label="All policies">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {POLICY_DEFAULTS.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/legal/$slug"
                  params={{ slug: item.slug }}
                  className={item.slug === slug ? "font-semibold text-foreground" : "text-primary"}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </Shell>
  );
}
