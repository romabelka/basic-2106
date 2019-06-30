import React from "react";
import * as PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { Avatar, Button, List } from "antd";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu menu={restaurant.menu} ref={setMenuRef} />
      <ReviewList reviews={restaurant.reviews} />
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
  restaurant: PropTypes.shape({
    menu: PropTypes.array,
    reviews: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool,
  onBtnClick: PropTypes.func
};

// noinspection JSUnusedGlobalSymbols
Restaurant.defaultProps = {
  isOpen: false,
  onBtnClick: () => null
};
