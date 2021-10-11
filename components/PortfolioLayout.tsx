import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

type LocationProps = {
  children: JSX.Element;
};

const PortfolioLayout: React.FC<LocationProps> = function ({ children }) {
  return (
    <>
      <Header name="header" />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default PortfolioLayout;
