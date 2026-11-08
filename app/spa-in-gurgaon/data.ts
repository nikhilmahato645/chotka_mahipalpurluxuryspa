import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-gurgaon";

/**
 * Gurgaon's angle is the long working week and the team booking: Gurugram
 * professionals on NH-8, gym and running recovery, and group sessions with
 * GST invoicing. The spa is in Mahipalpur; this page serves Gurgaon from there.
 */
export const GURGAON: LocationContent = {
  path: "/spa-in-gurgaon/",
  areaName: "Gurgaon",
  breadcrumb: "Spa in Gurgaon",

  heroImage: `${A}/spa-near-gurgaon-warm-oil-massage.jpg`,
  heroImageAlt:
    "Warm massage oil poured into a therapist's palm beside a guest lying face down, at a spa near Gurgaon",
  heroBadge: "Around 20 Minutes From Gurugram Via NH-8",
  h1: { lead: "Best Spa & Body Massage Near", em: "Gurgaon" },
  heroText: [
    "Looking for a spa in Gurgaon that's open at any hour and bills properly for company bookings? We're at Defence Enclave, Mahipalpur, on the Delhi stretch of NH-8, around 20 minutes from Gurugram outside peak traffic. We run one premises and have no branch in Gurgaon.",
    "For individuals, there's deep tissue and sports recovery after a long week. For teams, there are group sessions with invoiced billing and full GST documentation. Either way, the rate is the same at 3 PM or 3 AM, and parking is free.",
  ],
  heroStats: [
    { value: "~20 min", label: "From Gurugram Via NH-8" },
    { value: "6+", label: "Guests For Group Rates" },
    { value: "GST", label: "Invoices For Companies" },
    { value: "24/7", label: "One Rate, Any Hour" },
  ],

  intro: {
    label: "Why Gurgaon Guests Head Up NH-8",
    titleLead: "Long Weeks,",
    titleEm: "Short Drive",
    paras: [
      "Gurugram works long hours: Cyber City, Udyog Vihar and Golf Course Road offices, with a commute on NH-8 at each end. If that's your week, the hard part of booking a body massage in Gurgaon usually isn't the price; it's finding a slot that fits after 9 PM or before an early meeting.",
      "We sit on the Delhi side of the same highway, at Defence Enclave, Mahipalpur, and we're open around the clock. That makes us a practical stop on the way home or on the way to the airport: around 20 minutes from Gurugram off-peak, free parking, and no night surcharge whatever time you arrive.",
      "For companies, we handle group bookings with discounts from six guests, lunch-break express sessions, invoiced billing with GST documentation and a dedicated coordinator for scheduling. The guide below walks through how a team booking works, from the first message to the invoice.",
    ],
  },

  introImage: {
    src: `${A}/unwinding-at-sunrise-after-a-long-week.jpg`,
    alt: "Silhouette of a person meditating at sunrise on a wooden deck",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "briefcase",
      title: "GST-Ready Invoicing",
      desc: "Company bookings are invoiced with full GST documentation for expense claims.",
    },
    {
      icon: "users",
      title: "Group Rates From Six",
      desc: "Group discounts start at six guests and are quoted for your group's size.",
    },
    {
      icon: "dumbbell",
      title: "Sports Recovery",
      desc: "Trigger-point work and stretching for gym, running and weekend sport routines.",
    },
    {
      icon: "car",
      title: "Straight Off The Highway",
      desc: "Free on-site parking with no time limit, around 20 minutes from Gurugram off-peak.",
    },
  ],

  treatmentsHead: {
    eyebrow: "For Long Weeks And Teams",
    titleLead: "Treatments For",
    titleEm: "Gurgaon Schedules",
    lede: "Whether it's a demanding week, a training plan or a team outing, these menu treatments fit well. Each costs exactly what the price list says, taxes and all.",
  },

  treatments: [
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Deep tissue, trigger-point release and stretching in one session, for runners, gym regulars and weekend cricketers. Book it after a hard training block to help muscles recover.",
      duration: "90 min",
      price: "₹3,600",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Firm, layered pressure for the shoulders and lower back after a week of meetings and driving. The pressure is agreed in the consultation first.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "flame",
      name: "Banya + Swedish Massage",
      desc: "The Russian Banya heat ritual followed by a full-body massage. A complete evening's reset, and a good way to close a Friday.",
      duration: "120 min",
      price: "₹5,500",
    },
    {
      icon: "clock",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty minutes for laptop shoulders and tension headaches. A sensible format for groups who want short lunch-break sessions.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "waves",
      name: "Banya Express",
      desc: "A compressed version of the heat-and-venik ritual for busy days; enough to feel the Banya's effect when 90 minutes is out of reach.",
      duration: "45 min",
      price: "₹2,200",
    },
    {
      icon: "hand",
      name: "Thai Massage",
      desc: "Oil-free acupressure and assisted stretching. Leaves you loose and alert rather than sleepy, which helps if you're driving back to Gurugram.",
      duration: "75 min",
      price: "₹3,200",
    },
  ],

  nearby: [
    { name: "Ambience Mall, Gurugram", distance: "10–15 min", note: "Just off NH-8 near the Delhi border" },
    { name: "DLF CyberHub & Cyber City", distance: "15–20 min", note: "North on NH-8 towards Delhi" },
    { name: "Udyog Vihar", distance: "15–20 min", note: "Close to the highway, a short run" },
    { name: "IFFCO Chowk", distance: "15–25 min", note: "Peak-hour traffic can add time" },
    { name: "MG Road & Sector 29", distance: "20–25 min", note: "Via IFFCO Chowk and NH-8" },
    { name: "Golf Course Road", distance: "25–35 min", note: "Allow extra time in the evening" },
  ],

  nearbyImage: {
    src: `${A}/massage-oil-towels-and-tulips.jpg`,
    alt: "White pump bottle of massage oil with folded towels, a tealight and pink tulips",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "On NH-8",
      desc: "Drive north on NH-8 towards Delhi and exit for Mahipalpur, then set your map to Defence Enclave. Parking is free on site for as long as your session runs.",
    },
    {
      icon: "mapPin",
      title: "By app cab",
      desc: "Set the drop to Defence Enclave, Mahipalpur, New Delhi 110037. Ring us as you approach and we'll talk the driver through the last turn.",
    },
    {
      icon: "users",
      title: "For a group",
      desc: "Message us the headcount, a preferred date and how people are travelling. Our coordinator plans the schedule so treatments run smoothly.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "Just Off NH-8" },

  nearbyAreas: ["Aerocity", "Dwarka", "Delhi"],

  articleImage: {
    src: `${A}/herbal-tea-after-a-group-session.jpg`,
    alt: "Herbal tea in a clay cup beside a white teapot on a wooden tray",
    width: 1000,
    height: 562,
  },

  article: {
    label: "For Managers And HR Teams",
    titleLead: "Booking A Spa Session",
    titleEm: "For Your Team",
    standfirst:
      "Team offsites and thank-you days in Gurugram usually end at a restaurant. A group spa session is a quieter alternative, and simpler to organise than most people expect. Here's how it works with us, from first message to GST invoice.",
    sections: [
      {
        heading: "Before you message us",
        paras: [
          "Have three things ready: roughly how many people, a preferred date and time window, and a budget per person or in total. Group discounts begin at six guests and are quoted for your group's size, so the headcount matters more than anything else.",
          "Decide the format too. Short, focused sessions such as the 30-minute Head, Neck & Shoulder Express suit a lunch break or a working day, while longer bookings like [Banya + Swedish Massage](/services/) suit an evening or a reward day. Mixed groups work fine: each person can choose their own treatment from the [price list](/pricing/).",
        ],
      },
      {
        heading: "On the day",
        paras: [
          "Every guest has a short consultation before their treatment, in a private room, so injuries, pregnancy or pressure preferences can be mentioned privately rather than in front of colleagues. Treatments run side by side where rooms allow, and anyone waiting can use the relaxation lounge with herbal tea.",
          "Because we're open 24 hours, a group can come after office hours without paying a premium; the rate at 8 PM is the same as at noon. Free on-site parking helps if colleagues are driving up NH-8 separately.",
        ],
      },
      {
        heading: "Billing and paperwork",
        paras: [
          "Company bookings are invoiced with full GST documentation for expense claims, and one dedicated coordinator handles the scheduling. Anyone paying individually can use card, UPI or cash.",
          "To start, send the headcount and dates through our [contact page](/contact/) or WhatsApp. If some of your team work near the airport, the [spa in Aerocity](/spa-in-aerocity/) page covers on-site chair massage for offices there, and you can read about our team on the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "Group rates start at six guests; send the headcount, date and budget first.",
      "Short express sessions suit a working day; Banya plus massage suits an evening.",
      "Every guest gets a private consultation and a private room.",
      "Invoiced billing with full GST documentation, handled by one coordinator.",
    ],
  },

  faqs: [
    {
      q: "Do you have a spa in Gurgaon?",
      a: "No. We run one premises, at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037, on the Delhi side of NH-8. It's around 20 minutes from Gurugram outside peak traffic.",
    },
    {
      q: "How long does it take from Cyber City or Golf Course Road?",
      a: "About 15–20 minutes from Cyber City and 25–35 minutes from Golf Course Road off-peak. Evening rush hour on NH-8 can add a good deal more, so set off early or come later in the evening.",
    },
    {
      q: "Can you invoice my company with GST?",
      a: "Yes. Corporate and group bookings are invoiced with full GST documentation, and a coordinator handles the scheduling.",
    },
    {
      q: "Do you offer group discounts?",
      a: "Yes, from six guests upwards. The rate is quoted for your group size; send us the headcount and date.",
    },
    {
      q: "Are you open late at night?",
      a: "We're open 24 hours, every day, with no night surcharge. A booking at midnight costs the same as one at midday.",
    },
    {
      q: "Is there a massage for gym or running recovery?",
      a: "Yes. The Sports & Recovery Massage is 90 minutes for ₹3,600 and combines deep tissue, trigger-point release and stretching.",
    },
    {
      q: "Is parking free?",
      a: "Yes. There's free parking on site for every guest, without a time limit during your visit.",
    },
  ],

  geo: { lat: 28.4595, lng: 77.0266 },

  seo: {
    title: "Best Spa & Body Massage near Gurgaon | Mahipalpur Luxury Spa",
    description:
      "Around 20 min from Gurugram via NH-8. Body massage, sports recovery and Russian Banya, open 24/7, with group rates and GST invoices for companies.",
    ogTitle: "Spa near Gurgaon | Open 24/7, Group & GST Billing",
    ogDescription:
      "Deep tissue and sports recovery after long weeks, plus team bookings with GST invoices. One Mahipalpur spa, around 20 minutes from Gurugram via NH-8.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving Gurgaon, open 24 hours",
  },
};
