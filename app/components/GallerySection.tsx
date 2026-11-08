"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Img from "./Img";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const total = THERAPISTS.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const step = (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + total) % total));

  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const current = active === null ? null : THERAPISTS[active];

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

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current ? `${current.name}, photo ${active + 1} of ${total}` : "Photo viewer"}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {current ? (
          <>
            <figure className="lightbox-figure" key={current.id}>
              <Img src={current.photo} alt={`${current.name}, therapist at Mahipalpur Luxury Spa`} width={600} height={750} loading="eager" />
              <figcaption>
                <strong>{current.name}</strong>
                <span>
                  {active + 1} / {total}
                </span>
              </figcaption>
            </figure>
            <button type="button" className="lightbox-btn lightbox-close" onClick={() => setActive(null)} aria-label="Close">
              <X size={22} aria-hidden="true" />
            </button>
            <button type="button" className="lightbox-btn lightbox-prev" onClick={() => step(-1)} aria-label="Previous photo">
              <ChevronLeft size={26} aria-hidden="true" />
            </button>
            <button type="button" className="lightbox-btn lightbox-next" onClick={() => step(1)} aria-label="Next photo">
              <ChevronRight size={26} aria-hidden="true" />
            </button>
          </>
        ) : null}
      </dialog>
    </section>
  );
}
