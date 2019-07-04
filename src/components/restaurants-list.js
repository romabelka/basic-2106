import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  rate,
  filterRate
}) {
  const restaurantsFiltered = restaurants.filter(
    restaurant => filterRate <= (rate[restaurant.id] || 0)
  );

  return (
    <List>
      {restaurantsFiltered.map(restaurant => (
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
  isItemOpen: PropTypes.func.isRequired,
  rate: PropTypes.object.isRequired,
  filterRate: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  rate: state.rate,
  filterRate: Number(state.filterRate)
});

export default connect(
  mapStateToProps,
  {}
)(accordionDecorator(RestaurantsList));
