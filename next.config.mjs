/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https", // Use 'https' for secure loading
        hostname: "**", // The hostname for the external images
        port: "", // Leave empty if there is no specific port
        pathname: "/**", // Allows all images from the `/images/` path
      },
      {
        protocol: "https",
        hostname: "https://picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://imgbb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
