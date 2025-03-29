/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static site generation
  distDir: 'out', // Change the output directory to 'out'
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '', // Ensure '' for local development
};

export default nextConfig;
