import React from "react";
import Restaurant from "../restaurant/index.jsx";
import accordionDecorator from "../../decorators/accordion";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </div>
  );
}

export default accordionDecorator(RestaurantsList);
