"use client";

import { useEffect, useRef, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Img from "./Img";
import type { Therapist } from "../lib/therapists";

/**
 * Full-screen photo viewer for the therapist team. Opens on `index`, moves with
 * the arrow buttons, the keyboard arrows or a swipe, and loops at both ends.
 * Used by the "Meet our therapists" section and by /gallery/.
 */
export default function Lightbox({
  items,
  index,
  onChange,
}: {
  items: Therapist[];
  /** Photo to show, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const total = items.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (dir: 1 | -1) => {
    if (index !== null) onChange((index + dir + total) % total);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const current = index === null ? null : items[index];

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={current && index !== null ? `${current.name}, photo ${index + 1} of ${total}` : "Photo viewer"}
      onClose={() => onChange(null)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onChange(null);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      {current && index !== null ? (
        <>
          <figure className="lightbox-figure" key={current.id}>
            <Img
              src={current.photo}
              alt={`${current.name}, therapist at Mahipalpur Luxury Spa`}
              width={600}
              height={750}
              loading="eager"
            />
            <figcaption>
              <strong>{current.name}</strong>
              <span>
                {index + 1} / {total}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-btn lightbox-close" onClick={() => onChange(null)} aria-label="Close">
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
  );
}
