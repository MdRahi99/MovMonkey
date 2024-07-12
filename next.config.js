/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "stagingmovmonkeyv1.pythonanywhere.com",
      "movmonkey.stringify.tech",
    ],
  },
};

module.exports = nextConfig;
