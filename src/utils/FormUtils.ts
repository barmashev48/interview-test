import { LabelValue } from "@apptypes/FormTypes.ts";

export const getTaxYearOptions = (): LabelValue[] => {
  return [
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
  ];
};
