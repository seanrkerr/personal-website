import type { GatsbyConfig } from 'gatsby';

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-plugin-image`,
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           // Class prefix for <pre> tags containing syntax highlighting;
    //           // defaults to 'language-' (e.g. <pre class="language-js">).
    //           // If your site loads Prism into the browser at runtime,
    //           // (e.g. for use with libraries like react-live),
    //           // you may use this to prevent Prism from re-processing syntax.
    //           // This is an uncommon use-case though;
    //           // If you're unsure, it's best to use the default value.
    //           classPrefix: 'language-',
    //           // This is used to allow setting a language for inline code
    //           // (i.e. single backticks) by creating a separator.
    //           // This separator is a string and will do no white-space
    //           // stripping.
    //           // A suggested value for English speakers is the non-ascii
    //           // character '›'.
    //           inlineCodeMarker: null,
    //           // This lets you set up language aliases.  For example,
    //           // setting this to '{ sh: "bash" }' will let you use
    //           // the language "sh" which will highlight using the
    //           // bash highlighter.
    //           aliases: {},
    //           // This toggles the display of line numbers globally alongside the code.
    //           // To use it, add the following line in gatsby-browser.js
    //           // right after importing the prism color scheme:
    //           //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
    //           // Defaults to false.
    //           // If you wish to only show line numbers on certain code blocks,
    //           // leave false and use the {numberLines: true} syntax below
    //           showLineNumbers: false,
    //           // If setting this to true, the parser won't handle and highlight inline
    //           // code used in markdown i.e. single backtick code like `this`.
    //           noInlineHighlight: false,
    //           // This adds a new language definition to Prism or extend an already
    //           // existing language definition. More details on this option can be
    //           // found under the header "Add new language definition or extend an
    //           // existing language" below.
    //           languageExtensions: [
    //             {
    //               language: 'superscript',
    //               extend: 'javascript',
    //               definition: {
    //                 superscript_types: /(SuperType)/,
    //               },
    //               insertBefore: {
    //                 function: {
    //                   superscript_keywords: /(superif|superelse)/,
    //                 },
    //               },
    //             },
    //           ],
    //           // Customize the prompt used in shell output
    //           // Values below are default
    //           prompt: {
    //             user: 'root',
    //             host: 'localhost',
    //             global: false,
    //           },
    //           // By default the HTML entities <>&'" are escaped.
    //           // Add additional HTML escapes by providing a mapping
    //           // of HTML entities and their escape value IE: { '}': '&#123;' }
    //           escapeEntities: {},
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-prismjs`],
    //   },
    // },
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
