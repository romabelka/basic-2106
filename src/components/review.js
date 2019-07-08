import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { Comment, Rate } from "antd";
import { makeReviewWithUserSelector } from "../selectors";

function Review({ review }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={review.userName}
      content={review.text}
      actions={[
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired
  })
};

const mapStateToProps = (state, props) => ({
  review: makeReviewWithUserSelector()(state, props)
});

export default connect(mapStateToProps)(Review);
