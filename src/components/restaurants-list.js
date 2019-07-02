import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import * as PropTypes from "prop-types";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
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
  restaurants: PropTypes.array,
  toggleOpenItem: PropTypes.func,
  isItemOpen: PropTypes.bool
};

export default accordionDecorator(RestaurantsList);
