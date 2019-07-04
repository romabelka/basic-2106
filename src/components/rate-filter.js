import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { filterRate } from "../ac";
import { connect } from "react-redux";

const { Option } = Select;

class RateFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <Select
        defaultValue={this.props.filter}
        style={{ width: 120 }}
        onChange={this.props.handleFilterChange}
      >
        <Option value="">All</Option>
        <Option value="5">Five stars</Option>
        <Option value="4">Four stars</Option>
        <Option value="3">Three stars</Option>
        <Option value="2">Two stars</Option>
        <Option value="1">One star</Option>
      </Select>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  filter: state.filterRate
});

const mapDispatchToProps = {
  handleFilterChange: filterRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateFilter);
