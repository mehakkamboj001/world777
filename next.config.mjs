/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.VERCEL === "1" ? ".next" : ".next-verify",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
