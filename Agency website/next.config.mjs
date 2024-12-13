/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export mode
  reactStrictMode: true, // enable React's strict mode
  trailingSlash: true, // add trailing slash for static paths (recommended for static sites)
  images: {
    unoptimized: true, // disable Next.js image optimization for static export
  },
};

export default nextConfig;
