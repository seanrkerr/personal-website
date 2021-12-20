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
import Layout from "../components/Layout";
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
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 relative -mt-32 max-w-8xl mx-auto pt-8 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-24">
        <div className="flex flex-col bg-white rounded-2xl shadow-xl mt-8">
          <div className="flex-1 relative pt-8 px-12 pb-8 md:px-8">
            {/* <h3 className="text-xl font-medium text-gray-900">//</h3> */}
            <p className="mt-4 text-base text-gray-500">
              You can get in touch with me by emailing me at sean@seankerr.com.
              I will try to get to your emails as soon as I can, but I can{"'"}t
              guarantee it will be under a week.
            </p>
            <p className="mt-4 text-base text-gray-500">
              Happy to be contacted regarding roles as I am a contractor. My
              resume can also be supplied on request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
