import type { ReactNode } from "react";
import { MapPin, Navigation, PhoneCall } from "lucide-react";
import { DIRECTIONS_URL, FULL_ADDRESS, MAP_EMBED_URL, PHONE_E164 } from "../lib/site";
import NearMe from "./NearMe";

/** Map, address and directions — shared by home, contact and the area page. */
export default function MapBlock({ title, iframeTitle }: { title: ReactNode; iframeTitle: string }) {
  return (
    <section className="section" id="map">
      <div className="shell">
        <div className="section-head center" data-reveal>
          <p className="eyebrow">Find Us</p>
          <h2 className="h2">{title}</h2>
          <p className="address-line">
            <MapPin size={17} aria-hidden="true" />
            {FULL_ADDRESS}
          </p>
        </div>
        <div className="map-frame" data-reveal>
          <iframe
            src={MAP_EMBED_URL}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={iframeTitle}
          />
        </div>
        <div className="actions" style={{ justifyContent: "center" }}>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-copper">
            <Navigation size={16} aria-hidden="true" /> Get Directions
          </a>
          <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
            <PhoneCall size={16} aria-hidden="true" /> Call the Spa
          </a>
        </div>
        <NearMe />
      </div>
    </section>
  );
}
