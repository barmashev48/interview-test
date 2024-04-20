export interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

export interface TaxBreakdown {
  brackets: {
    id: string;
    range: string;
    effectiveRate: string;
    taxableAmount: number;
    payableTax: number;
  }[];
  totalTaxable: number;
  totalTax: number;
  description: string;
}
