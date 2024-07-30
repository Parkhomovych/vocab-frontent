import { FC } from "react";

export const enum IconNameEnum {
  logo = "logo",
  ukraine = "ukraine",
  unitedKingdom = "united-kingdom",
  trash = "trash",
  edit = "edit",
  switchHorizontal = "switch-horizontal",
  switchArrow = "switch-arrow",
  arrowDown = "arrow-down",
  success = "success",
  error = "error",
  search = "search",
  plus = "plus",
  eyeOn = "eye-on",
  eyeOff = "eye-off",
}

interface UiIconProps {
  name: IconNameEnum;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SVG_Controller: FC<UiIconProps> = (props) => {
  const {
    name,
    width = 16,
    height = 16,
    className,
    onClick,
    ...restProps
  } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      {...restProps}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};
