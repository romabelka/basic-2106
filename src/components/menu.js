import React from "react";
import { Button } from "antd";

export default function Menu({ menuItem, isOpen, onBtnClick }) {
  const menuBody = isOpen && (
    <>
      <li className="restaurant__menu-item">Price: {menuItem.price}</li>
      <li className="restaurant__menu-item">
        Ingredients: {menuItem.ingredients}
      </li>
    </>
  );
  return (
    <ul className="restaurant__menu-list">
      <div className="restaurant__menu-item" onClick={onBtnClick}>
        <h3>{menuItem.name}</h3>
      </div>
      <Button onClick={onBtnClick} type="default">
        {" "}
        {isOpen ? "hide" : "show"}
      </Button>
      {menuBody}
    </ul>
  );
}
