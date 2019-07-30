import React from "react";
import MenuItem from "./menu-item";
import { Translate } from "../../locale/context";

function Menu({ children }) {
  return (
    <div>
      <h1>
        <Translate>header-delivery-app</Translate>
      </h1>
      {children}
    </div>
  );
}

Menu.propTypes = {};

Menu.Item = MenuItem;

export { MenuItem };
export default Menu;
