import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const nextConfig: NextConfig = {

  pageExtensions: ["ts", "tsx", "mdx", "jsx", "js", "md"],
  outputFileTracingIncludes: {
    "/**": ["components/ghostui/**/*"],
  },
  async headers() {
    return [
      {
        source: "/r/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },

};
const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

export default withMDX(nextConfig);
