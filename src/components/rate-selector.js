import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { selectChange } from "../ac";

const { Option } = Select;

function RateSelector(props) {
  return (
    <>
      <h3>Min Rating Filter:</h3>
      <Select
        value={props.filterValue}
        style={{ width: 120 }}
        onChange={filterValue => props.handleSelectChange(filterValue)}
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

const mapStateToProps = state => ({
  filterValue: state.filterValue
});

const mapDispatchToProps = {
  handleSelectChange: selectChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateSelector);
