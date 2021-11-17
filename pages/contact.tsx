import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";

import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import Head from "next/head";
import PortfolioLayout from "../components/PortfolioLayout";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>
          Sean Kerr - Full stack developer, Sydney Australia - Contact
        </title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>
        <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl">
          Contact
        </h1>
      </Heading>
    </div>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <PortfolioLayout>{page}</PortfolioLayout>;
};
