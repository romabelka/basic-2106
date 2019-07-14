import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { connect } from "react-redux";
import { averageRateSelector } from "../selectors";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    return <Rate value={this.props.rate} disabled />;
  }
}

RestaurantRate.propTypes = {};

export default connect((state, ownProps) => ({
  rate: averageRateSelector(state, ownProps)
}))(RestaurantRate);
