import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import TherapistSection from "./TherapistSection";

/**
 * The top of every main page, in three parts:
 * 1. Banner (about 60% of the first screen): photo, breadcrumb, badge, the page's
 *    single H1 and the booking buttons. Kept short so the photo stays visible.
 * 2. "Meet our therapists", in the rest of the first screen.
 * 3. The intro copy and headline numbers, after the therapists.
 *
 * `wideImage` is an optional landscape photo for screens wider than 900px; pages
 * whose own photo is portrait or small pass one so the desktop banner stays sharp.
 */
const toWebp = (src: string) => src.replace(/\.(jpe?g|png)$/i, ".webp");

export default function PageHero({
  crumbs,
  badge,
  title,
  text = [],
  actions,
  stats,
  image,
  imageAlt,
  wideImage,
  children,
}: {
  /** Leave out on the home page. */
  crumbs?: { label: string; href?: string }[];
  badge?: ReactNode;
  title: ReactNode;
  /** Intro paragraphs, shown after the therapist section. */
  text?: string[];
  actions?: ReactNode;
  stats?: readonly { value: string; label: string }[];
  image: string;
  imageAlt: string;
  wideImage?: string;
  /** Extra intro content after the paragraphs (e.g. a checklist). */
  children?: ReactNode;
}) {
  const hasIntro = text.length > 0 || Boolean(stats?.length) || Boolean(children);

  return (
    <>
      <section className="page-banner" aria-labelledby="page-title">
        <div className="banner-bg">
          <picture>
            {wideImage ? (
              <>
                <source media="(min-width: 901px)" srcSet={toWebp(wideImage)} type="image/webp" />
                <source media="(min-width: 901px)" srcSet={wideImage} />
              </>
            ) : null}
            <source srcSet={toWebp(image)} type="image/webp" />
            <img src={image} alt={imageAlt} width={1400} height={933} loading="eager" fetchPriority="high" decoding="async" />
          </picture>
        </div>

        <div className="shell banner-inner">
          {crumbs ? <Breadcrumb items={crumbs} /> : null}
          {badge ? <p className="banner-badge">{badge}</p> : null}
          <h1 id="page-title">{title}</h1>
          {actions ? <div className="actions">{actions}</div> : null}
        </div>
      </section>

      <TherapistSection />

      {hasIntro ? (
        <section className="section section-tight page-intro">
          <div className="shell">
            {text.map((para) => (
              <p key={para.slice(0, 40)} className="page-intro-text">
                {para}
              </p>
            ))}
            {children}
            {stats?.length ? (
              <div className="stat-row">
                {stats.map((s) => (
                  <div key={s.label} className="stat-chip">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
