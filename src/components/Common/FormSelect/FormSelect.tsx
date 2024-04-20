import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { LabelValue } from "@apptypes/FormTypes.ts";

interface FormSelectProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  options: LabelValue[];
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  register,
  options,
}) => {
  return (
    <div className={"inputWrapper"}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
