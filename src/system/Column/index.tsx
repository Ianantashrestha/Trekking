import { ReactNode } from "react";
import styled from "styled-components";
interface ColumnProps {
  children?: ReactNode;
  alignItems?: "center" | "flex-end" | "flex-start" | "inherit" | "initial";
  justifyContent?: "space-between" | "center" | "initial" | "inherit";
  margin?: string;
  padding?: string;
}
interface StyleColumnProps {
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
}
const StyleColumn = styled.div<StyleColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props?.alignItems || "inherit"};
  justify-content: ${(props) => props?.justifyContent || "inherit"};
  margin: ${(props) => props?.margin || "0px"};
  padding: ${(props) => props?.padding || "0px"};
`;
const Column = ({ children, ...restProps }: ColumnProps) => {
  return <StyleColumn {...restProps}>{children}</StyleColumn>;
};

export default Column;
