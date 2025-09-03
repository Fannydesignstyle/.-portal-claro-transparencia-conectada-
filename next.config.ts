
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https/g,
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // This is required to allow the Next.js dev server to accept requests from
  // the Firebase Studio preview server.
  allowedDevOrigins: [
    '6000-firebase-studio-1756573387385.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev',
    '9000-firebase-studio-1756573387385.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev'
  ],
};

export default nextConfig;
