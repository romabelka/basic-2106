import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
import { selectRaiting } from "../reducer/restaurants/actions";
import { RESTAURANT_RAITINGS } from "../reducer/restaurants/constants";

function RatingFilter(props) {
  return (
    <>
      <Select
        style={{ width: 200 }}
        placeholder="Select a rating"
        onChange={props.selectRaiting}
      >
        {RESTAURANT_RAITINGS.map(raiting => (
          <Select.Option key={raiting} value={raiting}>
            {raiting}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

const mapDispatchToProps = {
  selectRaiting
};

export default connect(
  null,
  mapDispatchToProps
)(RatingFilter);
