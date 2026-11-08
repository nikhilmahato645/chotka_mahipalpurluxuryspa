import { ArrowRight, Car, Clock, Mail, MapPin, MessageCircle, Navigation, Phone, PhoneCall, Route, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Img from "../components/Img";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import MapBlock from "../components/MapBlock";
import BookingForm from "./BookingForm";
import {
  AREAS_SERVED,
  DIRECTIONS_URL,
  EMAIL,
  FULL_ADDRESS,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_PINCODES,
  waLink,
} from "../lib/site";
import { CONTACT_FAQS, HERO_STATS, REACH_US } from "./data";

const A = "/assets/contact";

const CHANNELS = [
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    note: "Answered 24 hours a day, including holidays",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `Message ${PHONE_DISPLAY}`,
    href: waLink("Hello! I'd like to book an appointment at Mahipalpur Luxury Spa."),
    external: true,
    note: "Typical reply in under five minutes",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Corporate bookings, invoices and GST documentation",
  },
  {
    icon: MapPin,
    label: "Address",
    value: FULL_ADDRESS,
    note: "On the Mahipalpur side of NH-8, adjoining Aerocity",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Open 24 hours · 7 days a week",
    note: "365 days a year, with no night surcharge",
  },
  {
    icon: Car,
    label: "Parking",
    value: "Free on-site parking",
    note: "No time limit for the duration of your treatment",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        badge={
          <>
            <Sparkles size={13} aria-hidden="true" /> Open 24 Hours · Every Day
          </>
        }
        title={
          <>
            <em>Contact</em> Mahipalpur Luxury Spa
          </>
        }
        text={[
          "Call, message or walk in — we answer at every hour of the day and night. We're at Defence Enclave in Mahipalpur, ten minutes from IGI Airport Terminal 3 and five minutes from the Aerocity hotels, with free parking on site.",
        ]}
        actions={
          <>
            <a href={`tel:${PHONE_E164}`} className="btn btn-copper">
              <PhoneCall size={15} aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Navigation size={15} aria-hidden="true" /> Get Directions
            </a>
          </>
        }
        stats={HERO_STATS}
        image={`${A}/hero-contact-spa.jpg`}
        imageAlt="Calm bath suite at Mahipalpur Luxury Spa"
      />

      {/* CHANNELS + FORM */}
      <section className="section" id="reach-us">
        <div className="shell split split-top">
          <div data-reveal>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="h2">
              Every Way to <em>Reach Us</em>
            </h2>
            <p className="lede" style={{ margin: "16px 0 30px" }}>
              The fastest route is WhatsApp or a phone call — both are answered within minutes at any hour. Email is
              best for corporate enquiries and invoices.
            </p>
            <div>
              {CHANNELS.map((c) => (
                <div key={c.label} className="channel">
                  <span className="icon-ring">
                    <c.icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{c.label}</h3>
                    {c.href ? (
                      <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {c.value}
                      </a>
                    ) : (
                      <p>{c.value}</p>
                    )}
                    <small>{c.note}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card" id="book" data-reveal>
            <h2>Request an Appointment</h2>
            <p>
              Fill this in and we&apos;ll open WhatsApp with your details ready to send. You can edit the message
              before it goes — nothing is submitted until you press send there.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* TRAVEL TIMES */}
      <section className="section bg-sand" id="directions">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Travel Times</p>
            <h2 className="h2">
              How Long It Takes to <em>Get Here</em>
            </h2>
            <p className="lede">
              Typical off-peak driving times to Defence Enclave, Mahipalpur. Add 10–15 minutes in rush hour.
            </p>
          </div>
          <div className="grid-3">
            {REACH_US.map((row, i) => (
              <article key={row.from} className="card" data-reveal data-reveal-delay={(i % 3) * 90}>
                <span className="icon-ring">
                  <Route size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3>{row.from}</h3>
                <p>{row.note}</p>
                <p className="meta">
                  <Clock size={13} aria-hidden="true" /> {row.time} by road
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MapBlock
        title={
          <>
            Visit <em>Mahipalpur Luxury Spa</em>
          </>
        }
        iframeTitle="Map showing Mahipalpur Luxury Spa at Defence Enclave, Mahipalpur, New Delhi"
      />

      {/* SERVICE AREA */}
      <section className="section section-tight" id="service-area">
        <div className="shell split">
          <div data-reveal>
            <p className="eyebrow">Where We Take Bookings From</p>
            <h2 className="h2">
              Areas &amp; Pincodes <em>We Serve</em>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Treatments all take place at the Mahipalpur premises — there is no second branch. These are the
              catchments guests most often travel from.
            </p>
            <div className="pills" style={{ marginTop: 24 }}>
              <a href="/spa-in-aerocity/" className="pill">
                <MapPin size={14} aria-hidden="true" /> Spa in Aerocity <ArrowRight size={13} aria-hidden="true" />
              </a>
              {AREAS_SERVED.filter((a) => a !== "Aerocity").map((area) => (
                <span key={area} className="pill">
                  <MapPin size={14} aria-hidden="true" /> {area}
                </span>
              ))}
            </div>
            <p className="note">
              <strong>Pincodes covered:</strong> {SERVICE_PINCODES.join(" · ")}. We also take bookings from Defence
              Colony and the wider South Delhi, Gurugram, Faridabad, Noida and Ghaziabad. If your pincode is not
              listed, call or message — the spa is open every hour and travel time is usually the only question.
            </p>
          </div>
          <div className="media-frame" data-reveal>
            <div className="arch" style={{ maxWidth: 440, marginLeft: "auto" }}>
              <Img src={`${A}/booking-candles.jpg`} alt="Candles and an aroma diffuser in the relaxation lounge" width={600} height={750} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sand" id="faq">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="h2">
              Before You <em>Visit</em>
            </h2>
          </div>
          <Faq faqs={CONTACT_FAQS} />
        </div>
      </section>

      <Cta
        label="We're Awake"
        title="Whatever the Hour, We'll Pick Up"
        text="3 AM after a delayed flight or 6 AM before a long day — the phone is answered and a therapist is ready."
        buttonLabel="Message on WhatsApp"
        message="Hello! I'd like to book an appointment at Mahipalpur Luxury Spa."
      />
    </>
  );
}
