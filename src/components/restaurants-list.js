import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";

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

export default accordionDecorator(RestaurantsList);
