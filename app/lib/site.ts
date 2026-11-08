/**
 * Single source of truth for business facts used in copy, `tel:` links,
 * WhatsApp links and JSON-LD. Change the phone or address here and every page
 * and every structured-data block updates at once.
 */

/** Live domain, no trailing slash. `trailingSlash: true` means every path ends in "/". */
export const SITE_URL = "https://mahipalpurluxuryspa.in";
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
export const BUSINESS_NAME = "Mahipalpur Luxury Spa";

/** Sister site run by the same business (also the domain on EMAIL). */
export const PARTNER_URL = "https://mahipalpurspaservicecentre.com";
export const PARTNER_HOST = PARTNER_URL.replace(/^https?:\/\//, "");
export const PARTNER_NAME = "Mahipalpur Spa Service Centre";

export const PHONE_DISPLAY = "+91 8084341382";
export const PHONE_E164 = "+918084341382";
export const PHONE_DIGITS = "918084341382";
export const EMAIL = "mahipalpurluxuryspa@gmail.com";

export const ADDRESS = {
  street: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
  locality: "New Delhi",
  region: "Delhi",
  postalCode: "110037",
  country: "IN",
  lat: 28.5432,
  lng: 77.1234,
} as const;

export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.locality} — ${ADDRESS.postalCode}`;

export const AREAS_SERVED = [
  "Mahipalpur",
  "Aerocity",
  "Defence Colony",
  "South Delhi",
  "Dwarka",
  "Vasant Kunj",
  "Vasant Vihar",
  "Rajokri",
  "Saket",
  "Hauz Khas",
  "Green Park",
  "Karol Bagh",
  "Connaught Place",
  "Paharganj",
  "Rohini",
  "Gurugram",
  "IGI Airport, New Delhi",
];

export const SERVICE_PINCODES = [
  "110037",
  "110001",
  "110005",
  "110011",
  "110048",
  "110049",
  "110057",
  "110067",
  "110070",
  "110075",
  "110089",
  "110097",
  "122001",
  "122002",
  "121001",
  "201301",
  "201002",
  "201014",
];

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Defence+Enclave,+Mahipalpur,+New+Delhi+110037";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

/** Builds a pre-filled WhatsApp link. */
export const waLink = (message: string) =>
  `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = waLink(
  "Hello! I would like to book an appointment at Mahipalpur Luxury Spa. Please share availability and pricing."
);

/** Shared robots directive for every indexable page. */
export const INDEX_ROBOTS = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Builds the full Metadata object for a page, so every route gets the same
 * robots, Open Graph, Twitter and canonical shape.
 */
export function pageMeta({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImageAlt,
  twitterTitle,
  twitterDescription,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageAlt: string;
  twitterTitle?: string;
  twitterDescription?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    robots: INDEX_ROBOTS,
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: BUSINESS_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogImageAlt }],
      locale: "en_IN",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: twitterTitle ?? ogTitle ?? title,
      description: twitterDescription ?? ogDescription ?? description,
      images: [OG_IMAGE],
    },
    alternates: { canonical: url },
  };
}

/** `LocalBusiness` node, emitted once in the root layout and reused by `@id`. */
export const LOCAL_BUSINESS = {
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  image: OG_IMAGE,
  logo: `${SITE_URL}/logo.svg`,
  url: `${SITE_URL}/`,
  telephone: PHONE_E164,
  email: EMAIL,
  priceRange: "₹2000-₹15000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ADDRESS.lat,
    longitude: ADDRESS.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    ...AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    ...SERVICE_PINCODES.map((postalCode) => ({
      "@type": "PostalCodeSpecification",
      postalCode,
      addressCountry: "IN",
    })),
  ],
  sameAs: [`${PARTNER_URL}/`],
} as const;

/*
 * No `aggregateRating` on purpose: Google treats ratings a business publishes
 * about itself as self-serving and ignores or penalises them.
 */

export const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: BUSINESS_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
} as const;

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.svg`,
  image: OG_IMAGE,
  telephone: PHONE_E164,
  email: EMAIL,
  address: LOCAL_BUSINESS.address,
  sameAs: [`${PARTNER_URL}/`],
} as const;

/** BreadcrumbList for an inner page — Home › <label>. */
export function breadcrumbLd(label: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };
}

/** FAQPage node from a question/answer list. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialises one or more JSON-LD nodes. `<` is escaped so text can never close the script tag. */
export const jsonLd = (...nodes: unknown[]) =>
  JSON.stringify(nodes.length === 1 ? nodes[0] : nodes).replace(/</g, "\\u003c");

/** Main navigation — also used by the footer. */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
