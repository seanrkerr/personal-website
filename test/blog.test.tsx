import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blog from "@/pages/blog";

const dataResult = [
  {
    slug: "this is a slug",
    frontmatter: {
      title: "this is the title",
      author: "this is the author",
      category: "CDK",
      date: "2022-03-13",
      readTime: 5,
      bannerImage: "image.png",
      tags: ["ONE", "TWO", "THREE"],
    },
  },
];

test("loads the home comp with one tile", async () => {
  const { getByAltText } = render(<Blog posts={dataResult} />);

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("Sean's blog");
  expect(screen.getByText("this is the title")).toBeDefined;
  expect(screen.getByText("this is the author")).toBeDefined;
});
