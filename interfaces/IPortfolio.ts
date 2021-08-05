import { Result } from "../common/Result";
import { PortfolioResponse } from "../common/PortfolioResponse";
export interface IPortfolio {
  get(apiEndpoint: string): Promise<Result<PortfolioResponse | undefined>>;
}
