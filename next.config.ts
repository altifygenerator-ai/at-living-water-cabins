import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep deploy behavior simple and let Vercel handle the primary domain. */
  poweredByHeader: false,
};

export default nextConfig;
