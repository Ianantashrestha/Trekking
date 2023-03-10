import { ReactNode } from "react";
import styled from "styled-components";
interface ParagraphPros {
  children?: ReactNode;
  fontSize?: string;
  lineHeight?: number;
  margin?: string;
  padding?: string;
  textAlign?: string;
  color?: string;
  fontWeight?: number;
}
interface StyleParagraphProps {
  fontSize?: string;
  lineHeight?: number;
  margin?: string;
  padding?: string;
  textAlign?: string;
  color?: string;
  fontWeight?: number;
}
const StyleParagraph = styled.p<StyleParagraphProps>`
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : "var(--fontSm)"};
  line-height: ${(props) => props.lineHeight || 20}px;
  padding: ${(props) => props.margin || "0px"};
  margin: ${(props) => props.padding || "0px"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) =>
    props.color ? `var(${props.color})` : "var(--textColor)"};
  font-weight: ${(props) => props.fontWeight || 500};
`;
const Paragraph = ({ children, ...restProps }: ParagraphPros) => {
  return <StyleParagraph {...restProps}>{children}</StyleParagraph>;
};

export default Paragraph;
