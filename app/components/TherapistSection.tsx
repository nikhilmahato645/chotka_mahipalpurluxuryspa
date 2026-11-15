"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Img from "./Img";
import Lightbox from "./Lightbox";
import { THERAPISTS, THERAPISTS_PREVIEW } from "../lib/therapists";

/**
 * "Meet our therapists" on every main page: the first ten cards in a grid (one
 * per row on phones) plus a "View more" button. Tapping a card opens it full
 * screen, and the viewer moves through the whole team, not just these ten.
 * The full grid lives on /gallery/ (GallerySection).
 */
export default function TherapistSection({ title = "Meet Our Therapists" }: { title?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const team = THERAPISTS.slice(0, THERAPISTS_PREVIEW);

  return (
    <section className="section section-tight team-top" id="therapists">
      <div className="shell">
        <div className="cat-banner">
          <h2>{title}</h2>
        </div>
        <div className="team-grid">
          {team.map((t, i) => (
            <figure key={t.id} className="cat-tile team-card">
              <button
                type="button"
                className="team-open"
                onClick={() => setActive(i)}
                aria-label={`Open photo of ${t.name} full screen`}
              >
                <span className="cat-tile-media">
                  <Img
                    src={t.photo}
                    alt={`${t.name}, therapist at Mahipalpur Luxury Spa`}
                    width={600}
                    height={750}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </span>
              </button>
              <figcaption className="cat-tile-body">
                <h3>{t.name}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
          <a href="/gallery/" className="btn btn-copper">
            View More <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <Lightbox items={THERAPISTS} index={active} onChange={setActive} />
    </section>
  );
}
