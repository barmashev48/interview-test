export interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

export interface TaxBreakdown {
  brackets: {
    id: string;
    range: string;
    effectiveRate: number;
    taxableAmount: number;
    payableTax: number;
  }[];
  totalTaxable: number;
  totalTax: number;
  description: string;
}
