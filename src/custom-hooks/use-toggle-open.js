import { useState } from "react";

export function useToggleOpen(defaultOpen) {
  const [isOpen, setOpen] = useState(defaultOpen);
  const toggleOpen = () => setOpen(!isOpen);

  return { isOpen, toggleOpen };
}
