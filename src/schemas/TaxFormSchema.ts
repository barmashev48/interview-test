import * as yup from "yup";
const TaxFormSchema = yup
  .object({
    salary: yup
      .number()
      .required("Salary is required")
      .typeError("Amount must be a number")
      .min(0, "Salary can't be negative"),
    year: yup.string().required("Please select tax year"),
  })
  .required();

export default TaxFormSchema;
