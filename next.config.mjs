/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://trafic.amplixy.cloud https://client.crisp.chat; style-src 'self' 'unsafe-inline' https://client.crisp.chat; img-src 'self' data: https: https://client.crisp.chat https://image.crisp.chat; font-src 'self' data: https://fonts.gstatic.com https://client.crisp.chat; connect-src 'self' https://trafic.amplixy.cloud https://client.crisp.chat wss://client.crisp.chat; frame-src https://client.crisp.chat; frame-ancestors 'self';"
          }
        ],
      },
    ]
  },
};

export default nextConfig;

