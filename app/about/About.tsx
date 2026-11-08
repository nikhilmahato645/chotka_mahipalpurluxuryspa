import { ArrowRight, Award, Check, Clock, MessageCircle, PhoneCall, Target } from "lucide-react";
import PageHero from "../components/PageHero";
import Img from "../components/Img";
import Cta from "../components/Cta";
import { ICONS } from "../components/icons";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import { AUDIENCES, CERTIFICATIONS, COMPARISON, LOCATIONS, MILESTONES, PILLARS, STATS, VALUES } from "./data";

const A = "/assets/about";
const WHATSAPP_URL = waLink("Hello! I'd like to know more about Russian Spa Centre and book an appointment.");

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        badge="Our Story"
        title={
          <>
            About <em>Russian Spa Centre</em>, Mahipalpur
          </>
        }
        text={[
          "For over a decade, Russian Spa Centre has been the premier choice for authentic spa experiences across Mahipalpur, Aerocity, Dwarka, Vasant Kunj, and near IGI Airport. We brought the authentic Russian Banya tradition to India and built a loyal community of thousands around it.",
          "Whether you're looking for the best spa in Mahipalpur, a luxury massage centre in Aerocity, or a relaxing body spa in Dwarka — we're your trusted wellness partner, open 24/7 every single day.",
        ]}
        stats={STATS}
        image={`${A}/hero-about-spa.jpg`}
        imageAlt="Relaxing in a calm spa bath suite — about Russian Spa Centre"
      />

      {/* MISSION */}
      <section className="section bg-dark">
        <div className="shell center" style={{ maxWidth: 900 }} data-reveal>
          <span className="icon-ring">
            <Target size={24} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <p className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
            Our Mission
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.3rem)",
              lineHeight: 1.4,
              color: "var(--on-dark)",
              margin: 0,
            }}
          >
            To make world-class, <em style={{ color: "var(--copper-3)" }}>authentic</em> wellness accessible to
            everyone across Delhi NCR — combining genuine international techniques, certified expertise, and
            hospital-grade hygiene, every day of the year, for every guest who walks through our doors.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="shell split">
          <div className="media-frame" data-reveal>
            <div className="arch" style={{ maxWidth: 460 }}>
              <Img src={`${A}/who-we-are.jpg`} alt="Therapist performing a gentle facial and head therapy" width={720} height={900} />
            </div>
            <div className="seal" aria-hidden="true">
              <strong>10K+</strong>
              <span>Happy Guests</span>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="h2">
              More Than a Spa. <em>A Wellness Philosophy.</em>
            </h2>
            <div className="prose" style={{ marginTop: 22 }}>
              <p>
                At Russian Spa Centre, we view spa treatments not as luxury indulgences but as essential components of
                a healthy lifestyle. Our holistic philosophy addresses physical tension, mental stress, and emotional
                wellbeing simultaneously — because true wellness is all three at once. As the leading spa in
                Mahipalpur and Aerocity, we&apos;ve served over 10,000+ satisfied clients from across Delhi NCR and
                international travelers passing through IGI Airport.
              </p>
              <p>
                We are one of the very few establishments in all of Delhi NCR to offer a genuine Russian Banya
                experience, complete with traditional Venik treatments using imported birch leaves. This
                centuries-old ritual was meticulously recreated at our facility according to authentic Russian
                specifications. Our spa near Delhi Airport has become a favorite among frequent flyers seeking
                rejuvenation during layovers.
              </p>
              <p>
                Our therapists are not just service providers — they are healing artists trained across Russia,
                Thailand, Sweden, and Japan, bringing the world&apos;s finest wellness traditions to the heart of
                Delhi. Whether you need a relaxing Swedish massage in Mahipalpur, deep tissue therapy in Dwarka, or a
                romantic couples spa in Aerocity, our team delivers excellence every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section bg-sand">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Journey</p>
            <h2 className="h2">
              A Decade of <em>Growth &amp; Trust</em>
            </h2>
            <p className="lede">From a single wellness studio to Delhi NCR&apos;s most trusted spa brand.</p>
          </div>
          <ol className="grid-3 steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {MILESTONES.map((m, i) => (
              <li key={m.title} className="step" data-reveal data-reveal-delay={(i % 3) * 90}>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AREAS */}
      <section className="section">
        <div className="shell">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Areas We Serve</p>
            <h2 className="h2">
              Serving <em>All of Delhi NCR</em>
            </h2>
            <p className="lede">
              We run one premises, in Mahipalpur. These are the areas it sits closest to, with typical off-peak drive
              times.
            </p>
          </div>
          <div className="grid-3">
            {LOCATIONS.map((loc, i) => {
              const Icon = ICONS[loc.icon];
              return (
                <div key={loc.name} className="card" data-reveal data-reveal-delay={(i % 3) * 80}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{loc.name}</h3>
                  <p>{loc.desc}</p>
                  <p className="meta">
                    <Clock size={13} aria-hidden="true" /> {loc.distance}
                  </p>
                  <a href={loc.link} className="text-link" style={{ marginTop: 14 }}>
                    Learn More<span className="vh"> about {loc.name}</span> <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section bg-sand">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Commitments</p>
            <h2 className="h2">
              What We Stand <em>For</em>
            </h2>
          </div>
          <div className="grid-3">
            {PILLARS.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <div key={p.title} className="card" data-reveal data-reveal-delay={(i % 3) * 90}>
                  <span className="num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section">
        <div className="shell" style={{ maxWidth: 980 }}>
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Comparison</p>
            <h2 className="h2">
              Why We&apos;re <em>Different</em>
            </h2>
            <p className="lede">Compare Russian Spa Centre with other massage centres in Mahipalpur, Aerocity, and Dwarka:</p>
          </div>
          <div className="table-wrap" data-reveal>
            <table className="rate-table compare">
              <caption className="vh">Russian Spa Centre compared with other spas in Mahipalpur and Aerocity</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Russian Spa Centre</th>
                  <th scope="col">Other Spas in Mahipalpur/Aerocity</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([feature, them]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>
                      <Check size={18} strokeWidth={2.4} aria-label="Yes" />
                    </td>
                    <td>{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 14, fontSize: "0.82rem", color: "var(--muted)" }}>
            * Comparison based on surveys of 20+ spa and massage centres in Mahipalpur, Aerocity, Dwarka, and Vasant
            Kunj areas (2025 data).
          </p>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section bg-sand">
        <div className="shell">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="h2">
              Best Spa in <em>Mahipalpur, Aerocity &amp; Dwarka</em>
            </h2>
          </div>
          <div className="grid-3">
            {AUDIENCES.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="card" data-reveal data-reveal-delay={(i % 3) * 80}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="shell split">
          <div data-reveal>
            <p className="eyebrow">Our Team</p>
            <h2 className="h2">
              Trained Across the <em>World</em>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Our therapists hold certifications from recognized institutions across Russia, Thailand, Sweden, and
              India. Continuous education is mandatory — because the best in wellness never stop learning. Every
              therapist works from our single premises at Defence Enclave, Mahipalpur.
            </p>
            <div className="pills" style={{ marginTop: 26 }}>
              {CERTIFICATIONS.map((c) => (
                <span key={c} className="pill">
                  <Award size={14} aria-hidden="true" /> {c}
                </span>
              ))}
            </div>
            <div className="actions">
              <a href="/services/" className="btn btn-copper">
                View Our Services
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <MessageCircle size={15} aria-hidden="true" /> Book via WhatsApp
              </a>
            </div>
          </div>
          <div className="media-frame" data-reveal>
            <div className="rounded" style={{ aspectRatio: "4 / 5" }}>
              <Img src={`${A}/our-therapists.jpg`} alt="Certified therapist giving a relaxing back massage" width={700} height={875} />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-dark">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Values</p>
            <h2 className="h2">
              What Makes Us <em>Special</em>
            </h2>
          </div>
          <div className="grid-3">
            {VALUES.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <div key={v.title} className="card" data-reveal data-reveal-delay={(i % 3) * 80}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION IMAGE STRIP */}
      <section className="section">
        <div className="shell split">
          <div className="media-frame" data-reveal>
            <div className="rounded">
              <Img src={`${A}/our-mission.jpg`} alt="Herbal face mask applied during a spa treatment" width={800} height={533} />
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">Book Your Experience</p>
            <h2 className="h2">
              Experience the <em>Russian Spa Centre</em> Difference
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              One premises, in Mahipalpur — ten minutes from IGI Airport and open every hour of the year. 15% off for
              first-time visitors.
            </p>
            <div className="actions">
              <a href={`tel:${PHONE_E164}`} className="btn btn-copper">
                <PhoneCall size={15} aria-hidden="true" /> Call Now: {PHONE_DISPLAY}
              </a>
              <a href="/contact/" className="btn btn-ghost">
                Contact &amp; Directions <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Cta
        label="We're Open Now"
        title="Ready When You Are"
        text="Call, message or walk in at any hour. Same-day appointments available, ten minutes from IGI Airport."
        buttonLabel="Book via WhatsApp"
        message="Hello! I'd like to know more about Russian Spa Centre and book an appointment."
      />
    </>
  );
}
