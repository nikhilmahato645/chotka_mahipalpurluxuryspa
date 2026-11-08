import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../components/LegalPage";
import { BUSINESS_NAME, EMAIL, FULL_ADDRESS, PHONE_DISPLAY, PHONE_E164, SITE_HOST, SITE_URL, breadcrumbLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/privacy-policy/";
const UPDATED = "1 November 2026";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Privacy Policy | Mahipalpur Luxury Spa",
  description:
    "How Mahipalpur Luxury Spa handles your details, booking messages and location when you use our website — including the optional “find the spa near me” feature.",
  ogImageAlt: "Privacy policy — Mahipalpur Luxury Spa",
});

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <p>
        This website, {SITE_HOST}, is run by {BUSINESS_NAME}, {FULL_ADDRESS}. When this policy says “we”, “us” or
        “our”, it means {BUSINESS_NAME}. If you have any question about your data, contact us at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>.
      </p>
    ),
  },
  {
    id: "information",
    heading: "Information we collect",
    body: (
      <>
        <p>We collect only what we need to take and manage your booking:</p>
        <ul>
          <li>
            <strong>Details you give us</strong> — your name, phone number, preferred treatment and time, and any notes
            (for example, pressure preference or health conditions) when you call, send a WhatsApp message or email us.
          </li>
          <li>
            <strong>Booking form</strong> — the form on our contact page does not send anything to our server. It only
            prepares a WhatsApp message on your device, which you can review and choose to send.
          </li>
          <li>
            <strong>Your location</strong> — only if you choose to use the “Find the spa near me” feature. See{" "}
            <a href="#location">Location access</a> below.
          </li>
          <li>
            <strong>Technical data</strong> — like most websites, our hosting provider may keep standard server logs
            (IP address, browser type, pages visited and time) for security and to keep the site running.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "location",
    heading: "Location access — finding the best spa near you",
    body: (
      <>
        <p>
          Our website offers an optional <strong>“Find the spa near me”</strong> button. When you tap it, your browser
          asks for permission to share your location. We use your location only to help you find the best spa near
          you — to show how far you are from Mahipalpur Luxury Spa, give an estimated travel time, and open directions
          from where you are.
        </p>
        <ul>
          <li>We ask for your location <strong>only when you tap the button</strong> — never automatically.</li>
          <li>
            The distance is worked out <strong>inside your browser</strong>. Your location is not sent to or stored on
            our servers.
          </li>
          <li>
            If you tap “Directions from my location”, your starting point is passed to Google Maps so it can plan the
            route. Google handles it under its own privacy policy.
          </li>
          <li>
            You can refuse, or later withdraw, permission at any time in your browser or phone settings. The rest of
            the website works normally without it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    heading: "How we use your information",
    body: (
      <ul>
        <li>To confirm, reschedule or cancel your appointment.</li>
        <li>To match you with the right treatment and therapist, and to keep you safe during your session.</li>
        <li>To reply to your questions by phone, WhatsApp or email.</li>
        <li>To issue invoices and GST documentation for corporate bookings.</li>
        <li>To keep our website secure and working properly.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing your information",
    body: (
      <>
        <p>We do not sell or rent your personal information. We share it only when needed:</p>
        <ul>
          <li>
            <strong>WhatsApp and phone providers</strong> — messages and calls pass through these services under
            their own privacy terms.
          </li>
          <li>
            <strong>Google Maps</strong> — the map on our pages is provided by Google, which may set its own cookies
            when it loads.
          </li>
          <li>
            <strong>Legal reasons</strong> — if the law, a court or a government authority requires it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies",
    body: (
      <p>
        Our website does not use advertising or tracking cookies of its own. Embedded services such as Google Maps
        may set cookies when they load; you can block or delete these in your browser settings.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it and how we protect it",
    body: (
      <p>
        We keep booking details only as long as needed to provide our services and meet accounting or legal
        requirements, then delete them. Health information you share is used only by your therapist for your
        treatment. We take reasonable steps to keep your information safe, though no method of sending data over the
        internet is completely secure.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "Your rights",
    body: (
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to see, correct or delete the
        personal information we hold about you, and withdraw any consent you have given. Email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond within a reasonable time.
      </p>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: (
      <p>
        Our services are intended for adults. We do not knowingly collect information from anyone under 18 without a
        parent or guardian&apos;s consent.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top of this page shows when it was last changed.
        Please also read our <a href="/terms-and-conditions/">Terms &amp; Conditions</a>.
      </p>
    ),
  },
];

const LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  name: "Privacy Policy",
  url: `${SITE_URL}${PATH}`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(LD, breadcrumbLd("Privacy Policy", PATH)) }}
      />
      <LegalPage
        label="Privacy Policy"
        title="Privacy Policy"
        updated={UPDATED}
        intro={
          <p>
            Your privacy matters to us. This policy explains what information {BUSINESS_NAME} collects when you visit
            our website or book a treatment, why we collect it — including how we use your location to help you find
            the best spa near you — and the choices you have.
          </p>
        }
        sections={SECTIONS}
      />
    </>
  );
}
