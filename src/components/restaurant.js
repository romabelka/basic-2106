import React from "react";
import { Avatar, Button, List } from "antd";
import PropTypes from "prop-types";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";
import RestaurantMap from "./restaurant-map";
import RestaurantRate from "./restaurant-rate";
import { connect } from "react-redux";
import { restaurantSelector } from "../selectors";

function Restaurant({ restaurant, isOpen }) {
  if (!restaurant) return null;

  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu restaurant={restaurant} />
      <ReviewList restaurant={restaurant} />
      <RestaurantMap />
    </div>
  );
  return (
    <List.Item style={{ paddingLeft: "8px" }}>
      <List.Item.Meta
        avatar={<Avatar shape="square" src={restaurant.image} />}
        title={restaurant.name}
      />
      <RestaurantRate restaurant={restaurant} />
      {body}
    </List.Item>
  );
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

export default connect((state, ownProps) => ({
  restaurant: restaurantSelector(state, ownProps)
}))(Restaurant);
