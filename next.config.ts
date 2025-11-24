import type { NextConfig } from "next";
import { withPlumeria } from "@plumeria/next-plugin";

const nextConfig: NextConfig = {
  turbopack: {},
};

export default withPlumeria(nextConfig);
