import React, { useState } from "react";
import Restaurant from "./restaurant";

export default function RestaurantsList({ restaurants }) {
  const [openItemId, setOpenItem] = useState();

  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={openItemId === restaurant.id}
          onBtnClick={() => setOpenItem(restaurant.id)}
        />
      ))}
    </div>
  );
}
