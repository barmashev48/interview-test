import { render, screen } from "@testing-library/react";
import TaxBreakdownTable from "@components/TaxBreakdownTable/TaxBreakdownTable.tsx";

describe("TaxBreakdownTable", () => {
  const mockTaxBreakdown = {
    brackets: [
      {
        id: "1",
        range: "$0 - $50197",
        effectiveRate: 15,
        taxableAmount: 50197,
        payableTax: 7529.55,
      },
      {
        id: "2",
        range: "$50197 - $100392",
        effectiveRate: 20.5,
        taxableAmount: 50195,
        payableTax: 10289.97,
      },
      {
        id: "3",
        range: "$100392 - $155625",
        effectiveRate: 26,
        taxableAmount: 55233,
        payableTax: 14360.58,
      },
      {
        id: "4",
        range: "$155625 - $221708",
        effectiveRate: 29,
        taxableAmount: 66083,
        payableTax: 19164.07,
      },
      {
        id: "5",
        range: "$221708 +",
        effectiveRate: 33,
        taxableAmount: 28292,
        payableTax: 9336.36,
      },
    ],
    totalTaxable: 250000,
    totalTax: 60680.53,
    description: "Tax breakdown for $250000 salary in 2021",
  };

  it("should render with correct data", () => {
    render(<TaxBreakdownTable taxBreakdown={mockTaxBreakdown} />);

    expect(
      screen.getByText("Tax breakdown for $250000 salary in 2021")
    ).toBeInTheDocument();

    expect(screen.getByText("Tax bracket")).toBeInTheDocument();
    expect(screen.getByText("Tax Rate (%)")).toBeInTheDocument();
    expect(screen.getByText("Taxable Amount")).toBeInTheDocument();
    expect(screen.getByText("Payable Tax")).toBeInTheDocument();

    mockTaxBreakdown.brackets.forEach((bracket) => {
      expect(screen.getByText(bracket.range)).toBeInTheDocument();
      expect(
        screen.getByText(String(bracket.effectiveRate))
      ).toBeInTheDocument();
      expect(screen.getByText(`$${bracket.taxableAmount}`)).toBeInTheDocument();
      expect(screen.getByText(`$${bracket.payableTax}`)).toBeInTheDocument();
    });

    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockTaxBreakdown.totalTaxable}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockTaxBreakdown.totalTax}`)
    ).toBeInTheDocument();
  });
});
