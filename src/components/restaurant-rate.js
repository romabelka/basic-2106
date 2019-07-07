import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { getAverageRate } from "../utils";
import { connect } from "react-redux";
import { restaurantById } from "../selectors";
import { addReview } from "../ac";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  render() {
    return (
      <Rate
        value={this.props.rate}
        onChange={rate => this.props.addReview(rate, this.props.restaurant.id)}
      />
    );
  }
}

const mapDispatchToProps = {
  addReview: addReview
};

export default connect(
  (state, ownProps) => {
    return {
      restaurant: ownProps.restaurant,
      rate: getAverageRate(restaurantById(state, ownProps.restaurant))
    };
  },
  mapDispatchToProps
)(RestaurantRate);
