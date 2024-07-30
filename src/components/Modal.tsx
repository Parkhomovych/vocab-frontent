import { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { IconNameEnum, SVG_Controller } from "./SVG_Controller";
import clsx from "clsx";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  btnClose?: boolean | undefined;
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  showModal,
  onClose,
  children,
  className,
  btnClose,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={clsx(
        "h-screen w-screen",
        "fixed top-0 left-0 z-50",
        "flex items-center justify-center",
        "backdrop-blur-[7px] bg-[#FFFFFF]/25 dark:bg-[#1F1F28]/25"
      )}
      onClick={handleBackdropClick}
    >
      <div className={`relative ${className}`}>
        {children}
        {btnClose && (
          <button
            onClick={onClose}
            className={clsx(
              "p-1",
              "absolute top-5 right-5 z-50",
              "fill-black dark:fill-white ",
              "hover:fill-NeonGreen focus:fill-NeonGreen dark:hover:fill-NeonGreen dark:focus:fill-NeonGreen",
              "transition-colors duration-300"
            )}
          >
            <SVG_Controller
              name={IconNameEnum.close}
              width={20}
              height={20}
              className=""
            />
          </button>
        )}
      </div>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};
