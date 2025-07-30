import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // Para liberar qualquer domínio, não use 'domains', use apenas remotePatterns
  },
  // Outras configs aqui...
};

export default nextConfig;