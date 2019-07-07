import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector } from "../selectors";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  console.log("---", "rendering restaurant list");
  return (
    <List>
      {restaurants.map(id => (
        <Restaurant
          key={id}
          id={id}
          isOpen={isItemOpen(id)}
          onBtnClick={toggleOpenItem(id)}
          data-id="restaurant"
        />
      ))}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(state => {
  console.log("---", "connect");
  return {
    restaurants: Object.keys(filtratedRestaurantsSelector(state))
  };
})(accordionDecorator(RestaurantsList));
