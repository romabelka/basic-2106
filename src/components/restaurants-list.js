import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  return (
    <ul className="restaurants__list">
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </ul>
  );
}

export default accordionDecorator(RestaurantsList);
