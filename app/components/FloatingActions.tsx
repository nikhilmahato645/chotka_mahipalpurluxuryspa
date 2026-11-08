"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Img from "./Img";
import { PHONE_E164, waLink } from "../lib/site";

const WHATSAPP_URL = waLink("Hello, I want to book a spa appointment at Mahipalpur Luxury Spa.");
const ICONS = "/assets/call_whatshap";

/** Bottom-right stack: back-to-top (after scrolling), WhatsApp and call. */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating">
      <button
        type="button"
        className={`fab fab-top${visible ? " is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUp size={22} aria-hidden="true" />
      </button>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-icon"
        aria-label="Chat with Mahipalpur Luxury Spa on WhatsApp"
      >
        <Img src={`${ICONS}/whatshap.png`} alt="" width={56} height={56} loading="eager" />
      </a>
      <a href={`tel:${PHONE_E164}`} className="fab fab-icon" aria-label="Call Mahipalpur Luxury Spa">
        <Img src={`${ICONS}/call.png`} alt="" width={56} height={56} loading="eager" />
      </a>
    </div>
  );
}
