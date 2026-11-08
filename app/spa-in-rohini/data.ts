import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-rohini";

/**
 * Rohini's angle is honesty about distance: it's a long drive from north-west
 * Delhi, so the page helps residents make it worthwhile with longer rituals,
 * off-peak timing and family or pre-wedding bookings. The spa is in
 * Mahipalpur; this page serves Rohini from there.
 */
export const ROHINI: LocationContent = {
  path: "/spa-in-rohini/",
  areaName: "Rohini",
  breadcrumb: "Spa in Rohini",

  heroImage: `${A}/spa-near-rohini-upper-back-massage.jpg`,
  heroImageAlt: "Black-and-white photo of a therapist working on a guest's upper back, at a spa near Rohini",
  heroBadge: "40–60 Minutes From Rohini By Road",
  h1: { lead: "Best Spa & Body Massage Near", em: "Rohini" },
  heroText: [
    "We'll be straight with you: if you want a spa in Rohini itself, we aren't it. Our single spa is at Defence Enclave, Mahipalpur, and from Rohini that's usually a 40–60 minute drive depending on traffic.",
    "Why do people make the trip? Longer rituals you won't find on every menu, an authentic Russian Banya, free parking with no time limit and hours that let you avoid the traffic entirely. This page shows how to make the drive worth it.",
  ],
  heroStats: [
    { value: "40–60 min", label: "From Rohini By Road" },
    { value: "150 min", label: "Royal Signature Ritual" },
    { value: "Free", label: "Parking, No Time Limit" },
    { value: "6+", label: "Guests For Group Rates" },
  ],

  intro: {
    label: "Why Rohini Guests Make The Trip",
    titleLead: "Worth The Drive,",
    titleEm: "If You Plan It Well",
    paras: [
      "Rohini is one of Delhi's largest residential areas, with numbered sectors stretching from Rithala to Sector 3 and families who've lived there for decades. From here, Mahipalpur is a proper journey across the city, and nobody should pretend otherwise.",
      "That's why we suggest Rohini guests treat a visit as a half-day out rather than a quick appointment. A 30-minute express isn't worth an hour's drive; a two-hour Banya and massage, or the two-and-a-half-hour Royal Signature Ritual, is a different matter. Free parking with no time limit means you can stay as long as you need.",
      "Timing does the rest. We're open around the clock at the same rate, so you can drive down early in the morning or late in the evening when the roads are clear. And for weddings and family occasions, there's a pre-wedding package and group discounts from six guests.",
    ],
  },

  introImage: {
    src: `${A}/warm-stones-and-orchids.jpg`,
    alt: "Warm basalt stones being placed along a guest's back beside white orchids",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "star",
      title: "Rituals Worth The Trip",
      desc: "Two-hour and two-and-a-half-hour bookings that justify the drive.",
    },
    {
      icon: "moon",
      title: "Drive When Roads Are Clear",
      desc: "Open 24/7 at one rate, so early mornings and late nights cost nothing extra.",
    },
    {
      icon: "car",
      title: "Park As Long As You Like",
      desc: "Free on-site parking with no time limit, even for a half-day visit.",
    },
    {
      icon: "flower",
      title: "Pre-Wedding Package",
      desc: "The Bridal Glow Package, and group rates when the family comes along.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Longer Bookings",
    titleLead: "Treatments That",
    titleEm: "Make The Trip Worthwhile",
    lede: "Six of our longer and more complete treatments, picked because they suit a visit you've travelled for. Each is charged at the rate on our price list, with taxes included.",
  },

  treatments: [
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Our most complete visit: exfoliation from head to toe, a 90-minute massage you pick, attention to scalp and feet, then Banya time and refreshments.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "flame",
      name: "Banya + Swedish Massage",
      desc: "Rounds of Russian Banya heat with the birch venik, then a full-body Swedish massage. Two hours that feel like a proper day off.",
      duration: "120 min",
      price: "₹5,500",
    },
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil worked in long, rhythmic strokes, closing with scalp and marma-point work. A traditional treatment many families already know.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "flower",
      name: "Bridal Glow Package",
      desc: "A pre-wedding scrub, a herbal mask and a full-body massage in two hours. Book it a few days before the event, and ask about group rates for the family.",
      duration: "120 min",
      price: "₹6,000",
    },
    {
      icon: "waves",
      name: "Swedish Massage — Extended",
      desc: "Ninety minutes of medium-pressure relaxation, giving the back and legs the extra attention a long drive calls for.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Deep tissue, trigger-point release and stretching for regular runners, cricketers and gym-goers, worked through in a full 90 minutes.",
      duration: "90 min",
      price: "₹3,600",
    },
  ],

  nearby: [
    { name: "Rohini Sectors 3, 7 & 9", distance: "40–55 min", note: "Via the Outer Ring Road and Dhaula Kuan" },
    { name: "DC Chowk, Sector 9", distance: "40–55 min", note: "Leave early on weekday mornings" },
    { name: "Japanese Park, Sector 10", distance: "40–55 min", note: "Quieter roads late in the evening" },
    { name: "Rohini Court, Sector 14", distance: "45–60 min", note: "Your map app may suggest the newer Urban Extension Road" },
    { name: "Rithala", distance: "45–60 min", note: "The furthest end of Rohini" },
    { name: "Rohini West Metro", distance: "70–90 min", note: "By metro with two changes; driving is simpler" },
  ],

  nearbyImage: {
    src: `${A}/quiet-bathroom-with-stone-bath.jpg`,
    alt: "Pale stone bathtub with a palm plant in a quiet bathroom",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By car",
      desc: "Most routes run south on the Outer Ring Road to Dhaula Kuan, then NH-8 to Mahipalpur. Depending on traffic, your map app may choose the Urban Extension Road instead. Parking is free once you arrive.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "Red Line to Kashmere Gate, change to the Yellow Line for New Delhi, then ride the Airport Express to Aerocity and finish with a five-minute auto. It works, but with two changes it's a long trip.",
    },
    {
      icon: "clock",
      title: "Pick your hour",
      desc: "Early mornings and late evenings usually have the lightest traffic. Prices don't change overnight, so choose whichever hour makes the drive easiest.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "Across The City From Rohini" },

  nearbyAreas: ["Karol Bagh", "Delhi", "Dwarka", "Connaught Place"],

  articleImage: {
    src: `${A}/heat-room-for-a-half-day-visit.jpg`,
    alt: "Wood-panelled heat room with lit benches on three sides",
    width: 900,
    height: 506,
  },

  article: {
    label: "Planning A Longer Visit",
    titleLead: "Worth The Drive:",
    titleEm: "A Half-Day Spa Plan From Rohini",
    standfirst:
      "When the spa is an hour away, a quick massage rarely feels worth it. Planned as a half-day, it's a different story. Here's how Rohini guests can get the most out of the trip.",
    sections: [
      {
        heading: "Book something long enough",
        paras: [
          "Choose a treatment of at least 90 minutes. [Banya + Swedish Massage](/services/) at ₹5,500 gives you two hours: the Russian Banya's heat rounds first, then a full-body massage while the muscles are warm. The Royal Signature Ritual at ₹8,500 goes further, with a scrub, a 90-minute massage, scalp and foot work and Banya time in two and a half hours.",
          "Add time in the relaxation lounge afterwards; there's no charge for staying, and parking has no time limit. Don't plan a long drive straight after a Banya; give yourself twenty minutes with herbal tea first.",
        ],
      },
      {
        heading: "Beat the traffic",
        paras: [
          "The drive is the part you can control. Traffic between Rohini and Dhaula Kuan is usually lightest early in the morning or late at night, and since we never close and never add a night surcharge, a 7 AM or 10 PM booking costs the same as one at 3 PM.",
          "If weekday mornings suit you, the weekday morning rate takes 10% off hour-long massages (Monday–Thursday, 8 AM to noon), though for the drive from Rohini a longer booking is usually the better choice. Check the full rate card on our [price list](/pricing/).",
        ],
      },
      {
        heading: "Coming as a family or a wedding party",
        paras: [
          "If several of you are coming, share the drive. Group bookings start at six guests with discounted rates, and a coordinator helps schedule the treatments. Before a wedding, the Bridal Glow Package (120 minutes, ₹6,000) combines a scrub, a herbal mask and a full-body massage.",
          "To arrange a group or ask about timing, use our [contact page](/contact/). If you'd like a shorter trip, our [Karol Bagh page](/spa-in-karol-bagh/) and the city-wide [spa in Delhi](/spa-in-delhi/) guide show routes from closer in, and the [about page](/about/) introduces the team.",
        ],
      },
    ],
    takeaways: [
      "Book 90 minutes or more; a short express rarely justifies the drive.",
      "Drive early or late: same rate at any hour, much less traffic.",
      "Rest twenty minutes with tea before driving home after a Banya.",
      "Coming with family? Group rates start at six guests.",
    ],
  },

  faqs: [
    {
      q: "Is there a Mahipalpur Luxury Spa in Rohini?",
      a: "No. Our one premises is at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. From Rohini it's usually a 40–60 minute drive, depending on the time of day.",
    },
    {
      q: "What's the best route from Rohini?",
      a: "Most drivers take the Outer Ring Road south to Dhaula Kuan, then NH-8 to Mahipalpur. Depending on traffic, your map app may route you via the Urban Extension Road. Ring us for the last stretch and we'll talk you in.",
    },
    {
      q: "Which treatment is worth the long drive?",
      a: "Something of 90 minutes or more: Banya + Swedish Massage (120 minutes, ₹5,500) or the Royal Signature Ritual (150 minutes, ₹8,500) are the most complete.",
    },
    {
      q: "Do you do pre-wedding treatments?",
      a: "Yes. The Bridal Glow Package is 120 minutes for ₹6,000 and includes a scrub, a herbal mask and a full-body massage. Group rates apply from six guests.",
    },
    {
      q: "Can I come early in the morning to avoid traffic?",
      a: "Yes. We never close, and a 6 AM booking is priced exactly like an afternoon one.",
    },
    {
      q: "Is parking free for a long visit?",
      a: "Yes. Parking on site is free with no time limit, however long you stay.",
    },
  ],

  geo: { lat: 28.7383, lng: 77.0822 },

  seo: {
    title: "Best Spa & Body Massage near Rohini | Mahipalpur Luxury Spa",
    description:
      "Planning a spa half-day from Rohini? Banya and body massage rituals in Mahipalpur, 40–60 min away, open 24/7 with free parking and no night surcharge.",
    ogTitle: "Spa near Rohini | Make The Drive Worth It",
    ogDescription:
      "Longer rituals, an authentic Russian Banya and hours that dodge the traffic. One Mahipalpur spa, 40–60 minutes from Rohini, with published prices.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Rohini, open 24 hours",
  },
};
