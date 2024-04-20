import { FC, ReactNode } from "react";
import "./Button.css";
interface ButtonProps {
  type?: "submit" | "button" | "reset" | undefined;
  children?: ReactNode;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ children, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
