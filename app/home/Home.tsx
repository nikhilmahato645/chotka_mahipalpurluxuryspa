import { ArrowRight, Check, MapPin, MessageCircle, PhoneCall, Sparkles, Star } from "lucide-react";
import Img from "../components/Img";
import TherapistSection from "../components/TherapistSection";
import Faq from "../components/Faq";
import Stars from "../components/Stars";
import Cta from "../components/Cta";
import MapBlock from "../components/MapBlock";
import { ICONS } from "../components/icons";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import {
  AREAS,
  AUDIENCES,
  CATEGORIES,
  GALLERY,
  HERO_CHECKS,
  HERO_PICKS,
  HOME_FAQS,
  INCLUDED,
  LOCATION_POINTS,
  PILLARS,
  POPULAR_PACKAGES,
  RELAXATION,
  RELAXATION_CHECKS,
  SERVICES,
  STANDARDS,
  STATS,
  TESTIMONIALS,
  TRUST_POINTS,
} from "./data";

const A = "/assets/home";

export default function Home() {
  return (
    <>
      {/* THERAPISTS — first thing on the page, as one swipeable row */}
      <TherapistSection layout="strip" />

      {/* HERO — full-width photo with a translucent overlay and a glass booking card */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true">
          <picture>
            <source media="(max-width: 700px)" srcSet={`${A}/hero-banner-mobile.webp`} type="image/webp" />
            <source media="(max-width: 700px)" srcSet={`${A}/hero-banner-mobile.jpg`} />
            <source srcSet={`${A}/hero-banner.webp`} type="image/webp" />
            <img
              src={`${A}/hero-banner.jpg`}
              alt=""
              width={2000}
              height={1100}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">
              <Sparkles size={13} aria-hidden="true" /> Premier Russian Spa in Delhi NCR
            </p>
            {/* The <em> is display:block, so the explicit spaces keep the H1 readable as one sentence. */}
            <h1 id="hero-title">
              Mahipalpur Luxury Spa <em>Authentic Russian Banya &amp; Body Massage</em> near Aerocity
            </h1>
            <p className="hero-text">
              Unwind with a traditional Russian Banya, a therapeutic massage or a full relaxation ritual, ten minutes
              from Delhi Airport. Private rooms, certified therapists and appointments at any hour of the day or night.
            </p>
            <ul className="hero-checks">
              {HERO_CHECKS.map((line) => (
                <li key={line}>
                  <Check size={14} strokeWidth={3} aria-hidden="true" /> {line}
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-glass" aria-label="Quick booking">
            <div className="hero-glass-head">
              <span className="rating-chip">
                4.8 <Star size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                <span className="sep">|</span> 350+ Reviews
              </span>
              <span className="live-dot">Open now</span>
            </div>
            <p className="hero-glass-title">Book in under 2 minutes</p>
            <ul className="hero-picks">
              {HERO_PICKS.map((pick) => (
                <li key={pick.name}>
                  <a
                    href={waLink(`Hi! I'd like to book the ${pick.name} at Mahipalpur Luxury Spa.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <strong>{pick.name}</strong>
                      <small>{pick.duration}</small>
                    </span>
                    <b>{pick.price}</b>
                  </a>
                </li>
              ))}
            </ul>
            <p className="hero-glass-note">Tap a treatment to book on WhatsApp · 15% off your first visit</p>
          </aside>
        </div>

        <div className="shell">
          <dl className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="shell">
        <div className="trust">
          <ul>
            {TRUST_POINTS.map((point) => {
              const Icon = ICONS[point.icon];
              return (
                <li key={point.label}>
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  {point.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* TRUST NUMBERS + STANDARDS */}
      <section className="section">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Over a Decade of Care</p>
            <h2 className="h2">
              Delhi NCR&apos;s Most Trusted <em>Russian Spa</em>
            </h2>
            <p className="lede">
              For more than a decade we have offered genuine Russian Banya rituals and carefully delivered massage
              therapy to guests from Mahipalpur, Aerocity and right across the capital.
            </p>
          </div>
          <h3 className="sub-head" data-reveal>
            Our Quality Standards
          </h3>
          <div className="grid-4">
            {STANDARDS.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="card" data-reveal data-reveal-delay={i * 70}>
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

      {/* BOOK BY TREATMENT */}
      <section className="section section-tight">
        <div className="shell">
          <div className="cat-banner" data-reveal>
            <h2>Book by Treatment</h2>
          </div>
          <div className="grid-6">
            {CATEGORIES.map((c, i) => (
              <a key={c.name} href={c.href} className="cat-tile" data-reveal data-reveal-delay={(i % 6) * 60}>
                <div className="cat-tile-media">
                  <Img src={c.img} alt={c.alt} width={500} height={625} />
                </div>
                <div className="cat-tile-body">
                  <h3>{c.name}</h3>
                  <strong>{c.from}</strong>
                  <span>Book Now</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section id="services" className="section bg-sand">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Treatments</p>
            <h2 className="h2">
              Premium <em>Spa Services</em>
            </h2>
            <p className="lede">
              Nine treatments our guests book most, each adjusted to your body by a certified therapist. Prices include
              your private room, shower, robe and herbal tea.
            </p>
          </div>
          <div className="grid-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <article key={s.name} className="pcard" data-reveal data-reveal-delay={(i % 3) * 80}>
                  <div className="tcard-media">
                    <Img src={s.img} alt={`${s.name} at Mahipalpur Luxury Spa — ${s.alt}`} width={900} height={600} />
                    <span className="pcard-chip">
                      <Icon size={13} strokeWidth={2} aria-hidden="true" /> {s.duration}
                    </span>
                  </div>
                  <div className="pcard-body">
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <p className="price-row">
                      <strong>{s.price}</strong>
                      <span>/ {s.duration}</span>
                      <span className="off">(15% OFF 1st visit)</span>
                    </p>
                    <div className="pcard-actions">
                      <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                        <PhoneCall size={13} aria-hidden="true" /> Call<span className="vh"> to book {s.name}</span>
                      </a>
                      <a
                        href={waLink(`Hi! I'd like to book the ${s.name} at Mahipalpur Luxury Spa.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-copper"
                      >
                        <MessageCircle size={13} aria-hidden="true" /> Book<span className="vh"> {s.name}</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="actions" style={{ justifyContent: "center", marginTop: 36 }}>
            <a href="/services/" className="btn btn-copper">
              View All 20+ Treatments <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a href="/pricing/" className="btn btn-ghost">
              See Full Price List
            </a>
          </div>
        </div>
      </section>

      {/* RELAXATION THERAPY */}
      <section className="section">
        <div className="shell split">
          <div data-reveal>
            <p className="eyebrow">Relaxation Therapy</p>
            <h2 className="h2">
              Relaxation Therapy in <em>Mahipalpur &amp; Aerocity</em>
            </h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Sometimes the goal is not to fix a sore muscle but simply to feel calm again. Our relaxation sessions
              blend Banya warmth, aromatherapy and slow massage to settle the nervous system and restore your energy —
              available at any hour, booked in a couple of minutes.
            </p>
            <ul className="check-list">
              {RELAXATION_CHECKS.map((line) => (
                <li key={line}>
                  <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="actions">
              <a href="/contact/#book" className="btn btn-copper">
                Book Relaxation Therapy
              </a>
            </div>
          </div>
          <div className="grid-2">
            {RELAXATION.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="card" data-reveal data-reveal-delay={i * 70}>
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

      {/* WHO WE ARE */}
      <section className="section section-tight">
        <div className="shell split">
          <div className="media-frame" data-reveal>
            <div className="arch">
              <Img
                src={`${A}/spa-treatment-room.jpg`}
                alt="Warm, softly lit private treatment room at Mahipalpur Luxury Spa"
                width={720}
                height={900}
              />
            </div>
            <div className="seal" aria-hidden="true">
              <strong>10+</strong>
              <span>Years of Care</span>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">About Mahipalpur Luxury Spa</p>
            <h2 className="h2">
              Russian Wellness, <em>Delhi Hospitality</em>
            </h2>
            <div className="prose" style={{ marginTop: 14 }}>
              <p>
                Mahipalpur Luxury Spa brings the steam-and-birch tradition of the Russian Banya together with modern
                massage therapy under one roof in Mahipalpur. Guests come to us for body massage near Delhi Airport,
                for a calm spa close to the Aerocity hotels, and for treatment rooms they can trust to be spotless and
                private.
              </p>
              <p>
                Choose from Swedish, deep tissue, aromatherapy, hot stone, Balinese and Thai massage, or combine a
                Banya session with one of them for a complete reset. Whatever you book, a trained therapist shapes the
                treatment around your body — the pressure, the oil and the areas that need the most attention.
              </p>
            </div>
            <div className="actions">
              <a href="/about/" className="btn btn-ghost">
                Read Our Story <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-sand">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="h2">
              Why Guests Call Us <em>NCR&apos;s Premier Spa</em>
            </h2>
            <p className="lede">
              Plenty of places in Mahipalpur offer a massage. What keeps our guests coming back is the combination of
              genuine technique, real care and standards that never slip — at 3 PM or 3 AM.
            </p>
          </div>
          <div className="grid-4">
            {PILLARS.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <div key={p.title} className="card" data-reveal data-reveal-delay={(i % 4) * 70}>
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
          <p className="note" style={{ maxWidth: 900, margin: "28px auto 0" }}>
            <strong>Giving back:</strong> we run wellness workshops and stress-relief sessions for local businesses,
            and offer a standing 10% discount to senior citizens and healthcare workers.{" "}
            <a href="/about/" style={{ color: "var(--pink)", fontWeight: 700 }}>
              See how we compare with other spas
            </a>
            .
          </p>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section" id="pricing">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="h2">
              Honest Prices, <em>No Hidden Charges</em>
            </h2>
            <p className="lede">
              Premium treatments at fair, clearly published rates. Mention this website when you book and enjoy 15%
              off your first visit.
            </p>
          </div>
          <div className="grid-4" style={{ paddingTop: 12 }}>
            {POPULAR_PACKAGES.map((pkg, i) => (
              <article
                key={pkg.name}
                className={`price-card${pkg.featured ? " featured" : ""}`}
                data-reveal
                data-reveal-delay={i * 70}
              >
                {pkg.featured ? (
                  <p className="ribbon">
                    <Sparkles size={11} aria-hidden="true" /> Most Popular
                  </p>
                ) : null}
                <h3>{pkg.name}</h3>
                <p className="price-amount" style={{ marginTop: 14 }}>
                  <strong>{pkg.price}</strong>
                  <span>{pkg.unit}</span>
                </p>
                <ul className="check-list">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <Check size={15} strokeWidth={2.6} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi! I'd like to book the ${pkg.name} at Mahipalpur Luxury Spa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.featured ? "btn-copper" : "btn-ghost"}`}
                >
                  Book Now<span className="vh"> — {pkg.name}</span>
                </a>
              </article>
            ))}
          </div>
          <div className="included-strip" data-reveal>
            {INCLUDED.map((item) => (
              <div key={item.title}>
                <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="center" style={{ marginTop: 22, color: "var(--muted)" }}>
            Need a custom package or a group booking? Call{" "}
            <a href={`tel:${PHONE_E164}`} style={{ color: "var(--pink)", fontWeight: 700 }}>
              {PHONE_DISPLAY}
            </a>{" "}
            or <a href="/pricing/" style={{ color: "var(--pink)", fontWeight: 700 }}>see every rate</a>.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-sand" id="location">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Location</p>
            <h2 className="h2">
              Right in the Heart of <em>Delhi NCR</em>
            </h2>
            <p className="lede">
              Mahipalpur puts us between the airport, the Aerocity business district and the rest of the city —
              convenient whether you are flying in, working nearby or driving over from home.
            </p>
          </div>
          <div className="grid-3">
            {LOCATION_POINTS.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="card" data-reveal data-reveal-delay={(i % 3) * 70}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <h3 className="sub-head" data-reveal>
            Why Our Location Works for You
          </h3>
          <div className="grid-4">
            {AUDIENCES.map((a, i) => (
              <div key={a.title} className="card card-top" data-reveal data-reveal-delay={i * 70}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LOCATION */}
      <section className="section">
        <div className="shell">
          <div className="banner" data-reveal>
            <Img src={`${A}/aerocity-banner.jpg`} alt="Calm spa setting at sunrise" width={1400} height={933} />
            <div className="banner-content">
              <p className="eyebrow">
                <MapPin size={13} aria-hidden="true" /> Featured Location
              </p>
              <h2>
                Best <em>Spa in Aerocity</em>
              </h2>
              <p>
                Five minutes from the Aerocity hotels and ten from IGI Airport. Long-haul recovery massage, late-night
                Banya and a 45-minute layover express — when the hotel spa has already closed.
              </p>
              <div className="actions">
                <a href="/spa-in-aerocity/" className="btn btn-copper">
                  Explore Spa in Aerocity <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO PROSE + AREAS */}
      <section className="section section-tight">
        <div className="shell split split-top">
          <div className="prose" data-reveal>
            <p className="eyebrow">Spa &amp; Body Massage</p>
            <h2 className="h2" style={{ marginBottom: 14 }}>
              Spa &amp; Body Massage in <em>Mahipalpur, Aerocity &amp; Dwarka</em>
            </h2>
            <p>
              Looking for a full body massage after a long flight, a deep tissue session for a stubborn back, or a
              traditional Russian Banya to sweat out a stressful week? Mahipalpur Luxury Spa covers all of it from one
              calm, well-kept premises in Mahipalpur, open 24 hours a day.
            </p>
            <p>
              Our menu runs from Swedish, aromatherapy and hot stone massage to Thai, Balinese, sports and reflexology,
              plus couples packages and short express sessions for travellers. Every treatment takes place in a
              private room with a certified therapist, and every price is published up front — a Banya session is
              ₹3,500, a 60-minute full body massage ₹2,800, and the couples package ₹7,500.
            </p>
            <p>
              Guests travel to us from Aerocity, IGI Airport, Dwarka, Vasant Kunj, Gurugram and the wider Delhi NCR.
              Book by calling <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>, sending a WhatsApp message, or using
              the <a href="/contact/#book">online booking form</a>.
            </p>
          </div>
          <div data-reveal>
            <h3 className="sub-head" style={{ marginTop: 0, textAlign: "left" }}>
              One Spa, Easy to Reach
            </h3>
            <p style={{ color: "var(--muted)" }}>
              We run a single spa in Mahipalpur — there are no branches. Typical off-peak drive times:
            </p>
            <div className="table-wrap">
              <table className="rate-table">
                <caption className="vh">Drive times to Mahipalpur Luxury Spa</caption>
                <thead>
                  <tr>
                    <th scope="col">Coming from</th>
                    <th scope="col">Drive time</th>
                  </tr>
                </thead>
                <tbody>
                  {AREAS.map((area) => (
                    <tr key={area.name}>
                      <th scope="row">{area.href ? <a href={area.href}>{area.name}</a> : area.name}</th>
                      <td className="price">{area.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-tight">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Inside the Spa</p>
            <h2 className="h2">
              A Look <em>Around</em>
            </h2>
            <p className="lede">
              Fresh linen, warm oils and herbal care — a glimpse of the calm we prepare for every guest.
            </p>
          </div>
          <div className="gallery gallery-4" data-reveal>
            {GALLERY.map((shot) => (
              <figure key={shot.src}>
                <Img src={shot.src} alt={shot.alt} width={500} height={625} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-sand">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Client Love</p>
            <h2 className="h2">
              What Our <em>Guests</em> Say
            </h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.author} className="quote-card" data-reveal data-reveal-delay={i * 100}>
                <Stars size={12} />
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <strong>{t.author}</strong>
                    <small>{t.location}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="h2">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <Faq faqs={HOME_FAQS} />
        </div>
      </section>

      <Cta
        label="Your Time to Relax"
        title="Ready for the Most Convenient Spa in Delhi NCR?"
        text="Book your Banya, massage or couples package now — we are open 24/7 and usually have a room ready the same day."
        buttonLabel="Book on WhatsApp"
        message="Hello! I want to book an appointment at Mahipalpur Luxury Spa. Please share more details about services and availability."
      />

      <MapBlock
        title={
          <>
            Visit <em>Mahipalpur Luxury Spa</em>
          </>
        }
        iframeTitle="Mahipalpur Luxury Spa location, New Delhi"
      />
    </>
  );
}
