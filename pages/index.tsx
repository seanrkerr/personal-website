import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import PortfolioService from "../services/PortfolioService";

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
    `${process.env.RESTURL_PORTFOLIO}/portfolio?start=0&limit=3`
  );

  return {
    props: data as unknown as IPortfolioResponse,
  };
}

export default function Home({ data }: IPortfolioResponse) {
  return (
    <div>
      <Head>
        <title>Sean Kerr - Full stack developer, Sydney Australia - Home</title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <meta
          name="google-site-verification"
          content="KPYEFLYYp4GultUHul8bn9owpxenQz-5Dn7NwXAfWMU"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="-mt-32 max-w-8xl mx-auto pt-16 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 relative">
          {data?.length > 0 ? (
            <>
              {data.map((link: any) => (
                <div
                  key={link.name}
                  className="flex flex-col bg-white rounded-2xl shadow-xl"
                >
                  <div className="flex-1 relative pt-8 px-6 pb-8 md:px-8">
                    <h3 className="text-xl font-medium text-gray-900">
                      {link.name}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">{link.story}</p>
                  </div>
                  <div className="p-6 md:bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8 sm:bg-white-100 sm:mx-auto">
                    <Image
                      data-testid="portfolio-tile-image"
                      className="mt-2"
                      src={`/${link.image}`}
                      alt={link.name}
                      width={425}
                      height={273}
                      priority={true}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h3 className="text-xl font-medium text-white">
              Unable to load portfolio{" "}
              <span role="img" aria-label="disappointed face">
                😞
              </span>
            </h3>
          )}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
