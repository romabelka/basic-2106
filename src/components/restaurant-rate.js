import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Rate } from "antd";
import { getAverageRate } from "../utils";
import { reviewsSelector } from "../selectors";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired,
    reviews: PropTypes.object
  };
  state = {
    rate: getAverageRate(this.props.restaurant, this.props.reviews)
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

const mapStateToProps = state => ({
  reviews: reviewsSelector(state)
});

export default connect(mapStateToProps)(RestaurantRate);
