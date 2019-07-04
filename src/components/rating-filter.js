import React from "react";
import { Select } from "antd";

const { Option } = Select;

function RatingFilter(props) {
  return (
    <>
      <Select
        filterOption={true}
        style={{ width: 200 }}
        placeholder="Select a rating"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="one">1 star</Option>
        <Option value="two">2 stars</Option>
        <Option value="three">3 stars</Option>
        <Option value="four">4 stars</Option>
        <Option value="five">5 stars</Option>
      </Select>
    </>
  );
}

function onChange(value) {
  console.log(`selected ${value}`);
}

export default RatingFilter;
