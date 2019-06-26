import { useState } from "react";

export function useAccordion(defaultOpenId) {
  const [openItemId, setOpenItem] = useState(defaultOpenId);
  const toggleOpenItem = id => () => setOpenItem(id === openItemId ? null : id);
  const isItemOpen = id => openItemId === id;

  return { toggleOpenItem, isItemOpen };
}
