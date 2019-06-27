import { useState } from "react";
export function useToggleOpen() {
  const [isOpen, setIsOpen] = useState(null);
  const isOpened = () => isOpen;
  const toggleOpen = () => setIsOpen(!isOpen);

  return { isOpened, toggleOpen };
}
