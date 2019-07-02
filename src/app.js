import React from "react";
import RestaurantsList from "./components/restaurants-list";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Delivery App</h1>
        <RestaurantsList restaurants={restaurants} />
        <Cart />
      </div>
    </Provider>
  );
}
