/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = withFonts({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});

module.exports = nextConfig
