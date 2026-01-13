/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for file uploads (resume upload)
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;