import React, { Component } from "react";
import { Select } from "antd";
const { Option } = Select;

class Filter extends Component {
  state = {
    threshold: 0
  };

  handleChange = value => {
    this.setState({
      threshold: value
    });
  };

  render() {
    return (
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={this.handleChange}
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

export default Filter;
