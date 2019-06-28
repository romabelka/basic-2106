import { useState } from "react";

export default function useInputValue(initialValue) {
  const [state, setState] = useState(initialValue);
  const onChange = event => setState(event.target.value);

  return [state, onChange];
}
