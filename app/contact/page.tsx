import type { Metadata } from "next";
import Contact from "./Contact";
import { CONTACT_FAQS } from "./data";
import { DIRECTIONS_URL, LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/contact/";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Contact & Booking | Russian Spa Centre, Mahipalpur",
  description:
    "Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. Call or WhatsApp any hour to book a body massage or spa treatment. Free parking.",
  ogTitle: "Contact Russian Spa Centre Mahipalpur | Open 24/7",
  ogDescription:
    "Defence Enclave, Mahipalpur, New Delhi 110037. Call +91 8084341382 at any hour. Free parking, 10 min from IGI Airport T3.",
  ogImageAlt: "Contact Russian Spa Centre, Mahipalpur, New Delhi",
  twitterTitle: "Contact Russian Spa Centre Mahipalpur",
  twitterDescription: "Call +91 8084341382 any hour. Defence Enclave, Mahipalpur — 10 min from IGI Airport.",
});

const CONTACT_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${PATH}#contact`,
  name: "Contact Russian Spa Centre",
  url: `${SITE_URL}${PATH}`,
  description:
    "Phone, WhatsApp, email, address, opening hours and directions for Russian Spa Centre in Mahipalpur, New Delhi.",
  mainEntity: {
    ...LOCAL_BUSINESS,
    hasMap: DIRECTIONS_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: LOCAL_BUSINESS.telephone,
        contactType: "reservations",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Russian"],
        hoursAvailable: LOCAL_BUSINESS.openingHoursSpecification,
      },
      {
        "@type": "ContactPoint",
        email: LOCAL_BUSINESS.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(CONTACT_LD, faqLd(CONTACT_FAQS), breadcrumbLd("Contact", PATH)) }}
      />
      <Contact />
    </>
  );
}
