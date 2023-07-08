import { z } from 'zod';

export const PortfolioResponseDecoder = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    story: z.string(),
    link: z.string(),
    image: z.string(),
  }),
);

export type PortfolioResponse = z.infer<typeof PortfolioResponseDecoder>;
