const nextConfig = {
  // output: 'export',
  // trailingSlash: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        pathname: '/demos/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
