import React from "react";
import Restaurant from "./restaurant";
import { useAccordion } from "../custom-hooks/use-accordion";
import PropTypes from "prop-types";

export default function RestaurantsList({ restaurants }) {
  const { toggleOpenItem, isItemOpen } = useAccordion();

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

RestaurantsList.propTypes = {
  isItemOpen: PropTypes.func,
  toggleOpenItem: PropTypes.func,
  restaurants: PropTypes.arrayOf(PropTypes.object)
};
