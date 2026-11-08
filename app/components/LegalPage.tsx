import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

export type LegalSection = { id: string; heading: string; body: ReactNode };

/** Shared layout for the privacy policy and terms: title, date, contents list and sections. */
export default function LegalPage({
  label,
  title,
  updated,
  intro,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="shell legal">
      <div className="legal-head">
        <Breadcrumb items={[{ label }]} />
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        <div className="legal-intro">{intro}</div>
      </div>

      <div className="legal-grid">
        <nav className="legal-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-body">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span> {s.heading}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
