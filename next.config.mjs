/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // 静态导出时需要
  },
  trailingSlash: true,  // 为每个页面生成 /about/ 而不是 /about
};

export default nextConfig;
