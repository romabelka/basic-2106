import { useState } from "react";

export default function useToggler(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleOpen = () => setIsOpen(!isOpen);

  return { isOpen, toggleOpen };
}
