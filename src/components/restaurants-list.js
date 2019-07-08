import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "antd";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { filtratedRestaurantsSelector } from "../selectors";
import { idPropTypes } from "../utils";

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
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: idPropTypes
    })
  ).isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(state => ({
  restaurants: filtratedRestaurantsSelector(state)
}))(accordionDecorator(RestaurantsList));
