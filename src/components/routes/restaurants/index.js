import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import Restaurant from "../../restaurant";
import { Consumer } from "../../../contexts/context";

export default function RestaurantsPage() {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" children={renderRestaurant} />
    </div>
  );
}

function renderRestaurant({ match }) {
  if (!match)
    return (
      <Consumer>
        {context => <h1>{context.localization.PLEASE_SELECT_RESTAURANT}</h1>}
      </Consumer>
    );

  return <Restaurant id={match.params.id} isOpen />;
}
