/**
 * Every area landing page, in one list. The sitemap, the header search, the
 * footer, the home page drive-time table and each page's "nearby areas" block
 * all read from here, so a new location page needs one entry.
 */
export type LocationLink = {
  areaName: string;
  /** With the trailing slash next.config.js requires. */
  path: string;
  label: string;
  /** Short line shown next to the label in the header search. */
  meta: string;
  /** Extra words the header search matches on. */
  keywords: string;
  /** Last real content change, for the sitemap (YYYY-MM-DD). */
  updated: string;
};

export const LOCATION_PAGES: LocationLink[] = [
  {
    areaName: "Aerocity",
    path: "/spa-in-aerocity/",
    label: "Spa in Aerocity",
    meta: "5 min from the hotels",
    keywords: "aerocity hotel jw marriott pullman andaz roseate location near",
    updated: "2026-10-31",
  },
  {
    areaName: "Vasant Kunj",
    path: "/spa-in-vasant-kunj/",
    label: "Spa in Vasant Kunj",
    meta: "12–15 min drive",
    keywords: "vasant kunj sector a b c d fortis promenade ambience emporio kishangarh location near",
    updated: "2026-11-08",
  },
];

/** Path of an area's landing page, if it has one. */
export const locationPath = (areaName: string) => LOCATION_PAGES.find((l) => l.areaName === areaName)?.path;
