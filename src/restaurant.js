import React from "react";
import { Button } from "antd";
import ReviewList from "./reviews-list";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <>
      <img src={restaurant.image} alt="" width={64} height={64} />
      <div>Menu items: {restaurant.menu.length}</div>
      <ReviewList reviews={restaurant.reviews} />
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
