import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "/embed/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.facebook.com *.fbcdn.net *.google.com *.gstatic.com *.youtube.com *.ytimg.com *.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' *.googleapis.com; " +
              "img-src 'self' data: blob: *.facebook.com *.fbcdn.net *.google.com *.gstatic.com *.youtube.com *.ytimg.com *.google-analytics.com; " +
              "font-src 'self' data: *.googleapis.com *.gstatic.com; " +
              "connect-src 'self' *.google-analytics.com *.facebook.com *.fbcdn.net formsubmit.co; " +
              "media-src 'self' *.youtube.com *.ytimg.com; " +
              "frame-src 'self' *.youtube.com *.facebook.com; " +
              "worker-src 'self' blob:; " +
              "form-action 'self' formsubmit.co; " +
              "base-uri 'self'; " +
              "frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
