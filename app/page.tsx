import type { Metadata } from "next";
import Home from "./home/Home";
import { HOME_FAQS } from "./home/data";
import { ORGANIZATION_LD, WEBSITE_LD, faqLd, jsonLd, pageMeta } from "./lib/site";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "Russian Spa in Mahipalpur & Aerocity | Russian Spa Centre",
  description:
    "Authentic Russian Banya, deep tissue, Swedish and hot stone massage in Mahipalpur — 10 min from Delhi Airport, 5 min from Aerocity. Open 24/7.",
  ogTitle: "Russian Spa Centre | Banya & Relaxation Massage near Delhi Airport",
  ogDescription:
    "Book a traditional Russian Banya or relaxation massage in Mahipalpur, close to Aerocity and IGI Airport. Certified therapists, private rooms, open 24 hours.",
  ogImageAlt: "Russian Spa Centre — Russian Banya and body massage in Mahipalpur, near Aerocity",
  twitterTitle: "Russian Spa Centre | Mahipalpur & Aerocity",
  twitterDescription: "Russian Banya and body massage 10 min from Delhi Airport. Open 24/7.",
});

export default function HomePage() {
  return (
    <>
      {/* Site and company entities; the premises itself is the LocalBusiness in the layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(WEBSITE_LD, ORGANIZATION_LD, faqLd(HOME_FAQS)) }}
      />
      <Home />
    </>
  );
}
