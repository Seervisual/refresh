/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static site generation
  distDir: 'out', // Change the output directory to 'out'
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  assetPrefix: './', // Use './' for relative paths in static export
};

export default nextConfig;
