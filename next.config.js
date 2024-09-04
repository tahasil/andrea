/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Disable CSS minification temporarily
    if (!isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
};

module.exports = nextConfig;
