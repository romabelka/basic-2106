import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { connect } from "react-redux";
import { reviewSelector, userSelector } from "../selectors";

function Review({ review, user }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={user.get("name")}
      content={review.get("text")}
      actions={[
        <Rate
          disabled
          defaultValue={review.get("rating")}
          style={{ marginLeft: "24px" }}
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
};

export default connect((state, ownProps) => {
  let review = reviewSelector(state, ownProps);
  let user = userSelector(state, { id: review.get("userId") });
  return {
    review,
    user
  };
})(Review);
