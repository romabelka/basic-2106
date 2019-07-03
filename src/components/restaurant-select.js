import React from "react";
import { connect } from "react-redux";
import { selectRaiting } from "../ac";
import { Select } from "antd";
import { RESTAURANT_RAITNGS } from "../constants";

const RestaurantSelect = props => {
  return (
    <Select
      placeholder="Select a rating"
      style={{ width: 200 }}
      onChange={props.selectRaiting}
    >
      {RESTAURANT_RAITNGS.map(raiting => (
        <Select.Option key={raiting} value={raiting}>
          {raiting}
        </Select.Option>
      ))}
    </Select>
  );
};

const mapDispatchToProps = {
  selectRaiting
};

export default connect(
  null,
  mapDispatchToProps
)(RestaurantSelect);
