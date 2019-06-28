import React from "react";
import { findDOMNode } from "react-dom";
import { Avatar, Button, List } from "antd";
import PropTypes from "prop-types";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";
import RestaurantMap from "./restaurant-map";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu menu={restaurant.menu} ref={setMenuRef} />
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
      {body}
    </List.Item>
  );
}

function setMenuRef(ref) {
  console.log("---", ref, findDOMNode(ref));
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
