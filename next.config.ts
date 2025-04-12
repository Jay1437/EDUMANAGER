import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for better error detection

  webpack: (config, { isServer }: { config: any, isServer: boolean }) => {
    config.resolve.modules.push(__dirname);
    return config;
  },

  // Environment variables (optional)
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
