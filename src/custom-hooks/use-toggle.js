import { useState } from "react";

export default function useToggle(defaultState) {
  const [isShown, setShown] = useState(defaultState);
  const toggleShown = () => setShown(!isShown);

  return { toggleShown, isShown };
}
