import { SEO, useSEO } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ErrorComp from '@/components/ErrorComp';
import Helmet from 'react-helmet';

export default function Home({ data }) {
  const { siteUrl } = useSEO();
  const {
    allPortfolioHome: { edges } = { allPortfolioHome: null, edges: null },
  } = data;

  return (
    <Layout>
      <SEO
        title="Home"
        description="Homepage of Sean Kerr"
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
      <Helmet>
        <meta
          name="ahrefs-site-verification"
          content="dc81e744fc1751c07164efce0964adc4f15ef95df2bc8dd064dca395d2aefa11"
        />
      </Helmet>
      <section
        className="-mt-32 max-w-8xl mx-auto pt-16 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 relative">
          {!!edges && edges?.length > 0 ? (
            <>
              {edges.map((link: object, idx: number) => (
                <div
                  key={link?.node?.name}
                  className={`${
                    idx >= 3 ? `mt-8` : ``
                  } flex flex-col bg-white rounded-2xl shadow-xl`}
                >
                  <div className="flex-1 relative pt-8 px-6 pb-8 md:px-8">
                    <h3 className="text-xl font-medium text-gray-900">
                      {link?.node?.name}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">
                      {link?.node.story}
                    </p>
                  </div>
                  <div className="p-6 md:bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8 sm:bg-white-100 sm:mx-auto">
                    <img
                      data-testid="portfolio-tile-image"
                      className="mt-2"
                      src={`/${link.node?.image}`}
                      alt={link?.node?.name}
                      width={425}
                      height={273}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <ErrorComp />
          )}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allPortfolioHome {
      edges {
        node {
          id
          name
          story
          image
          link
        }
      }
    }
  }
`;
