import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-connaught-place";

/**
 * Connaught Place's angle is the first-timer: office staff around the Inner
 * and Outer Circle, and visitors staying centrally, many of whom have never
 * been to a spa. The Airport Express from Shivaji Stadium is the fast route.
 * The spa is in Mahipalpur; this page serves Connaught Place from there.
 */
export const CONNAUGHT_PLACE: LocationContent = {
  path: "/spa-in-connaught-place/",
  areaName: "Connaught Place",
  breadcrumb: "Spa in Connaught Place",

  heroImage: `${A}/spa-near-connaught-place-scrub-essentials.jpg`,
  heroImageAlt:
    "Scrub salts, a natural-bristle brush and a folded white towel arranged on a pale surface, at a spa near Connaught Place",
  heroBadge: "20–30 Minutes From CP By Airport Express",
  h1: { lead: "Best Spa & Body Massage Near", em: "Connaught Place" },
  heroText: [
    "Searching for a spa in Connaught Place? We're not in CP itself: our one spa is at Defence Enclave, Mahipalpur, which takes 30–45 minutes by road, or about 20–30 minutes on the Airport Express from Shivaji Stadium plus a short auto ride.",
    "If you've never been to a spa before, this page is a good place to start. It covers what to book, what happens in the room and what it costs, all at published prices, any hour of the day or night.",
  ],
  heroStats: [
    { value: "20–30 min", label: "By Airport Express + Auto" },
    { value: "30–45 min", label: "By Road From CP" },
    { value: "15%", label: "Off Your First Visit" },
    { value: "24/7", label: "Open Every Day" },
  ],

  intro: {
    label: "Why Connaught Place Guests Come To Us",
    titleLead: "A Calm Hour,",
    titleEm: "One Train Ride Away",
    paras: [
      "Connaught Place is the busiest square mile in the city: offices on Barakhamba Road and around the circles, shoppers on Janpath, visitors staying in the central hotels. It's also where a lot of people first think about booking a body massage in Delhi and then hesitate, because they've never done it before and don't know what to expect.",
      "So we've kept this page practical. The treatments below are the easiest first bookings on our menu, and the guide explains what actually happens, from the consultation to paying. Rooms are fully private, booked minutes are treatment minutes, and the listed price is what you'll pay.",
      "The quickest way from CP is often the Airport Express. Board at Shivaji Stadium, get off at Aerocity, and take a five-minute auto to Defence Enclave, Mahipalpur. By road it's 30–45 minutes via Dhaula Kuan and NH-8, with free parking once you arrive.",
    ],
  },

  introImage: {
    src: `${A}/head-massage-for-first-time-guests.jpg`,
    alt: "Seen from above: a therapist's hands cradling a guest's head, with a tiled floor and a side table of fruit and flowers",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "metro",
      title: "Airport Express From CP",
      desc: "Shivaji Stadium to Aerocity by train, then about five minutes by auto to our door.",
    },
    {
      icon: "shield",
      title: "Private Rooms, Always",
      desc: "Each session happens in its own enclosed room, not a curtained cubicle.",
    },
    {
      icon: "clock",
      title: "Full Time On The Table",
      desc: "Changing and the consultation don't eat into the time you've booked.",
    },
    {
      icon: "wallet",
      title: "15% Off A First Visit",
      desc: "New guests save 15% on one treatment. Mention it when you book.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Easy First Bookings",
    titleLead: "Good Places To Start",
    titleEm: "If You're New To Spas",
    lede: "Six treatments from our menu that suit a first visit or a lunch-hour escape from CP. The prices are the ones on our price list, with taxes already included.",
  },

  treatments: [
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "Long, even strokes at medium pressure across the whole body. If you're unsure what to book for a first massage, book this.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "flower",
      name: "Aromatherapy Massage",
      desc: "Gentle pressure with an oil blend picked for you after a quick chat about stress, sleep or energy. Calm, quiet and easy to enjoy the first time.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "A focused half hour for the neck, shoulders and scalp. A low-commitment way to try us out, and short enough for a long lunch break.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "hand",
      name: "Thai Massage",
      desc: "No oil: acupressure and assisted stretches while you stay in loose clothing. A good choice if you'd rather not undress for your first massage.",
      duration: "75 min",
      price: "₹3,200",
    },
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil in rhythmic, traditional strokes, finishing with the scalp and marma points. Familiar to many Indian guests and deeply relaxing.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "flame",
      name: "Banya + Swedish Massage",
      desc: "The Russian Banya heat ritual, then a full-body massage. Book this once you know you like massage and want to try our flagship Russian Banya.",
      duration: "120 min",
      price: "₹5,500",
    },
  ],

  nearby: [
    { name: "Shivaji Stadium Metro (Airport Express)", distance: "20–30 min", note: "Train to Aerocity, then a short auto ride" },
    { name: "Rajiv Chowk & Inner Circle", distance: "30–45 min", note: "By road via Dhaula Kuan and NH-8" },
    { name: "Janpath", distance: "30–45 min", note: "Or walk to Shivaji Stadium for the train" },
    { name: "Barakhamba Road offices", distance: "35–45 min", note: "Leave before the evening rush if driving" },
    { name: "Gole Market", distance: "30–40 min", note: "Close to the Shivaji Stadium station" },
    { name: "Mandi House", distance: "35–50 min", note: "Road traffic varies a lot; the train is steadier" },
  ],

  nearbyImage: {
    src: `${A}/herbal-tea-on-a-wooden-tray.jpg`,
    alt: "Clay cup of herbal tea and a white teapot on a round wooden tray",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "metro",
      title: "By Airport Express",
      desc: "From Shivaji Stadium (or New Delhi), take the train in the airport direction and step off at Aerocity. From the exit, an auto reaches Defence Enclave, Mahipalpur in about five minutes.",
    },
    {
      icon: "car",
      title: "By car",
      desc: "Head out via Dhaula Kuan and take NH-8 towards the airport, exiting for Mahipalpur. Allow 30–45 minutes; on-site parking is free and has no time limit.",
    },
    {
      icon: "mapPin",
      title: "By app cab",
      desc: "Use Defence Enclave, Mahipalpur, New Delhi 110037 as the drop. Phone us as you get close and we'll guide the driver to our gate.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "One Train Ride From CP" },

  nearbyAreas: ["Paharganj", "Karol Bagh", "Delhi", "Aerocity"],

  articleImage: {
    src: `${A}/first-spa-visit-warm-oil-massage.jpg`,
    alt: "Massage oil being poured into a therapist's hand above a guest lying face down",
    width: 1000,
    height: 562,
  },

  article: {
    label: "A First-Timer's Guide",
    titleLead: "First Time At A Spa?",
    titleEm: "Here's What Happens",
    standfirst:
      "A lot of people put off their first spa visit simply because they don't know the routine. Here it is, step by step, from booking to paying, so there's nothing to wonder about when you arrive from Connaught Place.",
    sections: [
      {
        heading: "Before you arrive",
        paras: [
          "Book by phone, WhatsApp or the form on our [contact page](/contact/), and say which treatment you'd like; if you're unsure, ask us to suggest one. Mention anything the therapist should know: pregnancy, recent injuries, skin conditions, allergies to oils.",
          "Eat lightly beforehand and arrive a few minutes early. You don't need to bring anything: we provide a robe and slippers, plus a locker and a shower. If you'd rather keep your clothes on, book Thai massage, which is done fully clothed and without oil.",
        ],
      },
      {
        heading: "In the treatment room",
        paras: [
          "Your therapist starts with a short consultation: where you feel tension, how firm you like the pressure, anything to avoid. Then they step out while you change and settle on the table. In any professional spa you stay covered with fresh linen, with only the area being worked on uncovered.",
          "During the massage, speak up whenever you like: more pressure, less pressure, a warmer room, a different focus. Silence is fine too. Your booked time is the time spent on the table, so a 60-minute massage means 60 minutes of treatment. Full descriptions of every style are on our [services page](/services/).",
        ],
      },
      {
        heading: "Afterwards, and paying",
        paras: [
          "Before heading back, sit for a few minutes in the lounge with a cup of herbal tea; it's normal to feel slow and a little sleepy. Drink water over the rest of the day, and your therapist will share a few aftercare pointers.",
          "The price on our [price list](/pricing/) is the total, with taxes included, and payment by cash, card or UPI is fine. Tips are never expected. If you're staying near New Delhi station, our [Paharganj page](/spa-in-paharganj/) covers that route, and you can read about the team on the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "Tell us about pregnancy, injuries or allergies when you book.",
      "Bring nothing; robe, slippers, locker and shower are provided.",
      "Speak up any time about pressure or comfort. Silence is fine too.",
      "The listed price is the full price, and tipping is optional.",
    ],
  },

  faqs: [
    {
      q: "Is there a Mahipalpur Luxury Spa in Connaught Place?",
      a: "No. Our only premises is at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. From CP it's about 20–30 minutes by Airport Express and auto, or 30–45 minutes by road.",
    },
    {
      q: "What's the fastest way to reach you from CP?",
      a: "Usually the Airport Express: board at Shivaji Stadium, get off at Aerocity, then take a five-minute auto to Defence Enclave, Mahipalpur. By road, go via Dhaula Kuan and NH-8.",
    },
    {
      q: "I've never had a massage. What should I book?",
      a: "A 60-minute Swedish Massage (₹2,800) is the simplest first booking. If you'd prefer to stay clothed, choose Thai Massage (75 minutes, ₹3,200), which uses no oil.",
    },
    {
      q: "Do I need to bring anything?",
      a: "No. Everything is here: robe, slippers, locker, shower and fresh linen for every guest.",
    },
    {
      q: "Do I have to tip?",
      a: "No. Tipping is entirely optional, and the listed price already includes taxes.",
    },
    {
      q: "Is there a discount for a first visit?",
      a: "Yes: 15% off one treatment the first time you visit. Just mention it when booking; there's no code to remember.",
    },
    {
      q: "Are you open late?",
      a: "Our doors are open 24 hours, all week, and late-night prices are the same as daytime ones. Note that the Airport Express doesn't run through the night, so a cab is easier for very late visits.",
    },
  ],

  geo: { lat: 28.6315, lng: 77.2167 },

  seo: {
    title: "Spa & Body Massage near Connaught Place | Mahipalpur Luxury Spa",
    description:
      "20–30 min from CP by Airport Express. First-timer friendly body massage and Russian Banya, open 24/7, with fixed prices and 15% off your first visit.",
    ogTitle: "Spa near Connaught Place | First-Timer Friendly, Open 24/7",
    ogDescription:
      "Never been to a spa? Our guide explains every step. One Mahipalpur spa, 20–30 minutes from CP by Airport Express, with published prices and private rooms.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Connaught Place, open 24 hours",
  },
};
