/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'pbs.twimage.com',
        'randomuser.me',
        'cdn.builder.io', // Add this line
      ],
    },
  };
  
  module.exports = nextConfig;
  