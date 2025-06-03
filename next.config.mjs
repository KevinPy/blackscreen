/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.CI_PAGES_URL
    ? new URL(process.env.CI_PAGES_URL).pathname.replace(/\/$/, "")
    : "",
};

export default nextConfig;
