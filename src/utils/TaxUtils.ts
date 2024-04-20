import { TaxBracket, TaxBreakdown } from "@apptypes/TaxCalculationTypes.ts";
import { roundToTwoDecimals } from "@utils/NumberUtils.ts";
import { v4 as uuidv4 } from "uuid";

export const getTaxBreakdown = (
  salary: number,
  year: string,
  taxBrackets: TaxBracket[],
): TaxBreakdown => {
  const result: TaxBreakdown = {
    brackets: [],
    totalTaxable: 0,
    totalTax: 0,
    description: `Tax breakdown for $${salary} salary in ${year}`,
  };

  taxBrackets.forEach((_bracket) => {
    const commonBracketData = getCommonBracketData(_bracket);

    const upperLimit = getUpperLimit(salary, _bracket);

    if (salary > _bracket.min) {
      const taxableAmount = roundToTwoDecimals(upperLimit - _bracket.min);
      const payableTax = roundToTwoDecimals(taxableAmount * _bracket.rate);

      result.totalTaxable = roundToTwoDecimals(
        result.totalTaxable + taxableAmount,
      );
      result.totalTax = roundToTwoDecimals(result.totalTax + payableTax);

      result.brackets.push({
        ...commonBracketData,
        taxableAmount: taxableAmount,
        payableTax: payableTax,
      });
    } else if (salary <= _bracket.min) {
      result.brackets.push({
        ...commonBracketData,
        taxableAmount: 0,
        payableTax: 0,
      });
    }
  });

  return result;
};

const getUpperLimit = (salary: number, bracket: TaxBracket): number => {
  return bracket.max ? Math.min(bracket.max, salary) : salary;
};

const getPercentageFromRate = (rate: number): number => {
  return roundToTwoDecimals(rate * 100);
};

const getBracketRange = (bracket: TaxBracket) => {
  if (!bracket.max) {
    return `$${bracket.min} +`;
  }
  return `$${bracket.min} - $${bracket.max}`;
};

const getCommonBracketData = (
  bracket: TaxBracket,
): {
  id: string;
  range: string;
  effectiveRate: string;
} => {
  const bracketRange = getBracketRange(bracket);
  const bracketEffectiveRate = `${getPercentageFromRate(bracket.rate)}`;
  const id = uuidv4();

  return {
    id: id,
    range: bracketRange,
    effectiveRate: bracketEffectiveRate,
  };
};
