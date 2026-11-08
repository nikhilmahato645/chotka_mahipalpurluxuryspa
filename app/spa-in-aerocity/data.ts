import type { LocationContent } from "../lib/location";

const A = "/assets/spa-in-aerocity";

/**
 * Aerocity's angle is the hospitality district: hotel guests, business
 * travellers, late arrivals and corporate bookings.
 */
export const AEROCITY: LocationContent = {
  path: "/spa-in-aerocity/",
  areaName: "Aerocity",
  breadcrumb: "Spa in Aerocity",

  heroImage: `${A}/hero-spa-aerocity.jpg`,
  heroImageAlt: "Guest unwinding at sunrise — spa serving Aerocity, New Delhi, open 24 hours",
  heroBadge: "Five Minutes From The Aerocity Hotel Strip",
  h1: { lead: "Best Spa & Body Massage in", em: "Aerocity" },
  heroText: [
    "Aerocity runs on a different clock. Guests check in at 2 AM off a delayed long-haul, close a deal over dinner at 11 PM, and fly out before the city wakes up. Hotel spas close at 8 or 9 PM — we do not close at all.",
    "We are across NH-8 at Defence Enclave, five minutes from the JW Marriott, Pullman, Andaz, Roseate House, Holiday Inn and Aloft — one short cab or auto ride from your lobby.",
  ],
  heroStats: [
    { value: "5 min", label: "From The Hotel Strip" },
    { value: "24/7", label: "Including 3 AM" },
    { value: "₹0", label: "Night Surcharge" },
    { value: "45 min", label: "Express Option" },
  ],

  intro: {
    label: "Why Aerocity Guests Come To Us",
    titleLead: "Built Around A",
    titleEm: "Traveller's Schedule",
    paras: [
      "Almost every booking we take from Aerocity has a flight attached to it. That shapes how we run the session: we confirm your hard deadline first, build the treatment backwards from it, and put you in a room within twenty minutes of arrival rather than parking you in a waiting lounge.",
      "It also shapes what we recommend. Long-haul bodies are dehydrated, stiff through the hips and shoulders, and running on the wrong time zone. A generic relaxation massage is pleasant but wasted on that. Our therapists work the specific pattern that eleven hours in a seat produces, and finish with a sequence that either wakes you up or puts you down, depending on which you need next.",
      "For the corporate side of Aerocity — the offices around Worldmark and the conference floors in the hotels — we run chair-massage sessions on site and group bookings with invoiced billing and full GST documentation. Most of that work happens in the gap between a morning session and an evening flight.",
    ],
  },

  introImage: {
    src: `${A}/traveller-recovery.jpg`,
    alt: "Hot stone recovery treatment for Aerocity travellers",
    width: 800,
    height: 533,
  },

  highlights: [
    {
      icon: "car",
      title: "Five Minutes Away",
      desc: "A single turn off NH-8 from the hotel lobbies, with free on-site parking. Any hotel cab knows the route.",
    },
    {
      icon: "moon",
      title: "Open When Hotel Spas Aren't",
      desc: "The in-house spa shuts at 8 or 9 PM. Our busiest Aerocity window is 11 PM to 4 AM.",
    },
    {
      icon: "briefcase",
      title: "Invoiced Corporate Billing",
      desc: "Group bookings, on-site chair massage and GST documentation for expense claims.",
    },
    {
      icon: "clock",
      title: "Flight-Deadline Scheduling",
      desc: "Give us your boarding time and we build the session around it. You will not miss a gate because of us.",
    },
  ],

  treatmentsHead: {
    eyebrow: "Most Booked Here",
    titleLead: "What Aerocity Guests",
    titleEm: "Actually Book",
    lede: "Drawn from our own booking log rather than a generic menu — these are the treatments guests travelling from Aerocity choose most, and why.",
  },

  treatments: [
    {
      icon: "activity",
      name: "Long-Haul Recovery Massage",
      desc: "Built for the specific stiffness eleven hours in economy produces — hip flexors, thoracic spine, neck. The single most booked treatment from the Aerocity hotels.",
      duration: "75 min",
      price: "₹3,600",
    },
    {
      icon: "feet",
      name: "Post-Flight Reflexology",
      desc: "For swollen, aching feet after a long sector. Twenty minutes in and most guests say their shoes fit again.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "flame",
      name: "Late-Night Banya",
      desc: "The 1 AM booking. Steam, venik and a cold plunge reset the body clock faster than lying awake in a hotel room fighting jet lag.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "dumbbell",
      name: "Executive Deep Tissue",
      desc: "Shoulders and lower back, for guests who have spent the week between a laptop and a boardroom. Firm, targeted, no small talk unless you want it.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "clock",
      name: "Layover Express",
      desc: "Massage, shower and refreshment inside the hour, for a connection with time to kill but not much. Show a boarding pass within 12 hours for the reduced rate.",
      duration: "45 min",
      price: "₹2,400",
    },
    {
      icon: "flower",
      name: "Sleep-Reset Aromatherapy",
      desc: "A vetiver and lavender blend worked slowly, timed for guests who need to be asleep within the hour and up for a 6 AM departure.",
      duration: "60 min",
      price: "₹3,000",
    },
  ],

  nearby: [
    { name: "JW Marriott Aerocity", distance: "5 min", note: "Straight across NH-8 to Defence Enclave" },
    { name: "Pullman New Delhi Aerocity", distance: "5 min", note: "Straight across NH-8 via the service road" },
    { name: "Andaz Delhi", distance: "5 min", note: "Concierge can book on your behalf" },
    { name: "Roseate House", distance: "6 min", note: "Popular with our late-night Banya guests" },
    { name: "Holiday Inn Aerocity", distance: "5 min", note: "Frequent corporate group bookings" },
    { name: "Aloft Aerocity", distance: "5 min", note: "Short hop past the Worldmark blocks" },
    { name: "Worldmark 1, 2 & 3", distance: "6 min", note: "On-site chair massage available for offices" },
    { name: "Aerocity Metro Station", distance: "5 min", note: "Airport Express Line, then a short auto ride" },
    { name: "IGI Terminal 3", distance: "10–12 min", note: "The route most of our Aerocity guests arrive on" },
  ],

  nearbyImage: {
    src: `${A}/aerocity-treatments.jpg`,
    alt: "Thai head massage booked by Aerocity hotel guests",
    width: 800,
    height: 534,
  },

  gettingHere: [
    {
      icon: "car",
      title: "By hotel car or cab",
      desc: "Ask for Defence Enclave, Mahipalpur, on the far side of NH-8. It is a single turn off the highway and drivers know it. Five minutes in normal traffic, eight if the flyover is backed up.",
    },
    {
      icon: "metro",
      title: "By Airport Express",
      desc: "Aerocity station is on the Airport Express Line. From the exit it is a five-minute auto across the highway — cheaper than a cab and usually quicker at rush hour.",
    },
    {
      icon: "mapPin",
      title: "By auto-rickshaw",
      desc: "Autos wait outside every Aerocity hotel at all hours. Tell the driver Defence Enclave, Mahipalpur — call us on the way and we will guide them to the exact gate.",
    },
  ],

  reviews: [
    {
      text: "Landed at 1 AM to find the hotel spa long shut. I took a cab across, was on the table twenty minutes after I messaged, and the Banya did more for the jet lag than any amount of lying in bed would have.",
      author: "Daniel Okoye",
      role: "Guest, Pullman Aerocity",
    },
    {
      text: "We booked chair massages for a twelve-person offsite at Worldmark. They arrived on time, worked around our agenda, and the GST invoice was in my inbox the same afternoon.",
      author: "Shalini Rao",
      role: "Operations Lead, Aerocity",
    },
    {
      text: "I fly this route monthly and the layover express has become part of the trip. Forty-five minutes, a shower, and I get on the next flight feeling human.",
      author: "Marcus Feld",
      role: "Frequent Flyer, Frankfurt–Delhi",
    },
  ],

  mapTitle: { lead: "Our Premises,", em: "Five Minutes Away" },

  articleImage: {
    src: `${A}/flight-guide.jpg`,
    alt: "Restorative herbal treatment after a long-haul flight",
    width: 1000,
    height: 562,
  },

  article: {
    label: "A Traveller's Guide",
    titleLead: "How To Time A Session",
    titleEm: "Around A Flight",
    standfirst:
      "Almost every Aerocity booking has a departure or an arrival attached to it. The question is never really which massage — it is how much time you actually have, and what is worth doing with it.",
    sections: [
      {
        heading: "What a long-haul flight leaves behind",
        paras: [
          "Eleven hours in a seat produces a fairly predictable pattern: shortened hip flexors from sitting, a compressed lower back, shoulders rolled forward, fluid pooled in the lower legs, and a nervous system that has no idea what time it is. A generic relaxation massage is pleasant but largely wasted on that — it treats none of the four things the flight actually did.",
          "What helps is targeted: firm work through the hips and lower back to undo the sitting, lighter drainage-style work on the legs, and a finish chosen for what you need next. Tell the therapist whether you are going to a meeting or to bed and the last fifteen minutes change completely — brisker and shorter to wake you up, slower and warmer to put you down.",
        ],
      },
      {
        heading: "Ninety minutes, three hours, or an overnight",
        paras: [
          "With under two hours of usable time, book the 45-minute [Airport Layover Express](/pricing/) at ₹2,400 — massage, shower and refreshment, and you are back at the terminal with margin. With three to four hours, a 60- or 90-minute massage plus a shower is comfortable, and there is no reason to rush it. Anything beyond five hours and the [Banya with venik](/services/) becomes the better use of the gap, because the heat cycle does more for a flown-out body than another half-hour on the table.",
          "Overnight layovers are the case we are built for. Between midnight and 5 AM, when the hotel spas are long shut, a 120- or 150-minute booking followed by an hour in the relaxation lounge is a far better transit than an airport bench — and the rate is identical to the same booking at midday.",
        ],
      },
      {
        heading: "The logistics, kept simple",
        paras: [
          "We are five minutes across NH-8 from the hotel strip, and every hotel cab and auto driver knows Defence Enclave. Call us on the way and we will guide the driver to the exact gate — the full address, travel times and directions are set out on our [contact page](/contact/).",
          "Give us your boarding time when you book rather than when you arrive. We hold therapists against a departure time, so a delayed meeting or a slow immigration queue costs you nothing, and we will tell you honestly if what you want does not fit the window you have. Corporate bookings with GST invoicing are arranged through [contact](/contact/), and the story of the spa itself is on the [about page](/about/).",
        ],
      },
    ],
    takeaways: [
      "Under two hours of gap: the 45-minute express. Over five: the Banya is the better use of the time.",
      "Say whether you are heading to a meeting or to bed — the last fifteen minutes are built around that answer.",
      "Five minutes from the Aerocity hotels by cab or auto, with free parking if you drive.",
      "We hold your therapist against your departure time, not your arrival — delays cost you nothing.",
    ],
  },

  faqs: [
    {
      q: "Is there a spa in Aerocity open after midnight?",
      a: "The hotel spas in Aerocity typically close between 8 and 9 PM. Mahipalpur Luxury Spa is five minutes away at Defence Enclave, Mahipalpur, and is open 24 hours a day, every day of the year. Our busiest window for Aerocity guests is between 11 PM and 4 AM.",
    },
    {
      q: "How do I get to you from my Aerocity hotel?",
      a: "Take a hotel cab or an auto-rickshaw and ask for Defence Enclave, Mahipalpur — it is about five minutes across NH-8. Call us on the way and we will guide the driver to the exact gate.",
    },
    {
      q: "How far is your spa from Aerocity exactly?",
      a: "About five minutes by road. We are on the Mahipalpur side of NH-8 at Defence Enclave, directly opposite the Aerocity hospitality district. Allow eight minutes if the flyover is congested.",
    },
    {
      q: "Do you have a branch inside Aerocity itself?",
      a: "No. We run a single premises at Office No. 118, Defence Enclave, Mahipalpur, and serve Aerocity from there. Keeping one location is how we hold the same therapists, the same hygiene standard and the same rate card for every guest.",
    },
    {
      q: "Can my company be invoiced for a group booking?",
      a: "Yes. We handle corporate bookings with invoiced billing and full GST documentation, including on-site chair massage at Aerocity offices and conference venues. Group discounts start at six guests.",
    },
    {
      q: "I have a flight in three hours. Is that enough time?",
      a: "Comfortably. Tell us your boarding time when you book and we will build the session backwards from it — typically a 45 or 60 minute treatment, a shower, and you are back at your terminal with an hour to spare. We have never made a guest miss a gate.",
    },
    {
      q: "Do you charge more for late-night appointments?",
      a: "No. There is no night surcharge and no distance charge. A 3 AM session costs exactly what the same session costs at 3 PM.",
    },
  ],

  geo: { lat: 28.5535, lng: 77.12 },

  seo: {
    title: "Best Spa & Body Massage in Aerocity | Mahipalpur Luxury Spa",
    description:
      "Open 24 hours, five minutes across NH-8 from the Aerocity hotels. Body massage, Russian Banya and long-haul recovery treatments, with no night surcharge.",
    ogTitle: "Spa in Aerocity | Open 24 Hours, 5 Minutes From Your Hotel",
    ogDescription:
      "Hotel spas close at 9 PM. We don't. Five minutes from the Aerocity hotels: long-haul recovery massage, late-night Russian Banya and a 45-minute layover express.",
    ogImageAlt: "Mahipalpur Luxury Spa — spa serving Aerocity, New Delhi, open 24 hours",
  },
};
