"use client";

import { useState } from "react";
import Img from "./Img";
import Lightbox from "./Lightbox";
import { THERAPISTS } from "../lib/therapists";

/**
 * /gallery/: the whole team in a bento grid (big, tall, wide and single tiles),
 * with a lightbox that opens on click and moves with arrows, keys or swipe.
 */

type Size = "big" | "tall" | "wide" | "sq";

/* 14 tiles that fill exactly 6 rows of a 4-column grid (and 12 rows of 2 columns). */
const PATTERN: Size[] = ["big", "sq", "tall", "sq", "sq", "wide", "sq", "tall", "sq", "big", "sq", "wide", "sq", "sq"];

function sizeFor(i: number, total: number): Size {
  const full = Math.floor(total / PATTERN.length) * PATTERN.length;
  if (i < full) return PATTERN[i % PATTERN.length];
  // Leftover tiles: one big + singles when that fills whole rows, else singles.
  const rest = total - full;
  return i === full && rest >= 5 && rest % 4 === 1 ? "big" : "sq";
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function GallerySection({ title = "Our Therapists" }: { title?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const total = THERAPISTS.length;

  return (
    <section className="section section-tight team-gallery" id="therapists">
      <div className="shell">
        <div className="cat-banner" data-reveal>
          <h1>{title}</h1>
        </div>
        <p className="gallery-intro" data-reveal>
          <span className="gallery-count">{total} therapists</span>
          Trained in Russian Banya, Swedish, deep tissue and more. Tap a photo to see it bigger.
        </p>

        <ul className="bento">
          {THERAPISTS.map((t, i) => (
            <li
              key={t.id}
              className={`bento-item bento-${sizeFor(i, total)}`}
              data-reveal
              data-reveal-delay={(i % 4) * 80}
            >
              <button
                type="button"
                className="bento-frame"
                onClick={() => setActive(i)}
                aria-label={`Open photo of ${t.name}`}
              >
                <span className="bento-media">
                  <Img
                    src={t.photo}
                    alt={`${t.name}, therapist at Mahipalpur Luxury Spa`}
                    width={600}
                    height={750}
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                  <span className="bento-shine" aria-hidden="true" />
                  <span className="bento-caption">
                    <strong>{t.name}</strong>
                    <span className="bento-num">#{pad(i + 1)}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox items={THERAPISTS} index={active} onChange={setActive} />
    </section>
  );
}
