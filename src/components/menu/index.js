import React from "react";
import MenuItem from "./menu-item";

function Menu({ children }) {
  return (
    <div>
      <h1>Delivery App</h1>
      {children}
    </div>
  );
}

Menu.propTypes = {};

export { MenuItem };
export default Menu;
