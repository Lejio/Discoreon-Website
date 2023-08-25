/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Added remote image provider configurations.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
