import React from "react";
import Restaurant from "./restaurant";

export default function RestaurantsList({ restaurants }) {
  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
}
