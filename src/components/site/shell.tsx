import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { POLICY_DEFAULTS } from "@/content/policies";
import { Mark } from "@/components/site/mark";
import { APP, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-5 sm:px-8">
        <Link to="/" className="flex min-h-11 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Mark />
          <span className="text-base font-semibold tracking-tight">Pipecove</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm transition-colors"
              activeProps={{ className: "bg-secondary font-medium text-foreground" }}
              inactiveProps={{ className: "text-mist hover:bg-secondary hover:text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <a href={APP.login} className="btn btn-ghost">
            Sign in
          </a>
          <a href={APP.login} className="btn btn-primary">
            Open the app
          </a>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-background px-5 py-3 md:hidden">
          <nav className="grid gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-2 text-base"
              >
                {item.label}
              </Link>
            ))}
            <a href={APP.login} className="btn btn-ghost justify-start px-2">
              Sign in
            </a>
            <a href={APP.login} className="btn btn-primary">
              Open the app
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <Mark tone="paper" />
            <p className="font-semibold">Pipecove</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-haze">
            The public site for the product. The workspace, sign-in, and partner desk live at app.pipecove.com.
          </p>
        </div>
        <FooterCol title="Product">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-signal">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="App">
          <li>
            <a href={APP.login} className="hover:text-signal">
              Sign in
            </a>
          </li>
          <li>
            <a href={APP.login} className="hover:text-signal">
              Create a workspace
            </a>
          </li>
          <li>
            <a href={APP.home} className="hover:text-signal">
              Dashboard
            </a>
          </li>
          <li>
            <a href={APP.affiliateLogin} className="hover:text-signal">
              Partner sign in
            </a>
          </li>
          <li>
            <a href={APP.affiliateSignup} className="hover:text-signal">
              Partner account
            </a>
          </li>
        </FooterCol>
        <FooterCol title="Policies">
          {POLICY_DEFAULTS.map((policy) => (
            <li key={policy.slug}>
              <Link to="/legal/$slug" params={{ slug: policy.slug }} className="hover:text-signal">
                {policy.title}
              </Link>
            </li>
          ))}
        </FooterCol>
      </div>
      <div className="border-t border-ink-line">
        <p className="mx-auto flex max-w-7xl flex-wrap gap-x-4 gap-y-1 px-5 py-5 text-xs text-haze sm:px-8">
          <span>© {new Date().getFullYear()} Pipecove</span>
          <span>pipecove.com</span>
          <a href={APP_ORIGIN_LABEL} className="text-paper hover:text-signal">
            app.pipecove.com
          </a>
        </p>
      </div>
    </footer>
  );
}

const APP_ORIGIN_LABEL = "https://app.pipecove.com";

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-haze uppercase">{title}</p>
      <ul className="mt-4 grid gap-2 text-sm">{children}</ul>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="kicker">{kicker}</p>
        <h1 className="display mt-4 max-w-4xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-pretty text-mist">{lede}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function Band({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("border-b border-line", className)}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">{children}</div>
    </section>
  );
}
