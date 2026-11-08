import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-karol-bagh";

/**
 * Karol Bagh's angle is the long day on your feet: market traders, shop staff
 * and visitors staying in the area's hotels, with feet, legs and lower backs
 * that ache by closing time. The spa is in Mahipalpur; this page serves
 * Karol Bagh from there.
 */
export const KAROL_BAGH: LocationContent = {
  path: "/spa-in-karol-bagh/",
  areaName: "Karol Bagh",
  breadcrumb: "Spa in Karol Bagh",

  heroImage: `${A}/spa-near-karol-bagh-scalp-massage.jpg`,
  heroImageAlt:
    "Therapist's fingertips working along a guest's hairline during a scalp massage at a spa near Karol Bagh",
  heroBadge: "About 25 Minutes From Karol Bagh",
  h1: { lead: "Best Spa & Body Massage Near", em: "Karol Bagh" },
  heroText: [
    "If you're looking for a spa in Karol Bagh that's still open after the shops shut, here is where we are: Mahipalpur Luxury Spa sits at Defence Enclave in Mahipalpur, about 25 minutes by road from Karol Bagh outside peak hours. We don't have a branch in Karol Bagh.",
    "A day behind a counter or walking the market leaves the same marks: aching feet, heavy legs, a tired lower back. This page is built around that, with reflexology, foot rituals and recovery massage, open all night at the same published rates.",
  ],
  heroStats: [
    { value: "~25 min", label: "From Karol Bagh" },
    { value: "₹1,200", label: "30-Min Foot Ritual" },
    { value: "24/7", label: "Open After Closing Time" },
    { value: "₹0", label: "Night Surcharge" },
  ],

  intro: {
    label: "Why Karol Bagh Guests Make The Trip",
    titleLead: "Long Days",
    titleEm: "On Your Feet",
    paras: [
      "Karol Bagh is one of Delhi's busiest markets, and the people who keep it running, from shop owners to sales staff, spend most of the day standing or walking. Visitors staying in the area's hotels do much the same, covering the market on foot. By evening, it's usually the feet and lower legs that hurt most.",
      "That calls for different treatments from desk-work tension. Reflexology works pressure points on the feet and hands; the 30-minute Foot Ritual & Soak adds a warm herbal soak and exfoliation; a Sports & Recovery Massage deals with tired calves and a stiff lower back. The guide below explains which helps with what.",
      "Shops close in the evening, but we don't. We're open 24 hours, and a session at 11 PM costs exactly what it would at 11 AM. It's about 25 minutes by road from Karol Bagh off-peak, or a metro trip with a short auto ride at the end, and parking is free if you drive.",
    ],
  },

  introImage: {
    src: `${A}/foot-soak-for-tired-feet.jpg`,
    alt: "Two feet in a warm foot soak with pink and purple orchids floating on the water",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "feet",
      title: "Feet And Legs First",
      desc: "Reflexology and foot rituals for long days of standing and walking.",
    },
    {
      icon: "moon",
      title: "After Closing Time",
      desc: "Open around the clock, with no night surcharge on a late booking.",
    },
    {
      icon: "metro",
      title: "Metro, Then A Short Ride",
      desc: "Blue, Yellow and Airport Express lines bring you to Aerocity, five minutes from us.",
    },
    {
      icon: "wallet",
      title: "Taxes Included",
      desc: "Every published price is final. Nothing is added at the counter.",
    },
  ],

  treatmentsHead: {
    eyebrow: "For Tired Feet And Legs",
    titleLead: "Treatments For",
    titleEm: "A Day Of Standing",
    lede: "Picked from our regular menu for feet, legs and the lower back after long hours standing. The prices shown are the same ones on the price list, tax included.",
  },

  treatments: [
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Precise pressure on reflex points in the feet and hands. The gentlest way to deal with feet that have carried you all day.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "leaf",
      name: "Foot Ritual & Soak",
      desc: "Thirty minutes: feet soaked in warm herbal water, exfoliated, then finished with reflexology. Works alone or alongside a massage.",
      duration: "30 min",
      price: "₹1,200",
    },
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Deep tissue, trigger-point release and stretching for calves, hamstrings and the lower back. Not only for athletes: long days of standing load the same muscles.",
      duration: "90 min",
      price: "₹3,600",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Full postural work from the shoulders to the lower back, for when standing all day has turned into a stubborn ache.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "flame",
      name: "Banya Express",
      desc: "A shortened heat and venik cycle. The warmth loosens tired legs quickly when you don't have 90 minutes to spare.",
      duration: "45 min",
      price: "₹2,200",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty minutes on the neck, shoulders and scalp, for the tension a long day of serving customers leaves behind.",
      duration: "30 min",
      price: "₹1,400",
    },
  ],

  nearby: [
    { name: "Ajmal Khan Road", distance: "25–35 min", note: "Via Pusa Road and Dhaula Kuan" },
    { name: "Gaffar Market", distance: "25–35 min", note: "Same route out of the market" },
    { name: "Karol Bagh Metro Station", distance: "25–30 min", note: "Blue Line; metro route below" },
    { name: "Pusa Road", distance: "20–30 min", note: "Main road out towards Dhaula Kuan" },
    { name: "Rajendra Place", distance: "25–35 min", note: "Allow extra time in evening traffic" },
    { name: "Old Rajinder Nagar", distance: "25–35 min", note: "Phone ahead and we'll guide your driver" },
  ],

  nearbyImage: {
    src: `${A}/herbal-tea-and-teapot.jpg`,
    alt: "Cup of herbal tea with a white ceramic teapot on a dark wooden table",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By road",
      desc: "Head to Dhaula Kuan and take NH-8 south towards the airport, exiting for Mahipalpur. About 25 minutes off-peak, with free on-site parking and no time limit.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "Blue Line from Karol Bagh to Rajiv Chowk, Yellow Line one stop to New Delhi, then the Airport Express to Aerocity. From Aerocity it's about five minutes by auto.",
    },
    {
      icon: "mapPin",
      title: "By app cab or auto",
      desc: "Give the address as Defence Enclave, Mahipalpur, New Delhi 110037. Late at night a cab is simpler than the metro; phone us near the end and we'll guide the driver in.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "About 25 Minutes Away" },

  nearbyAreas: ["Paharganj", "Connaught Place", "Rohini", "Delhi"],

  articleImage: {
    src: `${A}/warm-stones-for-a-tired-back.jpg`,
    alt: "Warm basalt stones resting along the shoulders as a therapist massages the upper back",
    width: 900,
    height: 506,
  },

  article: {
    label: "For Long Days Standing",
    titleLead: "On Your Feet All Day?",
    titleEm: "What Actually Helps",
    standfirst:
      "Standing and walking for ten hours wears the body differently from sitting at a desk: the feet, calves and lower back take the load. Here's how to choose a treatment for that, and what you can do between visits.",
    sections: [
      {
        heading: "Feet first, or the whole leg?",
        paras: [
          "If the soles of your feet are what hurt at the end of the day, start with [Reflexology](/services/): an hour of pressure-point work on the feet and hands. For a shorter visit, the Foot Ritual & Soak at ₹1,200 gets a soak, a scrub and reflexology into thirty minutes.",
          "When the ache climbs into the calves and the backs of the thighs, a foot treatment alone won't reach it. A Sports & Recovery Massage works through the calves, hamstrings and lower back with trigger-point release and stretching. Tell the therapist during the consultation that standing, not exercise, is the cause, so they can pace the pressure.",
        ],
      },
      {
        heading: "When the lower back joins in",
        paras: [
          "Long hours on hard floors often end in a dull lower-back ache by evening. A 90-minute [Deep Tissue — Extended](/pricing/) booking leaves room to treat the back and legs in one go, rather than choosing between them.",
          "If you'd rather have warmth than firm pressure, try the 45-minute Banya Express: a shortened heat and venik cycle that loosens tired muscles quickly. Drink water before and after, and rest for a few minutes before travelling back.",
        ],
      },
      {
        heading: "Between visits",
        paras: [
          "Shoes matter more than anything a spa can do: cushioned soles, and a change of footwear partway through the day, reduce the load on your feet. Raising your legs for ten minutes after work and a few gentle calf stretches help too.",
          "When you book, ask for a late slot if that suits you; we're open all night at the same rate. Directions are on our [contact page](/contact/), the city-wide overview is on our [spa in Delhi](/spa-in-delhi/) page, and the [about page](/about/) introduces the team.",
        ],
      },
    ],
    takeaways: [
      "Sore soles: reflexology, or the 30-minute Foot Ritual & Soak.",
      "Aching calves and thighs: a Sports & Recovery Massage reaches what a foot treatment can't.",
      "Back and legs together: book 90 minutes of deep tissue.",
      "Good shoes and ten minutes with your legs raised help between visits.",
    ],
  },

  faqs: [
    {
      q: "Is there a Mahipalpur Luxury Spa in Karol Bagh?",
      a: "No. Our only premises is at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037, about 25 minutes from Karol Bagh by road outside peak hours.",
    },
    {
      q: "How do I get there from Karol Bagh by metro?",
      a: "Take the Blue Line to Rajiv Chowk, the Yellow Line one stop to New Delhi, then the Airport Express to Aerocity. From Aerocity it's about five minutes by auto.",
    },
    {
      q: "Are you open after the market closes?",
      a: "Yes, 24 hours a day, every day. There's no night surcharge, so a late session costs the same as a daytime one.",
    },
    {
      q: "Which treatment is best for tired feet and legs?",
      a: "Reflexology (60 minutes, ₹2,200) for the feet, the Foot Ritual & Soak (30 minutes, ₹1,200) for a shorter visit, and the Sports & Recovery Massage (90 minutes, ₹3,600) when the calves and lower back ache too.",
    },
    {
      q: "Do you offer a discount for senior citizens?",
      a: "Yes. Senior citizens and healthcare workers get 10% off at any time on showing valid ID.",
    },
    {
      q: "What should I bring?",
      a: "Nothing. Towels, a robe, slippers, a locker and a shower are all provided.",
    },
    {
      q: "Is parking free if I drive?",
      a: "Yes. On-site parking costs nothing, and you can stay parked for your whole visit.",
    },
  ],

  geo: { lat: 28.6519, lng: 77.1909 },

  seo: {
    title: "Best Spa & Body Massage near Karol Bagh | Mahipalpur Luxury Spa",
    description:
      "Reflexology, foot rituals and body massage for long days on your feet, about 25 min from Karol Bagh. Open 24/7 in Mahipalpur, no night surcharge.",
    ogTitle: "Spa near Karol Bagh | Open After The Market Closes",
    ogDescription:
      "For feet, legs and backs that have stood all day: reflexology, foot soaks and recovery massage, open all night. One Mahipalpur spa, about 25 minutes from Karol Bagh.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Karol Bagh, open 24 hours",
  },
};
