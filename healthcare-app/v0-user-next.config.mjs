/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL' // Allows embedding in iframes
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.retool.com https://retool.com https://* http://*;" // Allows embedding in Retool and other domains
          }
        ],
      },
    ]
  },
}

export default nextConfig

