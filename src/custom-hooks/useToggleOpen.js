import { useState } from "react";

export default function useToggleOpen(defaultOpenId) {
    
  const [isOpen, setOpen] = useState(defaultOpenId);
  const toggleOpenItem = id => () => setOpen(!isOpen);
  const openButName = id => !isOpen ? "Open" : "Close";

  return { isOpen, toggleOpenItem, openButName };
}
