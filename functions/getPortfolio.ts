import { Result } from "../common/Result";
import {
  PortfolioResponse,
  PortfolioResponseDecoder,
} from "../common/PortfolioResponse";
import { ParseJson } from "../common/ParseJson";

export default async function getPortfolio({
  apiEndpoint,
}: {
  apiEndpoint: string;
}): Promise<Result<PortfolioResponse | undefined>> {
  const response = await fetch(apiEndpoint);

  const { ok, status } = response;

  if (status === 404) {
    return { type: "success", data: undefined };
  }

  const body = JSON.stringify(await response.json());

  if (!ok) {
    return {
      type: "failure",
      error: new Error("The call to get the portfolio has failed"),
    };
  }

  const parsed = ParseJson(body);

  if (parsed.type === "failure") {
    return {
      type: "failure",
      error: new Error("unable to parse response"),
    };
  }

  const decoded = ok ? PortfolioResponseDecoder.safeParse(parsed.data) : "";

  if (!decoded) {
    return {
      type: "failure",
      error: new Error("unable to decode reponse"),
    };
  }

  return { type: "success", data: parsed.data as PortfolioResponse };
}
