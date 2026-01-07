/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/tenohira_v1' : '',
  assetPrefix: isProd ? '/tenohira_v1' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tenohira_v1' : '',
  },
};

export default nextConfig;
