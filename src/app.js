import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { restaurants } from "./fixtures";
import store from "./store";
import RateFilter from "./components/rate-filter";
import RestaurantsList from "./components/restaurants-list";
import Cart from "./components/cart";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Delivery App</h1>
        <RateFilter />
        <RestaurantsList restaurants={restaurants} />
        <Cart />
      </div>
    </Provider>
  );
}
