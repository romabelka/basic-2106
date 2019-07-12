import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import Restaurant from "../../restaurant";

export default function RestaurantsPage() {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" children={renderRestaurant} />
    </div>
  );
}

function renderRestaurant({ match }) {
  if (!match) return <h1>Please select a restaurant</h1>;

  return <Restaurant id={match.params.id} isOpen />;
}
