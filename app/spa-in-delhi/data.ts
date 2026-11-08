import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-delhi";

/**
 * The Delhi page is the city-wide hub: where the one premises sits in Delhi,
 * how to reach it from every side, and what to check before booking any spa.
 * Mahipalpur is in New Delhi, so "in Delhi" is literally true here.
 */
export const DELHI: LocationContent = {
  path: "/spa-in-delhi/",
  areaName: "Delhi",
  breadcrumb: "Spa in Delhi",

  heroImage: `${A}/spa-in-delhi-head-and-face-massage.jpg`,
  heroImageAlt:
    "Guest wrapped in a white towel receiving a head and face massage, with a bowl of flowers beside the table, at a spa in Delhi",
  heroBadge: "Mahipalpur, New Delhi 110037 · Open 24/7",
  h1: { lead: "Best Spa & Body Massage in", em: "Delhi" },
  heroText: [
    "Mahipalpur Luxury Spa is a single spa in Delhi, at Office No. 118, Defence Enclave, Mahipalpur, close to IGI Airport and Aerocity. We have one premises and no branches, and this page explains how to reach it from wherever you are in the city.",
    "Inside you'll find an authentic Russian Banya, a full massage menu from Swedish to Ayurvedic Abhyanga, fully private rooms and one published price list with taxes included, open around the clock, all year.",
  ],
  heroStats: [
    { value: "24/7", label: "365 Days A Year" },
    { value: "10–12 min", label: "From IGI Terminal 3" },
    { value: "20+", label: "Treatments" },
    { value: "₹0", label: "Hidden Charges" },
  ],

  intro: {
    label: "One Spa, The Whole City",
    titleLead: "Where We Are,",
    titleEm: "And Why It Works",
    paras: [
      "Delhi is big, and a spa that's convenient from one side can be an hour from another. We're in Mahipalpur, between the airport, Aerocity and the main roads into Gurugram, Dwarka and South Delhi, so much of the south and west of the city reaches us in 15–25 minutes, and central Delhi in roughly 25–45.",
      "Inside, the setup is the same for every guest: a private treatment room, never a curtain partition; fresh linen and a robe for each visit; a short consultation before you start; and the full booked time on the table, with changing not counted against it. The Russian Banya, with wood-lined steam at 70–90°C, a birch venik and a cold plunge, is our flagship treatment.",
      "The area pages linked further down go into each part of the city in detail, with travel times, landmarks and the treatments that suit the people who live and work there. If you only want the full menu, start with our services page or the complete price list.",
    ],
  },

  introImage: {
    src: `${A}/russian-banya-heat-room-delhi.jpg`,
    alt: "Wooden heat room with two tiers of lit benches and a bowl of sauna stones in the centre",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "flame",
      title: "Authentic Russian Banya",
      desc: "Steam, birch venik and cold plunge in rounds: our flagship ritual.",
    },
    {
      icon: "lock",
      title: "Fully Private Rooms",
      desc: "Every treatment behind a closed door, never a curtain partition.",
    },
    {
      icon: "wallet",
      title: "One Published Price",
      desc: "Taxes included, no counter charges, and the same rate at any hour.",
    },
    {
      icon: "plane",
      title: "Close To The Airport",
      desc: "10–12 minutes from Terminal 3 and 8–10 minutes from Terminal 1.",
    },
  ],

  treatmentsHead: {
    eyebrow: "The Core Menu",
    titleLead: "Where To Start If",
    titleEm: "You're New To Us",
    lede: "A fair picture of the menu in six treatments, from a 45-minute airport express to a two-and-a-half-hour ritual. Rates are those on the price list, inclusive of taxes.",
  },

  treatments: [
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Our flagship: wood-lined steam at 70–90°C, a birch-leaf venik treatment, then a cold plunge and rest, in rounds. Performed by therapists trained in Russian Banya practice.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "Long, flowing strokes at medium pressure. The classic choice for a first visit, or for simply switching off.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Slow, firm work into chronic tension in the shoulders and lower back, built up layer by layer.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil applied in rhythmic, traditional strokes, finished with a scalp and marma-point sequence.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Exfoliation first, then a 90-minute massage you choose, then scalp and foot work and a turn in the Banya: everything we do, in one booking.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "A compact massage, a shower and a drink, all inside 45 minutes, built for people flying out of IGI. A boarding pass for a flight within 12 hours unlocks the layover rate.",
      duration: "45 min",
      price: "₹2,400",
    },
  ],

  nearby: [
    { name: "Aerocity hotels", distance: "5 min", note: "Straight across NH-8" },
    { name: "IGI Airport Terminal 3", distance: "10–12 min", note: "Down NH-8 towards Mahipalpur" },
    { name: "IGI Airport Terminal 1", distance: "8–10 min", note: "The shortest airport run" },
    { name: "Vasant Kunj", distance: "12–15 min", note: "Along Vasant Kunj Road" },
    { name: "Dwarka Sector 10", distance: "15–18 min", note: "Via the Dwarka Link Road" },
    { name: "Gurugram", distance: "~20 min", note: "North on NH-8" },
    { name: "Saket & Hauz Khas", distance: "22–25 min", note: "West through Mehrauli" },
    { name: "Karol Bagh", distance: "~25 min", note: "Via Dhaula Kuan and NH-8" },
    { name: "Connaught Place", distance: "30–45 min", note: "Via Dhaula Kuan; allow longer at peak" },
  ],

  nearbyImage: {
    src: `${A}/calm-after-a-spa-session.jpg`,
    alt: "Person sitting cross-legged in meditation as the sun rises behind palm trees",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By car",
      desc: "We're just off NH-8 at Defence Enclave, Mahipalpur. Set your map to Defence Enclave, Mahipalpur, New Delhi 110037, and park free on site with no time limit.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "The Airport Express stops at Aerocity, about five minutes from us by auto, and the Magenta Line's Terminal 1-IGI Airport station is 8–10 minutes away by cab or auto.",
    },
    {
      icon: "mapPin",
      title: "By cab or auto",
      desc: "Any app cab or auto driver knows Mahipalpur. Give the full address and phone us as you get close; we'll bring the driver to the right gate.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Find Us In", em: "Mahipalpur, New Delhi" },

  nearbyAreas: ["Vasant Kunj", "Dwarka", "Gurgaon", "Saket", "South Delhi", "Karol Bagh", "Connaught Place", "Paharganj", "Rohini", "Aerocity"],

  articleImage: {
    src: `${A}/what-to-check-before-booking-a-spa.jpg`,
    alt: "Therapist placing fingertips on a guest's forehead during a calming face massage",
    width: 1000,
    height: 562,
  },

  article: {
    label: "Before You Book Anywhere",
    titleLead: "Five Things To Check",
    titleEm: "Before Booking A Spa In Delhi",
    standfirst:
      "Delhi has a lot of spas, and from a listing alone they can be hard to tell apart. Whichever one you choose, including us, these five checks take a couple of minutes and tell you most of what you need to know.",
    sections: [
      {
        heading: "1 and 2: Prices you can see, rooms you can trust",
        paras: [
          "First, is there a full price list you can read before you go, with taxes included? A clear rate card means the amount you're quoted is the amount you pay. Ours is on the [pricing page](/pricing/), and nothing is added at the counter.",
          "Second, are treatments given in private rooms? Ask directly whether rooms are fully enclosed or separated by curtains. Every treatment with us happens in a fully private room, with fresh linen and a robe for each guest.",
        ],
      },
      {
        heading: "3 and 4: A consultation, and hygiene you can see",
        paras: [
          "Third, does the therapist ask before they start? A short consultation about pressure, problem areas, allergies, injuries and pregnancy is a basic sign of a professional session. If nobody asks, that's worth noticing.",
          "Fourth, look at the hygiene you can actually see: fresh linen for every guest, clean showers, oils in labelled bottles. Any spa should be glad to show you these things, and you're entitled to ask.",
        ],
      },
      {
        heading: "5: A clear, therapeutic menu",
        paras: [
          "Fifth, the menu should describe each treatment plainly: what's done, for how long and at what price. Swedish, deep tissue, Thai, reflexology, Ayurvedic Abhyanga and the Russian Banya are all specific, well-defined techniques, and a good spa explains them without vague promises. Ours are set out on the [services page](/services/).",
          "Then choose a spa you can realistically reach. Our area pages give travel times and routes from across the city, including [Vasant Kunj](/spa-in-vasant-kunj/), [Dwarka](/spa-in-dwarka/), [Saket](/spa-in-saket/) and [Karol Bagh](/spa-in-karol-bagh/). The address and booking form are on the [contact page](/contact/), and our story is on the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "A full price list with taxes included, visible before you book.",
      "Fully private rooms, not curtain partitions.",
      "A consultation about pressure, injuries and pregnancy before anything starts.",
      "Plain treatment descriptions with times and prices, and no vague promises.",
    ],
  },

  faqs: [
    {
      q: "Where is Mahipalpur Luxury Spa in Delhi?",
      a: "At Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037. That's about 10–12 minutes from IGI Airport Terminal 3 and 5 minutes from the Aerocity hotels.",
    },
    {
      q: "Do you have more than one branch in Delhi?",
      a: "No. We run a single premises in Mahipalpur. One location means one team, one standard and one price list for everyone.",
    },
    {
      q: "Is the spa open 24 hours?",
      a: "Yes. We don't close at night, at weekends or on holidays, and there's no night surcharge: 3 AM costs what 3 PM does.",
    },
    {
      q: "Is this a Russian spa?",
      a: "Our flagship treatment is the Russian Banya, the traditional steam ritual with a birch venik and cold plunge. Alongside it we offer a full massage menu: Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology and Ayurvedic Abhyanga.",
    },
    {
      q: "What does a full body massage cost here?",
      a: "An hour of Swedish Massage is ₹2,800, an hour of Deep Tissue is ₹3,400, and the 90-minute Russian Banya with Venik is ₹3,500. Taxes are included in all of them.",
    },
    {
      q: "How do I book?",
      a: "Call or WhatsApp +91 8084341382, or use the booking form on our contact page. We confirm within minutes, at any hour of the day.",
    },
    {
      q: "Can I get there by metro?",
      a: "Yes. The Airport Express stops at Aerocity, about five minutes away by auto, and the Magenta Line's Terminal 1-IGI Airport station is 8–10 minutes away by cab or auto.",
    },
  ],

  geo: { lat: 28.6139, lng: 77.209 },

  seo: {
    title: "Best Spa & Body Massage in Delhi | Mahipalpur Luxury Spa",
    description:
      "Russian Banya and body massage in Mahipalpur, New Delhi, 10–12 min from IGI Airport. Open 24/7, private rooms, one published price list, taxes included.",
    ogTitle: "Spa in Delhi | Russian Banya & Massage, Open 24/7",
    ogDescription:
      "One spa in Mahipalpur, New Delhi, serving the whole city: private rooms, an authentic Russian Banya and every price published. Plus five checks before you book any spa.",
    ogImageAlt: "Mahipalpur Luxury Spa, New Delhi, open 24 hours",
  },
};
