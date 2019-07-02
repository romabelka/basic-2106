import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { getDefaultRate } from "./restaurant-rate";
import * as PropTypes from "prop-types";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  ratingThreshold
}) {
  let filtered = restaurants.filter(
    restaurant => getDefaultRate(restaurant) >= ratingThreshold
  );

  return (
    <List
      dataSource={filtered}
      renderItem={restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
          data-id="restaurant"
        />
      )}
    />
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default accordionDecorator(RestaurantsList);
