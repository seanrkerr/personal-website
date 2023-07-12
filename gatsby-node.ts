import type { GatsbyNode, CreatePagesArgs } from 'gatsby';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

console.log(`${process.env.RESTURL_PORTFOLIO}`);

async function getPortfolio(start: number, limit: number) {
  const response = await fetch(
    `${process.env.RESTURL_PORTFOLIO}/portfolio?start=${start}&limit=${limit}`,
  );

  const data = await response.json();

  return data;
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type siteMetadata {
      title: String
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat   
      bannerImage: File
      tags: [String]
    }

    type Fields {
      slug: String
    }

    type PortfolioHome implements Node {
        name: String
        story: String
        image: String
        link: String
    }
    
  `);
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const homePage = await getPortfolio(0, 6);

  homePage.forEach((item) => {
    item.id = item.id.toString();
    createNode({
      ...item,
      internal: {
        type: `PortfolioHome`,
        contentDigest: createContentDigest(item),
      },
    });
  });

  const portfolioPage = await getPortfolio(2, 6);

  portfolioPage.forEach((prtItem) => {
    prtItem.id = prtItem.id.toString();
    createNode({
      ...prtItem,
      internal: {
        type: `PortfolioPage`,
        contentDigest: createContentDigest(prtItem),
      },
    });
  });
};

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve('./src/templates/BlogPostTemplate.tsx');

  //const result = await graphql<Queries.GatsbyNodeCreatePagesQuery>(
  const result = await graphql<any>(
    `
      query GatsbyNodeCreatePages {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading the MDX result',
      result.errors,
    );
  }

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter?.slug}`,
      component: `${BlogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
