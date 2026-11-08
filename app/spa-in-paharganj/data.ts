import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-paharganj";

/**
 * Paharganj's angle is the traveller: backpackers and budget visitors around
 * Main Bazar and New Delhi station, with backpack-sore shoulders and tired
 * feet, often between a train and a flight. The Airport Express from New Delhi
 * station is the natural route. The spa is in Mahipalpur; this page serves
 * Paharganj from there.
 */
export const PAHARGANJ: LocationContent = {
  path: "/spa-in-paharganj/",
  areaName: "Paharganj",
  breadcrumb: "Spa in Paharganj",

  heroImage: `${A}/spa-near-paharganj-foot-soak.jpg`,
  heroImageAlt: "Close-up of feet in a herbal foot bath with a pink-and-green frangipani, at a spa near Paharganj",
  heroBadge: "Airport Express From New Delhi Station",
  h1: { lead: "Best Spa & Body Massage Near", em: "Paharganj" },
  heroText: [
    "Looking for a spa in Paharganj? We're one stop-and-a-short-ride away rather than in Paharganj itself. Our only spa is at Defence Enclave, Mahipalpur: take the Airport Express from New Delhi station to Aerocity, then a five-minute auto.",
    "It's a practical stop for travellers: open around the clock for late trains and early flights, every price published before you arrive, and a reduced layover rate if you're flying out of IGI within 12 hours.",
  ],
  heroStats: [
    { value: "20–30 min", label: "Via Airport Express + Auto" },
    { value: "₹2,400", label: "45-Min Layover Express" },
    { value: "24/7", label: "For Late Trains & Flights" },
    { value: "₹0", label: "Hidden Charges" },
  ],

  intro: {
    label: "Why Paharganj Travellers Come To Us",
    titleLead: "Backpacks, Trains",
    titleEm: "And Tired Feet",
    paras: [
      "Paharganj is where a great many travellers start or end their time in Delhi: guesthouses along Main Bazar, New Delhi Railway Station across the road, and the Airport Express one short walk away. After weeks of buses, trains and sightseeing on foot, the body usually has a clear list of complaints.",
      "Shoulders and the upper back take the weight of a backpack; feet take the walking tours; a night on a train berth leaves a stiff neck. Those are exactly what our shorter, cheaper treatments are good at: Thai massage for stiffness, reflexology for feet, a 30-minute express for the neck and shoulders, and a short Banya when you want warmth.",
      "Getting here is easy from Paharganj. Take the Airport Express from New Delhi station towards the airport, get off at Aerocity, and an auto brings you to Defence Enclave, Mahipalpur in about five minutes. You can shower before you leave, which helps when the next stop is a flight.",
    ],
  },

  introImage: {
    src: `${A}/neck-and-shoulder-massage-for-travellers.jpg`,
    alt: "Therapist working the neck and shoulders of a guest lying face up on a towel-draped table",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "metro",
      title: "One Line From New Delhi",
      desc: "Airport Express from New Delhi station to Aerocity, then about five minutes by auto.",
    },
    {
      icon: "plane",
      title: "Flying Out Of IGI?",
      desc: "A same-day boarding pass (flight within 12 hours) gets you the reduced Layover Express rate.",
    },
    {
      icon: "lock",
      title: "Locker, Shower, Robe",
      desc: "Included with every treatment, before and after your session.",
    },
    {
      icon: "wallet",
      title: "Prices Fixed In Advance",
      desc: "Every rate is published with taxes included; nothing is added at the end.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Made For Travellers",
    titleLead: "Treatments For",
    titleEm: "Life On The Road",
    lede: "Six options from the menu for backpack shoulders, walked-out feet and tight schedules, most of them under ₹2,500. Each one costs what our published price list says, taxes included.",
  },

  treatments: [
    {
      icon: "hand",
      name: "Thai Massage",
      desc: "Acupressure and assisted stretching, done without oil while you stay in loose clothes. Good for the stiffness that weeks of carrying a pack leave in the back and hips.",
      duration: "75 min",
      price: "₹3,200",
    },
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Sixty minutes of pressure-point therapy on feet and hands, for feet that have done Old Delhi, the Red Fort and Main Bazar in one week.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty minutes on the neck and shoulders, where backpack straps and a night on a train berth leave their mark.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "A quick massage, a shower and a drink in 45 minutes before your flight. Flying within 12 hours? Your boarding pass gets you the layover rate.",
      duration: "45 min",
      price: "₹2,400",
    },
    {
      icon: "flame",
      name: "Banya Express",
      desc: "A short version of the Russian Banya: heat, the birch venik and a cool-down in 45 minutes. A good way to try it without the full 90.",
      duration: "45 min",
      price: "₹2,200",
    },
    {
      icon: "leaf",
      name: "Foot Ritual & Soak",
      desc: "A herbal foot soak, gentle exfoliation and reflexology to finish, all in half an hour. The cheapest way to treat sore feet properly.",
      duration: "30 min",
      price: "₹1,200",
    },
  ],

  nearby: [
    { name: "New Delhi Station (Airport Express)", distance: "20–30 min", note: "Train to Aerocity, then a short auto" },
    { name: "Main Bazar, Paharganj", distance: "25–35 min", note: "Walk to the station, then the train" },
    { name: "RK Ashram Marg Metro", distance: "30–40 min", note: "Change at Rajiv Chowk and New Delhi" },
    { name: "Arakashan Road hotels", distance: "25–35 min", note: "A short walk to New Delhi station" },
    { name: "Paharganj by road", distance: "30–45 min", note: "Via Dhaula Kuan and NH-8" },
    { name: "IGI Airport Terminal 3", distance: "10–12 min", note: "From us onwards, for your flight" },
  ],

  nearbyImage: {
    src: `${A}/massage-oil-and-fresh-towels.jpg`,
    alt: "Pump bottle of massage oil beside folded towels, a tealight and pink tulips",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "metro",
      title: "By Airport Express",
      desc: "Walk to the Airport Express at New Delhi station, board a train heading for the airport and alight at Aerocity. An auto then takes about five minutes to Defence Enclave, Mahipalpur.",
    },
    {
      icon: "mapPin",
      title: "By app cab or auto",
      desc: "Give the address as Defence Enclave, Mahipalpur, New Delhi 110037, near Aerocity. Call us on arrival in the area and we'll help the driver find the gate.",
    },
    {
      icon: "plane",
      title: "On the way to your flight",
      desc: "Have your treatment and a shower, then continue to IGI: Terminal 3 is 10–12 minutes away and Terminal 1 about 8–10. Carrying a large backpack? Mention it when you book.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "Near Aerocity Station" },

  nearbyAreas: ["Connaught Place", "Karol Bagh", "Aerocity", "Delhi"],

  articleImage: {
    src: `${A}/traveller-unwinding-at-sunrise.jpg`,
    alt: "Person meditating on a wooden deck at sunrise with palm trees behind",
    width: 1000,
    height: 562,
  },

  article: {
    label: "A Traveller's Spa Guide",
    titleLead: "Backpack Shoulders",
    titleEm: "And Tired Feet",
    standfirst:
      "Weeks of travel leave a predictable mark on the body, and a spa stop in Delhi can fix more of it than you'd expect, as long as you book the right thing and pay a fair price. Here's how, starting from Paharganj.",
    sections: [
      {
        heading: "What travel does, and what to book",
        paras: [
          "A loaded backpack pulls the shoulders forward and loads the upper back; long walking days wear out the feet; sleeping on trains and buses stiffens the neck. For the first two, [Thai massage](/services/) and reflexology are the most useful; for the neck, the 30-minute Head, Neck & Shoulder Express is enough on its own.",
          "If you're curious about the Russian Banya but short on time or money, the 45-minute Banya Express at ₹2,200 gives you the heat, the venik and the cool-down without committing to the full ritual. Drink plenty of water first, especially in Delhi's summer.",
        ],
      },
      {
        heading: "Fitting it between trains and flights",
        paras: [
          "The Airport Express makes Paharganj one of the easiest places to reach us from: New Delhi station to Aerocity, then a five-minute auto. If you're heading to IGI afterwards, the Airport Layover Express includes a shower and is cheaper if your flight leaves within 12 hours (show the boarding pass), and Terminal 3 is then only 10–12 minutes away.",
          "We're open 24 hours, so a late train arrival or a pre-dawn flight is no obstacle. Lockers are provided for your belongings; if you're carrying a large pack, mention it when you book. If you'd like to talk about timing before you set off, message us on the [contact page](/contact/).",
        ],
      },
      {
        heading: "Paying a fair price",
        paras: [
          "In any busy tourist area it's sensible to agree the full price before a treatment starts. Ours are published on the [price list](/pricing/), tax-inclusive with no extras, so you know the total before you get on the train.",
          "Cash, cards and UPI all work, and tips are up to you. On a first visit, one treatment is 15% off. If you're staying nearer the centre, our [Connaught Place page](/spa-in-connaught-place/) has a first-timer's guide, and the [about page](/about/) explains who runs the spa.",
        ],
      },
    ],
    takeaways: [
      "Backpack shoulders: Thai massage or the 30-minute express. Walked-out feet: reflexology.",
      "Airport Express from New Delhi station to Aerocity, then five minutes by auto.",
      "Flying within 12 hours? The Layover Express includes a shower and has a reduced rate.",
      "Prices are published in full before you travel; tipping is optional.",
    ],
  },

  faqs: [
    {
      q: "Is there a spa in Paharganj run by Mahipalpur Luxury Spa?",
      a: "No. We have one premises, at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. From Paharganj, take the Airport Express from New Delhi station to Aerocity, then an auto for about five minutes.",
    },
    {
      q: "How long does it take from Paharganj?",
      a: "About 20–30 minutes using the Airport Express and an auto, or 30–45 minutes by road via Dhaula Kuan, depending on traffic.",
    },
    {
      q: "Can I come straight before a flight?",
      a: "Yes. A locker and a shower are included (mention large luggage when you book), and IGI Terminal 3 is 10–12 minutes from us. Book the Airport Layover Express and bring the boarding pass for the reduced rate if you fly within 12 hours.",
    },
    {
      q: "What's good for sore shoulders from a backpack?",
      a: "Thai Massage (75 minutes, ₹3,200) for overall stiffness, or the Head, Neck & Shoulder Express (30 minutes, ₹1,400) if it's mainly the neck and shoulders.",
    },
    {
      q: "Are your prices fixed?",
      a: "Yes. Every price is published, includes taxes, and is the total you pay. Tipping is optional, and we accept cash, card and UPI.",
    },
    {
      q: "Are you open at night for late trains?",
      a: "Yes, 24 hours a day. The Airport Express stops running overnight, so for very late or very early visits a cab from Paharganj is simpler.",
    },
  ],

  geo: { lat: 28.6425, lng: 77.2128 },

  seo: {
    title: "Best Spa & Body Massage near Paharganj | Mahipalpur Luxury Spa",
    description:
      "20–30 min from Paharganj via the Airport Express. Body massage, foot reflexology and Russian Banya, open 24/7 near IGI, with fixed published prices.",
    ogTitle: "Spa near Paharganj | For Travellers, Open 24/7",
    ogDescription:
      "Backpack shoulders, tired feet and a flight to catch? One Mahipalpur spa, one Airport Express ride from New Delhi station, with fixed published prices.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Paharganj travellers, open 24 hours",
  },
};
