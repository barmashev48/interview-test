import { getTaxBreakdown } from "@utils/TaxUtils.ts";
import { TaxBracket } from "@apptypes/TaxCalculationTypes";

describe("getTaxBreakdown", () => {
  const taxBrackets: TaxBracket[] = [
    { max: 50197, min: 0, rate: 0.15 },
    { max: 100392, min: 50197, rate: 0.205 },
    { max: 155625, min: 100392, rate: 0.26 },
    { max: 221708, min: 155625, rate: 0.29 },
    { min: 221708, rate: 0.33 },
  ];

  test("should calculate correctly", () => {
    const result = getTaxBreakdown(1234567, "2022", taxBrackets);

    expect(result).toEqual({
      brackets: [
        {
          id: expect.any(String),
          range: "$0 - $50197",
          effectiveRate: 15,
          taxableAmount: 50197,
          payableTax: 7529.55,
        },
        {
          id: expect.any(String),
          range: "$50197 - $100392",
          effectiveRate: 20.5,
          taxableAmount: 50195,
          payableTax: 10289.98,
        },
        {
          id: expect.any(String),
          range: "$100392 - $155625",
          effectiveRate: 26,
          taxableAmount: 55233,
          payableTax: 14360.58,
        },
        {
          id: expect.any(String),
          range: "$155625 - $221708",
          effectiveRate: 29,
          taxableAmount: 66083,
          payableTax: 19164.07,
        },
        {
          id: expect.any(String),
          range: "$221708 +",
          effectiveRate: 33,
          taxableAmount: 1012859,
          payableTax: 334243.47,
        },
      ],
      totalTaxable: 1234567,
      totalTax: 385587.65,
      description: "Tax breakdown for $1234567 salary in 2022",
    });
  });
});
