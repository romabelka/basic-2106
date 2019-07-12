import React from "react";
import { Route, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";

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
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route path="/checkout" component={OrderForm} />
    </div>
  );
}
