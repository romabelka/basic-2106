import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { connect } from "react-redux";
import { restaurantRateChange } from "../ac";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.handleRateChange(
      this.props.restaurant.id,
      getDefaultRate(this.props.restaurant)
    );
  }
  render() {
    return (
      <Rate
        value={this.props.rate}
        onChange={rate =>
          this.props.handleRateChange(this.props.restaurant.id, rate)
        }
      />
    );
  }
}

function getDefaultRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

RestaurantRate.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  rate: state.restaurantRates[ownProps.restaurant.id] || 0
});

const mapDispatchToProps = {
  handleRateChange: restaurantRateChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantRate);
