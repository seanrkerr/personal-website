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
    "https://dev-seankerr-api.seankerr.com/portfolio?start=0&limit=3"
  );

  return { props: data as unknown as IPortfolioResponse };
}

export default function Home({ data }: IPortfolioResponse) {
  return (
    <div>
      <Head>
        <title>Sean Kerr - Full stack developer, Sydney Australia</title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="-mt-32 max-w-8xl mx-auto pt-16 md:pt-26 relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Sean Kerr - Full stack developer, Sydney Australia
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {data.length > 0 ? (
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
                  <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <Image
                      className="mt-2"
                      src={`/${link.image}`}
                      alt="Logo"
                      width={425}
                      height={273}
                    />

                    <a
                      href={link.link}
                      className="text-base block clear-both font-medium text-indigo-700 hover:text-indigo-600"
                    >
                      See it<span aria-hidden="true"> &rarr;</span>
                    </a>
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
