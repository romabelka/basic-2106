import { useState } from "react";

export function useToggle(defaultOpenId = false) {
  const [isVisible, setVisibility] = useState(defaultOpenId);

  const toggleVisibility = () => () => setVisibility(!isVisible);

  return { toggleVisibility, isVisible };
}
