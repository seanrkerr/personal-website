import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import { PortfolioResponse } from "../common/PortfolioResponse";
import PortfolioService from "../services/PortfolioService";
import PortFolioList from "../components/PortfolioList";
import Heading from "../components/Heading";

import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import Head from "next/head";
import PortfolioLayout from "../components/PortfolioLayout";

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
      <Heading>
        <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl">
          Portfolio
        </h1>
      </Heading>
      <PortFolioList
        // @ts-ignore
        listData={data}
      />
    </div>
  );
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <PortfolioLayout>{page}</PortfolioLayout>;
};
