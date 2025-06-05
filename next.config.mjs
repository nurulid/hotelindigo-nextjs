/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://seminyak.hotelindigo.com/**')],
  },
};

export default nextConfig;
