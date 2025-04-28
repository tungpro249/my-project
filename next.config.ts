import { i18n } from './next-i18next.config';

const nextConfig = {
  i18n,
  experimental: {
    appDir: true, // vì bạn đang dùng src/app
  },
  transpilePackages: ['next-i18next'],
};

export default nextConfig;
