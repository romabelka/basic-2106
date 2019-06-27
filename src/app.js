import React from "react";
import RestaurantsList from "./components/restaurants-list/index";
import { restaurants } from "./sources/fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form/index";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
    </div>
  );
}
