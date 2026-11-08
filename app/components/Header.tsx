"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarCheck, FileText, MapPin, Menu, MessageCircle, PhoneCall, Search, X } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "../lib/site";
import { RATE_GROUPS } from "../pricing/data";
import { LOCATION_PAGES } from "../lib/locations";

type Kind = "location" | "page" | "treatment";
type Item = { kind: Kind; name: string; meta: string; href: string; keywords?: string };

/** Locations the spa serves from its one premises. */
const LOCATIONS: Item[] = [
  ...LOCATION_PAGES.map((l) => ({
    kind: "location" as const,
    name: l.label,
    meta: l.meta,
    href: l.path,
    keywords: l.keywords,
  })),
  {
    kind: "location",
    name: "Spa in Mahipalpur",
    meta: "Our premises · map",
    href: "/contact/#map",
    keywords: "mahipalpur defence enclave address location near me map directions",
  },
  {
    kind: "location",
    name: "Spa near IGI Airport",
    meta: "10 min from T3",
    href: "/contact/#directions",
    keywords: "airport igi terminal t3 t1 layover delhi location near",
  },
];

/** Main pages of the site. */
const PAGES: Item[] = [
  { kind: "page", name: "Services", meta: "All 20+ treatments", href: "/services/", keywords: "service treatments menu massage list" },
  { kind: "page", name: "Pricing", meta: "Full price list", href: "/pricing/", keywords: "price prices rate rates cost package packages membership offer offers discount" },
  { kind: "page", name: "Current Offers", meta: "15% off first visit", href: "/pricing/#offers", keywords: "offer discount deal first visit coupon" },
  { kind: "page", name: "About Us", meta: "Our story", href: "/about/", keywords: "about story therapists team" },
  { kind: "page", name: "Contact & Booking", meta: "Call · WhatsApp · Map", href: "/contact/", keywords: "contact book booking appointment phone whatsapp email address" },
];

/** Every treatment on the rate card. */
const TREATMENTS: Item[] = RATE_GROUPS.flatMap((group) =>
  group.rates.map((rate) => ({
    kind: "treatment" as const,
    name: rate.name,
    meta: `${rate.duration} · ₹${rate.price.toLocaleString("en-IN")}`,
    href: `/pricing/#${group.id}`,
    keywords: group.title,
  }))
);

const GROUPS: { kind: Kind; label: string; icon: typeof Search }[] = [
  { kind: "location", label: "Locations", icon: MapPin },
  { kind: "page", label: "Pages", icon: FileText },
  { kind: "treatment", label: "Treatments", icon: Search },
];

const matches = (item: Item, q: string) =>
  item.name.toLowerCase().includes(q) || (item.keywords ?? "").toLowerCase().includes(q);

/** Bolds the part of a name that matches what the visitor typed. */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  const i = q ? text.toLowerCase().indexOf(q.toLowerCase()) : -1;
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

function TreatmentSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  /** Flat list in display order — locations, then pages, then treatments. */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [...LOCATIONS, ...PAGES.slice(0, 2), ...TREATMENTS.slice(0, 5)];
    return [
      ...LOCATIONS.filter((i) => matches(i, q)),
      ...PAGES.filter((i) => matches(i, q)),
      ...TREATMENTS.filter((i) => matches(i, q)).slice(0, 8),
    ];
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    window.location.href = href;
  };

  const q = query.trim();

  return (
    <div className="search" ref={boxRef}>
      <label className="search-box">
        <Search size={17} aria-hidden="true" />
        <span className="vh">Search treatments, locations and pages</span>
        <input
          type="search"
          placeholder="Search massages, locations, prices…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && results[active]) {
              e.preventDefault();
              go(results[active].href);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          role="combobox"
          aria-expanded={open}
          aria-controls="search-results"
          aria-autocomplete="list"
        />
        {query ? (
          <button
            type="button"
            className="search-clear"
            onClick={() => {
              setQuery("");
              setActive(0);
            }}
            aria-label="Clear search"
          >
            <X size={15} aria-hidden="true" />
          </button>
        ) : null}
      </label>
      {open ? (
        <div className="search-results" id="search-results" role="listbox">
          {results.length ? (
            GROUPS.map((group) => {
              const items = results.filter((r) => r.kind === group.kind);
              if (!items.length) return null;
              const Icon = group.icon;
              const label = !q && group.kind === "treatment" ? "Popular treatments" : group.label;
              return (
                <div key={group.kind} role="group" aria-label={label}>
                  <p className="search-label">{label}</p>
                  {items.map((t) => {
                    const index = results.indexOf(t);
                    return (
                      <a
                        key={`${t.kind}-${t.name}`}
                        href={t.href}
                        role="option"
                        aria-selected={index === active}
                        onMouseEnter={() => setActive(index)}
                        onClick={() => setOpen(false)}
                        className={`sr-${t.kind}`}
                      >
                        <Icon size={14} aria-hidden="true" className="sr-icon" />
                        <span className="sr-name">
                          <Highlight text={t.name} query={query} />
                        </span>
                        <span className="sr-meta">{t.meta}</span>
                      </a>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <p className="search-empty">
              Nothing matches “{q}”. Call {PHONE_DISPLAY} and we&apos;ll help.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={20} aria-hidden="true" />
          </button>

          <a href="/" className="brand" aria-label="Russian Spa Centre — home">
            <img src="/logo.svg" alt="" width={42} height={42} aria-hidden="true" />
            <span className="brand-text">
              Russian Spa Centre
              <small>Mahipalpur · Aerocity</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>

          <TreatmentSearch />

          <div className="header-actions">
            <a href={`tel:${PHONE_E164}`} className="header-icon" aria-label={`Call ${PHONE_DISPLAY}`}>
              <PhoneCall size={20} strokeWidth={1.8} aria-hidden="true" />
              <span>Call</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="header-icon" aria-label="WhatsApp">
              <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a href="/contact/#book" className="header-icon" aria-label="Book an appointment">
              <CalendarCheck size={20} strokeWidth={1.8} aria-hidden="true" />
              <span>Book</span>
            </a>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-scrim" onClick={() => setOpen(false)} />
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer-head">
            <span className="brand-text">Russian Spa Centre</span>
            <button
              type="button"
              className="drawer-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <nav className="drawer-nav" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="drawer-info">
            <p>Open 24 hours · Mahipalpur, New Delhi · 10 min from IGI Airport</p>
            <a href={`tel:${PHONE_E164}`} className="btn btn-copper" tabIndex={open ? 0 : -1}>
              <PhoneCall size={15} aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
              tabIndex={open ? 0 : -1}
            >
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
