import React from "react";
import { Button } from "antd";
import ReviewsList from "./reviews-list";


export default function Restaurant({ restaurant, isOpen, onBtnClick, reviews }) {
  const body = isOpen && (
    <>
      <img src={restaurant.image} width={64} height={64} alt={"restaurant"} />
      <div>Menu items: {restaurant.menu.length}</div>
        <ReviewsList reviews={reviews}/>
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
