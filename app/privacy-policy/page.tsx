import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../components/LegalPage";
import { BUSINESS_NAME, EMAIL, FULL_ADDRESS, PHONE_DISPLAY, PHONE_E164, SITE_HOST, SITE_URL, breadcrumbLd, jsonLd, pageMeta } from "../lib/site";

const PATH = "/privacy-policy/";
const UPDATED = "15 November 2026";

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: "Privacy Policy | Mahipalpur Luxury Spa",
  description:
    "Bookings at Mahipalpur Luxury Spa happen directly on WhatsApp. Our website has no database and stores no personal data, location, browser data or cookies.",
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
    id: "booking",
    heading: "How booking works — directly on WhatsApp",
    body: (
      <>
        <p>
          All bookings are made on <strong>WhatsApp</strong>. When you tap a “Book” or WhatsApp button on our website,
          WhatsApp opens on your phone or computer with a ready-made message addressed to the WhatsApp number of the
          spa&apos;s owner or manager.
        </p>
        <ul>
          <li>
            <strong>You send the message yourself</strong>, directly to the owner or manager. You can read and change
            it before sending, or decide not to send it at all.
          </li>
          <li>
            The booking form on our website <strong>does not send anything to our website or any server</strong>. It
            only prepares the WhatsApp message on your own device.
          </li>
          <li>
            Your booking is confirmed in that WhatsApp chat — there is no online account, login or sign-up on our
            website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "phone-number",
    heading: "Your phone number stays on WhatsApp and is kept safe",
    body: (
      <>
        <p>
          When you message us, your phone number and the chat stay <strong>inside WhatsApp</strong>, between you and the
          spa&apos;s owner or manager. We do not copy your number into any website database, spreadsheet or mailing
          list.
        </p>
        <ul>
          <li>Your number is used only to reply to you about your booking and appointment.</li>
          <li>We never sell, rent or share your number with anyone for marketing.</li>
          <li>We do not add you to promotional groups or broadcast lists without your permission.</li>
          <li>
            WhatsApp protects chats with end-to-end encryption under its own privacy policy. You can delete the chat
            from your side at any time, and you can ask us to delete it from ours.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "no-database",
    heading: "We do not store your data in any database",
    body: (
      <>
        <p>
          Our website <strong>has no database</strong> and does not collect or save personal information. In simple
          terms, we do <strong>not</strong> store:
        </p>
        <ul>
          <li>your name, phone number or booking details;</li>
          <li>your location;</li>
          <li>your browser data, device details or browsing history;</li>
          <li>cookies or any other tracking data.</li>
        </ul>
        <p>
          We also do not use analytics, advertising or tracking tools on this website. The only place your booking
          details exist is the WhatsApp chat you choose to start.
        </p>
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
          asks for permission to share your location. We use it only to show how far you are from Mahipalpur Luxury
          Spa, give an estimated travel time, and open directions from where you are.
        </p>
        <ul>
          <li>We ask for your location <strong>only when you tap the button</strong> — never automatically.</li>
          <li>
            The distance is worked out <strong>inside your own browser</strong>. Your location is never sent to us and
            is <strong>not stored in any database</strong>, cookie or browser storage. It is gone when you close or
            reload the page.
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
    heading: "How we use the details you send on WhatsApp",
    body: (
      <ul>
        <li>To confirm, reschedule or cancel your appointment.</li>
        <li>To match you with the right treatment and therapist, and to keep you safe during your session.</li>
        <li>To reply to your questions on WhatsApp or by phone.</li>
        <li>To issue invoices and GST documentation if you ask for them for a corporate booking.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing your information",
    body: (
      <>
        <p>We do not sell, rent or share your personal information. The only outside services involved are:</p>
        <ul>
          <li>
            <strong>WhatsApp and phone providers</strong> — your messages and calls pass through these services under
            their own privacy terms.
          </li>
          <li>
            <strong>Google Maps</strong> — the map on our pages is provided by Google, which may set its own cookies
            when it loads.
          </li>
          <li>
            <strong>Legal reasons</strong> — only if the law, a court or a government authority requires it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and browser storage",
    body: (
      <p>
        Our website does <strong>not</strong> set any cookies of its own and does not save anything in your browser
        (such as local storage). The embedded Google Maps may set its own cookies when it loads; you can block or
        delete these in your browser settings.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Server logs and security",
    body: (
      <p>
        Like every website, our hosting provider may keep short-term technical logs (such as IP address, browser type
        and time of visit) to keep the site secure and running. These logs are handled by the hosting provider, are not
        linked to your bookings and are not kept in any database of ours.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "Your rights",
    body: (
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to see, correct or delete the
        details you have shared with us on WhatsApp, and withdraw any consent you have given. Message us on WhatsApp or
        email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond within a reasonable time.
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
            Your privacy matters to us. At {BUSINESS_NAME}, bookings happen directly on WhatsApp — you message the
            spa&apos;s owner or manager yourself, and your number stays safe inside WhatsApp. Our website has no
            database and does not store your details, location, browser data or cookies. This policy explains it in
            full.
          </p>
        }
        sections={SECTIONS}
      />
    </>
  );
}
