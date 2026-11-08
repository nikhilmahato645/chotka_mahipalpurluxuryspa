import type { FaqItem } from "../components/Faq";

export type Rate = { name: string; desc: string; duration: string; price: number };
export type RateGroup = { id: string; title: string; blurb: string; rates: Rate[] };

/**
 * One source of truth for the rate card: `page.tsx` turns it into the
 * OfferCatalog JSON-LD and `Pricing.tsx` renders the same numbers as tables.
 */
export const RATE_GROUPS: RateGroup[] = [
  {
    id: "massage",
    title: "Body Massage",
    blurb: "Our core therapies. Every rate includes a private room, robe, shower access and herbal tea.",
    rates: [
      { name: "Swedish Massage", desc: "Classic full-body relaxation, medium pressure", duration: "60 min", price: 2800 },
      { name: "Swedish Massage — Extended", desc: "The same session with extra time on back and legs", duration: "90 min", price: 3800 },
      { name: "Deep Tissue Massage", desc: "Firm targeted work for chronic tension and back pain", duration: "60 min", price: 3400 },
      { name: "Deep Tissue — Extended", desc: "Full postural work, shoulders through lower back", duration: "90 min", price: 4400 },
      { name: "Thai Massage", desc: "Oil-free acupressure with assisted stretching", duration: "75 min", price: 3200 },
      { name: "Aromatherapy Massage", desc: "Custom essential oil blend chosen after consultation", duration: "60 min", price: 3000 },
      { name: "Hot Stone Therapy", desc: "Heated basalt stones worked into deep muscle", duration: "75 min", price: 3600 },
      { name: "Sports & Recovery Massage", desc: "Trigger point release and stretching for athletes", duration: "90 min", price: 3600 },
      { name: "Ayurvedic Abhyanga", desc: "Warm herbal oil in traditional rhythmic strokes", duration: "90 min", price: 3800 },
      { name: "Reflexology", desc: "Pressure point therapy for feet and hands", duration: "60 min", price: 2200 },
      { name: "Prenatal Massage", desc: "Pregnancy-safe, side-lying with bolster support", duration: "60 min", price: 3000 },
    ],
  },
  {
    id: "banya",
    title: "Russian Banya & Heat",
    blurb: "Authentic steam heat with birch venik treatment — the reason most guests find us.",
    rates: [
      { name: "Russian Banya with Venik", desc: "Full ritual: steam, birch venik, cold plunge, rest", duration: "90 min", price: 3500 },
      { name: "Banya Express", desc: "Shortened heat and venik cycle for tight schedules", duration: "45 min", price: 2200 },
      { name: "Banya + Swedish Massage", desc: "Heat ritual followed by a full-body massage", duration: "120 min", price: 5500 },
      { name: "Steam & Sauna Access", desc: "Standalone access with towels, robe and locker", duration: "60 min", price: 1000 },
    ],
  },
  {
    id: "rituals",
    title: "Rituals & Add-Ons",
    blurb: "Book alone or attach to any massage. Add-on prices apply when combined with a full treatment.",
    rates: [
      { name: "Full Body Scrub & Polish", desc: "Sea-salt or coffee exfoliation with hydrating wrap", duration: "45 min", price: 1800 },
      { name: "Herbal Compress Add-On", desc: "Steamed herbal poultices pressed into tight muscle", duration: "+20 min", price: 900 },
      { name: "Head, Neck & Shoulder Express", desc: "Focused relief for screen fatigue and tension headaches", duration: "30 min", price: 1400 },
      { name: "Foot Ritual & Soak", desc: "Herbal soak, exfoliation and a reflexology finish", duration: "30 min", price: 1200 },
      { name: "Airport Layover Express", desc: "Express massage, shower and refreshment inside an hour", duration: "45 min", price: 2400 },
    ],
  },
  {
    id: "couples",
    title: "Couples & Signature",
    blurb: "Private suites for two and our longest, most complete experiences. Book 24 hours ahead.",
    rates: [
      { name: "Couples Spa Suite", desc: "Two therapists, synchronised, private suite with Banya access", duration: "120 min", price: 7500 },
      { name: "Couples Banya Ritual", desc: "Shared Banya ritual followed by side-by-side massage", duration: "150 min", price: 9500 },
      { name: "Royal Signature Ritual", desc: "Scrub, 90-min massage, scalp and foot work, Banya access", duration: "150 min", price: 8500 },
      { name: "Bridal Glow Package", desc: "Pre-wedding scrub, herbal mask and full-body massage", duration: "120 min", price: 6000 },
    ],
  },
];

export const PACKAGES = [
  {
    name: "Single Visit",
    tagline: "Try us once, no commitment",
    price: "₹2,200",
    unit: "from, per session",
    featured: false,
    features: [
      "Any single treatment from the rate card",
      "Private treatment room and fresh linens",
      "Complimentary herbal tea and water",
      "Shower, robe and locker access",
      "Choice of male or female therapist",
      "15% off your first ever visit",
    ],
  },
  {
    name: "Wellness Membership",
    tagline: "Our most booked plan",
    price: "₹11,900",
    unit: "for 5 sessions · valid 6 months",
    featured: true,
    features: [
      "Five 60-minute massages of your choice",
      "Save roughly 15% against single-visit rates",
      "Free steam and sauna access every visit",
      "Priority booking on weekend evenings",
      "Sessions transferable to family members",
      "One complimentary add-on ritual",
    ],
  },
  {
    name: "Corporate & Group",
    tagline: "For teams and events",
    price: "Custom",
    unit: "quoted per group size",
    featured: false,
    features: [
      "On-site chair massage for Aerocity offices",
      "Group booking discounts from 6 guests",
      "Lunch-break express sessions",
      "Invoiced billing with GST documentation",
      "Dedicated coordinator for scheduling",
      "Wellness workshops on request",
    ],
  },
];

export const OFFERS = [
  {
    title: "15% Off Your First Visit",
    desc: "New guests get 15% off any single treatment. Mention it when booking — no code, no printout needed.",
  },
  {
    title: "Weekday Morning Rate",
    desc: "Book between 8 AM and 12 PM, Monday to Thursday, for 10% off all 60-minute massages.",
  },
  {
    title: "Senior Citizens & Healthcare Workers",
    desc: "A standing 10% discount, any day, any hour, on production of valid ID.",
  },
  {
    title: "Airport Layover Rate",
    desc: "Show a boarding pass dated within 12 hours for a reduced rate on the Layover Express session.",
  },
];

export const HERO_STATS = [
  { value: "₹2,200", label: "Sessions From" },
  { value: "0", label: "Hidden Charges" },
  { value: "15%", label: "First Visit Off" },
  { value: "24/7", label: "Same Rate, Any Hour" },
];

export const PROMISES = [
  { icon: "receipt", title: "Taxes Included", desc: "Every published price is the final price. Nothing is added at the counter." },
  { icon: "wallet", title: "Pay After Your Session", desc: "No prepayment for standard bookings. Cash, card and UPI all accepted." },
  { icon: "percent", title: "Same Rate at 3 AM", desc: "We never apply a night surcharge. Open 24/7 at one honest price." },
  { icon: "shield", title: "No Upsell Pressure", desc: "Your therapist recommends, never pushes. Add-ons are always optional." },
] as const;

export const PRICING_FAQS: FaqItem[] = [
  {
    q: "How much does a full body massage cost in Mahipalpur?",
    a: "A 60-minute full body massage at Mahipalpur Luxury Spa starts at ₹2,800 for Swedish and ₹3,400 for deep tissue. A 90-minute extended session runs ₹3,800 to ₹4,400. Every rate includes a private room, robe, shower access, fresh linens and herbal tea — there is no separate facility or service charge.",
  },
  {
    q: "Are there any hidden charges or taxes added at the counter?",
    a: "No. The rate you are quoted is the rate you pay. Applicable taxes are already included in every published price, tipping is entirely optional, and we never add a facility, towel or locker fee.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major credit and debit cards, and UPI. Corporate and group bookings can be invoiced with full GST documentation on request.",
  },
  {
    q: "Do you offer packages or memberships?",
    a: "Yes. Our Wellness Membership is ₹11,900 for five 60-minute massages, valid six months, which saves roughly 15% against single-visit rates and includes free steam and sauna access plus priority weekend booking. Sessions are transferable to family members.",
  },
  {
    q: "Is there a discount for first-time visitors?",
    a: "Yes — 15% off any single treatment on your first ever visit. Just mention it when you book. It cannot be combined with the weekday morning rate or the membership price.",
  },
  {
    q: "Do couples packages cost more than two individual massages?",
    a: "The Couples Spa Suite is ₹7,500 for 120 minutes, which is comparable to two individual 90-minute sessions but adds a private suite, synchronised therapists, Banya access and an aromatherapy setup. We recommend booking 24 hours ahead as suites are limited.",
  },
  {
    q: "Do I need to pay in advance to reserve a slot?",
    a: "No advance payment is required for standard bookings — you pay after your treatment. For couples suites and group bookings of six or more we ask for a small confirmation deposit, adjustable against your final bill.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancel or reschedule any standard booking free of charge. For couples suites and group bookings, please give us at least four hours' notice so we can release the room and therapists to other guests.",
  },
];
