/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.onindonesia.id',
        port: '',
        pathname: '',
      },
    ],
  },
};
 
module.exports = nextConfig