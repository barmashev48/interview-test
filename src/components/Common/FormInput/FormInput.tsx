import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
}) => {
  return (
    <div className={"inputWrapper"}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register} />
      {error && (
        <p role="alert" aria-live="assertive">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
