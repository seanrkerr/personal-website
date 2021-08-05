import { Result } from "../common/Result";
import { PortfolioResponse } from "../common/PortfolioResponse";
import { IPortfolio } from "../interfaces/IPortfolio";
import getPortfolio from "../functions/getPortfolio";

export default class PortfolioService implements IPortfolio {
  constructor() {}

  get(apiEndpoint: string): Promise<Result<PortfolioResponse | undefined>> {
    return getPortfolio({
      apiEndpoint,
    });
  }
}
