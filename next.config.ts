import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-markdown", "remark", "remark-parse", "unified", "vfile", "unist-util-visit"],
};

export default nextConfig;
