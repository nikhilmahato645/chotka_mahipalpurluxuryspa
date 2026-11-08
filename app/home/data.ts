import type { FaqItem } from "../components/Faq";
import { locationPath } from "../lib/locations";

const A = "/assets/home";

/* ==========================================================================
   Home page copy. Prices match the rate card in app/pricing/data.ts so the
   page, the price list and the structured data never disagree.
   ========================================================================== */

export const HERO_CHECKS = [
  "10 minutes from Delhi Airport",
  "Open 24 hours, 7 days a week",
  "Certified, experienced therapists",
  "Authentic Russian Banya with venik",
];

/** Quick-book list in the hero card — prices match the rate card. */
export const HERO_PICKS = [
  { name: "Russian Banya with Venik", duration: "90 min", price: "₹3,500" },
  { name: "Swedish Full Body Massage", duration: "60 min", price: "₹2,800" },
  { name: "Deep Tissue Massage", duration: "60 min", price: "₹3,400" },
  { name: "Couples Spa Package", duration: "120 min", price: "₹7,500" },
];

export const TRUST_POINTS = [
  { icon: "plane", label: "10 min from IGI Airport" },
  { icon: "clock", label: "Open 24 hours, every day" },
  { icon: "shield", label: "Certified & insured therapists" },
  { icon: "star", label: "4.8★ from 350+ guests" },
] as const;

export const STATS = [
  { value: "10,000+", label: "Guests welcomed", note: "From across Delhi NCR" },
  { value: "4.8 / 5", label: "Average guest rating", note: "Across 350+ reviews" },
  { value: "10+ yrs", label: "Of hands-on care", note: "In Mahipalpur" },
  { value: "24/7", label: "Open every day", note: "Holidays included" },
];

export const STANDARDS = [
  {
    icon: "grad",
    title: "Qualified Therapists",
    desc: "Trained in Russian Banya, Thai, Swedish and Ayurvedic methods, with at least five years of practice each.",
  },
  {
    icon: "spray",
    title: "Clinic-Level Hygiene",
    desc: "Rooms and tools are disinfected after every guest, and every session starts on freshly laundered linen.",
  },
  {
    icon: "lock",
    title: "Your Own Private Room",
    desc: "Every treatment happens behind a closed door in an individual room — never a curtain or a shared hall.",
  },
  {
    icon: "wallet",
    title: "One Honest Price",
    desc: "Taxes are included and there is no night surcharge. The rate on the menu is the rate on your bill.",
  },
] as const;

/** "Book by treatment" tiles — each links to the matching part of the rate card. */
export const CATEGORIES = [
  { name: "Body Massage", from: "From ₹2,800", href: "/pricing/#massage", img: `${A}/tile-body-massage.jpg`, alt: "Hot stone body massage with orchids" },
  { name: "Russian Banya", from: "From ₹2,200", href: "/pricing/#banya", img: `${A}/tile-russian-banya.jpg`, alt: "Relaxing bath and steam ritual" },
  { name: "Couples & Signature", from: "From ₹6,000", href: "/pricing/#couples", img: `${A}/tile-couples-signature.jpg`, alt: "Private bath suite for couples and signature rituals" },
  { name: "Rituals & Add-Ons", from: "From ₹900", href: "/pricing/#rituals", img: `${A}/tile-rituals-add-ons.jpg`, alt: "Natural soap, scrub and towels for body rituals" },
  { name: "Head, Neck & Shoulder", from: "From ₹1,400", href: "/pricing/#rituals", img: `${A}/tile-head-neck-shoulder.jpg`, alt: "Head and neck massage for screen fatigue" },
  { name: "Layover Express", from: "From ₹2,400", href: "/spa-in-aerocity/", img: `${A}/tile-layover-express.jpg`, alt: "Herbal tea after an express airport-layover session" },
];

export const SERVICES = [
  {
    icon: "flame",
    name: "Russian Banya with Venik",
    desc: "The ritual we are best known for. You warm up slowly in moist steam, then your therapist works a bundle of soaked birch leaves — the venik — over your back and legs to draw heat into the muscles and lift circulation. A cool rinse closes the cycle, and you rest with a cup of herbal tea before going again. Most guests leave with softer skin, looser shoulders and a very clear head.",
    img: `${A}/russian-banya-steam-room.jpg`,
    alt: "Wooden Russian Banya steam room with benches",
    duration: "90 min",
    price: "₹3,500",
  },
  {
    icon: "dumbbell",
    name: "Deep Tissue Massage",
    desc: "Slow, deliberate pressure that reaches the layers a relaxation massage never touches. It suits stubborn knots, a sore lower back, desk-bound shoulders and old sports niggles. Your therapist checks pressure as they go and works in stages rather than forcing depth, so the relief lasts. A little tenderness the next day is normal; most guests feel the difference within a day or two.",
    img: `${A}/deep-tissue-massage.jpg`,
    alt: "Deep tissue shoulder and neck massage",
    duration: "60 min",
    price: "₹3,400",
  },
  {
    icon: "stone",
    name: "Hot Stone Therapy",
    desc: "Smooth basalt stones, warmed to a comfortable heat, are rested along the spine and then glided over the muscles in long strokes. The warmth softens tight tissue faster than hands alone, which lets your therapist release deep tension without heavy pressure. It is a favourite for guests who feel the cold, sleep poorly or carry stiffness through the back and hips.",
    img: `${A}/hot-stone-therapy.jpg`,
    alt: "Heated basalt stones placed along the back",
    duration: "75 min",
    price: "₹3,600",
  },
  {
    icon: "flower",
    name: "Aromatherapy Massage",
    desc: "A short chat comes first, so the oil blend matches how you feel — lavender to unwind, eucalyptus to clear the head, peppermint for a lift, rosemary for focus. Gentle, flowing strokes carry the oils into the skin while the scent does its quiet work. It is the softest treatment on our menu and a good choice after a stressful week or a long flight.",
    img: `${A}/aromatherapy-massage.jpg`,
    alt: "Aroma diffuser, candles and towels for aromatherapy",
    duration: "60 min",
    price: "₹3,000",
  },
  {
    icon: "waves",
    name: "Swedish Massage",
    desc: "The classic full-body massage, built on long gliding strokes, kneading and light stretching at medium pressure. It warms the muscles, eases everyday stiffness and settles a busy mind. If you are new to massage, or simply want an hour of calm without intensity, start here — many of our regulars book it every couple of weeks to keep stress in check.",
    img: `${A}/swedish-massage.jpg`,
    alt: "Therapist giving a Swedish back massage",
    duration: "60 min",
    price: "₹2,800",
  },
  {
    icon: "couple",
    name: "Couples Spa Package",
    desc: "Two people, one private suite. You begin side by side in the Banya, then two therapists give each of you a full-body massage at the same time — Swedish, aromatherapy or hot stone, chosen separately for each of you. Soft lighting, quiet music and time to rest together afterwards make it a popular way to mark an anniversary or simply spend an unhurried evening together.",
    img: `${A}/couples-spa-hot-stone.jpg`,
    alt: "Hot stone massage with orchids in a private couples suite",
    duration: "120 min",
    price: "₹7,500",
  },
  {
    icon: "hand",
    name: "Thai Massage",
    desc: "An active, oil-free treatment where you stay in loose, comfortable clothing. Your therapist presses along the body's energy lines and guides you through assisted, yoga-style stretches you could not reach on your own. It improves flexibility and posture, and instead of feeling sleepy afterwards, most guests walk out lighter and more awake.",
    img: `${A}/thai-massage.jpg`,
    alt: "Thai acupressure massage on a treatment bed",
    duration: "75 min",
    price: "₹3,200",
  },
  {
    icon: "activity",
    name: "Sports & Recovery Massage",
    desc: "Designed around how you train. Before an event the work is brisk and warming; after it, the focus moves to flushing out soreness and restoring range of motion. Deep tissue, trigger-point release and targeted stretching are combined for runners, cyclists, footballers and regular gym-goers who want to recover faster between sessions.",
    img: `${A}/sports-massage.jpg`,
    alt: "Firm recovery massage on the shoulders and back",
    duration: "90 min",
    price: "₹3,600",
  },
  {
    icon: "feet",
    name: "Reflexology",
    desc: "A warm herbal foot soak, then precise thumb and finger pressure on reflex points across the feet and hands, finished with a relaxing lower-leg massage. It is deeply calming, easy to fit into a short visit, and a good option for anyone who prefers not to have a full-body massage. Travellers often book it straight off a long-haul flight.",
    img: `${A}/reflexology.jpg`,
    alt: "Foot reflexology with fresh flowers",
    duration: "60 min",
    price: "₹2,200",
  },
] as const;

export const RELAXATION = [
  {
    icon: "moon",
    title: "Stress Relief",
    desc: "Slow, rhythmic work that quietens racing thoughts and helps you switch off properly — often the first good night's sleep in a while.",
  },
  {
    icon: "leaf",
    title: "Wellness & Renewal",
    desc: "Banya heat, cool water and massage combined into one visit for guests who want to feel reset from head to toe.",
  },
  {
    icon: "stone",
    title: "Deep Relaxation",
    desc: "Aromatherapy oils, warm stones and unhurried strokes for the days when you want nothing more than to let go.",
  },
  {
    icon: "users",
    title: "Mind & Body Balance",
    desc: "Treatments paced to bring breathing, muscles and mood back into step, so the calm lasts well beyond the session.",
  },
] as const;

export const RELAXATION_CHECKS = [
  "Therapists experienced in relaxation therapy",
  "A programme shaped around your needs",
  "Five minutes from the Aerocity hotels",
  "Book online, by phone or on WhatsApp",
];

export const PILLARS = [
  {
    icon: "grad",
    title: "Skilled, Well-Trained Hands",
    desc: "Our therapists have trained in techniques from Russia, Thailand, Sweden and Japan, and keep learning year after year. Together they bring more than fifty years of practice to the treatment room.",
  },
  {
    icon: "flame",
    title: "A Real Russian Banya",
    desc: "Few spas in NCR offer a true Banya. Ours is built to traditional specifications for heat and humidity, and every session includes the birch-leaf venik ritual that defines it.",
  },
  {
    icon: "couple",
    title: "Treatment Built Around You",
    desc: "Every visit starts with a consultation about pressure, problem areas and health conditions, so the technique, oil and focus suit your body rather than a fixed script.",
  },
  {
    icon: "spray",
    title: "Hygiene You Can See",
    desc: "Fresh hypoallergenic linen for every guest, rooms disinfected between sessions, and products chosen with sensitive skin in mind.",
  },
  {
    icon: "flower",
    title: "Quality Oils & Products",
    desc: "Pure, therapeutic-grade essential oils and massage products from trusted suppliers — never cheap synthetic fragrance. You notice the difference on your skin.",
  },
  {
    icon: "star",
    title: "Guests Who Keep Returning",
    desc: "More than nine in ten guests come back. We remember your preferences, your usual pressure and your favourite therapist, so each visit picks up where the last one ended.",
  },
  {
    icon: "clock",
    title: "Whenever Suits You",
    desc: "Early morning before work, a lunch-break reset or a session after a late flight — we are open round the clock, and same-day slots are usually available.",
  },
  {
    icon: "leaf",
    title: "Wellness, Not Just Pampering",
    desc: "Regular massage helps with circulation, sleep and everyday aches. Your therapist shares simple stretches and aftercare so the benefits carry on at home.",
  },
] as const;

export const POPULAR_PACKAGES = [
  {
    name: "Russian Banya",
    price: "₹3,500",
    unit: "/ 90 min",
    featured: false,
    features: ["Steam cycle with birch venik", "Cool rinse and rest", "Herbal tea", "Private room"],
  },
  {
    name: "Full Body Massage",
    price: "₹2,800",
    unit: "/ 60 min",
    featured: true,
    features: ["Swedish or aromatherapy", "Therapeutic-grade oils", "Extra neck & shoulder focus", "Refreshments included"],
  },
  {
    name: "Couples Spa Package",
    price: "₹7,500",
    unit: "/ 120 min",
    featured: false,
    features: ["Shared Banya session", "Two therapists, side by side", "Private couples suite", "Rest time together"],
  },
  {
    name: "Deep Tissue Therapy",
    price: "₹3,400",
    unit: "/ 60 min",
    featured: false,
    features: ["Slow, deep muscle work", "Trigger-point release", "Hot towel finish", "Back & neck focus"],
  },
];

export const INCLUDED = [
  { title: "Full Time on the Table", desc: "Changing and consultation never eat into your session." },
  { title: "Little Extras, Free", desc: "Herbal tea, water, robe, shower and a locker." },
  { title: "No Surprise Charges", desc: "Taxes included, no night or facility fees." },
];

export const LOCATION_POINTS = [
  {
    icon: "plane",
    title: "10 Minutes from IGI Airport",
    desc: "The closest full spa to Delhi Airport. Arriving, departing or stuck on a layover, you can be relaxing within minutes of leaving the terminal.",
  },
  {
    icon: "hotel",
    title: "Next to the Aerocity Hotels",
    desc: "Guests at JW Marriott, Roseate, Andaz and Pullman reach us in about five minutes — an easy escape after meetings or a conference day.",
  },
  {
    icon: "mapPin",
    title: "Easy Reach Across NCR",
    desc: "NH-8 and the main arterial roads link us quickly to Gurugram, Vasant Kunj, Dwarka, South Delhi and Connaught Place.",
  },
  {
    icon: "car",
    title: "Free, Secure Parking",
    desc: "We sit on a well-connected road with complimentary parking for every guest, day or night, for as long as your treatment runs.",
  },
  {
    icon: "metro",
    title: "Close to the Metro",
    desc: "The Airport Express and Magenta lines are a short auto-rickshaw ride away, so public transport is a practical option.",
  },
  {
    icon: "moon",
    title: "Open Round the Clock",
    desc: "A 2 AM arrival, a dawn departure or a night shift — whatever your schedule, a therapist is ready at any hour of any day.",
  },
] as const;

export const AUDIENCES = [
  {
    title: "International travellers",
    desc: "Skip the city traffic. A Banya or a long-haul recovery massage straight after landing — or before your next flight — is a far better use of a layover than a terminal bench.",
  },
  {
    title: "Business professionals",
    desc: "Staying in Aerocity for work? We are five to ten minutes from the main business hotels, so a massage fits neatly between meetings or after a long conference day.",
  },
  {
    title: "Delhi NCR residents",
    desc: "From Vasant Kunj, Dwarka or Gurugram, the NH-8 run avoids the worst of the city's congestion, and free parking means no circling for a spot.",
  },
  {
    title: "Couples and friends",
    desc: "Mahipalpur and Aerocity have plenty of restaurants nearby, which makes a spa visit easy to turn into a relaxed day or evening out together.",
  },
];

/** Rows with a landing page link to it (see app/lib/locations.ts). */
export const AREAS = [
  { name: "Aerocity", time: "5 min" },
  { name: "IGI Airport T3", time: "10–12 min" },
  { name: "Mahipalpur Metro", time: "2–3 min" },
  { name: "Vasant Kunj", time: "12–15 min" },
  { name: "Dwarka", time: "15–18 min" },
  { name: "Gurugram", time: "20 min" },
  { name: "Saket & Hauz Khas", time: "22–25 min" },
  { name: "Karol Bagh", time: "25 min" },
  { name: "Connaught Place", time: "30–45 min" },
  { name: "Paharganj", time: "30–45 min" },
  { name: "Rohini", time: "40–60 min" },
].map((area) => ({ ...area, href: locationPath(area.name) }));

export const GALLERY = [
  { src: `${A}/gallery-herbal-mask.jpg`, alt: "Herbal face mask applied during a spa treatment" },
  { src: `${A}/gallery-facial-care.jpg`, alt: "Gentle facial care in a treatment room" },
  { src: `${A}/gallery-fresh-linen.jpg`, alt: "Fresh linen, massage oil and flowers for each guest" },
  { src: `${A}/gallery-calm-mind.jpg`, alt: "Guest relaxing in calm meditation after a session" },
];

export const TESTIMONIALS = [
  {
    text: "Best spa near Delhi Airport! The Russian Banya is absolutely authentic. Clean, professional, and therapists are highly skilled.",
    author: "Vikram Singh",
    location: "Mahipalpur Resident",
  },
  {
    text: "Perfect location near the airport. I booked a deep tissue massage during my layover and it was exactly what I needed after a long flight.",
    author: "James Mitchell",
    location: "Business Traveler",
  },
  {
    text: "The couples spa package is wonderful! My wife and I celebrated our anniversary here. Private room and a truly unique experience.",
    author: "Rahul Kapoor",
    location: "South Delhi",
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    q: "Where is Mahipalpur Luxury Spa and how far is it from Delhi Airport?",
    a: "We are at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037 — about 10 minutes by road from IGI Airport Terminal 3 and roughly 5 minutes from the Aerocity hotels.",
  },
  {
    q: "What happens during a Russian Banya session?",
    a: "You warm up in moist steam, your therapist works a soaked birch-leaf venik over the body to draw heat into the muscles, and a cool rinse and rest with herbal tea complete each round. A full Banya session is 90 minutes and costs ₹3,500.",
  },
  {
    q: "Are you really open 24 hours?",
    a: "Yes. We are open around the clock, seven days a week, including public holidays, and there is no extra charge for late-night or early-morning appointments.",
  },
  {
    q: "How much does a full body massage cost?",
    a: "A 60-minute Swedish full body massage is ₹2,800, and deep tissue starts at ₹3,400. Every price includes a private room, robe, shower, locker and herbal tea, with taxes already added.",
  },
  {
    q: "Do you have a couples package?",
    a: "Yes. The Couples Spa Package is 120 minutes for ₹7,500 and includes a shared Banya session followed by two therapists massaging you side by side in a private suite. Booking a day ahead is recommended.",
  },
  {
    q: "Can I choose a male or female therapist?",
    a: "Yes. Tell us your preference when you book or when you arrive, and we will confirm it before your treatment begins. All our therapists are certified and have at least five years of experience.",
  },
  {
    q: "Is there a discount on my first visit?",
    a: "First-time guests get 15% off any single treatment. Just mention it when you book by phone or WhatsApp — no code is needed.",
  },
  {
    q: "Do you have branches in Gurugram, Dwarka or Vasant Kunj?",
    a: "No. We run a single spa in Mahipalpur and welcome guests from across Delhi NCR. It is about 15 minutes from Dwarka and Vasant Kunj and around 20 minutes from Gurugram via NH-8.",
  },
];
