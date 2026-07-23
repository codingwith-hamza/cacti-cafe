/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local café photography lives in /public/images and is served statically.
    // When swapping an image for a hosted video/CDN asset later, add its host here.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
