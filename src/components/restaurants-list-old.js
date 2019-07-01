import React from "react";
import Restaurant from "./restaurant";
import PropTypes from 'prop-types'
import { useAccordion } from "../custom-hooks/use-accordion";

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
  
  isOpen : PropTypes.func,
  onBtnClick : PropTypes.func,
  restaurants : PropTypes.shape({
    id : PropTypes.string.isRequired
  })
}