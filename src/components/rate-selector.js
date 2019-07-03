import React from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function RateSelector() {
  return (
    <>
      <h3>Фильтр ресторанов по рейтингу:</h3>
      <Select
        /*defaultValue="1"*/ style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="1">*</Option>
        <Option value="2">**</Option>
        <Option value="3">***</Option>
        <Option value="4">****</Option>
        <Option value="5">*****</Option>
      </Select>
    </>
  );
}
