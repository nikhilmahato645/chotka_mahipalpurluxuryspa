import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-south-delhi";

/**
 * South Delhi's angle is the evening out: couples and friends from Hauz Khas,
 * Green Park, Malviya Nagar and Greater Kailash planning a spa evening.
 * The spa is in Mahipalpur; this page serves South Delhi from there.
 */
export const SOUTH_DELHI: LocationContent = {
  path: "/spa-in-south-delhi/",
  areaName: "South Delhi",
  breadcrumb: "Spa in South Delhi",

  heroImage: `${A}/spa-for-south-delhi-candlelit-treatment-room.jpg`,
  heroImageAlt:
    "Reed diffuser, lit candles and a rolled white towel set out before a session at a spa for South Delhi",
  heroBadge: "About 22–25 Minutes From Hauz Khas",
  h1: { lead: "Best Spa & Body Massage for", em: "South Delhi" },
  heroText: [
    "Most spa searches from South Delhi come down to one question: is it worth leaving the neighbourhood? Our answer: one spa, at Defence Enclave in Mahipalpur, roughly a 22–25 minute drive from Hauz Khas when the roads are clear. There's no branch in South Delhi itself.",
    "People make the trip for a spa evening that doesn't need watching the clock: a private couples suite, an authentic Russian Banya, published prices with taxes included, free parking, and doors that stay open all night.",
  ],
  heroStats: [
    { value: "22–25 min", label: "From Hauz Khas" },
    { value: "2", label: "Therapists Per Couples Suite" },
    { value: "₹7,500", label: "Couples Spa Suite" },
    { value: "24/7", label: "Same Rate, Any Hour" },
  ],

  intro: {
    label: "Why South Delhi Guests Come To Us",
    titleLead: "An Evening Out,",
    titleEm: "Not Just An Appointment",
    paras: [
      "South Delhi is where much of the city goes out: dinner in Hauz Khas Village, an evening walk in Green Park, a film at the Saket malls. A spa evening fits the same pattern, and it is the reason this page is written for two: two people, a free night, and a wish to spend it somewhere calm rather than another crowded restaurant.",
      "Our couples bookings are built for exactly that. The Couples Spa Suite puts two therapists in one private room, working side by side, with Banya access before or after. The Couples Banya Ritual adds a shared heat-and-venik session ahead of the massage. Both are priced in full on our rate card, so nothing at the end of the night comes as a surprise.",
      "The drive is the honest trade-off. From Hauz Khas, Green Park or Malviya Nagar it is roughly 22–30 minutes depending on traffic, and longer from Greater Kailash or Defence Colony. In return you get free parking with no time limit, a premises that never closes, and the same rate at midnight as at noon, so a booking after dinner costs nothing extra.",
    ],
  },

  introImage: {
    src: `${A}/hot-stone-massage-for-couples.jpg`,
    alt: "Hands placing warm black basalt stones along a guest's back, with white orchids beside the table",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "couple",
      title: "Private Couples Suites",
      desc: "Two therapists, one private room, in sync from start to finish. Give 24 hours' notice to guarantee it.",
    },
    {
      icon: "moon",
      title: "No Rush After Dinner",
      desc: "We never close, and a late booking carries no night surcharge.",
    },
    {
      icon: "car",
      title: "Park Once, Pay Nothing",
      desc: "Free on-site parking with no time limit, which matters on a two-hour visit.",
    },
    {
      icon: "wallet",
      title: "Every Price Published",
      desc: "Taxes are included in every rate. Nothing is added at the counter, and tipping is optional.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Good For Two",
    titleLead: "Treatments For",
    titleEm: "A Spa Evening",
    lede: "Six bookings from our standard rate card that suit a couple or two friends coming over from South Delhi, from a two-and-a-half-hour ritual to a short add-on. Every price matches the full price list.",
  },

  treatments: [
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite, your choice of massage style, Banya access and herbal tea afterwards. A natural choice for an anniversary or a birthday.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "flame",
      name: "Couples Banya Ritual",
      desc: "A shared Russian Banya with steam, venik and cold plunge, followed by side-by-side massage. Our longest couples booking, and the one to choose if neither of you has tried a Banya.",
      duration: "150 min",
      price: "₹9,500",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "A full-body scrub and a 90-minute massage, followed by scalp and foot work and time in the Banya. Ideal when you want an unhurried evening of everything.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "flower",
      name: "Aromatherapy Massage",
      desc: "Soft, slow strokes with oils blended for you once the therapist has asked how the week has been. A quiet hour to finish an evening.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "stone",
      name: "Hot Stone Therapy",
      desc: "Heated basalt stones at 50–55°C worked into the muscle. The warmth reaches deep tissue quickly, which suits a cold Delhi winter night.",
      duration: "75 min",
      price: "₹3,600",
    },
    {
      icon: "spray",
      name: "Full Body Scrub & Polish",
      desc: "Sea-salt or coffee exfoliation with a hydrating wrap. Book it alone, or before a massage for noticeably smoother skin by the end of the visit.",
      duration: "45 min",
      price: "₹1,800",
    },
  ],

  nearby: [
    { name: "Hauz Khas Village", distance: "22–25 min", note: "Via Mehrauli, or the Outer Ring Road at busy times" },
    { name: "Green Park Market", distance: "22–28 min", note: "Similar route to Hauz Khas" },
    { name: "Malviya Nagar", distance: "22–30 min", note: "Through Saket and Mehrauli" },
    { name: "Qutub Minar, Mehrauli", distance: "18–25 min", note: "Closest of the South Delhi landmarks" },
    { name: "Greater Kailash (M-Block Market)", distance: "30–40 min", note: "Weekend evenings are slower; leave early" },
    { name: "Defence Colony", distance: "30–45 min", note: "The longest run from this side of town" },
  ],

  nearbyImage: {
    src: `${A}/body-scrub-salts-and-brush.jpg`,
    alt: "Coarse bath salts, a wooden body brush, a pumice stone and a folded towel ready for a body scrub",
    width: 800,
    height: 533,
  },

  gettingHere: [
    {
      icon: "car",
      title: "Driving over",
      desc: "Your map app will choose between the Mehrauli–Mahipalpur Road and the Outer Ring Road depending on traffic. Set the destination to Defence Enclave, Mahipalpur, and park free on arrival.",
    },
    {
      icon: "mapPin",
      title: "By app cab after dinner",
      desc: "Set the drop to Defence Enclave, Mahipalpur, New Delhi 110037. If you're coming straight from a restaurant, ring ahead and we'll have the room ready when you walk in.",
    },
    {
      icon: "clock",
      title: "Booking the slot",
      desc: "Couples suites are guaranteed with 24 hours' notice. Send the date and time on WhatsApp and we usually reply within five minutes.",
    },
  ],

  reviews: [],

  mapTitle: { lead: "Our Mahipalpur Premises,", em: "Worth The Short Drive" },

  nearbyAreas: ["Saket", "Vasant Kunj", "Delhi"],

  articleImage: {
    src: `${A}/couples-spa-evening-calm-bathroom.jpg`,
    alt: "Freestanding bathtub and a potted palm in a calm, softly lit bathroom",
    width: 1000,
    height: 562,
  },

  article: {
    label: "A Couples' Guide",
    titleLead: "Planning A Couples",
    titleEm: "Spa Evening",
    standfirst:
      "A couples booking is easy to get slightly wrong: too tight a schedule, the wrong treatment for one of you, a heavy dinner beforehand. Here is how to plan two hours that you both enjoy, coming over from South Delhi.",
    sections: [
      {
        heading: "Choose for the person who is less sure",
        paras: [
          "Couples rarely want exactly the same thing. One likes firm pressure and the other wants something gentle; one is curious about the Banya and the other is wary of heat. In the [Couples Spa Suite](/services/) each of you has your own therapist and your own consultation, so you can ask for different pressure, or a different style, in the same room.",
          "If one of you has never had a massage, start with a 60-minute aromatherapy or Swedish style rather than deep tissue. If you're both curious about the Russian Banya, the Couples Banya Ritual at ₹9,500 covers the heat ritual together before the massage. If only one of you is, the regular suite includes Banya access, so that person can try it without the other committing.",
        ],
      },
      {
        heading: "Timing the evening",
        paras: [
          "Book the spa first and dinner afterwards, not the other way round. A full meal before a massage or a Banya leaves you uncomfortable on the table, while a light snack is plenty. Allow about 25 minutes each way from Hauz Khas off-peak, and set off earlier on Friday and Saturday evenings.",
          "For the 120-minute suite, plan on two and a half to three hours in total: arrival and consultation, the treatment itself, then time in the relaxation lounge with herbal tea. The booked time is spent on the table, not changing. Because we never close, a 9 PM start that finishes near midnight is ordinary here, and it costs the same as an afternoon slot.",
        ],
      },
      {
        heading: "Booking and what it costs",
        paras: [
          "A couples suite is guaranteed with 24 hours' notice; same-day is worth asking about, but we can't promise it. When you book, mention if either of you is pregnant, has a skin condition, or has an injury the therapist should know about.",
          "Every price on the [price list](/pricing/) is final, with taxes included. First-time guests get 15% off one treatment; ask whether that covers a couples booking. You'll find directions and the booking form on our [contact page](/contact/). Coming from the Saket side? The [spa in Saket](/spa-in-saket/) page covers that route, and [Vasant Kunj](/spa-in-vasant-kunj/) is on the way.",
        ],
      },
    ],
    takeaways: [
      "Book the spa before dinner, not after a heavy meal.",
      "Separate therapists mean each of you chooses your own pressure and style.",
      "Allow two and a half to three hours for the 120-minute suite, tea included.",
      "Give 24 hours' notice to guarantee a couples suite.",
    ],
  },

  faqs: [
    {
      q: "Do you have a spa in South Delhi?",
      a: "Not inside South Delhi. Our one premises is at Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037, about 22–25 minutes from Hauz Khas outside rush hour. Guests from across South Delhi visit us there.",
    },
    {
      q: "How long is the drive from Hauz Khas, Green Park or Greater Kailash?",
      a: "Roughly 22–25 minutes from Hauz Khas and Green Park off-peak, and 30–45 minutes from Greater Kailash or Defence Colony. Weekend evenings are slower, so leave a little early.",
    },
    {
      q: "Is there a couples spa near South Delhi?",
      a: "Yes. The Couples Spa Suite (120 minutes, ₹7,500) and the Couples Banya Ritual (150 minutes, ₹9,500) are both private, with two therapists. Book 24 hours ahead to be certain of a suite.",
    },
    {
      q: "Can we come late at night after dinner?",
      a: "Yes. We're open 24 hours, every day, and there's no night surcharge. A booking that starts at 10 PM costs exactly the same as one at 2 PM.",
    },
    {
      q: "What does a body massage cost?",
      a: "A 60-minute Swedish Massage is ₹2,800, an Aromatherapy Massage ₹3,000, and Hot Stone Therapy ₹3,600 for 75 minutes. Every price includes taxes.",
    },
    {
      q: "Can we each choose a different massage in the couples suite?",
      a: "Yes. You each have your own therapist and a short consultation first, so pressure and focus can be different for each of you.",
    },
    {
      q: "Is parking available?",
      a: "Yes. Parking on site is free for all guests and isn't time-limited, however long your visit runs.",
    },
  ],

  geo: { lat: 28.5494, lng: 77.2001 },

  seo: {
    title: "Best Spa & Body Massage for South Delhi | Mahipalpur Luxury Spa",
    description:
      "Couples spa suites, Russian Banya and body massage, about 22–25 min from Hauz Khas. Open 24/7 in Mahipalpur with free parking and published prices.",
    ogTitle: "Couples Spa near South Delhi | Open 24 Hours",
    ogDescription:
      "A private couples suite, a shared Russian Banya ritual and a spa evening that runs as late as you like. One Mahipalpur spa, about 25 minutes from Hauz Khas.",
    ogImageAlt: "Mahipalpur Luxury Spa, a spa serving South Delhi, open 24 hours",
  },
};
