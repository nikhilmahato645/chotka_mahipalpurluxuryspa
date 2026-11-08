import type { Metadata } from "next";
import About from "./About";
import { OG_IMAGE, SITE_URL, breadcrumbLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/about/";
const DESCRIPTION =
  "Who runs Mahipalpur Luxury Spa, how the therapists are trained, the hygiene routine between guests, and what happens on a first visit.";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "About Mahipalpur Luxury Spa | Mahipalpur, New Delhi",
  description: DESCRIPTION,
  ogTitle: "About Mahipalpur Luxury Spa | Best Spa in Mahipalpur, Aerocity & Dwarka",
  ogDescription:
    "10+ years of excellence in Mahipalpur, Aerocity, Dwarka & near IGI Airport. Certified therapists, authentic Russian Banya, open 24/7.",
  ogImageAlt: "Mahipalpur Luxury Spa About Us - Best Spa in Mahipalpur Aerocity Dwarka",
  twitterDescription: "Delhi NCR's most trusted spa. 10+ years excellence. Open 24/7 near IGI Airport.",
});

/** Points at the layout's business `@id` rather than declaring a second business. */
const ABOUT_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  name: "About Mahipalpur Luxury Spa",
  url: `${SITE_URL}${PATH}`,
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
  primaryImageOfPage: OG_IMAGE,
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(ABOUT_LD, breadcrumbLd("About Us", PATH)) }}
      />
      <About />
    </>
  );
}
