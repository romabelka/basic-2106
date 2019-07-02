import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  state = {
    rate: getDefaultRate(this.props.restaurant)
  };

  render() {
    return (
      <Rate
        value={this.state.rate}
        onChange={rate => this.setState({ rate })}
      />
    );
  }
}

function getDefaultRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

RestaurantRate.propTypes = {};

export default RestaurantRate;
