import styled from "styled-components";
interface AvatarProps {
  src?: any;
  objectFit?: "cover" | "contain" | "fill" | "none";
  width?: string;
  height?: string;
}
interface StyleAvatarProps {
  objectFit?: string;
  width?: string;
  height?: string;
}
const StyleAvatar = styled.img<StyleAvatarProps>`
  width: ${(props) => props?.width || "auto"};
  height: ${(props) => props?.height || "auto"};
  object-fit: ${(props) => props?.objectFit || "none"};
`;
const Avatar = ({ src, ...restProps }: AvatarProps) => {
  return <StyleAvatar src={src} {...restProps} />;
};

export default Avatar;
