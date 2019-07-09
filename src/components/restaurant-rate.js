import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRate } from "../utils";
import { restaurantReviewsSelector } from "../selectors";
import { addReview } from "../ac";
import { connect } from "react-redux";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    const { restaurant, rate, handleChange } = this.props;
    return (
      <Rate
        value={rate}
        onChange={rate => rate && handleChange(restaurant.id, { rating: rate })}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  rate: getAverageRate(restaurantReviewsSelector(state, ownProps.restaurant))
});

const mapDispatchToProps = {
  handleChange: addReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantRate);
