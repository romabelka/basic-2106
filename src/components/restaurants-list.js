import React from "react";
import * as PropTypes from "prop-types";
import { List } from "antd";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";

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
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ),
  toggleOpenItem: PropTypes.func,
  isItemOpen: PropTypes.func
};

// noinspection JSUnusedGlobalSymbols
RestaurantsList.defaultProps = {
  restaurants: [],
  toggleOpenItem: () => null,
  isItemOpen: () => false
};

export default accordionDecorator(RestaurantsList);
