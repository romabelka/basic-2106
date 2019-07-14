import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import RestaurantsList from "../../restaurants-list";
import Restaurant from "../../restaurant";
import { restaurantsSelector } from "../../../selectors";

const renderRestaurant = ({ match }) => {
  if (match && match.params && match.params.id) {
    return <Restaurant id={match.params.id} isOpen />;
  }

  return <h1>Please select a restaurant</h1>;
};

const RestaurantsPage = ({ restaurantsSize }) => (
  <div>
    <RestaurantsList />
    {restaurantsSize ? (
      <Route path="/restaurants/:id" children={renderRestaurant} />
    ) : null}
  </div>
);

export default connect(state => ({
  restaurantsSize: restaurantsSelector(state).size
}))(RestaurantsPage);
