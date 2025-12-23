/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Monorepo packages are TypeScript sources; ensure Next transpiles them during build (Vercel).
  transpilePackages: ["@ezzi/engine", "@ezzi/shared"],
  experimental: {
    serverActions: { allowedOrigins: [] }
  }
};
export default nextConfig;
