import React from "react";
import ReviewList from "../review-list/index.jsx";
import { Button } from "antd";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const reviewButt = (
    <>
      <br />
      <Button>{"Show reviews"}</Button>
      <br />
      <ReviewList reviews={restaurant.reviews} />
      <br />
    </>
  );

  const body = isOpen && (
    <>
      <img src={restaurant.image} width={64} height={64} />
      <div>Menu items: {restaurant.menu.length}</div>
      {reviewButt}
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
