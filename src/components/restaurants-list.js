import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import PropTypes from 'prop-types';
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

RestaurantsList.propTypes = {
  isItemOpen : PropTypes.func,
  toggleOpenItem : PropTypes.func,
  restaurant : PropTypes.shape({
    id : PropTypes.string.isRequired,
    image : PropTypes.string,
    location : PropTypes.object,
    menu : PropTypes.arrayOf(PropTypes.object)
  }),
}

export default accordionDecorator(RestaurantsList);
