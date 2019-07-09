import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRate } from "../utils";
import { connect } from "react-redux";
import { addRating } from "../ac";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    return (
      <Rate
        value={this.props.rate}
        allowClear={false}
        onChange={rate => {
          this.props.handleAddReview(rate, this.props.restaurant.id);
        }}
      />
    );
  }
}

RestaurantRate.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  rate: getAverageRate(ownProps.restaurant, state.reviews)
});

const mapToHandlers = {
  handleAddReview: addRating
};

export default connect(
  mapStateToProps,
  mapToHandlers
)(RestaurantRate);
