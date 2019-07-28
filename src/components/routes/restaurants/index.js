import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import Restaurant from "../../restaurant";
import { Consumer } from "../../../contexts/locale";

export default function RestaurantsPage() {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" children={renderRestaurant} />
    </div>
  );
}

function renderRestaurant({ match }) {
  if (!match) {
    return (
      <h1>
        <Consumer>
          {translations => translations.pleaseSelectARestaurant}
        </Consumer>
      </h1>
    );
  }

  return <Restaurant id={match.params.id} isOpen />;
}
