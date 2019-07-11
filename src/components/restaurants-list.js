import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";
import {
  filtratedRestaurantsSelector,
  isLoadingRestaurants,
  isReviewsLoading
} from "../selectors";
import { loadAllRestaurants, loadAllReviews } from "../ac";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loadAllRestaurants,
  loadAllReviews,
  isLoading
}) {
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([loadAllReviews(), loadAllRestaurants()]);
    };
    fetchData();
  }, []);

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
    return {
      restaurants: filtratedRestaurantsSelector(state),
      isLoading: isLoadingRestaurants(state) || isReviewsLoading(state)
    };
  },
  {
    loadAllRestaurants,
    loadAllReviews
  }
)(accordionDecorator(RestaurantsList));
