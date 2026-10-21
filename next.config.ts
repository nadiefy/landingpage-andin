import type {NextConfig} from 'next';
import os from 'os';

// Dynamically collect all local network IPs and wildcard subnets
// so opening on mobile / other LAN devices never triggers HMR cross-origin block
const getLocalDevOrigins = (): string[] => {
  const origins = new Set<string>([
    'localhost',
    '127.0.0.1',
    '*.local',
    '192.168.*.*',
    '10.*.*.*',
    '172.16.*.*',
    '172.20.*.*',
    '*.*.*.*',
  ]);

  try {
    const interfaces = os.networkInterfaces();
    for (const interfaceList of Object.values(interfaces)) {
      if (!interfaceList) continue;
      for (const iface of interfaceList) {
        if (!iface.internal) {
          origins.add(iface.address);
        }
      }
    }
  } catch {
    // Fallback gracefully if network interface lookup fails
  }

  return Array.from(origins);
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: getLocalDevOrigins(),
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  turbopack: {},
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
