import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyBody } from "@/components/site/policy-body";
import { Shell } from "@/components/site/shell";
import { POLICY_DEFAULTS, policyDefault } from "@/content/policies";

export const Route = createFileRoute("/legal/$slug")({
  component: LegalPage,
  head: ({ params }) => {
    const policy = policyDefault(params.slug);
    return {
      meta: [
        { title: policy ? `${policy.title} — Pipecove` : "Policy — Pipecove" },
        { name: "description", content: policy?.summary ?? "Pipecove policies." },
      ],
    };
  },
});

function LegalPage() {
  const { slug } = Route.useParams();
  const policy = policyDefault(slug);

  return (
    <Shell>
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
        <ul className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-6 text-sm">
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
      </article>
    </Shell>
  );
}
