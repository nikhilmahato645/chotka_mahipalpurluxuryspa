"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ArrowLeft, CalendarCheck, FileText, MapPin, Menu, MessageCircle, PhoneCall, Search, X } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "../lib/site";
import { RATE_GROUPS } from "../pricing/data";
import { LOCATION_PAGES } from "../lib/locations";

type Kind = "location" | "page" | "treatment";
type Item = { kind: Kind; name: string; meta: string; href: string; keywords?: string };

/** The location pages, exactly as listed in app/lib/locations.ts (same order as the sitemap). */
const LOCATIONS: Item[] = LOCATION_PAGES.map((l) => ({
  kind: "location" as const,
  name: l.label,
  meta: l.meta,
  href: l.path,
  keywords: l.keywords,
}));

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

/** Phones and tablets get the full-screen search page; wider screens keep the dropdown. */
const FULLSCREEN_QUERY = "(max-width: 900px)";

/** Grouped result rows, shared by the desktop dropdown and the full-screen page. */
function ResultList({
  id,
  className,
  results,
  query,
  active,
  setActive,
  onPick,
}: {
  id: string;
  className: string;
  results: Item[];
  query: string;
  active: number;
  setActive: (i: number) => void;
  onPick: (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const q = query.trim();
  return (
    <div className={className} id={id} role="listbox">
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
                    onClick={(e) => onPick(e, t.href)}
                    className={`sr-${t.kind}`}
                  >
                    <Icon size={15} aria-hidden="true" className="sr-icon" />
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
  );
}

function TreatmentSearch() {
  const [query, setQuery] = useState("");
  /** Desktop dropdown. */
  const [open, setOpen] = useState(false);
  /** Full-screen search page (phones and tablets). */
  const [full, setFull] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const pageInputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  // Close the desktop dropdown on an outside click.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // The phone's back button closes the search page, and a page restored from
  // the back-forward cache never comes back with it open.
  useEffect(() => {
    const onPop = () => setFull(false);
    const onShow = () => setFull(false);
    window.addEventListener("popstate", onPop);
    window.addEventListener("pageshow", onShow);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("pageshow", onShow);
    };
  }, []);

  // Lock the page behind the search page while it is open.
  useEffect(() => {
    if (!full) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [full]);

  const openFull = () => {
    // Focus inside the tap itself, so phones raise the keyboard straight away.
    pageInputRef.current?.focus();
    if (full) return;
    setActive(0);
    setFull(true);
    try {
      window.history.pushState({ search: true }, "");
    } catch {}
  };

  /** Back arrow / Escape: undo the history entry, which closes the page via popstate. */
  const closeFull = () => {
    if (window.history.state?.search) window.history.back();
    else setFull(false);
  };

  const go = (href: string) => {
    setOpen(false);
    // From the search page, replace its history entry so Back returns to the page underneath.
    if (full) window.location.replace(href);
    else window.location.href = href;
  };

  const onPick = (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    if (full) {
      e.preventDefault();
      go(href);
    } else {
      setOpen(false);
    }
  };

  const onKeys = (e: ReactKeyboardEvent<HTMLInputElement>) => {
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
      if (full) closeFull();
      else setOpen(false);
    }
  };

  const onType = (value: string) => {
    setQuery(value);
    setActive(0);
  };

  const isFullscreen = () => window.matchMedia(FULLSCREEN_QUERY).matches;

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
            onType(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (isFullscreen()) openFull();
            else setOpen(true);
          }}
          onKeyDown={onKeys}
          role="combobox"
          aria-expanded={open || full}
          aria-controls={full ? "search-page-results" : "search-results"}
          aria-autocomplete="list"
        />
        {query ? (
          <button type="button" className="search-clear" onClick={() => onType("")} aria-label="Clear search">
            <X size={15} aria-hidden="true" />
          </button>
        ) : null}
      </label>

      {open && !full ? (
        <ResultList
          id="search-results"
          className="search-results"
          results={results}
          query={query}
          active={active}
          setActive={setActive}
          onPick={onPick}
        />
      ) : null}

      {/* Full-screen search page, rendered on <body> so it sits above every other layer.
          Always mounted (once hydrated) so its input can take focus inside the tap. */}
      {mounted
        ? createPortal(
          <div
            className={`search-page${full ? " is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            aria-hidden={!full}
          >
            <div className="search-page-bar">
              <button
                type="button"
                className="search-page-back"
                onClick={closeFull}
                aria-label="Close search"
                tabIndex={full ? 0 : -1}
              >
                <ArrowLeft size={22} aria-hidden="true" />
              </button>
              <label className="search-page-field">
                <span className="vh">Search treatments, locations and pages</span>
                <input
                  ref={pageInputRef}
                  type="search"
                  enterKeyHint="search"
                  placeholder="Search massages, locations, prices…"
                  value={query}
                  onChange={(e) => onType(e.target.value)}
                  onKeyDown={onKeys}
                  tabIndex={full ? 0 : -1}
                  role="combobox"
                  aria-expanded={full}
                  aria-controls="search-page-results"
                  aria-autocomplete="list"
                />
                {query ? (
                  <button
                    type="button"
                    className="search-clear"
                    onClick={() => {
                      onType("");
                      pageInputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                    tabIndex={full ? 0 : -1}
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                ) : (
                  <Search size={18} aria-hidden="true" className="search-page-icon" />
                )}
              </label>
            </div>
            <div className="search-page-body">
              {full ? (
                <ResultList
                  id="search-page-results"
                  className="search-results search-results-page"
                  results={results}
                  query={query}
                  active={active}
                  setActive={setActive}
                  onPick={onPick}
                />
              ) : null}
            </div>
          </div>,
            document.body
          )
        : null}
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

          <a href="/" className="brand" aria-label="Mahipalpur Luxury Spa — home">
            <img src="/logo.svg" alt="" width={42} height={42} aria-hidden="true" />
            <span className="brand-text">
              Mahipalpur Luxury Spa
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
            <a href="/contact/#book" className="header-icon header-book" aria-label="Book an appointment">
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
            <span className="brand-text">Mahipalpur Luxury Spa</span>
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
          <p className="drawer-label">Locations</p>
          <nav className="drawer-nav drawer-locations" aria-label="Locations">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                aria-current={pathname === loc.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <MapPin size={15} aria-hidden="true" />
                <span>{loc.name}</span>
                <small>{loc.meta}</small>
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
