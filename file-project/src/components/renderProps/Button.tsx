import { ReactElement, useState } from "react";
import Home from "@mui/icons-material/Home";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
interface IconProps {
  color: string;
  size?: "large" | "meduim" | "small";
}
interface IconState {
  isHovered: boolean;
}
interface ButtonProps {
  renderIcon: (props: IconProps, state: IconState) => ReactElement;
  size?: "large" | "normal";
  appearance?: "primary" | "secondary";
}

export const HomeIcon = ({ color, size }: IconProps) => (
  <Home style={{ color }} />
);

export const Button = ({
  appearance = "primary",
  size = "normal",
  renderIcon,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultIconProps: IconProps = {
    size: size === "large" ? "large" : "meduim",
    color: appearance === "primary" ? "white" : "black",
  };
  return (
    <button
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      магия
      {renderIcon(defaultIconProps, { isHovered })}
    </button>
  );
};
