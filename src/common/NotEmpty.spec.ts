import { NotEmpty } from './NotEmpty';
import { it, describe, expect } from '@jest/globals';
describe(`Not Empty function`, () => {
  it(`should return a concatenated string without the nulls`, () => {
    const array: (string | null)[] = [`foo`, `bar`, null, `zoo`, null];
    const filteredString: string = array.filter(NotEmpty).join(``);

    expect(filteredString).toStrictEqual(`foobarzoo`);
  });

  it(`should return an array without the nulls`, () => {
    const array: (string | null)[] = [`foo`, `bar`, null, `zoo`, null];
    const filteredArray: string[] = array.filter(NotEmpty);

    expect(filteredArray).toEqual(
      expect.arrayContaining([`foo`, `bar`, `zoo`]),
    );
  });
});
