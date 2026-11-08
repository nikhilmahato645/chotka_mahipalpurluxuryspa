import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { jsonLd, pageMeta } from "../lib/site";
import { SOUTH_DELHI } from "./data";

const { seo, path } = SOUTH_DELHI;

export const metadata: Metadata = pageMeta({
  path,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
});

export default function SpaInSouthDelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(SOUTH_DELHI)) }} />
      <LocationPage content={SOUTH_DELHI} />
    </>
  );
}
