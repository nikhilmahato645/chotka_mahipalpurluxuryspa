import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { jsonLd, pageMeta } from "../lib/site";
import { KAROL_BAGH } from "./data";

const { seo, path } = KAROL_BAGH;

export const metadata: Metadata = pageMeta({
  path,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
});

export default function SpaInKarolBaghPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(KAROL_BAGH)) }} />
      <LocationPage content={KAROL_BAGH} />
    </>
  );
}
