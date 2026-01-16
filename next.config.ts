import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // 禁用開發工具覆蓋層
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
