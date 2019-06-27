import React from "react";
import { Button } from "antd";

const ToggleButton = ({
  onBtnClick,
  isOpen,
  collapseText = "Свернуть",
  expandText = "Развернуть"
}) => (
  <Button onClick={onBtnClick} type="link">
    {isOpen ? collapseText : expandText}
  </Button>
);

export default ToggleButton;
