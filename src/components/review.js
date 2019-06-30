import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Comment, Rate } from "antd";

function Review({ review }) {
  const [rating, setRating] = useState(review.rating);

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
          value={rating}
          style={{ marginLeft: "24px" }}
          onChange={value => setRating(value)}
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

export default Review;
