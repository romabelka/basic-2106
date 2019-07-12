import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector, restaurantsLoading } from "../selectors";
import { loadAllRestaurants, loadAllReviews } from "../ac";
import { NavLink } from "react-router-dom";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loading,
  loadAllRestaurants,
  loadAllReviews
}) {
  useEffect(() => {
    loadAllRestaurants();
    loadAllReviews();
  }, []);

  if (loading)
    return (
      <div>
        <Spin />
      </div>
    );

  return (
    <List
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
