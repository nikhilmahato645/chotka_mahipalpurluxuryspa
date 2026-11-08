import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-dwarka";

/**
 * Dwarka's angle is the regular routine: sub-city households who want massage
 * often rather than once, priced sensibly (membership, weekday morning rate),
 * plus the Airport Express route from Sector 21.
 * The spa is in Mahipalpur; this page serves Dwarka from there.
 */
export const DWARKA: LocationContent = {
  path: "/spa-in-dwarka/",
  areaName: "Dwarka",
  breadcrumb: "Spa in Dwarka",

  heroImage: `${A}/spa-near-dwarka-hot-stone-massage.jpg`,
  heroImageAlt: "Therapist's hand gliding a warm basalt stone across a guest's back at a spa near Dwarka",
  heroBadge: "15–18 Minutes From Dwarka Sector 10",
  h1: { lead: "Best Spa & Body Massage Near", em: "Dwarka" },
  heroText: [
    "If you've been searching for a spa in Dwarka, this is where we fit in: Mahipalpur Luxury Spa is a single premises at Defence Enclave, Mahipalpur, 15–18 minutes from Dwarka Sector 10 along the Dwarka Link Road. There is no branch in Dwarka, and we say so plainly.",
    "If you'd like massage to be a regular thing rather than a once-a-year treat, this page shows how to do it sensibly: a five-session membership family members can share, a weekday morning rate, and published prices with taxes included.",
  ],
  heroStats: [
    { value: "15–18 min", label: "From Dwarka Sector 10" },
    { value: "₹11,900", label: "5 Massages, 6 Months" },
    { value: "10%", label: "Weekday Morning Rate" },
    { value: "₹1,000", label: "Steam & Sauna Hour" },
  ],

  intro: {
    label: "Why Dwarka Guests Choose Us",
    titleLead: "Regular Care,",
    titleEm: "Sensibly Priced",
    paras: [
      "Dwarka is a city within the city: numbered sectors of apartments and family homes, with markets, schools and parks of their own. For residents, the useful question about a spa isn't whether to go once; it's how to go often enough to feel the difference without the cost creeping up.",
      "That's what the rest of this page is built around. The Wellness Membership gives five 60-minute massages for ₹11,900 over six months, which works out at ₹2,380 a session against ₹2,800 for a single Swedish Massage, and sessions can be passed to family members. On Monday to Thursday mornings, 60-minute massages are 10% off. And for an hour of heat on its own, steam and sauna access is ₹1,000.",
      "Getting here is straightforward. By car, the Dwarka Link Road brings most sectors to us in about 15–20 minutes, and weekday evenings are usually the quietest time to come. By metro, the Airport Express runs from Dwarka Sector 21 to Aerocity, five minutes from our door by auto.",
    ],
  },

  introImage: {
    src: `${A}/body-scrub-ritual-essentials.jpg`,
    alt: "Scrub essentials on a pale tray: a dish of salt, a bristle brush, a pumice stone and a rolled towel",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "users",
      title: "Membership Families Can Share",
      desc: "Five 60-minute massages, valid six months, transferable to family members.",
    },
    {
      icon: "wallet",
      title: "Weekday Morning Rate",
      desc: "Hour-long massages cost 10% less on Monday–Thursday mornings, 8 AM till noon.",
    },
    {
      icon: "metro",
      title: "Airport Express Option",
      desc: "Dwarka Sector 21 to Aerocity on the Airport Express, then a five-minute auto.",
    },
    {
      icon: "baby",
      title: "Pregnancy-Safe Massage",
      desc: "Side-lying prenatal massage from the second trimester, by therapists certified in it.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Good Value, Every Visit",
    titleLead: "Treatments To Book",
    titleEm: "Regularly",
    lede: "These rate-card treatments slot easily into a routine, from an hour of steam to a pregnancy-safe massage. What you see is what the price list charges, taxes included.",
  },

  treatments: [
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "Medium-pressure, full-body relaxation and the simplest massage to make a habit of. It qualifies for both the membership and the weekday morning rate.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Pressure-point therapy on the feet and hands. The lowest-priced hour-long massage on our menu, and a gentle place to start.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "spray",
      name: "Steam & Sauna Access",
      desc: "An hour in the steam room and dry sauna by itself; towel, robe and locker come with it. Free on every membership visit.",
      duration: "60 min",
      price: "₹1,000",
    },
    {
      icon: "flower",
      name: "Aromatherapy Massage",
      desc: "Your therapist picks an essential-oil blend for the goal you name, whether that's better sleep, less stress or more energy, and works it in with gentle pressure.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "baby",
      name: "Prenatal Massage",
      desc: "Side-lying with bolster support, by therapists certified in pregnancy massage, from the second trimester. Check with your doctor first and tell us when you book.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Rounds of 70–90°C steam, the birch venik and a cold plunge, with rest in between. Worth trying once even if massage is your usual booking.",
      duration: "90 min",
      price: "₹3,500",
    },
  ],

  nearby: [
    { name: "Dwarka Sector 10", distance: "15–18 min", note: "Via the Dwarka Link Road" },
    { name: "Dwarka Sector 21 Metro", distance: "12–18 min", note: "Or take the Airport Express to Aerocity" },
    { name: "Yashobhoomi (IICC), Sector 25", distance: "15–20 min", note: "Also on the Airport Express line" },
    { name: "Dwarka Sectors 6 & 12", distance: "15–20 min", note: "Easiest outside peak hours" },
    { name: "Vegas Mall, Sector 14", distance: "15–20 min", note: "Free parking at our end, no time limit" },
    { name: "Dwarka Sector 23", distance: "15–20 min", note: "Weekday evenings are usually quiet" },
  ],

  nearbyImage: {
    src: `${A}/steam-and-sauna-heat-room.jpg`,
    alt: "Wood-lined steam and sauna room with lit benches and a basket of heated stones",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By car",
      desc: "Take the Dwarka Link Road east towards Mahipalpur; most sectors reach us in 15–20 minutes off-peak. Park free on site for as long as you're with us.",
    },
    {
      icon: "metro",
      title: "By Airport Express",
      desc: "From Dwarka Sector 21 or Yashobhoomi (Sector 25), ride the Airport Express towards New Delhi and get off at Aerocity. Our door is about five minutes away by auto.",
    },
    {
      icon: "mapPin",
      title: "By auto or app cab",
      desc: "Ask for Defence Enclave, Mahipalpur, New Delhi 110037. Ring us when you're close and we'll direct the driver.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "15–18 Minutes From Dwarka" },

  nearbyAreas: ["Aerocity", "Gurgaon", "Vasant Kunj", "Delhi"],

  articleImage: {
    src: `${A}/regular-massage-oils-and-fresh-towels.jpg`,
    alt: "Massage oil bottle, rolled towels and pink tulips on a white counter",
    width: 1000,
    height: 562,
  },

  article: {
    label: "A Money-Sensible Guide",
    titleLead: "Making Massage A Habit",
    titleEm: "Without Overspending",
    standfirst:
      "If you want massage to be part of your routine rather than a rare treat, the cost has to stay sensible. Here's how to plan that from Dwarka using our published rates, with no fine print.",
    sections: [
      {
        heading: "Work out what a session really costs",
        paras: [
          "A single 60-minute Swedish Massage is ₹2,800, and that's the whole bill. On the [Wellness Membership](/pricing/) you pay ₹11,900 up front for five hour-long massages of your choosing over six months: ₹2,380 a session if all five are Swedish, and a bigger saving if you choose pricier hour-long treatments such as deep tissue.",
          "The membership also includes free steam and sauna access on every visit, priority booking on weekend evenings and one complimentary add-on ritual. If five sessions in six months sounds like a lot for one person, remember that sessions can be transferred to family members.",
        ],
      },
      {
        heading: "Use the cheaper times and options",
        paras: [
          "If your week allows a weekday morning, a 60-minute massage booked Monday–Thursday between 8 AM and noon is 10% cheaper, which brings a Swedish Massage to ₹2,520. Senior citizens and healthcare workers get a standing 10% off at any time with valid ID. First-timers get 15% off one treatment, but that can't be stacked with the morning rate or the membership.",
          "Not every visit has to be a full massage. An hour of steam and sauna is ₹1,000, [Reflexology](/services/) is ₹2,200 for 60 minutes, and the 30-minute Head, Neck & Shoulder Express is ₹1,400. Alternating a full massage with a shorter session keeps the routine going at a lower monthly cost.",
        ],
      },
      {
        heading: "A simple routine that lasts",
        paras: [
          "Pick a fixed slot, such as the first Tuesday morning of each month, and book it ahead; routines that rely on remembering tend to lapse. Weekday evenings are usually quiet too, which suits anyone working daytime hours.",
          "For directions, or to book, use the [contact page](/contact/). If you're often on the Gurugram side, our [spa in Gurgaon](/spa-in-gurgaon/) page covers the NH-8 route, and the [about page](/about/) tells you more about the people who'll be treating you.",
        ],
      },
    ],
    takeaways: [
      "Membership: ₹11,900 for five 60-minute massages, ₹2,380 each if you choose Swedish.",
      "Monday to Thursday, 8 AM to noon: 10% off any 60-minute massage.",
      "Mix full massages with ₹1,000 steam hours or 30-minute express sessions.",
      "Membership sessions can be shared with family members.",
    ],
  },

  faqs: [
    {
      q: "Do you have a branch in Dwarka?",
      a: "No. Our only premises is at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. It's 15–18 minutes from Dwarka Sector 10 via the Dwarka Link Road.",
    },
    {
      q: "Can I reach you by metro from Dwarka?",
      a: "Yes. Take the Airport Express from Dwarka Sector 21 or Yashobhoomi (Sector 25) to Aerocity, then a five-minute auto ride to Defence Enclave, Mahipalpur.",
    },
    {
      q: "What's the most affordable way to get regular massages?",
      a: "The Wellness Membership. ₹11,900 buys five hour-long massages to use within six months, and family members can use them too. Booking hour-long massages on Monday–Thursday mornings (8 AM to noon) takes another 10% off.",
    },
    {
      q: "How much is a body massage?",
      a: "Swedish Massage costs ₹2,800 for an hour; Reflexology is ₹2,200. All prices include taxes, and there's no extra charge for towels, lockers or using the facility.",
    },
    {
      q: "Is massage safe during pregnancy?",
      a: "Our Prenatal Massage is side-lying with bolster support, given by therapists certified in pregnancy massage, and offered from the second trimester. Please check with your doctor first and tell us when you book.",
    },
    {
      q: "Are you open on weekends and at night?",
      a: "Yes. We never close, weekends included, and rates stay the same day and night. Weekday evenings tend to be the quietest.",
    },
    {
      q: "Is parking available?",
      a: "Yes. Guests park free on site, with no limit on how long.",
    },
  ],

  geo: { lat: 28.5921, lng: 77.046 },

  seo: {
    title: "Best Spa & Body Massage near Dwarka | Mahipalpur Luxury Spa",
    description:
      "15–18 min from Dwarka Sector 10. Body massage, steam and Russian Banya in Mahipalpur, open 24/7, with a ₹11,900 five-session membership families can share.",
    ogTitle: "Spa near Dwarka | Regular Massage, Sensibly Priced",
    ogDescription:
      "A shareable five-massage membership, a weekday morning rate and an Airport Express route from Sector 21. One Mahipalpur spa, 15–18 minutes from Dwarka.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Dwarka, open 24 hours",
  },
};
