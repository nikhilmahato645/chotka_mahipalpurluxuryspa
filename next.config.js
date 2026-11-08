/** Static export: every page is pre-rendered to plain HTML in /out. */
module.exports = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  images: { unoptimized: true },
};
