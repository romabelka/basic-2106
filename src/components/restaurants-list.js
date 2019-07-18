import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { List, Spin } from "antd";
import { filtratedRestaurantsSelector, restaurantsLoading } from "../selectors";
import { loadAllRestaurants } from "../reducer/restaurants/actions";
import { loadAllReviews } from "../reducer/reviews/actions";
import accordionDecorator from "../decorators/accordion";
import Filter from "./filter";

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
    <>
      <Filter />
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
    </>
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
