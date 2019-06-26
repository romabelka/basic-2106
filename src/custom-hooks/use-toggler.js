import { useState } from "react";

export function useToggler(defaultState) {
  const [isShown, setShown] = useState(defaultState);
  const toggleShown = () => setShown(!isShown);

  return { toggleShown, isShown };
}
