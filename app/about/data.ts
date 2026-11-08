export const STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "350+", label: "5-Star Reviews" },
  { value: "90%+", label: "Client Retention" },
  { value: "50+", label: "Years Combined Expertise" },
];

export const MILESTONES = [
  {
    title: "Humble Beginnings",
    desc: "Started as a small wellness studio in Mahipalpur, built on a simple idea: authentic technique over shortcuts.",
  },
  {
    title: "The Russian Banya Arrives",
    desc: "Became one of the very few spas in Delhi NCR to offer a genuine Russian Banya with imported Venik treatments.",
  },
  {
    title: "Growing Our Family",
    desc: "Expanded our team to include internationally trained therapists from Russia, Thailand, Sweden, and Japan.",
  },
  {
    title: "Serving All of Delhi NCR",
    desc: "Extended our reach to Aerocity, Dwarka, Vasant Kunj, and travelers passing through IGI Airport.",
  },
  {
    title: "10+ Years of Excellence",
    desc: "Today, we remain one of the region's most trusted wellness destinations — open 24/7, every single day.",
  },
];

/** One premises; these are the areas it sits closest to. Links only go to pages that exist. */
export const LOCATIONS = [
  {
    icon: "mapPin",
    name: "Spa in Mahipalpur",
    desc: "The premises itself — every treatment room, the Banya wing and the couples suites are here at Defence Enclave.",
    distance: "2 min from Mahipalpur Metro",
    link: "/contact/",
  },
  {
    icon: "plane",
    name: "Spa in Aerocity",
    desc: "Five minutes across NH-8 from the hotel strip, open at every hour the hotel spas are closed.",
    distance: "5 min from Aerocity Metro",
    link: "/spa-in-aerocity/",
  },
  {
    icon: "home",
    name: "Spa for Dwarka",
    desc: "Around fifteen minutes east via the Dwarka Link Road, with free on-site parking when you arrive.",
    distance: "10 min from Dwarka Sector 10",
    link: "/contact/#directions",
  },
  {
    icon: "trees",
    name: "Spa for Vasant Kunj",
    desc: "Twelve to fifteen minutes past the mall complex — the catchment our regulars most often travel from.",
    distance: "8 min from Vasant Kunj Mall",
    link: "/contact/#directions",
  },
  {
    icon: "plane",
    name: "Spa Near IGI Airport",
    desc: "Ten to twelve minutes from Terminal 3 at any hour, with a 45-minute express option built for tight layovers.",
    distance: "10 min from T3 Arrival",
    link: "/contact/#directions",
  },
  {
    icon: "flame",
    name: "Russian Spa Mahipalpur",
    desc: "The same address as above — the Banya cycle, the venik treatment and what a first visit involves.",
    distance: "Main Location - Mahipalpur",
    link: "/services/#signature",
  },
] as const;

export const PILLARS = [
  {
    icon: "leaf",
    title: "Authentic Techniques",
    desc: 'We never settle for imitation. Every technique we offer has been mastered through rigorous training from its country of origin. Our Russian Banya follows actual Russian specifications. Our Thai massage is performed by therapists trained in Thai tradition. When you search for "Russian spa in Mahipalpur" — we deliver the real experience.',
  },
  {
    icon: "star",
    title: "Uncompromising Quality",
    desc: "From the essential oils we use to the thread count of our linens, every detail matters. We use only therapeutic-grade, certified organic products. Our Mahipalpur premises is maintained to hospital-grade standards, with every room reset between guests.",
  },
  {
    icon: "couple",
    title: "Personalized Care",
    desc: "Every client receives a consultation before their treatment. We customize pressure, technique, oil blend, and focus areas to your body's specific needs. Whether you need deep tissue massage in Dwarka or a gentle Swedish massage in Aerocity — we adapt to you.",
  },
  {
    icon: "lock",
    title: "Complete Privacy",
    desc: "Privacy is not a feature — it is a foundation. All treatments are conducted in fully private rooms. High-profile clients, diplomats, and executives from nearby Aerocity hotels trust us for our absolute discretion and professionalism.",
  },
  {
    icon: "grad",
    title: "Continuous Excellence",
    desc: "Our therapists undergo continuous education and training. We invest in advanced techniques, premium product upgrades, and facility improvements every year. Excellence is not a destination — it is an ongoing practice, reviewed every year.",
  },
  {
    icon: "users",
    title: "Community Care",
    desc: "We actively contribute through wellness workshops, corporate stress-relief programs for Aerocity businesses, and special discounts for senior citizens, healthcare workers, and first responders who serve our Mahipalpur and Dwarka communities.",
  },
] as const;

export const COMPARISON: [string, string][] = [
  ["Authentic Russian Banya with Venik", "Not offered"],
  ["Internationally Certified Therapists", "Varies / Uncertified"],
  ["Open 24/7 Every Day (365 days)", "Limited hours"],
  ["Individual Private Treatment Rooms", "Curtain partitions / Shared"],
  ["Hospital-Grade Hygiene Standards", "Basic cleaning only"],
  ["Personalized Treatment Plans", "One-size-fits-all"],
  ["Premium Imported Essential Oils", "Cheap synthetic oils"],
  ["Couples Spa Packages Available", "Rarely available"],
  ["10 Minutes from Delhi Airport", "Far from airport"],
  ["Free Parking for All Guests", "Paid / No parking"],
  ["Complimentary Refreshments Included", "Not included / Extra charge"],
  ["Easy Online & WhatsApp Booking", "Phone call only"],
  ["Transparent Pricing (No Hidden Fees)", "Hidden charges common"],
  ["Male & Female Therapists Available", "Limited options"],
  ["Senior Citizen & Student Discounts", "No discounts offered"],
];

export const AUDIENCES = [
  {
    icon: "mapPin",
    title: "For Mahipalpur Residents",
    desc: "Located in the heart of Mahipalpur, we are the most convenient spa destination for local residents. Enjoy our 24/7 services, free parking, and special local resident discounts.",
  },
  {
    icon: "hotel",
    title: "For Aerocity Hotel Guests",
    desc: "Staying at Andaz, Pullman, JW Marriott, or Holiday Inn? We're just 5 minutes away across NH-8 — ask your concierge about us or call ahead and we'll have a room ready.",
  },
  {
    icon: "home",
    title: "For Dwarka Sector Residents",
    desc: "A straight run east down the Dwarka Link Road brings sectors 6–24 to our door in about fifteen minutes. Free parking on site, and weekday evenings are the quietest time to come.",
  },
  {
    icon: "plane",
    title: "For IGI Airport Travelers",
    desc: "Long layover? Flight delay? We're open 24/7 and just 10 minutes from T3. Express 30-minute treatments available for travelers short on time.",
  },
  {
    icon: "briefcase",
    title: "For Corporate Professionals",
    desc: "Stress relief near your Aerocity office. We offer corporate wellness programs, lunch-break express massages, and group booking discounts for companies.",
  },
  {
    icon: "couple",
    title: "For Couples & Families",
    desc: "Private couples suites available. Families are welcome, with separate male and female therapist options.",
  },
] as const;

export const CERTIFICATIONS = [
  "Russian Banya Certified",
  "Thai Massage Practitioner",
  "Swedish Massage Certified",
  "Shiatsu & Meridian Therapy",
  "Aromatherapy Specialist",
  "Sports Massage Certified",
  "Reflexology Practitioner",
  "Deep Tissue Therapist",
  "Hot Stone Therapy Certified",
  "Balinese Massage Expert",
  "Prenatal Massage Certified",
  "Ayurvedic Specialist",
];

export const VALUES = [
  {
    icon: "users",
    title: "Client First Philosophy",
    desc: "Every decision we make starts with one question: “What's best for our client?” This client-first approach drives our service standards, pricing, and facility upgrades.",
  },
  {
    icon: "star",
    title: "Excellence Without Compromise",
    desc: "We never cut corners on quality. From the oils we use to the training our therapists receive, we maintain uncompromising standards. Our 350+ 5-star reviews reflect this commitment.",
  },
  {
    icon: "shield",
    title: "Trust & Transparency",
    desc: "No hidden fees, no upselling pressure, no surprises. Our transparent pricing and honest communication have made us the most trusted spa brand in Mahipalpur, Aerocity, and Dwarka.",
  },
  {
    icon: "couple",
    title: "Community First",
    desc: "We believe in giving back. Through corporate wellness programs, senior citizen discounts, and community health initiatives, we make wellness accessible to everyone in Delhi NCR.",
  },
  {
    icon: "flower",
    title: "Warm Hospitality",
    desc: "From the moment you walk in, you're treated like family. Complimentary tea, warm smiles, and genuine care — because wellness begins with feeling welcome.",
  },
  {
    icon: "clock",
    title: "Always Open, Always Ready",
    desc: "24 hours a day, 7 days a week, 365 days a year. Whether it's 3 AM after a late flight or 6 AM before a busy day — we're here for you.",
  },
] as const;
