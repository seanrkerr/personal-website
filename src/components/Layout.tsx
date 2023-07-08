import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

type LocationProps = {
  children: React.node;
};

const Layout: React.FC<LocationProps> = function ({ children }) {
  return (
    <>
      <Header name="header" />
      <Hero />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default Layout;
