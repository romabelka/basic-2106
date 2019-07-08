import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { Rate } from "antd";
import { restaurantAverageRatingSelector } from "../selectors";
import { idPropTypes } from "../utils";

const RestaurantRate = ({ rating }) => <Rate disabled value={rating} />;

RestaurantRate.propTypes = {
  restaurantId: idPropTypes,
  rating: PropTypes.number
};

RestaurantRate.defaultProps = {
  rating: 0
};

const mapStateToProps = (state, { restaurantId }) => ({
  rating: restaurantAverageRatingSelector(state, restaurantId)
});

export default connect(mapStateToProps)(RestaurantRate);
