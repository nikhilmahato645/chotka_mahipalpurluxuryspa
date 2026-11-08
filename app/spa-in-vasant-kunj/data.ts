import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-vasant-kunj";

/**
 * Vasant Kunj's angle is residential: desk-work backs, healthcare staff on
 * shifts at the area's two big hospitals, and unhurried weekend visits.
 * The spa is in Mahipalpur; this page serves Vasant Kunj from there.
 * Travel times match the drive-time tables on the home and contact pages.
 */
export const VASANT_KUNJ: LocationContent = {
  path: "/spa-in-vasant-kunj/",
  areaName: "Vasant Kunj",
  breadcrumb: "Spa in Vasant Kunj",

  heroImage: `${A}/spa-near-vasant-kunj-neck-shoulder-massage.jpg`,
  heroImageAlt:
    "Therapist working out neck and shoulder tension during a deep tissue body massage, at a spa near Vasant Kunj",
  heroBadge: "12–15 Minutes From Vasant Kunj",
  h1: { lead: "Best Spa & Body Massage Near", em: "Vasant Kunj" },
  heroText: [
    "If you have been searching for a spa in Vasant Kunj, here is exactly where we are: one premises at Defence Enclave, Mahipalpur, a 12–15 minute drive from the Vasant Kunj sectors along Vasant Kunj Road. We have no branch inside Vasant Kunj, and we will not pretend otherwise.",
    "What the short drive gets you: body massage and an authentic Russian Banya at any hour, one published rate whether you come at 3 PM or 3 AM, free parking with no time limit, and 10% off for healthcare workers and senior citizens.",
  ],
  heroStats: [
    { value: "12–15 min", label: "From Vasant Kunj" },
    { value: "24/7", label: "Every Day Of The Year" },
    { value: "Free", label: "On-Site Parking" },
    { value: "10%", label: "Off For Healthcare Staff" },
  ],

  intro: {
    label: "Why Vasant Kunj Guests Make The Drive",
    titleLead: "Built Around",
    titleEm: "Desks, Shifts & Weekends",
    paras: [
      "Vasant Kunj is mostly homes: the residential pockets of Sectors A to D, Kishangarh, and the lanes behind the malls on Nelson Mandela Marg. When people from there look for a body massage near Vasant Kunj, they usually want one of three things, and the page below is organised around them.",
      "The first is a back that has spent too long at a desk, often a dining-table desk at home. That calls for targeted work rather than a generic hour of relaxation: a Deep Tissue Massage through the shoulders and lower back, or the thirty-minute Head, Neck & Shoulder Express when the problem is screen fatigue and a headache that will not lift. Every session starts with a short consultation, so the therapist knows where it hurts before they begin.",
      "The second is recovery after a long shift. Fortis Hospital and the Indian Spinal Injuries Centre both sit in Vasant Kunj, and a shift that ends at 2 AM is no reason to wait until the weekend; we are open around the clock, and healthcare workers get 10% off with valid ID. The third is simply time off together, which is why couples bookings and a Wellness Membership that family members can share are part of the plan.",
    ],
  },

  introImage: {
    src: `${A}/deep-tissue-upper-back-massage.jpg`,
    alt: "Therapist using clasped hands to release tension in the upper back during a deep tissue massage",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "moon",
      title: "Open After Any Shift",
      desc: "Open 24 hours, every day. A session at 3 AM costs exactly what it costs in the afternoon.",
    },
    {
      icon: "wallet",
      title: "10% Off With Valid ID",
      desc: "A standing discount for healthcare workers and senior citizens, any day and any hour.",
    },
    {
      icon: "car",
      title: "Free Parking, No Clock",
      desc: "Drive over from Vasant Kunj and park on site for free, with no time limit during your visit.",
    },
    {
      icon: "users",
      title: "Shared Family Membership",
      desc: "Five 60-minute massages for ₹11,900, valid six months, and sessions can pass to family members.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Matched To Vasant Kunj Routines",
    titleLead: "Treatments Worth",
    titleEm: "The Short Drive",
    lede: "Six options from our standard rate card, chosen for the needs above: desk-work tension, tired feet after a shift, a first Russian Banya near Vasant Kunj, and unhurried weekend time. Prices match the full price list, with taxes included.",
  },

  treatments: [
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Firm, layered work through the shoulders and lower back, the places a home desk setup or a long commute leaves tight. Pressure is built up gradually, never forced.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Steam, a birch-leaf venik treatment, a cold plunge and rest, repeated in rounds. Never tried one? The step-by-step guide further down this page explains each stage.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Pressure-point therapy for the feet and hands. A practical choice when your shift has kept you standing for most of the day.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty focused minutes for screen fatigue and tension headaches. Short enough to fit into an evening without rearranging it.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "Long, even strokes at medium pressure. The easiest place to start if this is your first massage, or if you simply want to switch off after a long week.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists side by side in a private suite, with Banya access included. Popular for anniversaries; book at least 24 hours ahead.",
      duration: "120 min",
      price: "₹7,500",
    },
  ],

  nearby: [
    { name: "Vasant Kunj Sectors A–D", distance: "12–15 min", note: "Via Vasant Kunj Road towards Mahipalpur" },
    { name: "Fortis Hospital, Vasant Kunj", distance: "12–18 min", note: "Healthcare staff: 10% off with ID, any hour" },
    { name: "Indian Spinal Injuries Centre", distance: "12–18 min", note: "Open whenever your shift finishes" },
    { name: "Vasant Square Mall", distance: "12–18 min", note: "Free parking on our side, no time limit" },
    { name: "DLF Promenade & DLF Emporio", distance: "15–20 min", note: "From the Nelson Mandela Marg mall stretch" },
    { name: "Ambience Mall, Vasant Kunj", distance: "15–20 min", note: "Same route as the other malls" },
    { name: "Kishangarh", distance: "15–20 min", note: "Phone ahead and we'll talk you to the gate" },
  ],

  nearbyImage: {
    src: `${A}/reflexology-foot-soak.jpg`,
    alt: "Feet resting in a warm foot soak with orchids floating on the water",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "In your own car",
      desc: "Head down Vasant Kunj Road towards Mahipalpur and set your map to Defence Enclave, Mahipalpur. On-site parking is free for as long as your session runs.",
    },
    {
      icon: "mapPin",
      title: "By app cab",
      desc: "Enter Defence Enclave, Mahipalpur, New Delhi 110037 as the drop point. Call us when the driver is close and we will direct them to the exact gate.",
    },
    {
      icon: "home",
      title: "By auto-rickshaw",
      desc: "Ask for Defence Enclave in Mahipalpur, on the NH-8 side. It is a short, simple run from the Vasant Kunj sectors, and we can talk the driver in over the phone.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "12–15 Minutes Away" },

  nearbyAreas: ["Saket", "South Delhi", "Aerocity", "Delhi"],

  articleImage: {
    src: `${A}/first-russian-banya-heat-room.jpg`,
    alt: "Wood-lined heat room with tiered benches and a basket of heated stones",
    width: 900,
    height: 506,
  },

  article: {
    label: "A First-Timer's Guide",
    titleLead: "Your First Russian Banya,",
    titleEm: "Step By Step",
    standfirst:
      "Plenty of people in Vasant Kunj have heard of the Russian Banya but never tried one, and are not sure what happens once the door closes. Here is the ninety-minute ritual explained plainly, so you know what you are booking before you drive over.",
    sections: [
      {
        heading: "Before you leave home",
        paras: [
          "Eat lightly an hour or two beforehand rather than arriving after a full meal, and drink a couple of glasses of water, because you will sweat more than you expect. You do not need to pack anything: towels, a robe, slippers and a locker are provided, and there is a shower before and after.",
          "Heat is not right for everyone. If you are pregnant, have a heart condition, or have high or low blood pressure, ask your doctor first and mention it when you call us. For a gentler start, standalone steam and sauna access is ₹1,000 for an hour, and the 45-minute Banya Express is ₹2,200; both are on the [price list](/pricing/).",
        ],
      },
      {
        heading: "What happens during the ninety minutes",
        paras: [
          "After a short consultation you go into the steam room, which runs at roughly 70–90°C, in short rounds rather than one long sitting. Between rounds you cool down and drink water. No one expects you to stay in longer than feels comfortable, and stepping out early is normal on a first visit.",
          "The venik is the part people ask about: a bundle of birch branches with the leaves on, soaked and warmed, which the therapist presses, fans and lightly taps along your body while you lie in the heat. It feels closer to a vigorous massage than anything harsh. A cold plunge follows, then a rest, and the cycle repeats. The full ritual is described on our [services page](/services/).",
        ],
      },
      {
        heading: "Afterwards, and the drive back to Vasant Kunj",
        paras: [
          "Give yourself fifteen to twenty minutes in the relaxation lounge with herbal tea before you get behind the wheel; heat can leave you light-headed and heavier than you expect for a while. If you would like a massage on the same visit, Banya + Swedish Massage covers both in 120 minutes for ₹5,500.",
          "Parking is free with no time limit, so there is no reason to hurry out. The address, phone number and directions are on our [contact page](/contact/), and if you are heading towards the airport side instead, our [spa in Aerocity](/spa-in-aerocity/) page covers that route. To learn who runs the spa before you come, start with the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "Eat light, drink water and bring nothing: towels, robe, slippers and a locker are provided.",
      "Pregnant, or living with a heart or blood-pressure condition? Check with your doctor before booking.",
      "Leave a steam round whenever you need to. Short rounds are normal the first time.",
      "Rest for fifteen to twenty minutes before you drive back to Vasant Kunj.",
    ],
  },

  faqs: [
    {
      q: "Is there a Mahipalpur Luxury Spa branch in Vasant Kunj?",
      a: "No. We have one premises, at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037, and we serve Vasant Kunj from there. It is a 12–15 minute drive outside peak hours.",
    },
    {
      q: "How long does it take to reach you from Vasant Kunj?",
      a: "Usually 12–15 minutes by car from the Vasant Kunj sectors, along Vasant Kunj Road towards Mahipalpur. Allow longer at evening rush hour or if you are starting from the malls on Nelson Mandela Marg. Call when you set off and we will guide you to the gate.",
    },
    {
      q: "Is parking available if I drive over?",
      a: "Yes. On-site parking is free for every guest, day or night, with no time limit while you are with us.",
    },
    {
      q: "Is there a massage centre near Vasant Kunj that is open late at night?",
      a: "We are open 24 hours, every day of the year, so a session after a late shift or in the early hours is no problem. There is no night surcharge; the rate is the same at any hour.",
    },
    {
      q: "Do healthcare workers and senior citizens get a discount?",
      a: "Yes. Healthcare workers and senior citizens get a standing 10% off, any day and any hour, on showing valid ID. First-time guests also save 15% on a single treatment. Tell us which applies when you book.",
    },
    {
      q: "How much does a body massage cost?",
      a: "A 60-minute Swedish Massage is ₹2,800 and a 60-minute Deep Tissue Massage is ₹3,400. Every published price is final, with taxes included and nothing added at the counter.",
    },
    {
      q: "Can my partner and I book together?",
      a: "Yes. The Couples Spa Suite is a private suite with two therapists working side by side and Banya access, for 120 minutes at ₹7,500. Book at least 24 hours ahead to be sure of a slot.",
    },
    {
      q: "Can family members share a membership?",
      a: "Yes. The Wellness Membership covers five 60-minute massages for ₹11,900, valid for six months, and sessions can be transferred to family members.",
    },
  ],

  geo: { lat: 28.5245, lng: 77.1555 },

  seo: {
    title: "Best Spa & Body Massage near Vasant Kunj | Mahipalpur Luxury Spa",
    description:
      "Open 24/7, a 12–15 min drive from Vasant Kunj. Body massage and Russian Banya in Mahipalpur, with free parking and 10% off for healthcare staff.",
    ogTitle: "Spa near Vasant Kunj | Open 24 Hours, 12–15 Minutes Away",
    ogDescription:
      "Deep tissue for desk-work backs, a first Russian Banya explained step by step, and 10% off for healthcare workers. One Mahipalpur spa, 12–15 minutes from Vasant Kunj.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Vasant Kunj, open 24 hours",
  },
};
