import { useState } from "react";
import TaxForm, { TaxFormData } from "@components/TaxForm/TaxForm.tsx";
import { fetchTaxBrackets } from "@services/Api.ts";
import { getTaxBreakdown } from "@utils/TaxUtils.ts";
import { TaxBreakdown } from "@apptypes/TaxCalculationTypes.ts";
import TaxBreakdownTable from "@components/TaxBreakdownTable/TaxBreakdownTable.tsx";
import "./TaxCalculator.css";
const TaxCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [taxBreakdown, setTaxBreakdown] = useState<TaxBreakdown | null>(null);

  const onFormSubmit = async ({ year, salary }: TaxFormData): Promise<void> => {
    setError(null);
    setIsLoading(true);

    try {
      const taxBrackets = await fetchTaxBrackets(year);
      const taxBreakdown = getTaxBreakdown(salary, year, taxBrackets);
      setTaxBreakdown(taxBreakdown);
      setIsLoading(false);
      setError(null);
    } catch {
      setError(`Error calculating taxes. Please try again`);
      setIsLoading(false);
    }
  };

  return (
    <div className="taxCalculatorWrapper">
      {error && <p className="error">{error}</p>}
      {isLoading ? <p>Loading...</p> : <TaxForm onSubmit={onFormSubmit} />}
      {taxBreakdown && <TaxBreakdownTable taxBreakdown={taxBreakdown} />}
    </div>
  );
};

export default TaxCalculator;
