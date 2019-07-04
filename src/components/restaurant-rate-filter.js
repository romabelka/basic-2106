import { connect } from "react-redux";
import { Select } from "antd";
import { setMinRating } from "../ac";

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// ReactDOM.render(
//   <div>
//     <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="disabled" disabled>
//         Disabled
//       </Option>
//       <Option value="Yiminghe">yiminghe</Option>
//     </Select>
//   </div>,
//   mountNode,
// );

import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Rate } from "antd";
const { Option } = Select;

class RestaurantRateFilter extends Component {
  // static propTypes = {
  //   restaurant: PropTypes.object.isRequired
  // };
  // state = {
  //   rate: getDefaultRate(this.props.restaurant)
  // };

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

// function getDefaultRate(restaurant) {
//   return restaurant.reviews
//     .map(review => review.rating)
//     .filter(rate => typeof rate !== "undefined")
//     .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
// }

// RestaurantRate.propTypes = {};

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
