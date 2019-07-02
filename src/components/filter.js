import React, { Component } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { setThreshold } from "../ac";

const { Option } = Select;

class Filter extends Component {
  render() {
    return (
      <div>
        <Select
          defaultValue={0}
          style={{ width: 120 }}
          onChange={this.props.handleChange}
        >
          <Option value="0">Все</Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentThreshold: state.threshold
});

const mapDispatchToProps = {
  handleChange: setThreshold
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
