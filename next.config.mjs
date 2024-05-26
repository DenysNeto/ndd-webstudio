/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "html5up.net",
        port: "",
        pathname: "/uploads/images/**",
      },
    ],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "sr", "es", "pseudo"],
    defaultLocale: "en",
  },
};

export default nextConfig;
