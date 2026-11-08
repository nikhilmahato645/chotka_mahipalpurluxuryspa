import type { Metadata } from "next";
import Pricing from "./Pricing";
import { PRICING_FAQS, RATE_GROUPS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/pricing/";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Spa & Body Massage Prices in Mahipalpur | Russian Spa Centre",
  description:
    "Spa and body massage price list for Mahipalpur: massage from ₹2,800, Russian Banya ₹3,500, couples suite ₹7,500. Taxes included, no night surcharge.",
  ogTitle: "Spa & Massage Price List | Russian Spa Centre Mahipalpur",
  ogDescription:
    "Body massage from ₹2,800 · Russian Banya ₹3,500 · Couples suite ₹7,500. Taxes included, no hidden charges. Open 24/7 near IGI Airport.",
  ogImageAlt: "Spa and massage price list at Russian Spa Centre, Mahipalpur",
  twitterTitle: "Spa & Massage Price List | Russian Spa Centre",
  twitterDescription: "Massage from ₹2,800, Banya ₹3,500, couples ₹7,500. Taxes included, no hidden fees.",
});

const PRICE_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}${PATH}#rates`,
  name: "Russian Spa Centre — Treatment Rate Card",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": LOCAL_BUSINESS["@id"] },
  itemListElement: RATE_GROUPS.flatMap((group) =>
    group.rates.map((rate) => ({
      "@type": "Offer",
      name: rate.name,
      description: `${rate.desc} — ${rate.duration}`,
      price: String(rate.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${PATH}#${group.id}`,
      category: group.title,
      itemOffered: { "@type": "Service", name: rate.name, description: rate.desc },
    }))
  ),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(PRICE_LD, faqLd(PRICING_FAQS), breadcrumbLd("Pricing", PATH)) }}
      />
      <Pricing />
    </>
  );
}
