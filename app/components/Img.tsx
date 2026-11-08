import type { ImgHTMLAttributes } from "react";

/**
 * `<img>` with its WebP sibling offered first. Every photo in /public/assets
 * has a `.webp` next to the `.jpg`; browsers take the smaller file and older
 * ones fall back to the JPG.
 */
type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

const OPTIMISABLE = /\.(jpe?g|png)$/i;

export default function Img({ src, alt, loading = "lazy", decoding = "async", ...rest }: Props) {
  const webp = src.replace(OPTIMISABLE, ".webp");
  return (
    <picture>
      {webp === src ? null : <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} loading={loading} decoding={decoding} {...rest} />
    </picture>
  );
}
