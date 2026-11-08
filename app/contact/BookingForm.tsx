"use client";

import { useState, type FormEvent } from "react";
import { Info, Send } from "lucide-react";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import { TREATMENTS } from "./data";

type Errors = Partial<Record<"name" | "phone" | "treatment", string>>;

/**
 * The site is a static export with no server to POST to, so the form builds
 * the enquiry and opens WhatsApp — the channel the spa actually books on.
 */
export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "", when: "", notes: "" });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[\d\s+()-]{8,}$/.test(form.phone.trim())) next.phone = "Please enter a phone number we can reach you on.";
    if (!form.treatment) next.treatment = "Please choose a treatment.";
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const message = [
      "Hello Russian Spa Centre, I'd like to book an appointment.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Treatment: ${form.treatment}`,
      form.when.trim() ? `Preferred time: ${form.when.trim()}` : null,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Vikram Singh"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={errors.name ? "is-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="field-error">
              {errors.name}
            </span>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +91 98xxxxxxxx"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={errors.phone ? "is-error" : undefined}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <span id="phone-error" className="field-error">
              {errors.phone}
            </span>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="treatment">Treatment</label>
        <select
          id="treatment"
          name="treatment"
          value={form.treatment}
          onChange={(e) => set("treatment")(e.target.value)}
          className={errors.treatment ? "is-error" : undefined}
          aria-invalid={Boolean(errors.treatment)}
          aria-describedby={errors.treatment ? "treatment-error" : undefined}
        >
          <option value="">Choose a treatment…</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.treatment ? (
          <span id="treatment-error" className="field-error">
            {errors.treatment}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="when">Preferred Day &amp; Time (optional)</label>
        <input
          id="when"
          name="when"
          type="text"
          placeholder="e.g. Saturday around 8 PM, or as soon as possible"
          value={form.when}
          onChange={(e) => set("when")(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="notes">Anything We Should Know? (optional)</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Pressure preference, problem areas, male or female therapist, allergies…"
          value={form.notes}
          onChange={(e) => set("notes")(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-copper">
        <Send size={15} aria-hidden="true" /> Continue on WhatsApp
      </button>

      <p className="form-note">
        <Info size={14} aria-hidden="true" />
        <span>
          In a hurry? Call <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a> instead — we answer round the clock and
          can usually start within 20 minutes of a walk-in.
        </span>
      </p>
    </form>
  );
}
