import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";

function RestaurantsList(props) {
  let { restaurants, toggleOpenItem, isItemOpen } = props;
  let filterFunc = restaurant => {
    return props.restaurantRates[restaurant.id]
      ? props.restaurantRates[restaurant.id] >= +props.filterValue
      : true;
  };

  return (
    <List>
      {restaurants.filter(filterFunc).map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
          data-id="restaurant"
        />
      ))}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  restaurantRates: state.restaurantRates,
  filterValue: state.filterValue
});

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
