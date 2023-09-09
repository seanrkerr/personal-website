import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  name: string;
  description: string;
  lang: string;
  meta: string;
  title: string;
  pageName: string;
  lang: string;
};

const Seo: React.FC<SEOProps> = function ({
  description,
  lang = `en`,
  meta = [],
  title = ``,
  pageName = ``,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
            keywords
            ahrefs
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const image = site.siteMetadata.image;
  const url = site.siteMetadata.url;
  const keywords = site.siteMetadata.keywords;
  const ahrefsContent = site.siteMetadata.ahrefs;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `ahrefs-site-verification`,
          content: ahrefsContent,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: `${url}/${pageName}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
