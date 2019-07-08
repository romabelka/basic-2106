import React, { Component } from "react";
import PropTypes from "prop-types";

class RestaurantMap extends Component {
  static propTypes = {
    restaurant: PropTypes.object
  };

  render() {
    return <div ref={this.setMapContainerRef} />;
  }

  setMapContainerRef = () => {
  };
}

export default RestaurantMap;
