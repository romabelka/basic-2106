import React from "react";
import RestaurantsList from "./components/restaurants-list";
import RestaurantRateFilter from "./components/restaurant-rate-filter";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import { connect } from "react-redux";

function App(props) {
  const restaurantsRated = [...restaurants];
  restaurantsRated.forEach(rest => {
    rest.rating = rest.reviews
      .map(rev => rev.rating)
      .reduce((sum, curr, i, arr) => {
        sum += curr / arr.length;
        return sum;
      }, 0);
  });

  return (
    <div>
      <h1>Delivery App</h1>
      <RestaurantRateFilter />
      <RestaurantsList
        restaurants={restaurantsRated.filter(r => {
          return r.rating > props.minRating;
        })}
      />
      <OrderForm />
      <Cart />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  minRating: state.rating.minRating
});

export default connect(
  mapStateToProps,
  () => ({})
)(App);
