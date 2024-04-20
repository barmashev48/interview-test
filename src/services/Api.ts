import { getBaseUrl, makeRequest } from "@utils/ApiUtils.ts";
import { TaxBracket } from "@apptypes/TaxCalculationTypes.ts";
import TaxBracketApiResponseSchema from "@schemas/TaxBracketsApiResponseSchema.ts";

export const fetchTaxBrackets = async (year: string): Promise<TaxBracket[]> => {
  try {
    const responseData = await makeRequest(
      `${getBaseUrl()}/tax-calculator/tax-year/${year}`
    );

    const data = await TaxBracketApiResponseSchema.validate(responseData, {
      abortEarly: false,
    });

    return data.tax_brackets;
  } catch (e) {
    //send to sentry
    console.log(e);
    throw e;
  }
};
