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

export default function About() {
  return (
    <div>
      <Head>
        <title>
          Sean Kerr - Full stack developer, Sydney Australia - About
        </title>
        <meta
          name="description"
          content="Full stack developer, Sydney Australia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 relative -mt-32 max-w-8xl mx-auto pt-8 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12">
        <div className="flex flex-row bg-white rounded-2xl shadow-xl mt-8 h-full">
          <div className="flex-1 relative pt-8 px-12 pb-8 md:px-8">
            <p className="mt-4 ml-3 text-base text-gray-500 mb-4">
              Hey I{"'"}m Sean. That{"'"}s me in the middle with my wife Anna
              and my two sons Julian, Jordan.
            </p>
            <Image
              className="my-8 display-block"
              src="/family.jpeg"
              alt="Family"
              width={330}
              height={300}
            />
            <p className="mt-4 ml-3 text-base text-gray-500">
              I{"'"}ve been a developer for over 20 years. I live in Sydney,
              Australia.
            </p>
            <p className="mt-4 ml-3 text-base text-gray-500">
              At this moment I{"'"}m predominantly a full stack engineer and a
              serverless specialist.
            </p>
            <p className="mt-4 ml-3 text-base text-gray-500">
              I love learning new things and exploring changes in the technology
              space.
            </p>
            <p className="mt-4 ml-3 text-base text-gray-500">
              I have a few hobbies like Gardening, Cooking and Surfing just to
              name a few.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
