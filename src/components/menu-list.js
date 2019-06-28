import React from "react";
import Menu from "./menu";
import accordionDecorator from "../decorators/accordion";

function MenuList({ menuItems, toggleOpenItem, isItemOpen }) {
  return (
    <div className="restaurant__menu-container">
      {menuItems.map(menuItem => (
        <Menu
          key={menuItem.id}
          menuItem={menuItem}
          isOpen={isItemOpen(menuItem.id)}
          onBtnClick={toggleOpenItem(menuItem.id)}
        />
      ))}
    </div>
  );
}

export default accordionDecorator(MenuList);
