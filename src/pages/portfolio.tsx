import { SEO, useSEO } from 'gatsby-plugin-seo';
import Layout from '@/components/Layout';
import LoadingComp from '@/components/LoadingComp';
import PortfolioService from '@/services/PortfolioService';
import { useState, useEffect } from 'react';
import PortfolioTile from '@/components/PortfolioTile';
import ErrorComp from '@/components/ErrorComp';

const MAX_PORTFOLIO_PAGES = 3;

export default function Portfolio() {
  const { siteUrl } = useSEO();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moreRows, setMoreRows] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const portfolio = new PortfolioService();
    setIsLoading(true);

    const fetchData = async () => {
      return await portfolio.get(
        `${process.env.GATSBY_RESTURL_PORTFOLIO}/portfolio?start=${currentPage}&limit=6`,
      );
    };
    fetchData()
      .then((res) => {
        console.log(`res`, res);
        if (res.type !== `success`) {
          throw new Error(`no data returned`);
        }

        if (currentPage === MAX_PORTFOLIO_PAGES) {
          setMoreRows(false);
        }

        setData((prev) => [...prev, ...res?.data]);
        setHasError(false);
      })
      .catch((err) => {
        console.log(`err`, err);
        setHasError(true);
        setMoreRows(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  const renderPortFolio = () => {
    return data.map((portFolioRow) => {
      return (
        <PortfolioTile
          rowId={portFolioRow?.id}
          link={portFolioRow?.link}
          name={portFolioRow?.name}
          image={portFolioRow?.image}
          story={portFolioRow?.story}
          key={`parent_${portFolioRow?.id}`}
        />
      );
    });
  };
  const loadMore = () => {
    if (isLoading) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Layout>
      <SEO
        title="Home"
        description="Portfolio of Sean Kerr"
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
      <section className="-mt-32 grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 relative max-w-8xl mx-auto pt-8 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12">
        {renderPortFolio()}
        {hasError && <ErrorComp />}
        {moreRows && (
          <>
            <div> &nbsp;</div>
            {!isLoading ? (
              <button
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 mt-8"
                onClick={loadMore}
              >
                Load More
              </button>
            ) : (
              ``
            )}

            {isLoading ? <LoadingComp /> : ``}
          </>
        )}
      </section>
    </Layout>
  );
}
