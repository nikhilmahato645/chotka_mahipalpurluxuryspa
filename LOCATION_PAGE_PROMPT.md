# Location Page Prompt (paste into Claude Code)

Change only the 3 lines in the INPUTS block below for each new location.
Fill in the OWNER FACTS block if you have real reviews, photos or notes; leave it empty otherwise.

---

```
INPUTS
AREA_NAME: Vasant Kunj
SLUG: spa-in-vasant-kunj
NEARBY_AREA_PAGES_TO_LINK: Vasant Vihar, Mahipalpur, Aerocity   (only link the ones whose pages already exist)

OWNER FACTS (real information only; leave blank if none)
- Real guest reviews from this area (text + first name + permission given):
- Real photos to use (file paths):
- Anything true and specific about guests from this area:
```

---

## TASK

Build one new location landing page for the area in AREA_NAME, at `/<SLUG>/`, using the same system as
`app/spa-in-aerocity/` (`page.tsx` + `data.ts`, rendered by `app/components/LocationPage.tsx`, structured data
from `app/lib/location.ts`, metadata from `pageMeta()` in `app/lib/site.ts`).

The goal: people in AREA_NAME searching Google for "spa in AREA_NAME", "body massage in AREA_NAME",
"best spa in AREA_NAME", "best body massage in AREA_NAME", "spa near AREA_NAME", "massage centre near AREA_NAME",
"Russian spa in AREA_NAME" should find a page that answers them well. Follow Google Search Central guidance:
people-first content, spam policies, title links, snippets, image SEO, structured data rules and Core Web Vitals.

Read these files fully before writing anything:
`app/spa-in-aerocity/data.ts`, `app/spa-in-aerocity/page.tsx`, `app/components/LocationPage.tsx`,
`app/components/PageHero.tsx`, `app/components/Img.tsx`, `app/lib/location.ts`, `app/lib/site.ts`,
`app/pricing/data.ts`, `app/services/data.ts`, `app/home/data.ts`, `app/home/Home.tsx`,
`app/components/Header.tsx`, `app/layout.tsx`, `app/sitemap.ts`, `next.config.js`, plus every other existing
`app/spa-in-*/data.ts`.

---

## STEP 0 — ONE-TIME FIXES (do once; if they are already done, skip this step and say so)

`LocationPage.tsx` still has Aerocity-specific text built in. Move it into `LocationContent` so each area
gets its own:

1. Image paths and alt text are hard-coded (`traveller-recovery.jpg`, `aerocity-treatments.jpg`,
   `flight-guide.jpg`, and alts mentioning "travellers", "hotel guests", "long-haul flight"). Add fields like
   `introImage`, `treatmentsImage`, `articleImage`, each `{ src, alt, width, height }`, and move the Aerocity
   values into `app/spa-in-aerocity/data.ts` so that page's output doesn't change.
2. The treatments lede says "Drawn from our own booking log…". Make it a content field (`treatmentsLede`).
   Only claim booking-log data if the owner confirms it.
3. Make `reviews` optional. If the array is empty, don't render the reviews section at all.
4. Create a single registry, e.g. `app/lib/locations.ts`, exporting `{ areaName, path, shortLabel }` for
   every location page. Use it to build the sitemap entries, the Header location links, the footer links
   and the home page "areas we serve" links (`app/home/data.ts` ~line 319). New pages then need one line.
5. Make sure the hero image loads with `loading="eager"` and `fetchPriority="high"` (it's the LCP element),
   that every other image is lazy, and that every `<img>` has `width`/`height` (prevents CLS).
6. Add a "Nearby areas we also serve" block to `LocationPage` that links to 2–4 other location pages from the
   registry, with descriptive anchor text ("Spa near Vasant Vihar", not "click here").

After Step 0, run `npm run build` and confirm `/spa-in-aerocity/` renders the same as before.

---

## STEP 1 — HONESTY RULES (these take priority over every SEO rule)

The business has **one premises**: Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037
(see `ADDRESS` in `app/lib/site.ts`). The page serves AREA_NAME **from** there.

- Never say or suggest there's a branch, outlet or address in AREA_NAME. Say clearly, near the top and in
  one FAQ, that the spa is in Mahipalpur and give the real travel time from AREA_NAME.
- **No fake reviews.** Use only reviews in OWNER FACTS. If there are none, leave `reviews: []`. Never make up
  names, job titles, hotels or quotes. Don't add `Review` or `AggregateRating` schema.
- **Prices:** every treatment card must be an item from `app/pricing/data.ts`, with the exact name (or the
  exact name plus a short area angle), duration and price. Don't invent treatments or prices.
- **Facts about the business** (24/7 hours, no night surcharge, parking, GST invoices, Banya, etc.) must
  already be stated somewhere in the codebase. If a claim isn't, leave it out.
- **Geography:** only real, well-known landmarks, roads, malls, hospitals, colleges, metro stations and
  sectors/pockets of AREA_NAME. Give travel times as honest ranges (e.g. "15–25 min, longer at peak hours").
  If you aren't sure something exists, or exists under that name, leave it out. Don't mention a metro
  station or line unless you're sure it's operational today.
- **No made-up numbers or awards:** no "10,000+ happy clients", "No.1 spa", "award-winning",
  "certified by…", or "x years" unless the codebase already states it.
- "Best" may appear in the title/H1 as the searcher's phrase, but don't support it with invented proof.
- **Strictly therapeutic tone.** This is a Russian Banya and massage-therapy spa. No suggestive words or
  imagery, nothing about the therapist's gender or nationality, no slang terms used by adult-services
  listings, no "full service", "body to body", "cross massage", "happy ending" or similar. This matters
  for trust, for SafeSearch, and legally.

---

## STEP 2 — CONTENT THAT IS UNIQUE, NOT COPIED

Google's spam policy treats many near-identical city pages made to catch searches as **doorway pages**,
which can be demoted. Every location page needs its own reason to exist.

1. **Find this area's angle first.** Before writing, state in 2–3 lines what makes AREA_NAME's visitors
   different (who lives or works there, what their day looks like, what they'd need from a spa, how they'd
   get to Mahipalpur). Aerocity's angle was hotel guests and flight schedules. Don't reuse it; pick
   something true for AREA_NAME (e.g. for Vasant Kunj: residential pockets and families, the malls on Nelson
   Mandela Marg, the institutional area and hospital staff on shifts, weekend visits, the short drive to
   Mahipalpur). Build the hero text, intro, highlights, treatment descriptions, article and FAQs around
   that angle.
2. **Write every sentence new.** Don't paraphrase the Aerocity page or any other location page. Shared
   business facts (address, hours, pricing policy) may repeat, but reword them.
3. **Fill every `LocationContent` field** with the same depth as Aerocity: hero (badge, H1, 2 paras,
   4 stats), intro (3 paras), 4 highlights, 6 treatments, 6–9 nearby places, 3 getting-here routes, a guide
   article (standfirst + 3 sections of 2 paras + 4 takeaways) and 6–8 FAQs. Aim for about 1,300–1,800 words
   of visible text, but every paragraph must be useful. No filler.
4. **The guide article** should answer a question someone from AREA_NAME would really ask, e.g. "Which
   massage for desk-work back pain", "Planning a weekend Banya visit as a couple", "What to expect on your
   first Russian Banya". Pick a topic no other location page has used.
5. **FAQs** must be the real questions a searcher in AREA_NAME has: how far, how to get there, parking,
   open late, is there a branch in AREA_NAME, prices, couples, first visit, what to bring. Answer each in
   2–4 plain sentences.
6. **Duplicate check (required).** Write a small Node script in the OS temp folder (not in the project)
   that compares the new `data.ts` text with every other `app/spa-in-*/data.ts` and with `app/home/data.ts`,
   and reports any run of 8+ identical words. Rewrite anything it finds, except unavoidable facts (address,
   phone, a price-list item name).

---

## STEP 3 — ON-PAGE SEO (Google Search Central)

**URL:** `/<SLUG>/`, lowercase, hyphens, with the trailing slash (`trailingSlash: true`).

**Title (`seo.title`):** unique, about 50–60 characters, main phrase first, brand last.
Pattern: `Best Spa & Body Massage in AREA_NAME | Russian Spa Centre`. If that's too long, drop "Best".

**Meta description (`seo.description`):** unique, about 140–160 characters, written for a human to click:
the area, the honest distance from Mahipalpur, 24/7, one or two main treatments. No keyword lists.

**OG/Twitter:** a unique `ogTitle`/`ogDescription`, and an `ogImageAlt` that names the area truthfully
("spa serving AREA_NAME", not "spa in AREA_NAME").

**Headings:** exactly one H1 (from `h1`), containing "Spa" + "Body Massage" + AREA_NAME naturally. The H2s
come from the component; keep the H2s and H3s you write descriptive, and use keyword variants only where
they read naturally.

**Keyword use:** the main phrase goes in the title, H1, first paragraph, the URL and one image alt. Spread
the variants ("body massage in…", "spa near…", "best spa in…", "massage centre near…", "Russian Banya near…")
naturally across the intro, the FAQs and the article, at most once or twice each. **No keyword stuffing,
no hidden text, no lists of area names or pincodes in the copy.** If a sentence sounds written for Google
rather than a person, rewrite it.

**Internal links:** in the article and intro, link with descriptive anchors to `/services/`, `/pricing/`,
`/contact/`, `/about/`, and to the nearby-area pages in NEARBY_AREA_PAGES_TO_LINK that exist (use the
`[label](/path/)` syntax that `RichText` supports). Add the new page to the registry from Step 0 so it shows
up in the sitemap, the Header, the footer and the home page areas list. Make sure `AREA_NAME` is in
`AREAS_SERVED` in `app/lib/site.ts`.

**Canonical:** self-referencing, via `pageMeta({ path })`. Don't change `INDEX_ROBOTS`.

---

## STEP 4 — IMAGES (Google image SEO)

- Folder: `public/assets/<SLUG>/`. Use photos from OWNER FACTS if given; otherwise reuse existing real
  spa photos from `public/assets/` (copy them under new descriptive names). Never use images that suggest
  a premises in AREA_NAME, and never use suggestive images.
- Filenames: descriptive, lowercase, hyphenated, e.g. `spa-near-vasant-kunj-banya-room.jpg`.
- Every `.jpg` needs a `.webp` sibling (the `Img` component expects one). Create them with whatever
  tool is available (e.g. `npx sharp-cli`, kept out of `package.json`). Hero at most ~1600px wide and
  under ~200 KB WebP; others at most ~1000px.
- Alt text: describe what's actually in the photo, plus the area where it's natural and true
  ("Steam room at our Mahipalpur spa, a short drive from Vasant Kunj"). Every alt on the page must be unique.
  No keyword lists.
- Put each image next to related text, set `width`/`height`, eager-load the hero only (Step 0).

---

## STEP 5 — STRUCTURED DATA (JSON-LD)

Use `locationLd()` from `app/lib/location.ts` exactly as the Aerocity page does. Rules:

- Keep the single `HealthAndBeautyBusiness` (`LOCAL_BUSINESS`) emitted in the root layout at the **real
  Mahipalpur address**. **Never** add a second LocalBusiness with an AREA_NAME address. The area belongs in
  `Service.areaServed`, as it already does.
- `geo` in `data.ts` = the approximate centre of AREA_NAME (real coordinates). It describes the area served,
  not the business.
- Every `Offer` price in the markup must match a price visible on the page, and that price must match
  `app/pricing/data.ts`.
- `BreadcrumbList`: Home › `breadcrumb` (e.g. "Spa in Vasant Kunj"). Must match the visible breadcrumb.
- `FAQPage`: Google stopped showing FAQ rich results in May 2026. Keep the visible FAQ section (it helps
  readers). Keeping the markup is harmless, but don't expect a rich result from it.
- Only mark up content that's visible on the page. No `Review`/`AggregateRating`.
- After building, extract the JSON-LD from `out/<SLUG>/index.html`, check that it parses as JSON, and check
  the `@id` references resolve.

---

## STEP 6 — BUILD AND VERIFY

Run `npm run build`, then check `out/<SLUG>/index.html` and confirm:

- [ ] Exactly one `<h1>`; `<title>` and meta description are unique against every other page in `out/`
- [ ] `<link rel="canonical" href="https://mahipalpurluxuryspa.in/<SLUG>/">`
- [ ] All content is in the static HTML (not loaded later by JavaScript)
- [ ] JSON-LD parses; no second LocalBusiness; offer prices match the visible prices
- [ ] Every image path exists, has a `.webp`, has unique alt text, width and height
- [ ] Hero image is eager with high fetch priority; all others lazy
- [ ] The new URL is in `out/sitemap.xml`, and the page is linked from Header, footer and home
- [ ] Every internal link points to a page that exists (with trailing slash)
- [ ] The duplicate-text script reports no 8+ word matches
- [ ] `/spa-in-aerocity/` and the home page still build and look the same
- [ ] No TypeScript errors

---

## STEP 7 — REPORT BACK TO ME

When finished, give me:

1. The area angle you chose, in 2 lines.
2. Every file created or changed.
3. A **VERIFY list**: every travel time, landmark, road, metro mention and distance you used, so I can
   check each one on Google Maps before publishing.
4. Any place you left something out because it couldn't be confirmed.
5. These next steps for me:
   - Google Search Console: URL Inspection → Request Indexing for the new URL, and resubmit `sitemap.xml`
   - Rich Results Test (search.google.com/test/rich-results) and validator.schema.org on the live URL
   - PageSpeed Insights on the live URL (targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1)
