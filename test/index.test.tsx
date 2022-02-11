import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

const dataResult = [
  {
    id: 1,
    name: "test-me",
    story: "this is a test",
    link: "https://xxx.net",
    image: "someimage.png",
  },
];

test("loads the home comp with one tile", async () => {
  const { getByAltText } = render(<Home data={dataResult} />);

  await waitFor(() => screen.getByRole("heading"));

  const image = getByAltText("test-me");

  expect(screen.getByRole("heading")).toHaveTextContent("test-me");
  expect(image).toBeDefined();
  expect(image.src).toContain("data:image/gif;");
});
