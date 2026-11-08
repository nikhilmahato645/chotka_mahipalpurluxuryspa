import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import GallerySection from "../components/GallerySection";
import { breadcrumbLd, jsonLd, pageMeta } from "../lib/site";

const meta = pageMeta({
  path: "/gallery/",
  title: "Our Therapists & Gallery | Mahipalpur Luxury Spa",
  description:
    "Meet the therapist team at Mahipalpur Luxury Spa, Defence Enclave, New Delhi: trained in Russian Banya, Swedish, deep tissue and more. Open 24/7.",
  ogImageAlt: "The therapist team at Mahipalpur Luxury Spa",
});

/*
 * Kept out of Google (noindex) while the photos are placeholders. Once the real
 * team photos are in, delete the `robots` line below and add /gallery/ to app/sitemap.ts.
 */
export const metadata: Metadata = { ...meta, robots: { index: false, follow: true } };

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd("Gallery", "/gallery/")) }} />
      <div className="shell" style={{ paddingTop: 28 }}>
        <Breadcrumb items={[{ label: "Gallery" }]} />
      </div>
      <GallerySection title="Our Therapists" />
    </>
  );
}
