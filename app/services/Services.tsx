import { ArrowRight, Check, Clock, MessageCircle, PhoneCall } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Img from "../components/Img";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import { ICONS, type IconKey } from "../components/icons";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import {
  ASSURANCES,
  HERO_STATS,
  INCLUDED,
  MASSAGE,
  RITUALS,
  SERVICE_FAQS,
  SIGNATURE,
  STEPS,
  slug,
} from "./data";

const A = "/assets/services";

type Product = {
  icon: IconKey;
  name: string;
  desc: string;
  duration: string;
  price: string;
  img: string;
  alt: string;
  tags?: readonly string[];
};

/** Product-style card: photo with duration chip, bold name, description, price row, two actions. */
function ProductCard({ item, delay }: { item: Product; delay: number }) {
  const Icon = ICONS[item.icon];
  return (
    <article id={slug(item.name)} className="pcard" data-reveal data-reveal-delay={delay}>
      <div className="pcard-media">
        <Img src={item.img} alt={`${item.name} at Mahipalpur Luxury Spa — ${item.alt}`} width={600} height={800} />
        <span className="pcard-chip">
          <Icon size={13} strokeWidth={2} aria-hidden="true" /> {item.duration}
        </span>
      </div>
      <div className="pcard-body">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        {item.tags ? (
          <div className="tags">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className="price-row">
          <strong>{item.price}</strong>
          <span className="off">(15% OFF 1st visit)</span>
        </p>
        <div className="pcard-actions">
          <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
            <PhoneCall size={13} aria-hidden="true" /> Call
          </a>
          <a
            href={waLink(`Hi! I'd like to book the ${item.name} at Mahipalpur Luxury Spa.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-copper"
          >
            <MessageCircle size={13} aria-hidden="true" /> Book<span className="vh"> {item.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <>
      {/* LISTING HEAD */}
      <section className="shell" style={{ paddingTop: 22, paddingBottom: 18 }}>
        <Breadcrumb items={[{ label: "Services" }]} />
        <h1 style={{ margin: "14px 0 8px", fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)", fontWeight: 800 }}>
          Spa &amp; Massage <em>Services</em> in Mahipalpur{" "}
          <span style={{ fontWeight: 400, color: "var(--muted)", fontSize: "0.7em" }}>- 20+ treatments</span>
        </h1>
        <p className="lede" style={{ maxWidth: "90ch", margin: 0 }}>
          Authentic Russian Banya, therapeutic body massage and full spa rituals — delivered by internationally
          certified therapists in private rooms, ten minutes from IGI Airport. Every treatment below is available
          round the clock, 365 days a year, across Mahipalpur, Aerocity, Dwarka and Vasant Kunj.
        </p>
        <div className="stat-row" style={{ maxWidth: 680 }}>
          {HERO_STATS.map((s) => (
            <div key={s.label} className="stat-chip">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LISTING: FILTER SIDEBAR + GRID */}
      <div className="shell">
        <div className="plp">
          <aside className="plp-side" aria-label="Browse treatments">
            <div className="plp-side-inner">
              <h2>Filters</h2>
              <div className="plp-group">
                <h3>Category</h3>
                <a href="#signature">
                  Signature Experiences <small>({SIGNATURE.length})</small>
                </a>
                <a href="#massage">
                  Massage Therapies <small>({MASSAGE.length})</small>
                </a>
                <a href="#rituals">
                  Rituals &amp; Add-Ons <small>({RITUALS.length})</small>
                </a>
              </div>
              <div className="plp-group plp-group-long">
                <h3>Treatment</h3>
                {[...SIGNATURE, ...MASSAGE].map((t) => (
                  <a key={t.name} href={`#${slug(t.name)}`}>
                    {t.name}
                  </a>
                ))}
              </div>
              <div className="plp-group">
                <h3>Before You Book</h3>
                <a href="#how-it-works">How It Works</a>
                <a href="#included">What&apos;s Included</a>
                <a href="#faq">FAQs</a>
                <a href="/pricing/">Full Price List</a>
              </div>
            </div>
          </aside>

          <div className="plp-main">
            <div className="plp-bar">
              <a href="#signature">Russian Banya</a>
              <a href={`#${slug("Deep Tissue Massage")}`}>Deep Tissue</a>
              <a href={`#${slug("Thai Massage")}`}>Thai</a>
              <a href={`#${slug("Hot Stone Therapy")}`}>Hot Stone</a>
              <a href={`#${slug("Couples Spa Suite")}`}>Couples</a>
              <a href="#rituals">Add-Ons</a>
              <strong>
                Open: <b>24 Hours · 365 Days</b>
              </strong>
            </div>

            {/* SIGNATURE */}
            <section className="plp-section" id="signature">
              <div className="plp-section-head" data-reveal>
                <h2>The Treatments We&apos;re Known For</h2>
                <p>
                  Three experiences that guests travel across Delhi NCR for. Each one runs in a private suite with full
                  spa access included.
                </p>
              </div>
              <div className="grid-3 pgrid">
                {SIGNATURE.map((item, i) => (
                  <ProductCard key={item.name} item={item} delay={i * 70} />
                ))}
              </div>
            </section>

            {/* MASSAGE */}
            <section className="plp-section" id="massage">
              <div className="plp-section-head" data-reveal>
                <h2>Nine Ways to Feel Better</h2>
                <p>
                  Not sure which one you need? Tell your therapist what hurts and how much pressure you like — they will
                  recommend the right technique during your consultation.
                </p>
              </div>
              <div className="grid-3 pgrid">
                {MASSAGE.map((item, i) => (
                  <ProductCard key={item.name} item={item} delay={(i % 3) * 70} />
                ))}
              </div>
            </section>

            {/* RITUALS */}
            <section className="plp-section" id="rituals">
              <div className="plp-section-head" data-reveal>
                <h2>Build Your Own Spa Day</h2>
                <p>
                  Add any of these to a massage, or book them on their own. Ideal for short visits and airport
                  layovers.
                </p>
              </div>
              <div className="table-wrap" data-reveal>
                <table className="rate-table">
                  <caption className="vh">Rituals and add-on treatments at Mahipalpur Luxury Spa</caption>
                  <thead>
                    <tr>
                      <th scope="col">Ritual</th>
                      <th scope="col">Time</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RITUALS.map((item) => (
                      <tr key={item.name}>
                        <th scope="row">
                          {item.name}
                          <small>{item.desc}</small>
                        </th>
                        <td className="nowrap">{item.duration}</td>
                        <td className="price">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section bg-sand" id="how-it-works" style={{ marginTop: "var(--section)" }}>
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">How It Works</p>
            <h2 className="h2">
              Your Visit, <em>Step by Step</em>
            </h2>
          </div>
          <div className="grid-4 steps">
            {STEPS.map((step, i) => (
              <div key={step.title} className="step" data-reveal data-reveal-delay={i * 80}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section" id="included">
        <div className="shell split">
          <div data-reveal>
            <p className="eyebrow">Always Included</p>
            <h2 className="h2">
              Every Booking <em>Comes With</em>
            </h2>
            <p className="lede" style={{ marginTop: 12 }}>
              There is no premium tier for basic comfort. Whether you book a 30-minute express session or a
              150-minute signature ritual, the following is part of the price — no upsell, no surprises at the
              counter.
            </p>
            <ul className="check-list">
              {INCLUDED.map((line) => (
                <li key={line}>
                  <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="media-frame" data-reveal>
              <div className="rounded">
                <Img src={`${A}/whats-included.jpg`} alt="Relaxing back massage in a private treatment room" width={800} height={533} />
              </div>
            </div>
            <div className="grid-2" style={{ marginTop: 20 }}>
              {ASSURANCES.map((item, i) => {
                const Icon = ICONS[item.icon];
                return (
                  <div key={item.title} className="card" data-reveal data-reveal-delay={i * 70}>
                    <span className="icon-ring">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
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
              Service <em>Questions</em>
            </h2>
          </div>
          <Faq faqs={SERVICE_FAQS} />
        </div>
      </section>

      {/* RELATED */}
      <section className="section">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Keep Exploring</p>
            <h2 className="h2">
              Plan Your <em>Visit</em>
            </h2>
          </div>
          <div className="grid-3">
            <a href="/pricing/" className="card" data-reveal>
              <h3>Full Price List</h3>
              <p>Every treatment, every duration, with package rates and current offers laid out in one table.</p>
              <p className="text-link" style={{ marginTop: 14 }}>
                View Pricing <ArrowRight size={13} aria-hidden="true" />
              </p>
            </a>
            <a href="/spa-in-aerocity/" className="card" data-reveal data-reveal-delay={80}>
              <h3>Spa in Aerocity</h3>
              <p>Five minutes from the Aerocity hotels and ten from IGI Airport — travel times and what guests book.</p>
              <p className="text-link" style={{ marginTop: 14 }}>
                Find Us <ArrowRight size={13} aria-hidden="true" />
              </p>
            </a>
            <a href="/contact/" className="card" data-reveal data-reveal-delay={160}>
              <h3>Contact &amp; Booking</h3>
              <p>Phone, WhatsApp, address and directions — we answer every hour of the day and night.</p>
              <p className="text-link" style={{ marginTop: 14 }}>
                Get in Touch <ArrowRight size={13} aria-hidden="true" />
              </p>
            </a>
          </div>
        </div>
      </section>

      <Cta
        label="Book Your Treatment"
        title="Not Sure Which Treatment You Need?"
        text="Message us with what's bothering you — a stiff back, jet lag, a stressful week — and we'll recommend the right therapist and technique. We're awake at 3 AM too."
        buttonLabel="Ask on WhatsApp"
        message="Hi! I'd like a recommendation on which spa treatment suits me. Here's what I need: "
      />

      <noscript>
        <p style={{ textAlign: "center", padding: "24px 20px" }}>
          To book, call {PHONE_DISPLAY}. We are open 24 hours. <Clock size={14} aria-hidden="true" />
        </p>
      </noscript>
    </>
  );
}
