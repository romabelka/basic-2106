import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { Radio } from "antd";
import { changeMinRating } from "../ac";

const RateFilter = ({ highestRating, minRating, onChange }) => (
  <div>
    <span>Choose minimum restaurant rating: </span>
    <Radio.Group
      value={minRating}
      buttonStyle="solid"
      onChange={evt => onChange(evt.target.value)}
    >
      {[...new Array(Math.max(highestRating, 0) + 1)].map((_, i) => (
        <Radio.Button value={i} key={`radio-key-${i}`}>
          {i}
        </Radio.Button>
      ))}
    </Radio.Group>
  </div>
);

RateFilter.propTypes = {
  minRating: PropTypes.number.isRequired,
  highestRating: PropTypes.number
};

RateFilter.defaultProps = {
  highestRating: 5
};

const mapStateToProps = ({ minRating }) => ({ minRating });

export default connect(
  mapStateToProps,
  { onChange: changeMinRating }
)(RateFilter);
