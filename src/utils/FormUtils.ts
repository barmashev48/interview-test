import { LabelValue } from "@apptypes/FormTypes.ts";

export const getTaxYearOptions = (
  startYear: number,
  endYear: number,
): LabelValue[] => {
  if (startYear > endYear) {
    throw Error("Start year has to be before end year");
  }
  if (startYear === endYear) {
    return [{ label: startYear.toString(), value: startYear.toString() }];
  }

  const years: LabelValue[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }
  return years;
};
