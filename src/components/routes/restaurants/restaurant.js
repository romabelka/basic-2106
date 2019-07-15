import React from "react";
import Restaurant from "../../restaurant";

function RestaurantPage({ match }) {
  console.log("---", match);
  return <Restaurant id={match.params.id} isOpen />;
}

export default RestaurantPage;
