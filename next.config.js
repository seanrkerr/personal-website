const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  const reactStrictMode = true;
  const optimizeFonts = false;
  const poweredByHeader = false;
  const eslint = {
    ignoreDuringBuilds: true,
  };
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

  console.log(`isDev:${isDev}  isProd:${isProd} `);

  const env = {
    RESTURL_PORTFOLIO: (() => {
      if (isDev) return "http://localhost:8000";
      if (isProd) {
        return "https://dev-seankerr-api.seankerr.com";
      }
      return "RESTURL_PORTFOLIO:not (isDev,isProd)";
    })(),
  };
  return {
    env,
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "Content-Security-Policy-Report-Only",
              value:
                "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; img-src 'self' *.seankerr.com; script-src 'self'",
            },
            {
              key: "X-Frame-Options",
              value: "DENY",
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
                "camera=(); battery=(self); geolocation=(); microphone=('https://seankerr.com')",
            },
          ],
        },
      ];
    },
  };
};
