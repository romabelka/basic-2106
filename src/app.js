import React, { useState } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider } from "./contexts/context";
import { useInputValue } from "./custom-hooks/use-input-value";
import { Input, Select } from "antd";
import Menu, { MenuItem } from "./components/menu";
import { languageLocalization } from "./constants/languageLocalization";

export default function App() {
  const [username, setUserName] = useInputValue("");
  const [localization, setLocalization] = useState(
    languageLocalization.english
  );
  return (
    <Provider value={{ username: username, localization: localization }}>
      <div>
        <Menu>
          <Menu.Item to="/checkout">
            <Cart />
          </Menu.Item>
          <MenuItem to="/restaurants">{localization.RESTAURANTS}</MenuItem>
          <MenuItem to="/filter" children={localization.FILTER} />
        </Menu>
        <Select
          defaultValue={"english"}
          onChange={value => setLocalization(languageLocalization[value])}
        >
          <Select.Option value="english">English</Select.Option>
          <Select.Option value="russian">Русский</Select.Option>
        </Select>
        <div>
          {localization.USERNAME}:{" "}
          <Input value={username} onChange={setUserName} />
        </div>
        <Switch>
          <Redirect from="/" exact to="/restaurants" />
          <Redirect from="/restaurants/" exact strict to="/restaurants" />
          <Route path="/filter" exact component={Filter} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route
            path="/restaurants/:id/review"
            render={({ id }) => (
              <h1>
                {localization.ADD_REVIEW_FOR} {id}
              </h1>
            )}
          />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route
            path="*"
            render={() => <h1>{localization.NOT_FOUND_PAGE}</h1>}
          />
        </Switch>
      </div>
    </Provider>
  );
}
