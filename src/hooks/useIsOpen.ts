import { useState } from "react";

type returnIsOpen = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const useIsOpen = (): returnIsOpen => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleIsOpen };
};
