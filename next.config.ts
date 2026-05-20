import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/om", permanent: true },
      { source: "/services", destination: "/tjanster", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/experience", destination: "/case", permanent: true },
    ];
  },
};

export default nextConfig;
