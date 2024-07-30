import { AuthForm } from "@/components/AuthForm";
import { ImageNameEnum, Image_Controller } from "@/components/Image_Controller";
import { Logo } from "@/components/Logo";
import clsx from "clsx";

export default function LogIn() {
  return (
    <main className={clsx("auth-container")}>
      <Logo />
      <div
        className={clsx(
          "h-full flex flex-col",
          "",
          "desktop:flex-row-reverse desktop:justify-end"
        )}
      >
        <div>
          <Image_Controller
            src={ImageNameEnum.auth}
            width={247}
            height={191}
            className="tablet:hidden desktop:block m-auto desktop:w-[478px] desktop:h-[415px]"
          />
          <p
            className={clsx(
              "tablet:hidden desktop:block onlyMobile:mb-[43px]",
              "text-black/80 text-[14px]/[20px] text-center"
            )}
          >
            Word · Translation · Grammar · Progress
          </p>
        </div>
        <AuthForm type="login" />
        <p
          className={clsx(
            "hidden tablet:block desktop:hidden mt-[98px]",
            "text-black/80 text-[14px]/[20px] text-center"
          )}
        >
          Word · Translation · Grammar · Progress
        </p>
      </div>
    </main>
  );
}
