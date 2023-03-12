import { ReactNode } from "react";
import styled from "styled-components";
interface GridProps {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  columnGap?: number;
  rowGap?: number;
}
interface GridContainerProps {
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  columnGap?: number;
  rowGap?: number;
}
interface GridItemProps {}
const StyleGridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.lg}, 1fr)`};
  grid-column-gap: ${(props) => props.columnGap || 0}px;
  grid-row-gap: ${(props) => props.rowGap || 0}px;
`;
const StyleGridItem = styled.div<GridItemProps>``;
const Grid = ({ children, container, item, ...restProps }: GridProps) => {
  if (container) {
    return <StyleGridContainer {...restProps}>{children}</StyleGridContainer>;
  } else if (item) {
    return <StyleGridItem>{children}</StyleGridItem>;
  } else {
    return <></>;
  }
};

export default Grid;
