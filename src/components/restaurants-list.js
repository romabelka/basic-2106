import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector, isLoadingRestaurants } from "../selectors";
import { loadAllRestaurants } from "../ac";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loadAllRestaurants,
  isLoading
}) {
  useEffect(() => {
    loadAllRestaurants();
  }, []);
  console.log("---", "rendering restaurant list");
  return (
    <List loading={isLoading}>
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
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(
  state => {
    console.log("---", "connect");
    return {
      restaurants: filtratedRestaurantsSelector(state),
      isLoading: isLoadingRestaurants(state)
    };
  },
  {
    loadAllRestaurants
  }
)(accordionDecorator(RestaurantsList));
