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
    return { type: "failure", error: new Error("uanble to find endpoint") };
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

  //TODO add in, reafactor tests
  //   const decoded = ok ? PortfolioResponseDecoder.safeParse(parsed.data) : "";
  //   console.log("decoded---------------", decoded);

  //   if (!decoded.success) {
  //     return {
  //       type: "failure",
  //       error: new Error("unable to decode reponse"),
  //     };
  //   }

  //   console.log("decoded data---------------", decoded.data);

  return { type: "success", data: parsed.data as PortfolioResponse };
}
