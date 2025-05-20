import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "de5pvxllgo.ufs.sh",
        port: "",
      },
    ],
  },
};

export default nextConfig;
