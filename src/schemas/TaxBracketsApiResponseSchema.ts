import * as yup from "yup";

const TaxBracketApiResponseSchema = yup.object({
  tax_brackets: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          max: yup.number().integer().positive().optional(),
          min: yup.number().integer().min(0).required(),
          rate: yup.number().positive().required(),
        })
        .test(
          "max-greater-than-min",
          "max must be greater than min",
          function (value: any) {
            return value.max ? value.max > value.min : true;
          },
        ),
    )
    .required("Missing tax_brackets"),
});

export default TaxBracketApiResponseSchema;
