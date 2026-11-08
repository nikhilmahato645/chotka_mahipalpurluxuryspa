import type { Metadata } from "next";
import Services from "./Services";
import { CATALOG, SERVICE_FAQS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/services/";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Spa & Massage Services in Mahipalpur | Mahipalpur Luxury Spa",
  description:
    "Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology and the Russian Banya — with durations and prices, in Mahipalpur. Open 24 hours.",
  ogDescription:
    "20+ treatments: Russian Banya with venik, deep tissue, Thai, aromatherapy, hot stone, couples suites and airport express sessions. Open 24/7 near IGI Airport.",
  ogImageAlt: "Spa and massage services at Mahipalpur Luxury Spa",
  twitterDescription: "Russian Banya, deep tissue, Thai, aromatherapy, couples spa. Certified therapists, open 24/7.",
});

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "Spa & Massage Services in Mahipalpur",
  serviceType: "Spa and massage therapy",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": LOCAL_BUSINESS["@id"] },
  areaServed: LOCAL_BUSINESS.areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Spa treatments",
    itemListElement: CATALOG.map(([name, description, price]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, description },
      price: String(price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${PATH}`,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(SERVICE_LD, faqLd(SERVICE_FAQS), breadcrumbLd("Services", PATH)) }}
      />
      <Services />
    </>
  );
}
