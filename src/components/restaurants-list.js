import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { getDefaultRate } from "./restaurant-rate";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen, rating }) {
  return (
    <List>
      {restaurants
        .filter(restaurant => getDefaultRate(restaurant) >= rating)
        .map(restaurant => (
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

export default accordionDecorator(RestaurantsList);
