import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { setRate } from "../ac";
import { connect } from "react-redux";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    handleRateChange: PropTypes.func.isRequired
  };

  // TODO: not sure where to calculate and set initial rate state
  componentWillMount() {
    this.props.handleRateChange(this.props.restaurant.id, this.props.rate);
  }

  render() {
    return (
      <Rate
        value={this.props.rate}
        onChange={rate =>
          rate && this.props.handleRateChange(this.props.restaurant.id, rate)
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

const mapStateToProps = (state, ownProps) => ({
  rate:
    state.rate[ownProps.restaurant.id] || getDefaultRate(ownProps.restaurant)
});

const mapDispatchToProps = {
  handleRateChange: setRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantRate);
