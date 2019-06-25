import React from "react";

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <img src={restaurant.image} width={64} height={64} />
      <h3>{restaurant.name}</h3>
    </div>
  );
}
