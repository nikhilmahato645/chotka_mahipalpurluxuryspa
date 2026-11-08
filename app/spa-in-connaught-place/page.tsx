import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { jsonLd, pageMeta } from "../lib/site";
import { CONNAUGHT_PLACE } from "./data";

const { seo, path } = CONNAUGHT_PLACE;

export const metadata: Metadata = pageMeta({
  path,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
});

export default function SpaInConnaughtPlacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(CONNAUGHT_PLACE)) }} />
      <LocationPage content={CONNAUGHT_PLACE} />
    </>
  );
}
