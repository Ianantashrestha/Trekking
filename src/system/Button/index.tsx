import { ReactNode } from "react";
import styled from "styled-components";
interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "submit";
  fontSize?: string;
  color?: string;
  background?: string;
  outline?: boolean;
  borderRadius?: number;
  borderWidth?: number;
  padding?: string;
}
const StyleButton = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? `var(${props.color})` : `var(--white)`)};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  background: ${(props) =>
    props?.outline
      ? "none"
      : props.background
      ? `var(${props.background})`
      : `var(--textColor)`};
  border-radius: ${(props) => props.borderRadius || 0}px;
  border: ${(props) =>
    props.outline
      ? `${props.borderWidth || 1}px solid var(${props.background})`
      : "0px"};
  padding: ${(props) => props?.padding || "0px"};
`;
const Button = ({ children, type = "button", ...restProps }: ButtonProps) => {
  return (
    <StyleButton type={type} {...restProps}>
      {children}
    </StyleButton>
  );
};

export default Button;
