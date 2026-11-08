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
  /** One sentence for the "nearby areas" cards on other location pages. */
  blurb: string;
  /** Extra words the header search matches on. */
  keywords: string;
  /** Other names for the area used elsewhere on the site (e.g. the home drive-time table). */
  matches?: string[];
  /** Last real content change, for the sitemap (YYYY-MM-DD). */
  updated: string;
};

export const LOCATION_PAGES: LocationLink[] = [
  {
    areaName: "Aerocity",
    path: "/spa-in-aerocity/",
    label: "Spa in Aerocity",
    meta: "5 min from the hotels",
    blurb: "Five minutes across NH-8 from the hotel strip, open at every hour.",
    keywords: "aerocity hotel jw marriott pullman andaz roseate igi airport terminal t3 t1 layover location near",
    updated: "2026-10-31",
  },
  {
    areaName: "Vasant Kunj",
    path: "/spa-in-vasant-kunj/",
    label: "Spa in Vasant Kunj",
    meta: "12–15 min drive",
    blurb: "A 12–15 minute drive along Vasant Kunj Road.",
    keywords: "vasant kunj sector a b c d fortis promenade ambience emporio kishangarh location near",
    updated: "2026-11-08",
  },
  {
    areaName: "Dwarka",
    path: "/spa-in-dwarka/",
    label: "Spa in Dwarka",
    meta: "15–18 min drive",
    blurb: "15–18 minutes from the Dwarka sectors via the Dwarka Link Road.",
    keywords: "dwarka sector 10 21 6 12 23 dwarka link road vegas mall yashobhoomi location near",
    updated: "2026-11-08",
  },
  {
    areaName: "Gurgaon",
    path: "/spa-in-gurgaon/",
    label: "Spa in Gurgaon",
    meta: "Around 20 min via NH-8",
    blurb: "Around 20 minutes up NH-8 from Gurugram, with group and GST billing.",
    keywords: "gurgaon gurugram cyber city cyberhub udyog vihar mg road ambience iffco chowk location near",
    matches: ["Gurugram"],
    updated: "2026-11-08",
  },
  {
    areaName: "Saket",
    path: "/spa-in-saket/",
    label: "Spa in Saket",
    meta: "22–25 min drive",
    blurb: "22–25 minutes from the Saket malls and District Centre.",
    keywords: "saket select citywalk dlf avenue district centre max hospital location near",
    matches: ["Saket & Hauz Khas"],
    updated: "2026-11-08",
  },
  {
    areaName: "South Delhi",
    path: "/spa-in-south-delhi/",
    label: "Spa in South Delhi",
    meta: "From 22 min drive",
    blurb: "Hauz Khas, Green Park, Malviya Nagar and nearby, from about 22 minutes.",
    keywords: "south delhi hauz khas green park malviya nagar greater kailash gk defence colony mehrauli location near",
    updated: "2026-11-08",
  },
  {
    areaName: "Karol Bagh",
    path: "/spa-in-karol-bagh/",
    label: "Spa in Karol Bagh",
    meta: "About 25 min drive",
    blurb: "About 25 minutes off-peak, by road via Dhaula Kuan.",
    keywords: "karol bagh ajmal khan road gaffar market pusa road rajendra place central delhi location near",
    updated: "2026-11-08",
  },
  {
    areaName: "Delhi",
    path: "/spa-in-delhi/",
    label: "Spa in Delhi",
    meta: "One spa, all of Delhi",
    blurb: "Where we are in the city, and how to reach us from every side of Delhi.",
    keywords: "delhi new delhi ncr city russian spa mahipalpur defence enclave address map directions location near me",
    updated: "2026-11-08",
  },
  {
    areaName: "Connaught Place",
    path: "/spa-in-connaught-place/",
    label: "Spa in Connaught Place",
    meta: "30–45 min drive",
    blurb: "30–45 minutes by road, or the Airport Express from Shivaji Stadium.",
    keywords: "connaught place cp rajiv chowk janpath barakhamba road shivaji stadium central delhi location near",
    matches: ["CP"],
    updated: "2026-11-08",
  },
  {
    areaName: "Paharganj",
    path: "/spa-in-paharganj/",
    label: "Spa in Paharganj",
    meta: "Airport Express + auto",
    blurb: "From New Delhi station: the Airport Express to Aerocity, then five minutes by auto.",
    keywords: "paharganj main bazar new delhi railway station rk ashram marg backpacker traveller location near",
    updated: "2026-11-08",
  },
  {
    areaName: "Rohini",
    path: "/spa-in-rohini/",
    label: "Spa in Rohini",
    meta: "40–60 min drive",
    blurb: "A longer trip from north-west Delhi, best planned as a half-day visit.",
    keywords: "rohini sector 3 7 9 10 11 13 14 rithala dc chowk japanese park north west delhi location near",
    updated: "2026-11-08",
  },
];

/** Path of an area's landing page, if it has one. */
export const locationPath = (name: string) =>
  LOCATION_PAGES.find((l) => l.areaName === name || l.matches?.includes(name))?.path;

/** Registry entries for the given area names, in the order given. */
export const locationsByName = (names: string[]) =>
  names.map((n) => LOCATION_PAGES.find((l) => l.areaName === n)).filter((l): l is LocationLink => Boolean(l));
