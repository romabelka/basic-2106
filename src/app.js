import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/filter">Filter</NavLink>

      <Switch>
        <Redirect from="/" exact to="/restaurants" />
        <Route path="/filter" exact component={Filter} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/checkout" component={OrderForm} />
      </Switch>
    </div>
  );
}
