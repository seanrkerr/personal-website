import { rest } from "msw";

import getPortfolio from "./getPortfolio";
import { Result } from "../common/Result";
import { server } from "../mocks/server";

describe("getPortfolio", () => {});
it("should return successfull from happy path call", async () => {
  const result = await getPortfolio({ apiEndpoint: "https://my.portfolio" });

  expect(result.type).toBe("success");
  expect(result.data.name).toBe("NRMA");
  expect(result.data.story).toBe("This was a cool project");
});

it("should return successfull from a 404", async () => {
  const result = await getPortfolio({ apiEndpoint: "https://somewhere" });

  expect(result.type).toBe("success");
  expect(result.data).toStrictEqual(undefined);
});

it("should return an error with a message", async () => {
  const result = await getPortfolio({ apiEndpoint: "https://error" });

  expect(result.type).toBe("failure");
  expect(result.error).toStrictEqual(
    new Error("The call to get the portfolio has failed")
  );
});
