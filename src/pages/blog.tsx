import React from 'react';
import { SEO, useSEO } from 'gatsby-plugin-seo';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BlogLayout from '@/components/BlogLayout';

export function BlogLeadingImage({ data }) {
  const img = getImage(data.frontmatter?.bannerImage);

  return (
    <GatsbyImage
      className="rounded-lg display-block"
      alt={data.frontmatter?.title}
      image={img}
    />
  );
}

const BlogPage: React.FC<PageProps<any>> = ({ data }) => {
  const { siteUrl } = useSEO();

  return (
    <BlogLayout>
      <SEO
        title="Blog"
        description="Blog of Sean Kerr"
        pagePath="/"
        schema={`{
              "@context": "http://schema.org",
              "@type": "WebPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Sean Kerr",
                "image": "${siteUrl}/img/logo.ed3bbad2.png"
              }
            }`}
      />
      <div className="relative bg-gray-50 px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-8 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sean{`'`}s blog
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Opinions here are my own and have nothing to do with past, present
              or future clients.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-3">
            {data?.allMdx?.edges?.map(({ node }) => (
              <div
                key={node.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <Link
                  to={`/blog/${node.frontmatter?.slug}`}
                  className="block rounded-lg border border-gray-200 p-6"
                >
                  <BlogLeadingImage data={node} />
                  <h2 className="mb-4 mt-4 text-xl font-bold">
                    {node.frontmatter?.title}
                  </h2>
                  <span className="mb-2 block text-sm font-thin">
                    By {node.frontmatter?.author} on {node.frontmatter?.date}
                  </span>
                  <span className="block text-md">{node.excerpt}</span>
                  <p className="text-sm mt-4 font-medium text-indigo-600">
                    {node.frontmatter?.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="inline-block items-center px-3 py-1 mx-1  rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            bannerImage {
              childImageSharp {
                gatsbyImageData(width: 600, layout: FULL_WIDTH)
              }
            }
            tags
          }
        }
      }
    }
  }
`;
