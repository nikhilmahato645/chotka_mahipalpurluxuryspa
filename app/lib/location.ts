import type { FaqItem } from "../components/Faq";
import type { IconKey } from "../components/icons";
import { LOCAL_BUSINESS, SITE_URL } from "./site";

/** A photo with the size it is rendered at, so the browser reserves its space. */
export type ContentImage = { src: string; alt: string; width: number; height: number };

export type LocationContent = {
  /** URL path, with the trailing slash next.config.js requires. */
  path: string;
  areaName: string;
  breadcrumb: string;

  heroImage: string;
  heroImageAlt: string;
  heroBadge: string;
  h1: { lead: string; em: string; tail?: string };
  heroText: string[];
  heroStats: { value: string; label: string }[];

  intro: { label: string; titleLead: string; titleEm: string; paras: string[] };
  /** Photo beside the intro. */
  introImage: ContentImage;
  highlights: { icon: IconKey; title: string; desc: string }[];
  /** Heading for the treatments grid. Only claim booking data the owner has confirmed. */
  treatmentsHead: { eyebrow: string; titleLead: string; titleEm: string; lede: string };
  /** Each item must match a row in app/pricing/data.ts (name, duration, price). */
  treatments: { icon: IconKey; name: string; desc: string; duration: string; price: string }[];
  nearby: { name: string; distance: string; note: string }[];
  /** Photo beside the landmarks table. */
  nearbyImage: ContentImage;
  gettingHere: { icon: IconKey; title: string; desc: string }[];
  /** Real guest reviews only. Leave empty and the section is not rendered. */
  reviews?: { text: string; author: string; role: string }[];
  mapTitle: { lead: string; em: string };
  /** Area names (from app/lib/locations.ts) to link in the "nearby areas" block. Defaults to the first four others. */
  nearbyAreas?: string[];
  /** Photo at the top of the guide. */
  articleImage: ContentImage;

  /** Long-form guide. Paragraphs may contain `[label](/path/)` links. */
  article: {
    label: string;
    titleLead: string;
    titleEm: string;
    standfirst: string;
    sections: { heading: string; paras: string[] }[];
    takeaways: string[];
  };

  faqs: FaqItem[];
  geo: { lat: number; lng: number };

  seo: { title: string; description: string; ogTitle: string; ogDescription: string; ogImageAlt: string };
};

/**
 * Structured data for an area page. It never emits a second LocalBusiness with
 * the area's address — there is one premises, in Mahipalpur — so the area is
 * modelled as `areaServed` on the real business.
 */
export function locationLd(content: LocationContent) {
  const url = `${SITE_URL}${content.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Spa & Massage in ${content.areaName}`,
      serviceType: "Spa and massage therapy",
      url,
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: {
        "@type": "Place",
        name: `${content.areaName}, New Delhi`,
        geo: { "@type": "GeoCoordinates", latitude: content.geo.lat, longitude: content.geo.lng },
        containedInPlace: { "@type": "City", name: "New Delhi" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Treatments booked from ${content.areaName}`,
        itemListElement: content.treatments.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t.name, description: t.desc },
          price: t.price.replace(/[^\d]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: content.breadcrumb, item: url },
      ],
    },
  ];
}
