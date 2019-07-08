import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  state = {
    rate : this.props.rate
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

RestaurantRate.propTypes = {
  rate : PropTypes.number
};

export default RestaurantRate;
