import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../components/LegalPage";
import { BUSINESS_NAME, EMAIL, FULL_ADDRESS, PHONE_DISPLAY, PHONE_E164, SITE_HOST, SITE_URL, breadcrumbLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/terms-and-conditions/";
const UPDATED = "1 November 2026";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Terms & Conditions | Russian Spa Centre, Mahipalpur",
  description:
    "Booking, cancellation, pricing, offers, health and guest-conduct terms for treatments at Russian Spa Centre, Mahipalpur, and for using our website.",
  ogImageAlt: "Terms and conditions — Russian Spa Centre, Mahipalpur",
});

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    heading: "About these terms",
    body: (
      <p>
        These terms apply when you use {SITE_HOST} or book a treatment with {BUSINESS_NAME}, {FULL_ADDRESS}. By
        booking or visiting, you agree to them. Please also read our <a href="/privacy-policy/">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "bookings",
    heading: "Bookings",
    body: (
      <ul>
        <li>You can book by phone, WhatsApp, email or by walking in. A booking is confirmed once we reply to you.</li>
        <li>Couples suites and group bookings should be made at least 24 hours ahead, as space is limited.</li>
        <li>
          Please arrive 10 minutes early. If you arrive late, we may need to shorten your treatment so the next guest
          is not delayed; the full price still applies.
        </li>
        <li>You can request a male or female therapist; we will confirm your preference subject to availability.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    heading: "Cancellations and rescheduling",
    body: (
      <ul>
        <li>Standard bookings can be cancelled or rescheduled free of charge — just let us know.</li>
        <li>
          Couples suites and group bookings (six or more guests) need at least four hours&apos; notice. A confirmation
          deposit may be requested for these and is adjusted against your final bill.
        </li>
        <li>If a late cancellation or no-show means we cannot release the room, the deposit may not be refunded.</li>
      </ul>
    ),
  },
  {
    id: "pricing",
    heading: "Prices and payment",
    body: (
      <ul>
        <li>
          Prices shown on our <a href="/pricing/">price list</a> are in Indian Rupees and include applicable taxes.
          There is no night surcharge.
        </li>
        <li>Prices may change without notice; the rate confirmed when you book is the rate you pay.</li>
        <li>We accept cash, credit and debit cards, and UPI. Payment is due after your treatment.</li>
      </ul>
    ),
  },
  {
    id: "offers",
    heading: "Offers and discounts",
    body: (
      <ul>
        <li>
          The 15% first-visit discount applies once per guest, on a single treatment, and must be mentioned when
          booking.
        </li>
        <li>
          Offers cannot be combined with each other or with membership pricing. Senior-citizen and healthcare-worker
          discounts need a valid ID.
        </li>
        <li>We may change or end an offer at any time; bookings already confirmed keep the agreed price.</li>
      </ul>
    ),
  },
  {
    id: "health",
    heading: "Health and safety",
    body: (
      <ul>
        <li>
          Please tell us about any medical condition, injury, allergy, pregnancy or recent surgery before your
          treatment. Our therapists may adjust or decline a treatment if it is not safe for you.
        </li>
        <li>
          Russian Banya and heat treatments are not suitable for everyone — for example, people with heart conditions,
          very high or low blood pressure, or in early pregnancy. If in doubt, consult your doctor first.
        </li>
        <li>Our treatments are for relaxation and wellbeing and are not a substitute for medical care.</li>
        <li>Please do not visit under the influence of alcohol or drugs.</li>
      </ul>
    ),
  },
  {
    id: "conduct",
    heading: "Guest conduct",
    body: (
      <>
        <p>
          We provide professional, therapeutic spa and massage services only. Every guest is expected to treat our
          therapists and staff with respect.
        </p>
        <p>
          Any inappropriate behaviour, language or request — including any request of a sexual nature — will end the
          session immediately, without a refund, and the guest may be refused future bookings.
        </p>
      </>
    ),
  },
  {
    id: "belongings",
    heading: "Personal belongings",
    body: (
      <p>
        Lockers are provided for your belongings. Please keep valuables locked away; we cannot accept responsibility
        for items that are lost or damaged unless this is caused by our negligence.
      </p>
    ),
  },
  {
    id: "age",
    heading: "Age",
    body: <p>Guests must be 18 or older. Younger guests may be treated only with a parent or guardian present.</p>,
  },
  {
    id: "website",
    heading: "Use of our website",
    body: (
      <ul>
        <li>
          We try to keep everything on this website accurate and up to date, but treatments, timings and prices may
          change. Please confirm details when you book.
        </li>
        <li>The text, design and logo on this website belong to {BUSINESS_NAME} and may not be copied without permission.</li>
        <li>Links to other websites (such as Google Maps or WhatsApp) are provided for convenience; we are not responsible for their content.</li>
      </ul>
    ),
  },
  {
    id: "liability",
    heading: "Liability",
    body: (
      <p>
        To the extent allowed by law, our liability for any claim related to a treatment is limited to the price you
        paid for that treatment. Nothing in these terms limits any rights you have under Indian consumer law.
      </p>
    ),
  },
  {
    id: "law",
    heading: "Governing law and contact",
    body: (
      <p>
        These terms are governed by the laws of India, and any dispute will be handled by the courts of New Delhi. For
        any question, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or{" "}
        <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>.
      </p>
    ),
  },
];

const LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  name: "Terms & Conditions",
  url: `${SITE_URL}${PATH}`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(LD, breadcrumbLd("Terms & Conditions", PATH)) }}
      />
      <LegalPage
        label="Terms & Conditions"
        title="Terms & Conditions"
        updated={UPDATED}
        intro={
          <p>
            Please read these terms before booking. They explain how bookings, cancellations, prices and offers work
            at {BUSINESS_NAME}, what we ask of every guest, and the rules for using our website.
          </p>
        }
        sections={SECTIONS}
      />
    </>
  );
}
