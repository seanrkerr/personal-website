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
  };
};
