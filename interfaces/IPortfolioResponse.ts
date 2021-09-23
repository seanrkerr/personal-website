export interface IPortfolioResponse {
  data: Array<Type>;
}
interface Type {
  id: number;
  name: string;
  story: string;
  link: string;
  image: string;
}
