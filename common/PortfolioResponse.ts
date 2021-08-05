import { z } from "zod";

export const PortfolioResponseDecoder = z.array(
  z.object({
    userId: z.number(),
    title: z.string(),
    body: z.string(),
  })
);

export type PortfolioResponse = z.infer<typeof PortfolioResponseDecoder>;
