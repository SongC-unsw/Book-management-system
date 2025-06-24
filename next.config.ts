import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "static.runoob.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
