import { ArrowRight, BadgePercent, Check, PhoneCall, ReceiptText, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import PageHero from "../components/PageHero";
import Img from "../components/Img";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import { HERO_STATS, OFFERS, PACKAGES, PRICING_FAQS, PROMISES, RATE_GROUPS } from "./data";

const A = "/assets/pricing";

const PROMISE_ICONS = { receipt: ReceiptText, wallet: Wallet, percent: BadgePercent, shield: ShieldCheck };

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Pricing() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        badge={
          <>
            <Sparkles size={13} aria-hidden="true" /> Transparent Pricing · No Hidden Fees
          </>
        }
        title={
          <>
            Spa &amp; Massage <em>Price List</em>, Mahipalpur
          </>
        }
        text={[
          "Every treatment, every duration, every rate — published in full. Taxes are included, there is no night surcharge, and the price you are quoted on the phone is the price you pay at the counter. Rates apply across Mahipalpur, Aerocity, Dwarka and Vasant Kunj.",
        ]}
        actions={
          <>
            <a href={`tel:${PHONE_E164}`} className="btn btn-copper">
              <PhoneCall size={15} aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a href="/services/" className="btn btn-ghost">
              Browse Treatments <ArrowRight size={15} aria-hidden="true" />
            </a>
          </>
        }
        stats={HERO_STATS}
        image={`${A}/hero-spa-price-list.jpg`}
        imageAlt="Towels, massage oil and flowers — spa price list at Mahipalpur Luxury Spa"
      />

      {/* PACKAGES */}
      <section className="section" id="packages">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Ways to Book</p>
            <h2 className="h2">
              Pick What <em>Suits You</em>
            </h2>
            <p className="lede">
              Come once, come regularly, or bring your team. All three routes get the same therapists, the same rooms
              and the same standards.
            </p>
          </div>
          <div className="grid-3" style={{ alignItems: "stretch", paddingTop: 12 }}>
            {PACKAGES.map((pkg, i) => (
              <article
                key={pkg.name}
                className={`price-card${pkg.featured ? " featured" : ""}`}
                data-reveal
                data-reveal-delay={i * 90}
              >
                {pkg.featured ? (
                  <p className="ribbon">
                    <Sparkles size={11} aria-hidden="true" /> Most Booked
                  </p>
                ) : null}
                <h3>{pkg.name}</h3>
                <p className="tagline">{pkg.tagline}</p>
                <p className="price-amount">
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
                  href={waLink(`Hi! I'd like to book the ${pkg.name} option at Mahipalpur Luxury Spa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.featured ? "btn-copper" : "btn-ghost"}`}
                >
                  Book This<span className="vh"> — {pkg.name}</span> <ArrowRight size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RATE TABLES */}
      <section className="section bg-sand" id="rates">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Full Rate Card</p>
            <h2 className="h2">
              Every Treatment, <em>Every Price</em>
            </h2>
            <p className="lede">
              Prices are per person and include a private room, robe, shower access, fresh linens and herbal tea.
              Add-on rates apply when combined with a full treatment.
            </p>
          </div>

          <div style={{ maxWidth: 920, margin: "0 auto" }}>
            {RATE_GROUPS.map((group) => (
              <div key={group.id} id={group.id} className="rate-group" data-reveal>
                <h3>{group.title}</h3>
                <p>{group.blurb}</p>
                <div className="table-wrap">
                  <table className="rate-table">
                    <caption className="vh">{group.title} rates at Mahipalpur Luxury Spa</caption>
                    <thead>
                      <tr>
                        <th scope="col">Treatment</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rates.map((rate) => (
                        <tr key={rate.name}>
                          <th scope="row">
                            {rate.name}
                            <small>{rate.desc}</small>
                          </th>
                          <td className="nowrap">{rate.duration}</td>
                          <td className="price">{inr(rate.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <p className="note">
              All prices are in Indian Rupees and inclusive of applicable taxes. Rates were last reviewed in January
              2026 and may change without notice — please confirm on the phone when you book. Group bookings of six
              or more and corporate contracts are quoted separately.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="section" id="offers">
        <div className="shell split">
          <div data-reveal>
            <p className="eyebrow">Current Offers</p>
            <h2 className="h2">
              Ways to <em>Pay Less</em>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Offers cannot be combined with each other or with membership pricing. Just mention one when booking.
            </p>
            <div className="media-frame" style={{ marginTop: 30 }}>
              <div className="rounded">
                <Img src={`${A}/wellness-membership.jpg`} alt="Herbal tea served after a spa treatment" width={800} height={533} />
              </div>
            </div>
          </div>
          <div className="grid-2">
            {OFFERS.map((offer, i) => (
              <article key={offer.title} className="card" data-reveal data-reveal-delay={(i % 2) * 90}>
                <span className="icon-ring">
                  <BadgePercent size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 style={{ fontSize: "1.35rem" }}>{offer.title}</h3>
                <p>{offer.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PROMISE */}
      <section className="section bg-dark" id="promise">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Our Pricing Promise</p>
            <h2 className="h2">
              What You <em>Won&apos;t</em> Be Charged For
            </h2>
          </div>
          <div className="grid-4">
            {PROMISES.map((item, i) => {
              const Icon = PROMISE_ICONS[item.icon];
              return (
                <div key={item.title} className="card" data-reveal data-reveal-delay={i * 90}>
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

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="h2">
              Pricing <em>Questions</em>
            </h2>
          </div>
          <Faq faqs={PRICING_FAQS} />
        </div>
      </section>

      <Cta
        label="Book Your Slot"
        title="Ready to Book at These Rates?"
        text="Send us the treatment and the time — we confirm within minutes, any hour of the day or night. First-time guests get 15% off."
        buttonLabel="Book on WhatsApp"
        message="Hi! I'd like to book a treatment. Please confirm the price and availability."
      />
    </>
  );
}
