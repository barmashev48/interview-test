import { FC } from "react";
import { TaxBreakdown } from "@apptypes/TaxCalculationTypes.ts";

interface TaxBreakdownTableProps {
  taxBreakdown: TaxBreakdown;
}

const TaxBreakdownTable: FC<TaxBreakdownTableProps> = ({ taxBreakdown }) => {
  return (
    <div className="taxBreakdown">
      <h2>{taxBreakdown.description}</h2>
      <table>
        <thead>
          <tr>
            <th>Tax bracket</th>
            <th>Tax Rate (%)</th>
            <th>Taxable Amount</th>
            <th>Payable Tax</th>
          </tr>
        </thead>
        <tbody>
          {taxBreakdown.brackets.map((bracket) => (
            <tr key={bracket.id}>
              <td>{bracket.range}</td>
              <td>{bracket.effectiveRate}</td>
              <td>${bracket.taxableAmount}</td>
              <td>${bracket.payableTax}</td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td>
              <strong>${taxBreakdown.totalTaxable}</strong>
            </td>
            <td>
              <strong>${taxBreakdown.totalTax}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxBreakdownTable;
