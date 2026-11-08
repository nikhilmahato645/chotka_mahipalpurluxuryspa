/**
 * The therapist team, shown on the home page, every location page and /gallery/.
 *
 * TO UPDATE: edit therapists.json (next to this file). Each entry is
 *   { "id": 12, "name": "Name 12", "photo": "/assets/home/therapist_image/image12.webp" }
 * Put each real therapist's photo (taken with their permission) at
 * public/assets/home/therapist_image/imageN.webp, replacing the placeholder,
 * then change "name" to that person's real name. Cards show the name only.
 * New entries appear on /gallery/ automatically.
 */
import data from "./therapists.json";

export type Therapist = {
  id: number;
  name: string;
  photo: string;
};

export const THERAPISTS: Therapist[] = data;

/** How many cards the home and location pages show before "View more". */
export const THERAPISTS_PREVIEW = 10;
