import { FC, ReactNode } from "react";
import "./Button.css";
interface ButtonProps {
  type?: "submit" | "button" | "reset" | undefined;
  children?: ReactNode;
}
const Button: FC<ButtonProps> = ({ children, type = "button" }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
