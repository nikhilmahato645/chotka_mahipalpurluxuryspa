import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

/**
 * Native <details> accordion: no JavaScript, keyboard accessible, and every
 * answer is in the static HTML so it can back the FAQPage rich result.
 */
export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="faq">
      {faqs.map((faq, i) => (
        <details key={faq.q} open={i === 0} data-reveal>
          <summary>
            <h3>{faq.q}</h3>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
