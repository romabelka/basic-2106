import React from "react";
import RestaurantsList from "./restaurants-list";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import OrderForm from "./order-form";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
    </div>
  );
}
