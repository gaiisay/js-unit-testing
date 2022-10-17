import { helloWorld } from "./hello.js";

describe("helloWorld function", () => {
  it('returns "Hello, World!"', () => {
    const expected = "Hello, World!";

    const actual = helloWorld();

    expect(actual).toBe(expected);
  });
});
