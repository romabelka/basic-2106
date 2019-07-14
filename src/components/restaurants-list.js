import React, { useEffect } from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { List } from "antd";
import accordionDecorator from "../decorators/accordion";
import { filtratedRestaurantsSelector, restaurantsLoading } from "../selectors";
import { loadAllRestaurants, loadAllReviews } from "../ac";

function RestaurantsList({
  restaurants,
  loading,
  loadAllRestaurants,
  loadAllReviews
}) {
  useEffect(() => {
    loadAllRestaurants();
    loadAllReviews();
  }, [loadAllRestaurants, loadAllReviews]);

  return (
    <List
      loading={loading}
      dataSource={restaurants}
      renderItem={restaurant => (
        <List.Item>
          <NavLink to={`/restaurants/${restaurant.id}`}>
            {restaurant.name}
          </NavLink>
        </List.Item>
      )}
    />
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(
  state => ({
    restaurants: filtratedRestaurantsSelector(state),
    loading: restaurantsLoading(state)
  }),
  {
    loadAllRestaurants,
    loadAllReviews
  }
)(accordionDecorator(RestaurantsList));
