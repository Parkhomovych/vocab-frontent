import clsx from "clsx";
import { FC } from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  className?: string;
};
export const Button: FC<ButtonProps> = ({
  text,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "w-full py-4 flex items-center justify-center font-bold text-[16px]/[24px] rounded-[30px]",
        className
      )}
    >
      {text}
    </button>
  );
};
