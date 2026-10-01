export const SITE_ORIGIN = "https://pipecove.com";
export const APP_ORIGIN = "https://app.pipecove.com";

export const APP = {
  home: `${APP_ORIGIN}/home`,
  login: `${APP_ORIGIN}/login`,
  affiliateLogin: `${APP_ORIGIN}/affiliate-login`,
  affiliateSignup: `${APP_ORIGIN}/affiliate-signup`,
  affiliate: `${APP_ORIGIN}/affiliate`,
} as const;

export const NAV = [
  { to: "/features", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/security", label: "Security" },
  { to: "/partners", label: "Partners" },
] as const;

export const CONTACT = {
  support: "support@pipecove.com",
  privacy: "privacy@pipecove.com",
  billing: "billing@pipecove.com",
  abuse: "abuse@pipecove.com",
  partners: "partners@pipecove.com",
} as const;
