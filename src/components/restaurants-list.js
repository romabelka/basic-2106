import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import { filtratedRestaurantsSelector } from "../selectors";
import { loadAllRestaurants } from "../reducer/restaurants/actions";
import { loadAllReviews } from "../reducer/reviews/actions";
import { loadAllDishes } from "../reducer/dishes/actions";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loadAllRestaurants,
  loadAllReviews,
  loadAllDishes,
  areRestauransLoading
}) {
  useEffect(() => {
    loadAllDishes();
    loadAllReviews();
    loadAllRestaurants();
  }, [loadAllDishes, loadAllReviews, loadAllRestaurants]);

  // console.log("---", "rendering restaurant list");

  const body = areRestauransLoading && (
    <div style={{ textAlign: "center" }}>
      <Spin size="large" />
    </div>
  );

  return (
    <>
      {body}

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
    </>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired,
  areRestauransLoading: PropTypes.bool
};

export default connect(
  state => {
    return {
      areRestauransLoading: state.restaurants.get("loading"),
      restaurants: filtratedRestaurantsSelector(state)
    };
  },
  {
    loadAllRestaurants,
    loadAllDishes,
    loadAllReviews
  }
)(accordionDecorator(RestaurantsList));
