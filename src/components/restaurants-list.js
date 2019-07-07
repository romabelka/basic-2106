import React from "react";
import * as PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector } from "../selectors";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  return (
    <List
      dataSource={restaurants}
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

export default connect(state => ({
  restaurants: filtratedRestaurantsSelector(state)
}))(accordionDecorator(RestaurantsList));
