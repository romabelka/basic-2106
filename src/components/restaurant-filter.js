import React, { Component } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { setRating } from "../ac";
import { RESTAURANT_RATINGS } from "../constants";

class RestaurantFilter extends Component {
  render() {
    return (
      <div>
        <Select
          placeholder="Select rating"
          style={{ width: 200 }}
          onChange={this.props.setRating}
        >
          {RESTAURANT_RATINGS.map(rate => (
            <Select.Option key={rate} value={rate}>
              {rate}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setRating: setRating
};

export default connect(
  null,
  mapDispatchToProps
)(RestaurantFilter);
