import { rest } from "msw";
import { portfolioHappyPath, error } from "./responses";

export const handlers = [
  rest.get("https://my.portfolio", (req, res, ctx) => {
    return res(ctx.json(portfolioHappyPath[0]));
  }),
  rest.get("https://somewhere", (req, res, ctx) => {
    return res(ctx.status(404), ctx.json());
  }),
  rest.get("https://error", (req, res, ctx) => {
    return res(ctx.status(500), ctx.json(error.body));
  }),
];
