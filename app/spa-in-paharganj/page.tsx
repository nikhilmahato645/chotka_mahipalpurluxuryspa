import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { jsonLd, pageMeta } from "../lib/site";
import { PAHARGANJ } from "./data";

const { seo, path } = PAHARGANJ;

export const metadata: Metadata = pageMeta({
  path,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
});

export default function SpaInPaharganjPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(PAHARGANJ)) }} />
      <LocationPage content={PAHARGANJ} />
    </>
  );
}
