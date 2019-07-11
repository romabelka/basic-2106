import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import {
  filtratedRestaurantsSelector,
  restaurantLoadingSelector,
  reviewsLoadingSelector
} from "../selectors";
import { loadAllRestaurants, loadAllReviews } from "../ac";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loadAllRestaurants,
  loadAllReviews,
  loading
}) {
  useEffect(() => {
    loadAllReviews();
    loadAllRestaurants();
  }, [loadAllRestaurants, loadAllReviews]);
  console.log("---", "rendering restaurant list");
  return (
    <Spin spinning={loading}>
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
    </Spin>
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
      loading: restaurantLoadingSelector(state) || reviewsLoadingSelector(state)
    };
  },
  {
    loadAllRestaurants,
    loadAllReviews
  }
)(accordionDecorator(RestaurantsList));
