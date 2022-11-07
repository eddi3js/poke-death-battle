/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "placeimg.com"],
  },
  async redirects() {
    return [
      {
        source: "/pokemon",
        destination: "/pokemon/arbok",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
