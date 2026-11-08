import type { ReactNode } from "react";
import { ArrowRight, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "./PageHero";
import Img from "./Img";
import Faq from "./Faq";
import Stars from "./Stars";
import Cta from "./Cta";
import MapBlock from "./MapBlock";
import { ICONS } from "./icons";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import type { LocationContent } from "../lib/location";
import { LOCATION_PAGES, locationsByName } from "../lib/locations";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders `[label](/path/)` in article copy as real in-text links. */
function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      <a key={`${match[2]}-${start}`} href={match[2]}>
        {match[1]}
      </a>
    );
    cursor = start + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

const EXPLORE = [
  { href: "/services/", title: "All Treatments", desc: "Banya, massage therapies, rituals and add-ons, with durations." },
  { href: "/pricing/", title: "Full Price List", desc: "Every rate, membership and current offer — taxes included." },
  { href: "/about/", title: "About the Spa", desc: "Our story, our therapists' training and what we stand for." },
  { href: "/contact/", title: "Contact & Booking", desc: "Phone, WhatsApp, address and travel times from across Delhi." },
];

/** Presentational shell for an area page; every word comes from `content`. */
export default function LocationPage({ content }: { content: LocationContent }) {
  const { areaName, intro, highlights, treatmentsHead, treatments, nearby, gettingHere, article, faqs } = content;
  const reviews = content.reviews ?? [];
  const otherAreas = content.nearbyAreas
    ? locationsByName(content.nearbyAreas).filter((l) => l.path !== content.path)
    : LOCATION_PAGES.filter((l) => l.path !== content.path).slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[{ label: content.breadcrumb }]}
        badge={
          <>
            <MapPin size={13} aria-hidden="true" /> {content.heroBadge}
          </>
        }
        title={
          <>
            {content.h1.lead} <em>{content.h1.em}</em>
            {content.h1.tail ? ` ${content.h1.tail}` : null}
          </>
        }
        text={content.heroText}
        actions={
          <>
            <a href={`tel:${PHONE_E164}`} className="btn btn-copper">
              <PhoneCall size={15} aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={waLink(`Hi! I'm in ${areaName} and I'd like to book a spa appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <MessageCircle size={15} aria-hidden="true" /> Book via WhatsApp
            </a>
          </>
        }
        stats={content.heroStats}
        image={content.heroImage}
        imageAlt={content.heroImageAlt}
      />

      {/* WHY THIS AREA */}
      <section className="section" id="why">
        <div className="shell split split-top">
          <div data-reveal>
            <p className="eyebrow">{intro.label}</p>
            <h2 className="h2">
              {intro.titleLead} <em>{intro.titleEm}</em>
            </h2>
            <div className="prose" style={{ marginTop: 22 }}>
              {intro.paras.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            <div className="actions">
              <a href="/services/" className="btn btn-ghost">
                All Treatments <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <div className="media-frame" data-reveal>
              <div className="rounded">
                <Img {...content.introImage} />
              </div>
            </div>
            <div className="grid-2" style={{ marginTop: 22 }}>
              {highlights.map((item, i) => {
                const Icon = ICONS[item.icon];
                return (
                  <div key={item.title} className="card" style={{ padding: "22px 20px" }} data-reveal data-reveal-delay={i * 80}>
                    <span className="icon-ring" style={{ width: 46, height: 46, marginBottom: 14 }}>
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 style={{ fontSize: "1.25rem" }}>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="section bg-sand" id="treatments">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">{treatmentsHead.eyebrow}</p>
            <h2 className="h2">
              {treatmentsHead.titleLead} <em>{treatmentsHead.titleEm}</em>
            </h2>
            <p className="lede">{treatmentsHead.lede}</p>
          </div>
          <div className="grid-3">
            {treatments.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <article key={item.name} className="card" data-reveal data-reveal-delay={(i % 3) * 90}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="tags">
                    <span className="tag">{item.duration}</span>
                    <span className="tag">{item.price}</span>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="actions" style={{ justifyContent: "center", marginTop: 40 }}>
            <a href="/pricing/" className="btn btn-copper">
              Full Price List <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* NEARBY LANDMARKS */}
      <section className="section" id="nearby">
        <div className="shell split split-top">
          <div data-reveal>
            <p className="eyebrow">From Your Doorstep</p>
            <h2 className="h2">
              How Far We Are From <em>{areaName} Landmarks</em>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Off-peak driving times to our premises at Defence Enclave, Mahipalpur.
            </p>
            <div className="media-frame" style={{ marginTop: 30 }}>
              <div className="rounded">
                <Img {...content.nearbyImage} />
              </div>
            </div>
          </div>
          <div className="table-wrap" data-reveal>
            <table className="rate-table">
              <caption className="vh">Driving times from {areaName} landmarks to Mahipalpur Luxury Spa</caption>
              <thead>
                <tr>
                  <th scope="col">Landmark</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {nearby.map((place) => (
                  <tr key={place.name}>
                    <th scope="row">{place.name}</th>
                    <td className="price">{place.distance}</td>
                    <td>{place.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GETTING HERE */}
      <section className="section bg-dark" id="getting-here">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Getting Here</p>
            <h2 className="h2">
              The Easiest Route From <em>{areaName}</em>
            </h2>
          </div>
          <div className="grid-3">
            {gettingHere.map((mode, i) => {
              const Icon = ICONS[mode.icon];
              return (
                <article key={mode.title} className="card" data-reveal data-reveal-delay={(i % 3) * 90}>
                  <span className="icon-ring">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{mode.title}</h3>
                  <p>{mode.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LONG-FORM GUIDE */}
      <section className="section" id="guide">
        <article className="shell article">
          <header data-reveal>
            <p className="eyebrow">{article.label}</p>
            <h2 className="h2">
              {article.titleLead} <em>{article.titleEm}</em>
            </h2>
            <p className="standfirst" style={{ marginTop: 20 }}>
              <RichText text={article.standfirst} />
            </p>
          </header>
          <figure className="media-frame" style={{ margin: "36px 0 0" }} data-reveal>
            <div className="rounded" style={{ aspectRatio: "16 / 9" }}>
              <Img {...content.articleImage} />
            </div>
          </figure>
          <div className="article-body">
            {article.sections.map((block) => (
              <section key={block.heading} data-reveal>
                <h3>{block.heading}</h3>
                {block.paras.map((para) => (
                  <p key={para.slice(0, 40)}>
                    <RichText text={para} />
                  </p>
                ))}
              </section>
            ))}
          </div>
          <aside className="takeaways" data-reveal>
            <h3>In short</h3>
            <ul>
              {article.takeaways.map((point) => (
                <li key={point.slice(0, 40)}>
                  <RichText text={point} />
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </section>

      {/* REVIEWS — only real ones; hidden when there are none */}
      {reviews.length ? (
        <section className="section bg-sand" id="reviews">
          <div className="shell">
            <div className="section-head center" data-reveal>
              <p className="eyebrow">Guest Reviews</p>
              <h2 className="h2">
                What {areaName} Guests <em>Say</em>
              </h2>
            </div>
            <div className="grid-3">
              {reviews.map((review, i) => (
                <figure key={review.author} className="quote-card" data-reveal data-reveal-delay={(i % 3) * 90}>
                  <Stars />
                  <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">
                      {review.author.charAt(0)}
                    </span>
                    <span>
                      <strong>{review.author}</strong>
                      <small>{review.role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <MapBlock
        title={
          <>
            {content.mapTitle.lead} <em>{content.mapTitle.em}</em>
          </>
        }
        iframeTitle={`Map from ${areaName} to Mahipalpur Luxury Spa, Defence Enclave, Mahipalpur`}
      />

      {/* OTHER AREA PAGES */}
      {otherAreas.length ? (
        <section className="section section-tight" id="nearby-areas">
          <div className="shell">
            <div className="section-head center" data-reveal>
              <p className="eyebrow">Same Spa, Other Neighbourhoods</p>
              <h2 className="h2">
                Nearby Areas <em>We Also Serve</em>
              </h2>
            </div>
            <div className="grid-4">
              {otherAreas.map((area, i) => (
                <a key={area.path} href={area.path} className="card" data-reveal data-reveal-delay={i * 70}>
                  <h3>{area.label}</h3>
                  <p>{area.blurb}</p>
                  <p className="text-link" style={{ marginTop: 16 }}>
                    {area.label} guide <ArrowRight size={13} aria-hidden="true" />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* INTERNAL LINKS */}
      <section className="section section-tight" id="explore">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">Plan Your Visit</p>
            <h2 className="h2">
              Everything Else <em>You Need</em>
            </h2>
          </div>
          <div className="grid-4">
            {EXPLORE.map((item, i) => (
              <a key={item.href} href={item.href} className="card" data-reveal data-reveal-delay={i * 70}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="text-link" style={{ marginTop: 16 }}>
                  Read more <ArrowRight size={13} aria-hidden="true" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sand" id="faq">
        <div className="shell">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="h2">
              {areaName} <em>Questions</em>
            </h2>
          </div>
          <Faq faqs={faqs} />
        </div>
      </section>

      <Cta
        label={`Book From ${areaName}`}
        title="We're Open Right Now"
        text="Tell us when you can get here and we'll have a therapist ready. No night surcharge, no distance charge — the same rate at every hour."
        buttonLabel="Check Availability"
        message={`Hi! I'm in ${areaName}. What's available today at Mahipalpur Luxury Spa?`}
      />
    </>
  );
}
