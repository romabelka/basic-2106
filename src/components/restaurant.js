import React from "react";
import { Avatar, Button, List } from "antd";
import PropTypes from "prop-types";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";
import RestaurantMap from "./restaurant-map";
import RestaurantRate from "./restaurant-rate";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu menu={restaurant.menu} />
      <ReviewList reviews={restaurant.reviews} />
      <RestaurantMap />
    </div>
  );
  return (
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
