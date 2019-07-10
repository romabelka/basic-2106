import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector } from "../selectors";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  console.log("---", "rendering restaurant list");
  return (
    <List>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
          data-id="restaurant"
        />
      ))}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(state => {
  console.log("---", "connect");
  return {
    restaurants: filtratedRestaurantsSelector(state)
  };
})(accordionDecorator(RestaurantsList));
