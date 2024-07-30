import { FC } from "react";
import { IconNameEnum, SVG_Controller } from "./SVG_Controller";
import clsx from "clsx";

export const Logo: FC = () => {
  return (
    <div
      className={clsx(
        "flex gap-4 items-center",
        "onlyMobile:p-4",
        "tablet:mb-[64px]"
      )}
    >
      <div
        className={clsx(
          "w-10 h-10",
          "flex items-center justify-center",
          "bg-olive rounded-full"
        )}
      >
        <SVG_Controller name={IconNameEnum.logo} width={27} height={27} />
      </div>
      <h2 className="font-semibold text-[18px]/[24px]">VocabBuilder</h2>
    </div>
  );
};
