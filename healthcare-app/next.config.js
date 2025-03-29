/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)', // Apply to all routes
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'ALLOWALL', // Enable iframe embedding
            },
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors *", // Loosen iframe restriction
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  