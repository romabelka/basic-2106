import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRating } from "../helpers";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  state = {
    rate: getAverageRating(this.props.restaurant)
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
