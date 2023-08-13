import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

type LocationProps = {
  children: React.node;
  title?: string;
};

const Layout: React.FC<LocationProps> = function ({ children, title }) {
  return (
    <>
      <Header name="header" />
      <Hero title={title} />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default Layout;
