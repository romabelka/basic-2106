import React from "react";
import MenuItem from "./menu-item";
import { Consumer } from "../../contexts/locale";

function Menu({ children }) {
  return (
    <div>
      <Consumer>{locale => <h1>{locale.appName}</h1>}</Consumer>
      {children}
    </div>
  );
}

Menu.propTypes = {};

Menu.Item = MenuItem;

export { MenuItem };
export default Menu;
