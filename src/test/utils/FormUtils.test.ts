import { getTaxYearOptions } from "@utils/FormUtils.ts";

describe("getTaxYearOptions", () => {
  it("returns an array of LabelValue objects for each year in the range", () => {
    const startYear = 2019;
    const endYear = 2022;
    const expectedOptions = [
      { label: "2019", value: "2019" },
      { label: "2020", value: "2020" },
      { label: "2021", value: "2021" },
      { label: "2022", value: "2022" },
    ];

    const options = getTaxYearOptions(startYear, endYear);

    expect(options).toEqual(expectedOptions);
  });

  it("returns an array of a single LabelValue object when identical years passed", () => {
    const startYear = 2019;
    const endYear = 2019;
    const expectedOptions = [{ label: "2019", value: "2019" }];

    const options = getTaxYearOptions(startYear, endYear);

    expect(options).toEqual(expectedOptions);
  });

  it("throws an error if the start year is greater than the end year", () => {
    const startYear = 2022;
    const endYear = 2019;

    expect(() => {
      getTaxYearOptions(startYear, endYear);
    }).toThrow("Start year has to be before end year");
  });
});
