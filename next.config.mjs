/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Use 'standalone' for server-side rendering
  distDir: '.next', // Matches the publish directory in netlify.toml
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
