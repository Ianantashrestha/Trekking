import { ReactNode } from "react";
import styled from "styled-components";
interface ContainerProps {
  children?: ReactNode;
}
interface StyleContainerProps {}
const StyleContainer = styled.div<StyleContainerProps>`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0px auto;
`;
const Container = ({ children }: ContainerProps) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;
