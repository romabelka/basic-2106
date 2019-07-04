import React from "react";
import { findDOMNode } from "react-dom";
import { Avatar, Button, List } from "antd";
import PropTypes from "prop-types";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";
import RestaurantMap from "./restaurant-map";
import RestaurantRate from "./restaurant-rate";
import { connect } from 'react-redux';

function Restaurant(props) {

  const { minRating, restaurant, isOpen, onBtnClick } = props;  
  restaurant.rate = getDefaultRate(restaurant);
  const scorringRatinfg = (restaurant.rate >= minRating);

  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu menu={restaurant.menu} />
      <ReviewList reviews={restaurant.reviews} />
      <RestaurantMap />
    </div>
  );

  return scorringRatinfg && (
    <List.Item
      style={{ paddingLeft: "8px" }}
      actions={[
        <Button onClick={onBtnClick} data-id="menu-btn">
          {isOpen ? "Hide menu" : "Show menu"}
        </Button>
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar shape="square" src={restaurant.image} />}
        title={restaurant.name}
      />
      <RestaurantRate restaurant={restaurant} />
      {body}
    </List.Item>
  );
}

function getDefaultRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

Restaurant.propTypes = {
  isOpen: PropTypes.bool,
  onBtnClick: PropTypes.func,
  restaurant: PropTypes.shape({
    menu: PropTypes.array,
    reviews: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string
  })
};

//export default Restaurant;

export default connect( state => ({

  minRating : state.filterReview || 0
}))(Restaurant);