import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.atlivingwatercabins.com",
          },
        ],
        destination: "https://atlivingwatercabins.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
