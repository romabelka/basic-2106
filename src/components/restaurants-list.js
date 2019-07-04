import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  ratingSelect
}) {
  const getRestaurantsAboveRating = restaurants => {
    //console.log("call with ", restaurants, ratingSelect)
    return restaurants.filter(
      restaurant =>
        restaurant.reviews.reduce(function(sum, current) {
          return sum + current.rating;
        }, 0) /
          restaurant.reviews.length >
        ratingSelect
    );
  };

  return (
    <List>
      {getRestaurantsAboveRating(restaurants).map(restaurant => (
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

const mapStateToProps = (state, ownProps) => ({
  ratingSelect: state.filter
});

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
