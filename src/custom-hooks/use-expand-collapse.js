import { useState } from "react";

export function useExpandCollapse() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpandCollapse = () => setExpanded(!expanded);
  const isExpanded = () => expanded;

  return { toggleExpandCollapse, isExpanded };
}
