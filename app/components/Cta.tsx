import { MessageCircle, PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";

/** Closing booking band used at the bottom of every page. */
export default function Cta({
  label,
  title,
  text,
  buttonLabel,
  message,
}: {
  label: string;
  title: string;
  text: string;
  buttonLabel: string;
  message: string;
}) {
  return (
    <section className="cta section">
      <div className="shell" data-reveal>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="actions" style={{ justifyContent: "center" }}>
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <MessageCircle size={18} aria-hidden="true" /> {buttonLabel}
          </a>
          <a href={`tel:${PHONE_E164}`} className="btn btn-light">
            <PhoneCall size={16} aria-hidden="true" /> Call {PHONE_DISPLAY}
          </a>
        </div>
        <p className="cta-call">Open 24 hours · 7 days a week · 365 days a year</p>
      </div>
    </section>
  );
}
