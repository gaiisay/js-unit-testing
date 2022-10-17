import { moreGreetings, friends } from "./moreGreetings.js";

describe("moreGreetings(name) function", () => {
  it('returns "Hello friend!" when name is in friends[]', () => {
    const [...input] = friends;
    const expected = "Hello friend!";

    friends.forEach((friend) => {
      expect(moreGreetings(friend)).toBe(expected);
    });
  });

  it('returns "Hello there!" when name is not in friends[]', () => {
    const input = "Gai";
    const expected = "Hello there!";

    const actual = moreGreetings(input);

    expect(actual).toBe(expected);
  });

  it("throws an error when typeof name != string", () => {
    const input1 = undefined;
    const input2 = 1;
    const input3 = null;
    const input4 = true;
    const expectedErrorMessage = "Please enter a name as a string";

    const call1 = () => moreGreetings(input1);
    const call2 = () => moreGreetings(input2);
    const call3 = () => moreGreetings(input3);
    const call4 = () => moreGreetings(input4);

    expect(call1).toThrow(expectedErrorMessage);
    expect(call2).toThrow(expectedErrorMessage);
    expect(call3).toThrow(expectedErrorMessage);
    expect(call4).toThrow(expectedErrorMessage);
  });
});
