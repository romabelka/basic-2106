import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import RestaurantPage from "./restaurant";

export default function RestaurantsPage() {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" component={RestaurantPage} />
    </div>
  );
}
