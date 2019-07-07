import React from "react";
import RestaurantsList from "./components/restaurants-list";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import RateFilter from "./components/rate-filter";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <RateFilter />
      <RestaurantsList />
      <Cart />
    </div>
  );
}
