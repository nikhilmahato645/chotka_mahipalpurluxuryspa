import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-aerocity";

/**
 * Aerocity's angle is the hotel district next door: guests arriving late,
 * people between flights, and offices around Worldmark.
 * All copy here is written for this site only. Treatments match rows in
 * app/pricing/data.ts exactly (name, duration, price).
 */
export const AEROCITY: LocationContent = {
  path: "/spa-in-aerocity/",
  areaName: "Aerocity",
  breadcrumb: "Body Massage & Spa in Aerocity",

  heroImage: `${A}/hero-spa-aerocity.jpg`,
  heroImageAlt: "Body massage and spa for Aerocity guests at Mahipalpur Luxury Spa, open 24 hours",
  heroBadge: "5 Min From The Aerocity Hotels · Open 24/7",
  h1: { lead: "Best Body Massage & Spa in", em: "Aerocity" },
  heroText: [
    "Staying in Aerocity and want a proper body massage, not a rushed one squeezed in before the hotel spa shuts for the night? Our spa sits just across NH-8 at Defence Enclave, Mahipalpur, and the doors never close — not at midnight, not at 4 AM.",
    "Every treatment room is private, every therapist is certified, and the rate card is the same at 3 AM as at 3 PM. Most Aerocity hotels are a five-minute cab or auto ride away.",
  ],
  heroStats: [
    { value: "5 min", label: "From Aerocity Hotels" },
    { value: "24/7", label: "No Closing Time" },
    { value: "₹0", label: "Late-Night Extra" },
    { value: "₹2,400", label: "45-Min Layover Session" },
  ],

  intro: {
    label: "Why Aerocity Books With Us",
    titleLead: "Body Massage For Guests",
    titleEm: "On Hotel Time",
    paras: [
      "Aerocity is a neighbourhood of hotels, offices and people in transit, and very few of them keep normal hours. Someone lands at midnight, someone else has a conference that runs late, a third person has five hours to kill before a connection. A spa that closes at nine is no use to any of them. That is the gap we fill.",
      "When you book from Aerocity, tell us two things: when you can arrive, and when you need to be somewhere next. We plan the body massage around both, so the session is never cut short and you are never left waiting in reception. If you only have an hour, we will say so honestly and suggest something that fits.",
      "For teams working out of the Worldmark offices or the hotel conference floors, we arrange group visits and on-site chair massage, with invoices and GST paperwork for the company. The corporate options are listed on our pricing page.",
    ],
  },

  introImage: {
    src: `${A}/traveller-recovery.jpg`,
    alt: "Hot stone body massage for a guest staying in Aerocity",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "car",
      title: "A Short Ride Over NH-8",
      desc: "About five minutes from the hotel entrances to our gate at Defence Enclave, with free parking if you drive yourself.",
    },
    {
      icon: "moon",
      title: "Open Through The Night",
      desc: "Hotel spas usually stop taking guests by 8 or 9 PM. We take bookings at every hour, every day.",
    },
    {
      icon: "briefcase",
      title: "Company Billing",
      desc: "Group visits and on-site chair massage for Aerocity offices, invoiced with GST documents.",
    },
    {
      icon: "clock",
      title: "Planned Around Your Flight",
      desc: "Share your departure time when you book and the session is timed to get you back with room to spare.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Good Choices From Aerocity",
    titleLead: "Body Massages That Suit",
    titleEm: "A Hotel Stay",
    lede: "Six body massage and spa treatments from our regular rate card that work well around travel, late arrivals and long working days. The prices are the published ones, taxes included.",
  },

  treatments: [
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Trigger-point work and stretching for legs and a back that have been folded into a plane seat or a conference chair all day.",
      duration: "90 min",
      price: "₹3,600",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Firm, focused pressure on the shoulders and lower back. A good pick if your stay is mostly meetings and laptop work.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "flower",
      name: "Aromatherapy Massage",
      desc: "Slow strokes with an oil blend chosen after a short chat with your therapist. Many guests book it late to help them sleep on a new time zone.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Pressure-point work on the feet and hands, welcome after a long flight or a day of walking between terminals and meeting rooms.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "clock",
      name: "Airport Layover Express",
      desc: "A short massage, a shower and a drink inside 45 minutes. A boarding pass dated within 12 hours gets the reduced layover rate.",
      duration: "45 min",
      price: "₹2,400",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Our Russian spa ritual: steam, a birch venik, a cold plunge and rest. Worth it when you have a longer gap rather than a quick hour.",
      duration: "90 min",
      price: "₹3,500",
    },
  ],

  nearby: [
    { name: "JW Marriott Aerocity", distance: "5 min", note: "Cross NH-8 to Defence Enclave" },
    { name: "Pullman New Delhi Aerocity", distance: "5 min", note: "Via the NH-8 service road" },
    { name: "Andaz Delhi", distance: "5 min", note: "The front desk can call us to book" },
    { name: "Roseate House", distance: "6 min", note: "Easy by cab, day or night" },
    { name: "Holiday Inn Aerocity", distance: "5 min", note: "Handy for group visits" },
    { name: "Aloft Aerocity", distance: "5 min", note: "Past the Worldmark buildings" },
    { name: "Worldmark 1, 2 & 3", distance: "6 min", note: "Chair massage can come to your office" },
    { name: "Aerocity Metro Station", distance: "5 min", note: "Airport Express Line, then a short auto" },
    { name: "IGI Terminal 3", distance: "10–12 min", note: "Direct by cab from arrivals" },
  ],

  nearbyImage: {
    src: `${A}/aerocity-treatments.jpg`,
    alt: "Head massage at our spa near the Aerocity hotels",
    width: 800,
    height: 534,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By cab or hotel car",
      desc: "Tell the driver Defence Enclave, Mahipalpur. It is on the other side of NH-8 from the hotels, about five minutes away, or a few minutes more if the flyover is busy.",
    },
    {
      icon: "metro",
      title: "By Airport Express",
      desc: "Get off at Aerocity station and take an auto across the highway to Defence Enclave. It often beats a cab during peak traffic.",
    },
    {
      icon: "mapPin",
      title: "By auto-rickshaw",
      desc: "Autos wait near the hotels around the clock. Give us a call once you set off and we will direct the driver to our gate.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Find Us", em: "Across NH-8 From Aerocity" },

  articleImage: {
    src: `${A}/flight-guide.jpg`,
    alt: "Herbal spa treatment for a guest after a long flight into Delhi",
    width: 1000,
    height: 562,
  },

  article: {
    label: "Planning Your Visit",
    titleLead: "Booking A Body Massage",
    titleEm: "During An Aerocity Stay",
    standfirst:
      "Whether you have one free hour or a whole night between flights, a little planning gets you more out of the visit. Here is how guests staying in Aerocity usually choose.",
    sections: [
      {
        heading: "Just landed: what your body needs first",
        paras: [
          "After a long flight the common complaints are a stiff lower back, tight hips, heavy legs and a head that will not settle. A full body massage that spends time on the back and hips, with lighter work on the legs, deals with most of that. A [Deep Tissue Massage](/services/) suits guests who carry tension in the shoulders; a [Sports & Recovery Massage](/services/) suits those whose legs feel worst.",
          "Tell your therapist what comes next. If you are heading to a meeting, the session can end on a brisker note so you leave alert. If you are going to bed, they will keep it slow and warm so sleep comes easily.",
        ],
      },
      {
        heading: "How much time you have decides what to book",
        paras: [
          "With an hour or less, the 45-minute Airport Layover Express (₹2,400) covers a short massage and a shower. If you have two to four hours, a body massage of an hour or an hour and a half still leaves time to shower and get back calmly. With five hours or more, the Russian Banya with venik (₹3,500) is worth adding, because the steam and cold plunge cycle loosens up a travel-stiff body in a way a massage alone does not.",
          "Late-night bookings cost the same as daytime ones; there is no night surcharge and no extra charge for coming from a hotel. Every rate is on our [price list](/pricing/).",
        ],
      },
      {
        heading: "Getting here and booking ahead",
        paras: [
          "Hotel cabs and autos all know Defence Enclave in Mahipalpur. Call or WhatsApp as you set off and we will direct your driver to our gate. Our [contact page](/contact/) has the full address and a map.",
          "If you have a flight to catch, mention the departure time when you book, not when you arrive. That lets us hold a therapist for you and tell you straight away if the treatment you want will not fit. For office group bookings with invoices, message us through the contact page; to learn more about who runs the spa, see the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "One hour or less: book the 45-minute Layover Express. Five hours or more: add the Russian Banya.",
      "Heading to work or to sleep next? Say so, and your therapist ends the session to suit.",
      "About five minutes from the Aerocity hotels by cab or auto, with free parking if you drive.",
      "Give your departure time when you book so the session fits your schedule.",
    ],
  },

  faqs: [
    {
      q: "Is there a body massage spa in Aerocity open after midnight?",
      a: "Most hotel spas in Aerocity stop taking guests by 8 or 9 PM. Our spa, Mahipalpur Luxury Spa, is roughly five minutes from the hotels at Defence Enclave in Mahipalpur. We never close, and night prices match day prices.",
    },
    {
      q: "What is the quickest way to reach you from an Aerocity hotel?",
      a: "A hotel cab or an auto-rickshaw. Ask for Defence Enclave, Mahipalpur, across NH-8 — it takes about five minutes. Call us when you set off and we will direct the driver to our gate.",
    },
    {
      q: "Is your spa inside Aerocity?",
      a: "No. We have one spa, at Office No. 118, Defence Enclave, Mahipalpur, just across the highway from the Aerocity hotels. Keeping a single premises means the same therapists, hygiene standards and prices for every guest.",
    },
    {
      q: "Which body massage is best after a long flight?",
      a: "For a stiff back and shoulders, a 60-minute Deep Tissue Massage (₹3,400). For heavy, aching legs, the 90-minute Sports & Recovery Massage (₹3,600). If you are short on time, the 45-minute Airport Layover Express (₹2,400) includes a shower.",
    },
    {
      q: "Can my company book a group visit or chair massage at the office?",
      a: "Yes. We arrange group visits and on-site chair massage for Aerocity offices and conference venues, with invoicing and GST documents for the company. Send us the headcount, date and time window to get a quote.",
    },
    {
      q: "I fly out in three hours. Can I still fit in a massage?",
      a: "Usually, yes. Tell us your departure time when you book. A 45- or 60-minute treatment plus a shower normally leaves enough time to get back to the airport, and we will tell you upfront if something will not fit.",
    },
    {
      q: "Do late-night appointments cost more?",
      a: "No. Night and day rates are identical, and coming from a hotel adds nothing to the bill. A 2 AM booking costs the same as one at 2 PM.",
    },
  ],

  geo: { lat: 28.5535, lng: 77.12 },

  seo: {
    title: "Best Body Massage & Spa in Aerocity | Mahipalpur Luxury Spa",
    description:
      "Best body massage and spa for Aerocity, five minutes across NH-8 from the hotels. Open 24 hours, Russian spa with Banya, and no night surcharge.",
    ogTitle: "Body Massage & Spa in Aerocity | Open 24 Hours, 5 Min Away",
    ogDescription:
      "Hotel spas close by 9 PM; we stay open. Body massage and spa five minutes from the Aerocity hotels, plus a Russian spa with Banya. Open 24/7.",
    ogImageAlt: "Mahipalpur Luxury Spa — body massage and spa serving Aerocity, open 24 hours",
  },
};
