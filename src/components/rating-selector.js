import { Select } from "antd";
import React from "react";
import { connect } from "react-redux";
import { changeRating } from "../ac";

function RatingSelector(props) {
  return (
    <Select
      defaultValue={props.rating}
      style={{ width: 120 }}
      onChange={value => props.ratingSelect(value)}
    >
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
    </Select>
  );
}

const mapStateToProps = state => ({ rating: state.filterValue || 5 });

const mapDispatchToProps = {
  ratingSelect: changeRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingSelector);
