/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.avif": {
        loaders: [],
        as: "*.avif",
      },
    },
  },
  // Kept for non-Turbopack / legacy builds
  webpack(config) {
    config.module.rules.push({
      test: /\.avif$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

