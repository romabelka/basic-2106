import React from "react";
import MenuItem from "./menu-item";
import { Consumer } from "../../contexts/context";

function Menu({ children }) {
  return (
    <Consumer>
      {context => (
        <div>
          <h1>{context.localization.DELIVERY_APP}</h1>
          {children}
        </div>
      )}
    </Consumer>
  );
}

Menu.propTypes = {};

Menu.Item = MenuItem;

export { MenuItem };
export default Menu;
