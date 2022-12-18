import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { AppProps } from "next/app";
import Head from "next/head";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { PostInfo } from "../types/global";

import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import BlogLayout from "../components/BlogLayout";
import Heading from "../components/Heading";

export default function Blog({ posts }: { posts: Array<PostInfo> }) {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sean{`'`}s blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Opinions here are my own and have nothing to do with past, present
            or future clients.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: PostInfo) => {
            const { slug, frontmatter } = post;

            const {
              title,
              author,
              category,
              date,
              bannerImage,
              tags,
              readTime,
            } = frontmatter;

            return (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={bannerImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a href={`posts/${slug}`} className="mt-2 mb-2 block">
                      <p className="text-xl font-semibold text-blue-900">
                        {title}
                      </p>
                    </a>
                    <p className="text-sm font-medium text-indigo-600">
                      {tags.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="inline-block items-center px-3 py-1 mx-1  rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {/* <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a> */}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={"about"} className="hover:underline">
                          {author}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={date}>{date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
      frontmatter: { title: "blog" },
    },
  };
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};
