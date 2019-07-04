import { connect } from "react-redux";
import { Select } from "antd";
import { setMinRating } from "../ac";

import React, { Component } from "react";
const { Option } = Select;

class RestaurantRateFilter extends Component {
  handleChange = () => {
    console.log("CHANGE O_o");
  };

  render() {
    return (
      <Select
        defaultValue="Select min Rating"
        style={{ width: "200px" }}
        onChange={value => this.props.setMinRating(value)}
      >
        <Option value="5">5</Option>
        <Option value="4">4</Option>
        <Option value="3">3</Option>
        <Option value="2">2</Option>
        <Option value="1">1</Option>
      </Select>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  minRating: state.rating
});

const mapDispatchToProps = {
  setMinRating: setMinRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantRateFilter);
