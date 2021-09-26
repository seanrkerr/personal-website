import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import PortfolioService from "../services/PortfolioService";
import PortFolioList from "../components/PortfolioList";

import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import Head from "next/head";
import Layout from "../components/Layout";

// export async function getStaticProps() {
//   const portfolio = new PortfolioService();
//   const data = await portfolio.get(
//     "https://dev-seankerr-api.seankerr.com/portfolio?start=0&limit=3"
//   );

//   return { props: data as unknown as IPortfolioResponse };
// }

//export default function Portfolio({ data }: IPortfolioResponse) {

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>
          Sean Kerr - Full stack developer, Sydney Australia - Portfolio
        </title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortFolioList />
    </div>
  );
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
