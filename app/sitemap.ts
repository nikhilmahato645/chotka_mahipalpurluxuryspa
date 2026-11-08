import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { LOCATION_PAGES } from "./lib/locations";

export const dynamic = "force-static";

/**
 * Every indexable route. `trailingSlash: true` means every URL must end in "/".
 * Location pages come from app/lib/locations.ts (bump `updated` there when a
 * page's content changes). /gallery/ is left out while it is noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-31");
  const legalUpdated = new Date("2026-11-01");
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
    { url: `${SITE_URL}/terms-and-conditions/`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
