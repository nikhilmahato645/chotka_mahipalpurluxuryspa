"use client";

import { useState } from "react";
import { LocateFixed, Navigation } from "lucide-react";
import { ADDRESS } from "../lib/site";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; km: number; lat: number; lng: number }
  | { status: "error"; message: string };

/** Straight-line distance in km between two points (haversine formula). */
function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const r = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * r * Math.asin(Math.sqrt(a));
}

const DESTINATION = "Defence+Enclave,+Mahipalpur,+New+Delhi+110037";

/**
 * "Find the spa near me". Location is requested only when the visitor taps the
 * button, used in the browser to work out the distance, and never sent to our
 * server — see the privacy policy.
 */
export default function NearMe() {
  const [state, setState] = useState<State>({ status: "idle" });

  const locate = () => {
    if (!("geolocation" in navigator)) {
      setState({ status: "error", message: "Your browser does not support location. Use “Get Directions” instead." });
      return;
    }
    setState({ status: "loading" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setState({
          status: "done",
          km: distanceKm(latitude, longitude, ADDRESS.lat, ADDRESS.lng),
          lat: latitude,
          lng: longitude,
        });
      },
      (err) =>
        setState({
          status: "error",
          message:
            err.code === err.PERMISSION_DENIED
              ? "Location permission was not given. You can still use “Get Directions”."
              : "We couldn't find your location just now. Please try again or use “Get Directions”.",
        }),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  };

  if (state.status === "done") {
    // Road distance is usually ~1.3× the straight line; Delhi traffic averages ~25 km/h.
    const roadKm = state.km * 1.3;
    const minutes = Math.max(5, Math.round(((roadKm / 25) * 60) / 5) * 5);
    const directions = `https://www.google.com/maps/dir/?api=1&origin=${state.lat.toFixed(5)},${state.lng.toFixed(5)}&destination=${DESTINATION}`;
    return (
      <div className="near-me near-me-done" role="status">
        <p>
          You are about <strong>{state.km < 1 ? "less than 1 km" : `${state.km.toFixed(1)} km`}</strong> from Russian
          Spa Centre — roughly <strong>{minutes} min</strong> by road.
        </p>
        <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-copper">
          <Navigation size={15} aria-hidden="true" /> Directions from my location
        </a>
        <small>
          Your location stayed on your device. <a href="/privacy-policy/#location">Privacy policy</a>
        </small>
      </div>
    );
  }

  return (
    <div className="near-me">
      <button type="button" className="btn btn-ghost" onClick={locate} disabled={state.status === "loading"}>
        <LocateFixed size={15} aria-hidden="true" />
        {state.status === "loading" ? "Finding you…" : "Find the spa near me"}
      </button>
      {state.status === "error" ? (
        <p className="near-me-error" role="alert">
          {state.message}
        </p>
      ) : (
        <small>
          Uses your location once to show distance. <a href="/privacy-policy/#location">How we use it</a>
        </small>
      )}
    </div>
  );
}
