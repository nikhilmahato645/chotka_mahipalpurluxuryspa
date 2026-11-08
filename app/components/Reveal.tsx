"use client";

import { useEffect } from "react";

/** Fades `[data-reveal]` elements in as they enter the viewport. */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Number(el.dataset.revealDelay || 0)}ms`;
          el.setAttribute("data-revealed", "");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
