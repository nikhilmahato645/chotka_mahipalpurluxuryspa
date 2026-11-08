import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

/**
 * Every route written out so priority and change frequency can be tuned per
 * page. `trailingSlash: true` means every URL must end in "/".
 * When you add a location page, add its line to the location block below.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-31");
  const locationsUpdated = new Date("2026-11-08");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing/`, lastModified, changeFrequency: "weekly", priority: 0.9 },

    // Location pages
    { url: `${SITE_URL}/spa-in-aerocity/`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-vasant-kunj/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-dwarka/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-gurgaon/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-saket/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-south-delhi/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-karol-bagh/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-delhi/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-connaught-place/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-paharganj/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/spa-in-rohini/`, lastModified: locationsUpdated, changeFrequency: "weekly", priority: 0.85 },

    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/terms-and-conditions/`, lastModified: new Date("2026-11-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: new Date("2026-11-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
