import { getBaseUrl, makeRequest } from "@utils/ApiUtils.ts";
import { TaxBracket } from "@types/TaxCalculationTypes.ts";
import TaxBracketApiResponseSchema from "@schemas/TaxBracketsApiResponseSchema.ts";

export const fetchTaxBrackets = async (year: string): Promise<TaxBracket[]> => {
  console.log("fetching", year);
  const responseData = await makeRequest(
    `${getBaseUrl()}/tax-calculator/tax-year/${year}`,
  );

  const data = await TaxBracketApiResponseSchema.validate(responseData, {
    abortEarly: false,
  });
  return data.tax_brackets;
};
