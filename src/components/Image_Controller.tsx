import { FC } from "react";
import Image from "next/image";

export const enum ImageNameEnum {
  auth = "/images/auth-image.png",
  bloodReport = "/images/blood-report.png",
  openBook = "/images/open-book.png",
}

interface UiImageProps {
  src: ImageNameEnum;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
  alt?: string;
}

export const Image_Controller: FC<UiImageProps> = ({
  src,
  width,
  height,
  className,
  onClick,
  alt = "",
  ...restProps
}) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      alt={alt}
      {...restProps}
    />
  );
};
