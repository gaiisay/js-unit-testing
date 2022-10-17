import { greeting } from "./greeting.js";

describe("greeting(name) function", () => {
  it('returns "Hello friend!" when name equals Jessica or Andrea', () => {
    const input1 = "Jessica";
    const input2 = "Andrea";
    const expected = "Hello friend!";

    const actual1 = greeting(input1);
    const actual2 = greeting(input2);

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });

  it('returns "Hello there!" when name is not Jessica or Andrea', () => {
    const input = "Gai";
    const expected = "Hello there!";

    const actual = greeting(input);

    expect(actual).toBe(expected);
  });

  it("throws an error when typeof name != string", () => {
    const input1 = undefined;
    const input2 = 1;
    const input3 = null;
    const input4 = true;
    const expectedErrorMessage = "Please enter a name as a string";

    const call1 = () => greeting(input1);
    const call2 = () => greeting(input2);
    const call3 = () => greeting(input3);
    const call4 = () => greeting(input4);

    expect(call1).toThrow(expectedErrorMessage);
    expect(call2).toThrow(expectedErrorMessage);
    expect(call3).toThrow(expectedErrorMessage);
    expect(call4).toThrow(expectedErrorMessage);
  });
});
