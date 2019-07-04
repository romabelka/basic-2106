import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "antd";
import Restaurant from "./restaurant";
import { restaurants } from "../fixtures";
import accordionDecorator from "../decorators/accordion";
import getDefaultRate from "../helpers/getDefaultRate";

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
  restaurants: PropTypes.array,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

RestaurantsList.defaultProps = {
  restaurants
};

const mapStateToProps = state => ({
  restaurants: restaurants.filter(
    restaurant => getDefaultRate(restaurant) >= state.rating
  )
});

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
