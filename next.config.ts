import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com", // Allows all subdomains of cdninstagram.com
        pathname: "/**", // Allows any path
      },
      {
        protocol: "https",
        hostname: "instagram.frix7-1.fna.fbcdn.net",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
