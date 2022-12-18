import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "./Footer";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
if (process.browser) {
  document.querySelectorAll("code").forEach((el) => {
    hljs.highlightElement(el);
  });
}
const Header = dynamic(() => import("./Header"), { ssr: false });

type LocationProps = {
  children: JSX.Element;
};

const BlogLayout: React.FC<LocationProps> = function ({ children }) {
  const { title: pageTitle } = children?.props?.frontmatter;

  return (
    <>
      <Head>
        <title>Blog post: {pageTitle || ""}</title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8413403065744703"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header name="header" />
      <main>{children}</main>
      <Footer name="footer" />
    </>
  );
};

export default BlogLayout;
