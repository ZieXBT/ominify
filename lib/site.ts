// Canonical origin for this deployment. Override per-environment so preview
// and duplicate deployments don't advertise themselves as the real site.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.omnifycrm.com"
).replace(/\/$/, "");
