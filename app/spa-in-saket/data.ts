import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-saket";

/**
 * Saket's angle is the workday: District Centre and mall-side office staff
 * with screen-heavy weeks, and how to choose the right massage for that.
 * The spa is in Mahipalpur; this page serves Saket from there.
 */
export const SAKET: LocationContent = {
  path: "/spa-in-saket/",
  areaName: "Saket",
  breadcrumb: "Spa in Saket",

  heroImage: `${A}/spa-near-saket-swedish-back-massage.jpg`,
  heroImageAlt: "Therapist's hands working along the upper back during a Swedish massage at a spa near Saket",
  heroBadge: "22–25 Minutes From Saket",
  h1: { lead: "Best Spa & Body Massage Near", em: "Saket" },
  heroText: [
    "If you're searching for a spa in Saket, here's how we fit: we're a single spa in Mahipalpur, at Defence Enclave, a 22–25 minute drive west of Saket outside rush hour. We don't have a branch in Saket.",
    "If your back and neck have spent all week at a screen, this page will help you pick the right kind of massage for it, and we're open whenever your workday ends, at one published rate.",
  ],
  heroStats: [
    { value: "22–25 min", label: "From Saket" },
    { value: "₹1,400", label: "30-Min Neck Express" },
    { value: "24/7", label: "Open After Work" },
    { value: "15%", label: "Off Your First Visit" },
  ],

  intro: {
    label: "For The Saket Workday",
    titleLead: "Desk Tension,",
    titleEm: "Treated Properly",
    paras: [
      "Saket's District Centre and the offices around the malls keep a lot of people at a desk for long hours. The result is familiar: a stiff neck, shoulders creeping up towards the ears, a dull ache low in the back by Thursday. A relaxing hour helps for an evening; the right kind of massage helps for longer.",
      "Before anything starts, you and the therapist talk through where it hurts and how firm you'd like the pressure. For layered, stubborn tightness that usually means deep tissue. If you feel stiff and immobile as much as sore, Thai massage and its assisted stretching often suit better. And on an evening when you simply need to switch off, Swedish is the right call. The guide further down explains how to decide.",
      "We're 22–25 minutes from Saket by road outside peak hours, open around the clock, and the rate never changes with the time of day. If you can get away in the morning, 60-minute massages are 10% off from Monday to Thursday between 8 AM and noon.",
    ],
  },

  introImage: {
    src: `${A}/forehead-and-temple-massage.jpg`,
    alt: "Therapist pressing gently on a guest's forehead and temples to ease tension",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "briefcase",
      title: "After-Work Friendly",
      desc: "Open 24/7, so a session at 9 or 10 PM after a long day is completely normal here.",
    },
    {
      icon: "clock",
      title: "A 30-Minute Option",
      desc: "The Head, Neck & Shoulder Express targets screen fatigue in half an hour.",
    },
    {
      icon: "wallet",
      title: "Weekday Morning Rate",
      desc: "10% off 60-minute massages, Monday to Thursday, 8 AM to 12 PM.",
    },
    {
      icon: "shield",
      title: "Private Rooms Only",
      desc: "Every treatment happens in a fully private room, never behind a curtain partition.",
    },
  ],

  treatmentsHead: {
    eyebrow: "For Desk-Bound Backs",
    titleLead: "Massages That Suit",
    titleEm: "A Screen-Heavy Week",
    lede: "For neck, shoulder and back tension, these are the rate-card treatments worth considering, from a 30-minute express to a 90-minute session. Prices are identical to the full price list, taxes included.",
  },

  treatments: [
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Full postural work from the shoulders through the lower back, with time to reach layers a 60-minute session can only start on. Book it when the ache has been there for weeks.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "hand",
      name: "Thai Massage",
      desc: "Oil-free acupressure combined with assisted stretching. Suits people who feel stiff and locked up as much as sore, and you leave more alert than drowsy.",
      duration: "75 min",
      price: "₹3,200",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "Half an hour on the neck, shoulders and scalp for screen fatigue and tension headaches. Easy to fit into a weekday evening.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "waves",
      name: "Swedish Massage — Extended",
      desc: "The classic medium-pressure relaxation massage, with extra time on the back and legs. Right for a Friday when you need to switch off rather than be worked on.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "stone",
      name: "Hot Stone Therapy",
      desc: "Warm basalt stones laid along the spine and worked into tight muscle. The heat lets the therapist reach deep tension with less pressure, useful if firm work feels like too much.",
      duration: "75 min",
      price: "₹3,600",
    },
    {
      icon: "leaf",
      name: "Herbal Compress Add-On",
      desc: "Steamed herbal poultices pressed into the tightest spots during your massage. Most useful alongside deep tissue; request it at booking.",
      duration: "+20 min",
      price: "₹900",
    },
  ],

  nearby: [
    { name: "Select Citywalk & DLF Avenue", distance: "22–25 min", note: "West through Mehrauli" },
    { name: "Saket District Centre", distance: "22–25 min", note: "Leave before the 6 PM traffic builds" },
    { name: "Max Super Speciality Hospital, Saket", distance: "20–25 min", note: "Healthcare staff: 10% off with valid ID" },
    { name: "Saket Metro Station", distance: "22–28 min", note: "Metro route via Hauz Khas explained below" },
    { name: "Qutub Minar, Mehrauli", distance: "18–25 min", note: "On the way out towards Mahipalpur" },
    { name: "Malviya Nagar & Sheikh Sarai", distance: "25–30 min", note: "Same route through Saket" },
  ],

  nearbyImage: {
    src: `${A}/hot-stones-along-the-back.jpg`,
    alt: "Smooth black basalt stones resting on a guest's back as a therapist's hand works beside them",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By car",
      desc: "Head west through Mehrauli and follow the Mehrauli–Mahipalpur Road past Vasant Kunj towards Mahipalpur. Parking on site is free and has no time limit.",
    },
    {
      icon: "metro",
      title: "By metro, then a short ride",
      desc: "Take the Yellow Line to Hauz Khas, change to the Magenta Line for Terminal 1-IGI Airport, then an 8–10 minute cab or auto to Defence Enclave, Mahipalpur.",
    },
    {
      icon: "mapPin",
      title: "By app cab from the office",
      desc: "Drop point: Defence Enclave, Mahipalpur, New Delhi 110037. Phone us when you're a few minutes out and we'll direct the driver to our gate.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "22–25 Minutes From Saket" },

  nearbyAreas: ["South Delhi", "Vasant Kunj", "Delhi"],

  articleImage: {
    src: `${A}/choosing-a-massage-upper-back-work.jpg`,
    alt: "Black-and-white photo of a therapist using clasped hands on a guest's upper back",
    width: 900,
    height: 506,
  },

  article: {
    label: "A Practical Guide",
    titleLead: "Deep Tissue, Swedish Or Thai?",
    titleEm: "Choosing For Desk Tension",
    standfirst:
      "Most people pick a massage by its name and hope for the best. If the reason you're booking is a week at a desk in Saket, a few plain questions will tell you which one to choose, and which to skip.",
    sections: [
      {
        heading: "Sore, stiff or simply tired?",
        paras: [
          "Start with how it feels. If there's a specific ache that keeps coming back in the same place, such as the top of the shoulders or one side of the lower back, that's layered muscle tension, and [Deep Tissue Massage](/services/) is built for it: slow, firm pressure worked in gradually rather than forced.",
          "If you feel stiff more than sore, unable to turn your head fully or locked through the hips after sitting, Thai massage is often the better match, because the assisted stretching moves joints as well as muscle. And if nothing in particular hurts but you're drained, a Swedish massage at medium pressure does what you need: it helps you switch off.",
        ],
      },
      {
        heading: "How long to book",
        paras: [
          "Sixty minutes covers one or two problem areas. If the tension runs from the neck down to the lower back, book 90: a [Deep Tissue — Extended](/pricing/) session gives the therapist time to work the whole chain instead of hurrying between areas. Your full booked time is spent on the table; changing and the consultation don't count against it.",
          "When you only have half an hour, the Head, Neck & Shoulder Express at ₹1,400 is the honest option. It's a focused session, not a shortened full-body massage, so it won't fix a lower back, but it's the right tool for a screen headache.",
        ],
      },
      {
        heading: "Getting more out of each session",
        paras: [
          "Speak up during the session if the pressure is too much or too little; firm work should feel productive, not painful. Drink water afterwards, and expect some tenderness the next day after a first deep tissue session. Your therapist will give you simple aftercare notes for the following 24 hours.",
          "Desk tension returns if the desk doesn't change, so shorter sessions every few weeks may help more than one long one a year. If that's your plan, look at the membership on the price list. Directions and booking are on our [contact page](/contact/); coming from Hauz Khas or Green Park instead? See our [South Delhi page](/spa-in-south-delhi/). The [about page](/about/) explains who our therapists are.",
        ],
      },
    ],
    takeaways: [
      "A specific, recurring ache: deep tissue. Stiff and immobile: Thai. Simply drained: Swedish.",
      "Book 90 minutes when the tension runs from the neck to the lower back.",
      "The 30-minute express is for the neck and shoulders only, and it's honest about that.",
      "Speak up if the pressure is wrong; firm should never mean painful.",
    ],
  },

  faqs: [
    {
      q: "Is there a Mahipalpur Luxury Spa in Saket?",
      a: "No. We have one premises, at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. It's 22–25 minutes from Saket by road outside peak hours.",
    },
    {
      q: "How do I get to you from Saket?",
      a: "By car or cab, head west through Mehrauli on the Mehrauli–Mahipalpur Road. By metro, take the Yellow Line to Hauz Khas, change to the Magenta Line for Terminal 1-IGI Airport, then take a short cab or auto. Phone us and we'll guide you to the gate.",
    },
    {
      q: "Which massage is best for back and neck pain from desk work?",
      a: "For a specific, recurring ache, Deep Tissue Massage (₹3,400 for 60 minutes, ₹4,400 for 90). For stiffness, Thai Massage (₹3,200 for 75 minutes). Your therapist confirms the choice during a short consultation before starting.",
    },
    {
      q: "Can I come after work, late in the evening?",
      a: "Yes. The doors never close, and the price doesn't change after dark: a 10 PM booking costs what a 10 AM one does.",
    },
    {
      q: "Is there a short option if I only have half an hour?",
      a: "The Head, Neck & Shoulder Express runs for 30 minutes at ₹1,400, focused on screen fatigue and tension headaches.",
    },
    {
      q: "Are there any discounts?",
      a: "First-time guests save 15% on any one treatment. From Monday to Thursday between 8 AM and 12 PM, 60-minute massages are 10% off. The two offers can't be combined.",
    },
    {
      q: "Do you have parking?",
      a: "Yes. Every guest gets free parking on site, and there's no clock running on it.",
    },
  ],

  geo: { lat: 28.5245, lng: 77.2066 },

  seo: {
    title: "Best Spa & Body Massage near Saket | Mahipalpur Luxury Spa",
    description:
      "Deep tissue, Thai and Swedish massage for desk-work tension, 22–25 min from Saket. Open 24/7, free parking, one published rate card, in Mahipalpur.",
    ogTitle: "Spa near Saket | Massage For Desk Tension, Open 24/7",
    ogDescription:
      "Not sure whether you need deep tissue, Thai or Swedish? Our guide explains, and we're open after every workday, 22–25 minutes from Saket.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Saket, open 24 hours",
  },
};
