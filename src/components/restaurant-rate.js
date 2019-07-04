import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";

class RestaurantRate extends Component {
  
  constructor(props){
    super(props);
  }

  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  
  state = {
    rate : this.props.restaurant.rate
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
