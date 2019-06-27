import React from "react";
import accordionDecorator from "../decorators/accordion";
import Wrapper from "./wrapper";
import Restaurant from "./restaurant";

const RestaurantsList = ({ restaurants, toggleOpenItem, isItemOpen }) => (
  <Wrapper>
    {restaurants.map(restaurant => (
      <Restaurant
        key={restaurant.id}
        {...restaurant}
        isOpen={isItemOpen(restaurant.id)}
        onBtnClick={toggleOpenItem(restaurant.id)}
      />
    ))}
  </Wrapper>
);

export default accordionDecorator(RestaurantsList);
