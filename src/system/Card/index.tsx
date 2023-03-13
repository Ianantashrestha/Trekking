import { ReactNode } from "react";
import styled from "styled-components";
interface CardProps {
  children?: ReactNode;
  borderRadius?: number;
  background?: string;
  padding?: string;
}
const StyleCard = styled.div<CardProps>`
  background: ${(props) =>
    props.background ? `var(${props.background})` : `var(--white)`};
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.06),
    0px 4.64781px 10.8055px rgba(0, 0, 0, 0.0170641);
  border-radius: ${(props) => props.borderRadius || 0}px;
  padding: ${(props) => props.padding || `0px`};
`;
const Card = ({ children, ...restProps }: CardProps) => {
  return <StyleCard {...restProps}>{children}</StyleCard>;
};

export default Card;
