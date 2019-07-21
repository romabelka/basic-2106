import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider } from "./contexts/username";
import { useInputValue } from "./custom-hooks/use-input-value";
import { Input } from "antd";
import Menu, { MenuItem } from "./components/menu";

export default function App() {
  const [username, setUserName] = useInputValue("Roma");

  return (
    <div>
      <Menu>
        <Menu.Item to="/checkout">
          <Cart />
        </Menu.Item>
        <MenuItem to="/restaurants">Restaurants</MenuItem>
        <MenuItem to="/filter" children={"Filter"} />
      </Menu>
      <div>
        Username: <Input value={username} onChange={setUserName} />
      </div>
      <Provider value={username}>
        <Switch>
          <Redirect from="/" exact to="/restaurants" />
          <Redirect from="/restaurants/" exact strict to="/restaurants" />
          <Route path="/filter" exact component={Filter} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route
            path="/restaurants/:id/review"
            render={({ id }) => <h1>Add a review for {id}</h1>}
          />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </Provider>
    </div>
  );
}
