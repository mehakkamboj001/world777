/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.VERCEL === "1" ? ".next" : ".next-verify",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
