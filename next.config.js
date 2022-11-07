/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "placeimg.com"],
  },
};

module.exports = nextConfig;
