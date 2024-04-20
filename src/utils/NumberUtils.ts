export const roundToTwoDecimals = (num: number): number => {
  if (isNaN(num)) {
    throw new Error("Input has too be a number");
  }

  return Math.round(num * 100) / 100;
};

export const multiply = (a: number, b: number): number => {
  return (a * 1000 * (b * 1000)) / 1000000;
};
