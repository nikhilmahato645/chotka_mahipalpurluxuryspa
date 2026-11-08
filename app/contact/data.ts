import type { FaqItem } from "../components/Faq";

export const HERO_STATS = [
  { value: "24/7", label: "Reachable" },
  { value: "10 min", label: "From IGI T3" },
  { value: "Free", label: "Parking" },
  { value: "<5 min", label: "Reply on WhatsApp" },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    q: "What are your opening hours?",
    a: "We are open 24 hours a day, 7 days a week, 365 days a year — including every public holiday. There is no night surcharge, so a 3 AM session costs exactly the same as a 3 PM one.",
  },
  {
    q: "Where exactly are you located?",
    a: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037. We are on the Mahipalpur side of NH-8, roughly 10 minutes from IGI Airport Terminal 3 and 2 minutes from Mahipalpur Metro.",
  },
  {
    q: "How do I get to you from IGI Airport?",
    a: "By cab it is a 10 to 12 minute drive from Terminal 3 and about 8 minutes from Terminal 1. Ask the driver for Defence Enclave, Mahipalpur, next to Aerocity. Call us when you land and we will guide the driver to the exact gate.",
  },
  {
    q: "Is parking available?",
    a: "Yes — free on-site parking is available for all guests, day and night, at no charge and with no time limit during your session.",
  },
  {
    q: "How quickly will you respond to a booking request?",
    a: "WhatsApp and phone bookings are confirmed within a few minutes at any hour. Email replies typically come within two hours. If you need a slot in the next 30 minutes, call rather than email.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Always. Walk in at any hour and we can usually start within 15 to 20 minutes. Couples suites are the exception — those are worth booking 24 hours ahead.",
  },
  {
    q: "How far are you from the Aerocity hotels?",
    a: "About five minutes by road. We are directly across NH-8 from the Aerocity hospitality district, including JW Marriott, Pullman, Andaz, Roseate and Holiday Inn. Any hotel cab or auto can bring you to Defence Enclave in one short run.",
  },
];

export const REACH_US = [
  {
    from: "IGI Airport Terminal 3",
    time: "10–12 min",
    note: "Straight down NH-8 towards Mahipalpur. Call on landing and we'll guide your driver.",
  },
  {
    from: "IGI Airport Terminal 1",
    time: "8–10 min",
    note: "The shortest run of all. Ideal for domestic layovers and delayed flights.",
  },
  {
    from: "Aerocity hotels",
    time: "5 min",
    note: "One short run across NH-8 by hotel cab or auto-rickshaw.",
  },
  {
    from: "Mahipalpur Metro",
    time: "2–3 min",
    note: "A short walk or a one-minute auto ride from the station exit.",
  },
  {
    from: "Dwarka Sector 10",
    time: "15–18 min",
    note: "Via the Dwarka Link Road. Easiest outside peak hours.",
  },
  {
    from: "Vasant Kunj",
    time: "12–15 min",
    note: "Via Vasant Kunj Road, past the mall complex.",
  },
];

export const TREATMENTS = [
  "Russian Banya with Venik",
  "Swedish Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Aromatherapy Massage",
  "Hot Stone Therapy",
  "Couples Spa Suite",
  "Royal Signature Ritual",
  "Airport Layover Express",
  "Not sure — please advise",
];
