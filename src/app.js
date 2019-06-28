import React from "react";
import RestaurantsList from "./components/restaurants-list";
import { restaurants } from "./api/fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function App() {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="container">
        <h1 className="main-title">Delivery App</h1>
        <section className="restaurants">
          <RestaurantsList restaurants={restaurants} />
        </section>
        <section className="form">
          <OrderForm />
        </section>
      </div>
    </ReactCSSTransitionGroup>
  );
}
