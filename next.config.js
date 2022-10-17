/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.traction.one"]
  },
  swcMinify: true,
}

module.exports = nextConfig
