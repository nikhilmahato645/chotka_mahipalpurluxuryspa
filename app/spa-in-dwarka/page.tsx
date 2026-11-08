import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { jsonLd, pageMeta } from "../lib/site";
import { DWARKA } from "./data";

const { seo, path } = DWARKA;

export const metadata: Metadata = pageMeta({
  path,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
});

export default function SpaInDwarkaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(DWARKA)) }} />
      <LocationPage content={DWARKA} />
    </>
  );
}
