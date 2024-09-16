/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.onindonesia.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yihui-work.s3.us-east-2.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lastfm.freetls.fastly.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'product-design-portfolio.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
};
 
module.exports = nextConfig