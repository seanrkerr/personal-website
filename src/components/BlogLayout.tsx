import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LocationProps = {
  children: React.node;
};

const BlogLayout: React.FC<LocationProps> = function ({ children }) {
  return (
    <>
      <Header name="header" />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default BlogLayout;
