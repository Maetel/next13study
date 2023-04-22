/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
