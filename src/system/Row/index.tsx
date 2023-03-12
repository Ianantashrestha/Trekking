import { ReactNode } from "react";
import styled from "styled-components";
interface RowProps {
  children?: ReactNode;
  alignItems?: "center" | "flex-end" | "flex-start" | "inherit";
  justifyContent?: "space-between" | "center" | "initial" | "inherit";
  margin?: string;
  padding?: string;
  columnGap?: number;
  className?: string;
  background?: string;
}
interface StyleRowProps {
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  columnGap?: number;
  background?: string;
}

const StyleRow = styled.div<StyleRowProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props?.alignItems || "inherit"};
  justify-content: ${(props) => props?.justifyContent || "inherit"};
  margin: ${(props) => props?.margin || "0px"};
  padding: ${(props) => props?.padding || "0px"};
  column-gap: ${(props) => props?.columnGap || 0}px;
  background: ${(props) =>
    props?.background ? `var(${props.background})` : `none`};
`;
const Row = ({ children, ...restProps }: RowProps) => {
  return <StyleRow {...restProps}>{children}</StyleRow>;
};

export default Row;
