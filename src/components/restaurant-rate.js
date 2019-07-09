import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRate } from "../utils";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  state = {
    rate: getAverageRate(this.props.restaurant)
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

RestaurantRate.propTypes = {};

export default RestaurantRate;
