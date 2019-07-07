import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { Radio } from "antd";
import { setMinRating } from "../ac";

function RateFilter({ highestRating, minRating, setMinRating }) {
  return (
    <div>
      <span>Choose minimum restaurant rating: </span>
      <Radio.Group
        value={minRating}
        buttonStyle="solid"
        onChange={evt => setMinRating(evt.target.value)}
      >
        {[...new Array(Math.max(highestRating, 0) + 1)].map((_, i) => (
          <Radio.Button value={i} key={`radio-key-${i}`}>
            {i}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
}

RateFilter.propTypes = {
  setMinRating: PropTypes.func.isRequired,
  minRating: PropTypes.number.isRequired,
  highestRating: PropTypes.number
};

RateFilter.defaultProps = {
  highestRating: 5
};

export default connect(
  state => ({
    minRating: state.filters.minRating
  }),
  { setMinRating }
)(RateFilter);
