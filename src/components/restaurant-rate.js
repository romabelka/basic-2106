import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRate } from "../utils";
import { connect } from "react-redux";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    return (
      <Rate
        value={this.props.rate}
        onChange={rate => {
          console.log(`change rating to ${rate}`);
        }}
      />
    );
  }
}

RestaurantRate.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  rate: getAverageRate(ownProps.restaurant, state.reviews)
});

export default connect(
  mapStateToProps,
  {}
)(RestaurantRate);
