import { ReactNode } from "react";
import styled from "styled-components";

interface ListProps {
  children?: ReactNode;
}
interface ListItemProps {
  children?: ReactNode;
}
const StyleUl = styled.ul``;
const StyleLi = styled.li``;

export const ListItem = ({ children }: ListItemProps) => {
  return <StyleLi>{children}</StyleLi>;
};

const List = ({ children }: ListProps) => {
  return <StyleUl>{children}</StyleUl>;
};

export default List;
