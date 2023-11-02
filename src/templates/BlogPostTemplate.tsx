import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps, Queries } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import BlogLayout from '@/components/BlogLayout';
import Seo from '@/components/Seo';

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPost>> = ({
  data,
  children,
}) => {
  return (
    <>
      <Seo
        title={data.mdx?.frontmatter?.title}
        pageName={data.mdx?.frontmatter?.title}
      />
      <BlogLayout>
        <div className="pt-8 bg-white px-6 py-32 lg:px-8">
          <a
            href="/blog"
            className="blogNav mb-2 relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-rose-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp; Back to blog index
          </a>
          <hr />

          <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <header className="mt-4 lg:mb-6 not-format">
              <address className="mb-6 not-italic">
                <div className="text-sm text-gray-900 dark:text-white">
                  <StaticImage
                    className="w-16 h-16 rounded-full display-inline-block"
                    src="../../public/seankerr.png"
                    alt="Sean Kerr"
                    width={120}
                    height={120}
                  />

                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Sean Kerr
                    </a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      Full Stack Engineer
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        dateTime={data.mdx?.frontmatter?.date}
                        title={data.mdx?.frontmatter?.date}
                      >
                        {data.mdx?.frontmatter?.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
            </header>
            <MDXProvider>
              <div className="blog">{children}</div>
            </MDXProvider>
          </article>
          <hr className="mt-2" />
          <a
            href="/blog"
            className="blogNav mt-2 relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp; Back to blog index
          </a>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
