import getPortfolio from "./getPortfolio";
import { Result } from "../common/Result";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

const expectedHappyPath = [
  {
    userId: 1,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\n" +
      "sit amet autem assumenda provident rerum culpa\n" +
      "quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n" +
      "quis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\n" +
      "alias aut fugiat sit autem sed est\n" +
      "voluptatem omnis possimus esse voluptatibus quis\n " +
      "est aut tenetur dolor neque",
  },
];

import fetch, { Response } from "node-fetch";

jest.mock("node-fetch");

describe("getPortfolio", () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  it("should return successfull from happy path call", async () => {
    const json = jest.fn() as jest.MockedFunction<any>;
    json.mockResolvedValue(expectedHappyPath);
    mockFetch.mockResolvedValue({ ok: true, json } as Response);
    const result = await getPortfolio({ apiEndpoint: "http://somewhere.com" });
    expect(json.mock.calls.length).toBe(1);
    expect(result.type).toBe("success");
    expect(result).toEqual({ data: expectedHappyPath, type: "success" });
  });

  it("should return an empty array when the call hits an unknown url", async () => {
    const json = jest.fn() as jest.MockedFunction<any>;
    json.mockResolvedValue([]);
    mockFetch.mockResolvedValue({ ok: true, json } as Response);
    const result = await getPortfolio({ apiEndpoint: "http://somewhere" });
    expect(json.mock.calls.length).toBe(1);
    expect(result.type).toBe("success");
    expect(result).toEqual({ data: [], type: "success" });
  });

  it("should return an error when an error response is encountered", async () => {
    const json = jest.fn() as jest.MockedFunction<any>;
    json.mockResolvedValue({ message: "something happened" });
    mockFetch.mockResolvedValue({ ok: false, json } as Response);
    const result = await getPortfolio({ apiEndpoint: "http://somewhere" });
    expect(json.mock.calls.length).toBe(1);
    expect(result.type).toBe("failure");
    expect(result).toEqual({
      error: new Error("The call to get the portfolio has failed"),
      type: "failure",
    });
  });

  it("should return an error when the endpoint address is not correct", async () => {
    const json = jest.fn() as jest.MockedFunction<any>;
    mockFetch.mockResolvedValue({ status: 404 } as Response);
    const result = await getPortfolio({ apiEndpoint: "http://xxx" });

    expect(result).toEqual({
      error: new Error("uanble to find endpoint"),
      type: "failure",
    });
  });
});
