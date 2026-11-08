import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { LOCATION_PAGES } from "./lib/locations";

export const dynamic = "force-static";

/**
 * Every route written out so priority and change frequency can be tuned per
 * page. `trailingSlash: true` means every URL must end in "/".
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-31");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...LOCATION_PAGES.map((l) => ({
      url: `${SITE_URL}${l.path}`,
      lastModified: new Date(l.updated),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/terms-and-conditions/`, lastModified: new Date("2026-11-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: new Date("2026-11-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
