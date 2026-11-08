import { Star } from "lucide-react";

export default function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}
