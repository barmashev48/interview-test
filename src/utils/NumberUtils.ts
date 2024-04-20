export const roundToTwoDecimals = (num: number): number => {
  if (isNaN(num)) {
    throw new Error("Input has too be a number");
  }
  return Math.round(num * 100) / 100;
};
