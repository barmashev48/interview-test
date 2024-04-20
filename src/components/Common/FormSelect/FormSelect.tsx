import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelValue } from "@apptypes/FormTypes.ts";

interface FormSelectProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  options: LabelValue[];
  error?: FieldError;
  defaultOption?: LabelValue;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  register,
  options,
  error,
  defaultOption = { label: "Select an option", value: "" },
}) => {
  return (
    <div className={"inputWrapper"}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register}>
        <option value={defaultOption.value}>{defaultOption.label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p role="alert" aria-live="assertive">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
