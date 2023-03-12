import { ReactNode } from "react";
import styled from "styled-components";
interface HeadingProps {
  children?: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: number;
}

const StyleH1 = styled.h1<HeadingProps>`
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--textColor)`};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 25}px;
`;
const StyleH2 = styled.h2<HeadingProps>`
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--textColor)`};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 25}px;
`;
const StyleH3 = styled.h3<HeadingProps>`
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--textColor)`};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 25}px;
`;
const StyleH4 = styled.h4<HeadingProps>`
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--textColor)`};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 25}px;
`;
const StyleH5 = styled.h5<HeadingProps>`
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--textColor)`};
  font-size: ${(props) =>
    props.fontSize ? `var(${props.fontSize})` : `var(--fontLg)`};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 25}px;
`;
const Heading = ({ children, tag = "h2", ...restProps }: HeadingProps) => {
  if (tag === "h1") {
    return <StyleH1 {...restProps}>{children}</StyleH1>;
  } else if (tag === "h2") {
    return <StyleH2 {...restProps}>{children}</StyleH2>;
  } else if (tag === "h3") {
    return <StyleH3 {...restProps}>{children}</StyleH3>;
  } else if (tag === "h4") {
    return <StyleH4 {...restProps}>{children}</StyleH4>;
  } else if (tag === "h5") {
    return <StyleH5 {...restProps}>{children}</StyleH5>;
  } else {
    return <></>;
  }
};

export default Heading;
