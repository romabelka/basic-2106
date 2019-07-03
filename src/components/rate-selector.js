import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { selectChange } from "../ac";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function RateSelector(props) {
  return (
    <>
      <h3>Фильтр ресторанов по рейтингу:</h3>
      <Select
        /*defaultValue="1"*/ value={props.filter}
        style={{ width: 120 }}
        onChange={
          filterValue => props.handleSelectChange(filterValue) /*handleChange*/
        }
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
  filter: state.filter
});

const mapDispatchToProps = {
  handleSelectChange: selectChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateSelector);
