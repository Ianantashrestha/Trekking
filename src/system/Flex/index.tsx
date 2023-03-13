import { ReactNode } from "react";
import styled from "styled-components";
interface FlexProps {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  lg?: number | any;
  md?: number;
  sm?: number;
  xs?: number;
  columnGap?: number;
  rowGap?: number;
  justifyContent?: "space-between" | "center" | "initial" | "inherit";
  padding?: string;
}
interface FlexContainerProps {
  columnGap?: number;
  rowGap?: number;
  justifyContent?: "space-between" | "center" | "initial" | "inherit";
  padding?: string;
}

const StyleFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-flow: row wrap;
  column-gap: ${(props) => props.columnGap || 0}px;
  row-gap: ${(props) => props.rowGap || 0}px;
  justify-content: ${(props) => props?.justifyContent || "space-between"};
  padding: ${(props) => props.padding || "0px"};
`;
const StyleFlexItem = styled.div<FlexProps>`
  width: ${(props) => (props?.lg / 12) * 100}%;
`;
const Flex = ({ children, container, item, ...restProps }: FlexProps) => {
  if (container) {
    return <StyleFlexContainer {...restProps}>{children}</StyleFlexContainer>;
  } else if (item) {
    return <StyleFlexItem {...restProps}>{children}</StyleFlexItem>;
  } else {
    return <></>;
  }
};

export default Flex;
