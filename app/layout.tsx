import "./theme.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";
import Reveal from "./components/Reveal";
import {
  BUSINESS_NAME,
  EMAIL,
  FULL_ADDRESS,
  INDEX_ROBOTS,
  LOCAL_BUSINESS,
  NAV_LINKS,
  OG_IMAGE,
  PARTNER_HOST,
  PARTNER_NAME,
  PARTNER_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_HOST,
  SITE_URL,
  jsonLd,
} from "./lib/site";
import { LOCATION_PAGES } from "./lib/locations";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
  description:
    "Body massage, authentic Russian Banya and spa treatments in Mahipalpur, ten minutes from IGI Airport. Private rooms, certified therapists, open 24/7.",
  robots: INDEX_ROBOTS,
  openGraph: {
    title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
    description:
      "Body massage, Russian Banya and spa treatments in Mahipalpur, ten minutes from IGI Airport. Private rooms, certified therapists, open 24 hours.",
    url: `${SITE_URL}/`,
    siteName: BUSINESS_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Spa in Mahipalpur" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
    description: "Body massage, Russian Banya and spa treatments in Mahipalpur. Open 24 hours.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/` },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  applicationName: BUSINESS_NAME,
  appleWebApp: { title: "Russian Spa", capable: true, statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

/** Self-hosted via next/font: no render-blocking third-party stylesheet. */
const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-assistant",
});

const AREAS_TEXT =
  "Mahipalpur, Aerocity, IGI Airport, Dwarka, Vasant Kunj, Vasant Vihar, Saket, Hauz Khas, Green Park, Karol Bagh, Defence Colony and Gurugram";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={assistant.variable} suppressHydrationWarning>
      <head>
        {/* One site-wide business entity; inner pages reference it by @id. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", ...LOCAL_BUSINESS }) }}
        />
        {/* Turn on scroll-reveal before first paint so nothing flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <Reveal />

        <main id="main">{children}</main>

        <FloatingActions />

        {/* Side offer tab — the first-visit discount from the pricing page. */}
        <a href="/pricing/#offers" className="side-tab" aria-label="Flat 15% off your first visit — see the offer">
          <span className="side-tab-arrow" aria-hidden="true" />
          <span className="side-tab-text">FLAT 50% OFF for Two Booking</span>
        </a>

        <footer className="site-footer">
          <div className="shell">
            <div className="footer-top">
              <div>
                <a href="/" className="brand" aria-label="Russian Spa Centre — home">
                  <img src="/logo.svg" alt="" width={44} height={44} aria-hidden="true" />
                  <span className="brand-text">
                    Russian Spa Centre
                    <small>Mahipalpur · Aerocity</small>
                  </span>
                </a>
                <p className="footer-about">
                  Delhi NCR&apos;s premier destination for authentic Russian Banya, luxury massage, and holistic
                  wellness. Open 24/7, 365 days a year.
                </p>
                <span className="footer-badge">
                  <Sparkles size={13} aria-hidden="true" /> 15% OFF FIRST VISIT · OPEN 24/7
                </span>
              </div>

              <nav aria-label="Footer">
                <h2>Explore</h2>
                <ul className="footer-links">
                  {NAV_LINKS.filter((link) => !link.href.startsWith("/spa-in-")).map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2>Treatments</h2>
                <ul className="footer-links">
                  <li>
                    <a href="/services/#signature">Russian Banya</a>
                  </li>
                  <li>
                    <a href="/services/#massage">Body Massage</a>
                  </li>
                  <li>
                    <a href="/services/#rituals">Rituals &amp; Add-Ons</a>
                  </li>
                  <li>
                    <a href="/pricing/#packages">Memberships</a>
                  </li>
                  <li>
                    <a href="/pricing/#offers">Current Offers</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Locations</h2>
                <ul className="footer-links">
                  {LOCATION_PAGES.map((l) => (
                    <li key={l.path}>
                      <a href={l.path}>{l.label}</a>
                    </li>
                  ))}
                  <li>
                    <a href="/contact/#map">Spa in Mahipalpur</a>
                  </li>
                  <li>
                    <a href="/contact/#directions">Spa near IGI Airport</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Visit Us</h2>
                <ul className="footer-contact">
                  <li>
                    <MapPin size={15} aria-hidden="true" /> {FULL_ADDRESS}
                  </li>
                  <li>
                    <Phone size={15} aria-hidden="true" /> <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
                  </li>
                  <li>
                    <Mail size={15} aria-hidden="true" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </li>
                  <li>
                    <Clock size={15} aria-hidden="true" /> Open 24 Hours · 7 Days a Week
                  </li>
                </ul>
              </div>
            </div>

            <p className="footer-areas">
              <strong>Areas we serve:</strong> {AREAS_TEXT}. Featured:{" "}
              {LOCATION_PAGES.map((l, i) => (
                <span key={l.path}>
                  {i ? " · " : null}
                  <a href={l.path}>
                    {l.label} <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </span>
              ))}
            </p>

            <div className="footer-bottom">
              <p style={{ margin: 0 }}>© 2026 Russian Spa Centre · {SITE_HOST} · All rights reserved</p>
              <p className="footer-legal" style={{ margin: 0 }}>
                <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
                <a href="/privacy-policy/">Privacy Policy</a>
              </p>
            
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
