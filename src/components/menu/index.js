import React from "react";
import MenuItem from "./menu-item";
import { Consumer } from '../../contexts/languauge';

function Menu({ children }) {
  return (
    <div>
      <Consumer>{currentLocalize => <h1>{currentLocalize.deliveryApp}</h1>}</Consumer>
      {children}
    </div>
  );
}

Menu.propTypes = {};
Menu.Item = MenuItem;

export { MenuItem };
export default Menu;
