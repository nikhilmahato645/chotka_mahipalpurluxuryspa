import type { Metadata } from "next";
import Home from "./home/Home";
import { HOME_FAQS } from "./home/data";
import { RATE_GROUPS } from "./pricing/data";
import { ADDRESS, LOCAL_BUSINESS, ORGANIZATION_LD, SITE_URL, WEBSITE_LD, faqLd, jsonLd, pageMeta } from "./lib/site";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "Best Body Massage & Spa in Mahipalpur | Mahipalpur Luxury Spa",
  description:
    "Best body massage and spa in Mahipalpur, 5 min from Aerocity and 10 min from Delhi Airport. Authentic Russian spa with Banya, private rooms, open 24/7.",
  ogTitle: "Body Massage & Spa in Mahipalpur | 5 Min From Aerocity",
  ogDescription:
    "Body massage and spa in Mahipalpur, close to Aerocity and IGI Airport, plus an authentic Russian spa with Banya. Certified therapists, private rooms, open 24 hours.",
  ogImageAlt: "Body massage and spa at Mahipalpur Luxury Spa, Defence Enclave, Mahipalpur",
  twitterTitle: "Best Body Massage & Spa in Mahipalpur",
  twitterDescription: "Body massage, spa and Russian Banya 10 min from Delhi Airport. Open 24/7.",
});

/**
 * The home page is also the Mahipalpur page (there is no /spa-in-mahipalpur/),
 * so it carries the Mahipalpur Service node that area pages carry for theirs.
 */
const MAHIPALPUR_SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#mahipalpur-service`,
  name: "Body Massage & Spa in Mahipalpur",
  serviceType: "Body massage and spa therapy",
  url: `${SITE_URL}/`,
  provider: { "@id": LOCAL_BUSINESS["@id"] },
  areaServed: {
    "@type": "Place",
    name: "Mahipalpur, New Delhi",
    geo: { "@type": "GeoCoordinates", latitude: ADDRESS.lat, longitude: ADDRESS.lng },
    containedInPlace: { "@type": "City", name: "New Delhi" },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Body massage in Mahipalpur",
    itemListElement: RATE_GROUPS[0].rates.map((rate) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: rate.name, description: `${rate.desc} — ${rate.duration}` },
      price: String(rate.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing/`,
    })),
  },
};

export default function HomePage() {
  return (
    <>
      {/* Site and company entities; the premises itself is the LocalBusiness in the layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(WEBSITE_LD, ORGANIZATION_LD, MAHIPALPUR_SERVICE_LD, faqLd(HOME_FAQS)) }}
      />
      <Home />
    </>
  );
}
