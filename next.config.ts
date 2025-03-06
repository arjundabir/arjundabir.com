import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import nextMDX from "@next/mdx";
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  // Add images configuration using remotePatterns (recommended approach)
  images: {
    remotePatterns: [
      {
        protocol: "https" as "https",
        hostname: "image.thum.io",
        pathname: "/**",
      },
    ],
  },
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
