import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";

function Review({ review }) {
  Review.propTypes = {
    review: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string,
      rating: PropTypes.number.isRequired
    })
  };

  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={review.user}
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
export default Review;
