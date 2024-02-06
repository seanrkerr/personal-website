import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

type LocationProps = {
  children: React.node;
  title?: string;
  layoutShim?: string;
};

const Layout: React.FC<LocationProps> = function ({
  children,
  title,
  layoutShim,
}) {
  return (
    <>
      <Header name="header" />
      <Hero title={title} layoutShim={layoutShim} />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default Layout;
