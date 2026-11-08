import { ArrowRight } from "lucide-react";
import Img from "./Img";
import { THERAPISTS, THERAPISTS_PREVIEW } from "../lib/therapists";

/**
 * "Meet our therapists".
 * - `grid` (default): location pages, first ten cards plus a "View more" button.
 * - `strip`: top of the home page, one swipeable row ending in a "View more" card.
 * The full team lives on /gallery/ (GallerySection).
 */
export default function TherapistSection({
  layout = "grid",
  title = "Meet Our Therapists",
}: {
  layout?: "grid" | "strip";
  title?: string;
}) {
  const team = THERAPISTS.slice(0, THERAPISTS_PREVIEW);
  const strip = layout === "strip";

  return (
    <section className={`section section-tight${strip ? " team-top" : ""}`} id="therapists">
      <div className="shell">
        <div className="cat-banner" data-reveal={strip ? undefined : true}>
          <h2>{title}</h2>
        </div>
        <div className={strip ? "team-strip" : "team-grid"}>
          {team.map((t, i) => (
            <figure
              key={t.id}
              className="cat-tile team-card"
              data-reveal={strip ? undefined : true}
              data-reveal-delay={strip ? undefined : (i % 5) * 60}
            >
              <div className="cat-tile-media">
                <Img
                  src={t.photo}
                  alt={`${t.name}, therapist at Mahipalpur Luxury Spa`}
                  width={600}
                  height={750}
                  loading={strip && i < 5 ? "eager" : "lazy"}
                />
              </div>
              <figcaption className="cat-tile-body">
                <h3>{t.name}</h3>
              </figcaption>
            </figure>
          ))}
          {strip ? (
            <a href="/gallery/" className="team-more">
              <span className="team-more-icon">
                <ArrowRight size={22} aria-hidden="true" />
              </span>
              View More
            </a>
          ) : null}
        </div>
        {strip ? null : (
          <div className="actions" style={{ justifyContent: "center", marginTop: 32 }}>
            <a href="/gallery/" className="btn btn-copper">
              View More <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
