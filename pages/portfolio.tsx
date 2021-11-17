import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import { PortfolioResponse } from "../common/PortfolioResponse";
import PortfolioService from "../services/PortfolioService";
import PortFolioList from "../components/PortfolioList";

import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import Head from "next/head";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const portfolio = new PortfolioService();

  const data = await portfolio.get(
    `${process.env.RESTURL_PORTFOLIO}/portfolio?start=2&limit=3`
  );

  return {
    props: data as unknown as IPortfolioResponse,
  };
}

export default function Portfolio({ data }: IPortfolioResponse) {
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

      <PortFolioList
        // @ts-ignore
        listData={data}
      />
    </div>
  );
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
