import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import Restaurant from "../../restaurant";
import queryString from "query-string";

export default function RestaurantsPage(props) {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" children={renderRestaurant} />
    </div>
  );
}

function renderRestaurant({location, match }) {
  console.log("LOCATION: ")
  console.log(location);
  const values = queryString.parse(location.search);
  if (!match) return <h1>Please select a restaurant</h1>;

  return <Restaurant id={match.params.id} isOpen dishIdToSelect={values.dishId}/>;
}
