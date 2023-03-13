import styled from "styled-components";
interface LineProps {
  background?: string;
  height?: number;
  margin?: string;
}
const StyleLine = styled.div<LineProps>`
  background: ${(props) =>
    props.background ? `var(${props.background})` : `var(--f5f5f5)`};
  height: ${(props) => props.height || 1}px;
  margin: ${(props) => props.margin || `0px`};
`;
const Line = ({ ...restProps }: LineProps) => {
  return <StyleLine {...restProps}></StyleLine>;
};

export default Line;
