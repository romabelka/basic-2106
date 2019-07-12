import React from "react";
import { Route, NavLink } from "react-router-dom";
import RestaurantsList from "./components/restaurants-list";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/filter">Filter</NavLink>

      <Route path="/filter" component={Filter} />
      <Route path="/restaurants" component={RestaurantsList} />
      <Route path="/checkout" component={OrderForm} />
    </div>
  );
}
