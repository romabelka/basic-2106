import React from "react";
import ReviewList from "../review-list/index.jsx";
import { Button } from "antd";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {

  const reviewBody = (
    <>
      <br />
        <ReviewList reviews={restaurant.reviews} />
      <br />
    </>
  );

  const body = isOpen && (
    <>
      <img src={restaurant.image} width={64} height={64} />
      <div>Menu items: {restaurant.menu.length}</div>
      {reviewBody}
    </>
  );

  return (
    <div>
      <h3>{restaurant.name}</h3>
      {body}
      <Button onClick={onBtnClick} type="primary">
        {isOpen ? "close" : "open"}
      </Button>
    </div>
  );
}
