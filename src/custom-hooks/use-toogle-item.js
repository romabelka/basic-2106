import { useState } from "react";

export function useToggleItem(defaultIsOpened = false) {
  const [isOpened, toggleOpen] = useState(defaultIsOpened);
  const toggleItem = () => toggleOpen(!isOpened);

  return { isOpened, toggleItem };
}
