import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "@components/Common/FormInput/FormInput";
import FormSelect from "@components/Common/FormSelect/FormSelect.tsx";
import { getTaxYearOptions } from "@utils/FormUtils.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import TaxFormSchema from "@schemas/TaxFormSchema.ts";
import "./TaxForm.css";
import Button from "@components/Common/Button/Button.tsx";
export interface TaxFormData {
  salary: number;
  year: string;
}

interface TaxFormProps {
  onSubmit: (e: TaxFormData) => Promise<void>;
}
const TaxForm: React.FC<TaxFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TaxFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src="" />
        <FormInput
          label="Salary"
          name="salary"
          register={register("salary", { valueAsNumber: true })}
          error={errors.salary}
        />
        <FormSelect
          label="Tax Year"
          name="year"
          register={register("year")}
          options={getTaxYearOptions(2019, 2022)}
          error={errors.year}
        />
      </div>

      <Button type={"submit"}>Submit</Button>
    </form>
  );
};

export default TaxForm;
