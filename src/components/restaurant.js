import React from "react";
import { findDOMNode } from "react-dom";
import { Avatar, Button, List, Rate } from "antd";
import PropTypes from "prop-types";
import ReviewList from "./review-list";
import RestaurantMenu from "./restaurant-menu";
import RestaurantMap from "./restaurant-map";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const reviews = restaurant.reviews;

  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu menu={restaurant.menu} ref={setMenuRef} />
      <ReviewList reviews={reviews} />
      <RestaurantMap />
    </div>
  );

  let rate;
  if (reviews.length) {
    let rateValue =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    rateValue = Math.round(rateValue);

    rate = (
      <Rate
        disabled
        defaultValue={rateValue}
        style={{ marginLeft: "24px" }}
        data-id="restaurant-rate"
      />
    );
  }

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
        title={
          <div>
            {restaurant.name}
            {rate}
          </div>
        }
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
