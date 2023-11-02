import * as React from 'react';
import { Link, graphql, PageProps, Queries } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

import BlogLayout from '@/components/BlogLayout';
import Seo from '@/components/Seo';

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

const BlogIndexTemplate: React.FC<PageProps<Queries.BlogPost>> = ({
  data,
  pageContext,
}) => {
  const posts = data?.allMdx.edges || [];
  const { currentPage, numberOfPages } = pageContext || {};
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;

  const prevPage =
    currentPage - 1 === 1 ? `/blog/1` : `/blog/${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  return (
    <>
      <Seo title="Welcome to my Blog" pageName="Blog Index" />
      <BlogLayout>
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
                Opinions here are my own and have nothing to do with past,
                present or future clients.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-3">
              {posts.map(({ node }) => (
                <div
                  key={node.id}
                  className="flex flex-col overflow-hidden rounded-sm shadow-lg"
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
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            {!isFirst && (
              <Link
                to={prevPage}
                rel="prev"
                className="blogNav mt-2 relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
              >
                <ArrowLongLeftIcon
                  className="mr-3 h-5 w-10 text-gray-900"
                  aria-hidden="true"
                />
                Previous Page
              </Link>
            )}
          </div>
          <div className="hidden md:-mt-px md:flex"></div>
          <div className="-mt-px">
            {!isLast && (
              <Link
                to={nextPage}
                rel="next"
                className="blogNav mt-2 relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
              >
                Next Page
                <ArrowLongRightIcon
                  className="mr-3 h-5 w-10 text-gray-900"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </nav>
      </BlogLayout>
    </>
  );
};

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query BlogPostsByPageNumber($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
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
