import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-seo`,
      options: {
        siteName: `Sean Kerr`,
        defaultSiteImage: `logo.ed3bbad2.png`,
        siteUrl: `https://www.seankerr.com`,
        twitterCreator: '@kerrse',
        twitterSite: '@twitterhandle',
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://www.seankerr.com",
            "url": "https://www.seankerr.com",
            "name": "Sean Kerr",
            "publisher": {
              "@id": "https://example.com/about/#organization"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "https://www.seankerr.com",
              "url": "https://www.seankerr.com/public/logo.ed3bbad2.png",
              "caption": "Sean Kerr Logo"
            }
          }`,
      },
    },
  ],
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  // plugins: [],
  jsxRuntime: `automatic`,
};

export default config;
