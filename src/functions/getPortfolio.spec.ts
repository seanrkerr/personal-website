import { it, describe, expect } from '@jest/globals';
import { portfolioHappyPath, error } from '../../mocks/responses';

import getPortfolio from './getPortfolio';

describe(`getPortfolio`, () => {});
it(`should return successfull from happy path call`, async () => {
  const result = await getPortfolio({ apiEndpoint: `https://my.portfolio` });

  expect(result.type).toBe(`success`);
  expect(result).toStrictEqual({
    type: `success`,
    data: portfolioHappyPath[0],
  });
});

it(`should return successfull from a 404`, async () => {
  const result = await getPortfolio({ apiEndpoint: `https://somewhere` });
  expect(result.type).toBe(`success`);
  expect(result).toStrictEqual({ type: `success`, data: undefined });
});

it(`should return an error with a message`, async () => {
  const result = await getPortfolio({ apiEndpoint: `https://error` });
  expect(result.type).toBe(`failure`);
  expect(result).toStrictEqual(error);
});
