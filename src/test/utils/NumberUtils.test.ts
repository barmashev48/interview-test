import { roundToTwoDecimals, multiply } from "@utils/NumberUtils";

describe("roundToTwoDecimals", () => {
  it("should correctly round numbers", () => {
    const expectedRoundedNumber = 10289.98;

    const roundedNumber = roundToTwoDecimals(10289.975);
    expect(roundedNumber).toEqual(expectedRoundedNumber);
  });
});

describe("multiply", () => {
  it("should correctly multiply numbers", () => {
    const expectedNumber = 10289.975;

    const multipliedNumber = multiply(50195, 0.205);
    expect(multipliedNumber).toEqual(expectedNumber);
  });
});
