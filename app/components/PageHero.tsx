import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import Img from "./Img";

/**
 * Inner-page hero: breadcrumb, the page's single H1, intro copy and stats on
 * the left; an arch-framed photo on the right.
 */
export default function PageHero({
  crumbs,
  badge,
  title,
  text,
  actions,
  stats,
  image,
  imageAlt,
}: {
  crumbs: { label: string; href?: string }[];
  badge: ReactNode;
  title: ReactNode;
  text: string[];
  actions?: ReactNode;
  stats?: { value: string; label: string }[];
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="phero">
      <div className="shell phero-inner">
        <div>
          <Breadcrumb items={crumbs} />
          <p className="eyebrow" style={{ marginTop: 16 }}>
            {badge}
          </p>
          <h1>{title}</h1>
          {text.map((para) => (
            <p key={para.slice(0, 40)} className="phero-text">
              {para}
            </p>
          ))}
          {actions ? <div className="actions">{actions}</div> : null}
          {stats ? (
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
        <figure className="phero-media">
          <div className="arch">
            <Img src={image} alt={imageAlt} width={700} height={875} loading="eager" fetchPriority="high" />
          </div>
        </figure>
      </div>
    </section>
  );
}
