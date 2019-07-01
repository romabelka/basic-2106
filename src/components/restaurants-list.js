import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import PropTypes from "prop-types";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpen: PropTypes.func.isRequired
  };

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

export default accordionDecorator(RestaurantsList);
