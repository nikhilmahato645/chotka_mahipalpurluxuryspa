import type { FaqItem } from "../components/Faq";

const A = "/assets/services";

export const HERO_STATS = [
  { value: "20+", label: "Treatments" },
  { value: "24/7", label: "Always Open" },
  { value: "25", label: "Certified Therapists" },
  { value: "4.8★", label: "350+ Reviews" },
];

/** URL-safe id for a treatment, used as its anchor. */
export const slug = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const SIGNATURE = [
  {
    icon: "flame",
    name: "Russian Banya with Venik",
    desc: "Our flagship ritual and the reason most guests find us. Traditional wood-fired steam at 70–90°C, followed by the birch-leaf venik treatment that stimulates circulation, then a cold plunge and rest cycle. Performed by therapists trained in genuine Russian Banya practice — one of the very few authentic setups in Delhi NCR.",
    duration: "90 min",
    price: "From ₹3,500",
    tags: ["Detox", "Circulation", "Immunity"],
    img: `${A}/russian-banya-venik.jpg`,
    alt: "Wooden steam room for the Russian Banya with venik ritual",
  },
  {
    icon: "couple",
    name: "Couples Spa Suite",
    desc: "A private suite for two with synchronised therapists, your choice of massage style, and full Banya access. Includes aromatherapy setup, herbal tea service, and a relaxation period after the treatment. Popular for anniversaries and pre-wedding unwinding — book 24 hours ahead for guaranteed availability.",
    duration: "120 min",
    price: "From ₹7,500",
    tags: ["Private Suite", "Two Therapists", "Anniversary"],
    img: `${A}/couples-spa-suite.jpg`,
    alt: "Private bath suite with a view, prepared for a couples spa session",
  },
  {
    icon: "star",
    name: "Royal Signature Ritual",
    desc: "Our most complete experience: full-body exfoliation, warm herbal compress, a 90-minute custom massage of your choice, scalp and foot work, followed by Banya access and refreshments. Designed for guests who want the entire spa in a single visit.",
    duration: "150 min",
    price: "From ₹8,500",
    tags: ["Full Spa", "Scrub Included", "Best Value"],
    img: `${A}/royal-signature-ritual.jpg`,
    alt: "Fresh towels, oil and flowers laid out for the Royal Signature Ritual",
  },
] as const;

export const MASSAGE = [
  {
    icon: "waves",
    name: "Swedish Massage",
    img: `${A}/swedish-massage.jpg`,
    alt: "Therapist giving a Swedish back massage",
    desc: "Long, flowing strokes with medium pressure — the classic relaxation massage. Best if it's your first spa visit or you simply want to switch off completely.",
    duration: "60 / 90 min",
    price: "From ₹2,800",
  },
  {
    icon: "dumbbell",
    name: "Deep Tissue Massage",
    img: `${A}/deep-tissue-massage.jpg`,
    alt: "Deep tissue shoulder and neck massage",
    desc: "Firm, targeted pressure into chronic tension: stiff shoulders, lower-back pain, desk-job posture. Your therapist works layer by layer rather than forcing depth.",
    duration: "60 / 90 min",
    price: "From ₹3,400",
  },
  {
    icon: "hand",
    name: "Thai Massage",
    img: `${A}/thai-massage.jpg`,
    alt: "Thai head and acupressure massage on a treatment bed",
    desc: "Oil-free acupressure and assisted stretching along the body's energy lines. Guests leave feeling lighter and more awake rather than drowsy.",
    duration: "75 min",
    price: "From ₹3,200",
  },
  {
    icon: "flower",
    name: "Aromatherapy Massage",
    img: `${A}/aromatherapy-massage.jpg`,
    alt: "Aroma diffuser, candles and towels for aromatherapy",
    desc: "A gentle full-body massage using an essential-oil blend chosen for you after a short consultation — stress, sleep, muscle tension or low energy.",
    duration: "60 / 75 min",
    price: "From ₹3,000",
  },
  {
    icon: "stone",
    name: "Hot Stone Therapy",
    img: `${A}/hot-stone-therapy.jpg`,
    alt: "Heated basalt stones placed along the back",
    desc: "Heated basalt stones at 50–55°C placed along the spine and worked into the muscle. Heat reaches deeper tissue faster than hands alone.",
    duration: "75 min",
    price: "From ₹3,600",
  },
  {
    icon: "activity",
    name: "Sports & Recovery Massage",
    img: `${A}/sports-recovery-massage.jpg`,
    alt: "Firm recovery massage on the shoulders and back",
    desc: "Pre-event activation or post-training recovery. Combines deep tissue, trigger-point release and stretching to speed up muscle repair.",
    duration: "90 min",
    price: "From ₹3,600",
  },
  {
    icon: "feet",
    name: "Reflexology",
    img: `${A}/reflexology.jpg`,
    alt: "Foot reflexology with fresh flowers",
    desc: "Precise pressure applied to reflex points in the feet and hands. Excellent after long flights — a favourite with travellers arriving from IGI Airport.",
    duration: "45 / 60 min",
    price: "From ₹2,200",
  },
  {
    icon: "leaf",
    name: "Ayurvedic Abhyanga",
    img: `${A}/ayurvedic-abhyanga.jpg`,
    alt: "Warm herbal oil poured for an Ayurvedic Abhyanga massage",
    desc: "Warm herbal oil applied in rhythmic strokes following traditional Ayurvedic technique, finished with a scalp and marma-point sequence.",
    duration: "90 min",
    price: "From ₹3,800",
  },
  {
    icon: "baby",
    name: "Prenatal & Postnatal Massage",
    img: `${A}/prenatal-postnatal-massage.jpg`,
    alt: "Gentle, relaxing head and face therapy",
    desc: "Side-lying positioning with bolster support, performed by therapists certified in pregnancy massage. Safe from the second trimester onward.",
    duration: "60 min",
    price: "From ₹3,000",
  },
] as const;

export const RITUALS = [
  {
    name: "Full Body Scrub & Polish",
    desc: "Sea-salt or coffee exfoliation followed by a hydrating wrap. Adds visible smoothness before any massage.",
    duration: "45 min",
    price: "₹1,800",
  },
  {
    name: "Herbal Compress Add-On",
    desc: "Steamed herbal poultices pressed into tight muscle groups during your massage. Pairs well with deep tissue.",
    duration: "+20 min",
    price: "₹900",
  },
  {
    name: "Head, Neck & Shoulder Express",
    desc: "A focused session for screen fatigue and tension headaches. Fits into a lunch break.",
    duration: "30 min",
    price: "₹1,400",
  },
  {
    name: "Foot Ritual & Soak",
    desc: "Warm herbal soak, exfoliation and a reflexology finish. The most requested add-on for airport travellers.",
    duration: "30 min",
    price: "₹1,200",
  },
  {
    name: "Steam & Sauna Access",
    desc: "Standalone access to the steam room and dry sauna, with towels, robe and locker included.",
    duration: "60 min",
    price: "₹1,000",
  },
  {
    name: "Airport Layover Express",
    desc: "A compressed reset built for tight schedules: express massage, shower and refreshment, in and out in an hour.",
    duration: "45 min",
    price: "₹2,400",
  },
];

export const STEPS = [
  {
    title: "Call or WhatsApp",
    desc: "Tell us the treatment, the time and whether you'd prefer a male or female therapist. We confirm within minutes, any hour of the day.",
  },
  {
    title: "Arrive & Consult",
    desc: "A short consultation covers pressure preference, problem areas, allergies and oil choice. Lockers, robes and slippers are provided.",
  },
  {
    title: "Your Treatment",
    desc: "Your session runs in a fully private room. Full advertised time is on the table — setup and changing are not counted against it.",
  },
  {
    title: "Rest & Rehydrate",
    desc: "Unwind in the relaxation lounge with herbal tea. Your therapist shares simple aftercare notes for the next 24 hours.",
  },
];

export const INCLUDED = [
  "Private treatment room — never a curtain partition",
  "Fresh linens and robe, changed for every single guest",
  "Complimentary herbal tea and mineral water",
  "Shower and locker access before and after your session",
  "Pre-treatment consultation with your therapist",
  "Choice of male or female therapist, subject to availability",
  "Therapeutic-grade oils — no cheap synthetic blends",
  "Free on-site parking for all guests",
];

export const ASSURANCES = [
  { icon: "grad", title: "Certified Therapists", desc: "Internationally trained, insured, minimum 5 years of practice." },
  { icon: "spray", title: "Hospital-Grade Hygiene", desc: "Medical-grade disinfection of every room and tool between guests." },
  { icon: "lock", title: "Complete Privacy", desc: "Individual private rooms and absolute discretion, always." },
  { icon: "shield", title: "Transparent Pricing", desc: "The rate you're quoted is the rate you pay. No hidden add-ons." },
] as const;

export const SERVICE_FAQS: FaqItem[] = [
  {
    q: "What spa services do you offer in Mahipalpur?",
    a: "We offer authentic Russian Banya with venik treatment, Swedish massage, deep tissue massage, Thai massage, aromatherapy, hot stone therapy, sports and recovery massage, reflexology, Ayurvedic Abhyanga, prenatal and postnatal massage, couples suites, body scrubs, herbal compress add-ons and express airport-layover sessions — over 20 treatments in total, all available 24 hours a day.",
  },
  {
    q: "How long does each spa treatment take?",
    a: "Express treatments run 30 to 45 minutes, standard massages are 60 to 90 minutes, and signature rituals such as the Royal Signature or the Couples Suite run 120 to 150 minutes. The advertised duration is time on the table — changing, showering and consultation are not counted against your session.",
  },
  {
    q: "Do I need to book in advance or can I walk in?",
    a: "Walk-ins are welcome around the clock and we can usually start within 15 to 20 minutes. For couples suites or weekend evening slots we recommend booking 24 hours ahead by phone or WhatsApp.",
  },
  {
    q: "Can I choose between a male and a female therapist?",
    a: "Yes. Both male and female therapists are available at all hours, and you can state your preference when booking or on arrival. We will always confirm your preference before the session begins.",
  },
  {
    q: "What is a Russian Banya and how is it different from a sauna?",
    a: "A Banya uses moist steam heat at 70–90°C, unlike a dry sauna. The defining element is the venik — a bundle of birch leaves used to gently strike and massage the skin, which stimulates blood flow and opens the pores. It is followed by a cold plunge and a rest cycle. Ours follows authentic Russian specifications and is one of very few genuine setups in Delhi NCR.",
  },
  {
    q: "Is massage safe during pregnancy?",
    a: "Yes, from the second trimester onward, and only with our certified prenatal therapists. We use side-lying positioning with bolster support and avoid pressure points that are contraindicated in pregnancy. Please tell us you are pregnant when booking so we assign the right therapist.",
  },
  {
    q: "Do you offer treatments for airport layovers?",
    a: "Yes. Our Airport Layover Express is built for tight schedules — an express massage, shower and refreshment, done inside an hour. We are 10 minutes from IGI Airport Terminal 3 and open 24/7, so late-night and early-morning layovers are no problem.",
  },
  {
    q: "What should I wear and what is provided?",
    a: "Come as you are. We provide a robe, slippers, fresh towels, disposable undergarments where relevant, and a locker for your belongings. Showers are available before and after your treatment, and herbal tea is served in the relaxation lounge.",
  },
];

/** Name, description, INR price — drives the OfferCatalog JSON-LD. */
export const CATALOG: [string, string, number][] = [
  ["Russian Banya with Venik", "90 min authentic Russian steam ritual with birch venik treatment", 3500],
  ["Couples Spa Suite", "120 min private suite for two with synchronised therapists", 7500],
  ["Royal Signature Ritual", "150 min full-body scrub, massage, Banya access and refreshments", 8500],
  ["Swedish Massage", "Classic full-body relaxation massage with medium pressure", 2800],
  ["Deep Tissue Massage", "Firm targeted pressure for chronic muscle tension and back pain", 3400],
  ["Thai Massage", "Oil-free acupressure with assisted stretching", 3200],
  ["Aromatherapy Massage", "Gentle full-body massage with a custom essential oil blend", 3000],
  ["Hot Stone Therapy", "Heated basalt stone massage for deep muscle release", 3600],
  ["Sports & Recovery Massage", "Deep tissue, trigger point release and stretching for athletes", 3600],
  ["Reflexology", "Pressure point therapy for feet and hands", 2200],
  ["Ayurvedic Abhyanga", "Warm herbal oil massage in traditional Ayurvedic technique", 3800],
  ["Prenatal & Postnatal Massage", "Certified pregnancy-safe massage with side-lying support", 3000],
  ["Airport Layover Express", "45 min express massage, shower and refreshment", 2400],
];
