/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Use 'https' for secure loading
        hostname: "www.themealdb.com", // The hostname for the external images
        port: "", // Leave empty if there is no specific port
        pathname: "/images/**", // Allows all images from the `/images/` path
      },
    ],
  },
};

export default nextConfig;
