import type { GatsbyConfig } from 'gatsby';

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sean Kerr - full stack developer`,
    description: `Sean Kerr - full stack developer from Sydney, Australia`,
    author: `Sean Kerr`,
    siteUrl: `https://www.seankerr.com`,
    image: `https://www.seankerr.com/logo.ed3bbad2.png`,
    url: `https://www.seankerr.com`,
    type: `website`,
    keywords: `AWS, CDK, Serverless, React`,
    ahrefs: `dc81e744fc1751c07164efce0964adc4f15ef95df2bc8dd064dca395d2aefa11`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.seankerr.com`,
        sitemap: `https://www.seankerr.com/sitemap.xml`,
        env: {
          production: {
            policy: [{ userAgent: `*`, allow: `/` }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      output: `./public/sitemap.xml`,
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.seankerr.com`,
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-seo`,
      options: {
        siteName: `Sean Kerr`,
        defaultSiteImage: `logo.ed3bbad2.png`,
        siteUrl: `https://www.seankerr.com`,
        twitterCreator: `@kerrse`,
        twitterSite: `@twitterhandle`,
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://www.seankerr.com",
            "url": "https://www.seankerr.com",
            "name": "Sean Kerr",
            "publisher": {
              "@id": "https://www.seankerr.com.com/about"
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
