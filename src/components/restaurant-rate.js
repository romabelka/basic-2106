import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Rate } from "antd";
import { avarageRateSelector } from "../selectors";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    return <Rate value={this.props.rate} disabled />;
  }
}

export default connect((state, ownProps) => ({
  rate: avarageRateSelector(state, ownProps)
}))(RestaurantRate);
