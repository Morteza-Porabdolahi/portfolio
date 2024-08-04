import createNextIntlPlugin from 'next-intl/plugin'
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
const withNextIntl = createNextIntlPlugin()

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**'
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }, 
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default withNextIntl(config);
