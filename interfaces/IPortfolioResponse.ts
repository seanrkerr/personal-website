export interface IPortfolioResponse {
  data: Array<Type>;
}
interface Type {
  userId: number;
  title: string;
  body: string;
}
