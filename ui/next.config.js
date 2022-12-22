/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'placeimg.com', pathname: '/192/192/**' }],
  },
  async redirects() {
    return [
      { source: '/chat', destination: '/chat/me', permanent: true },
      { source: '/user', destination: '/user/me', permanent: true },
    ];
  },
};

module.exports = nextConfig;
