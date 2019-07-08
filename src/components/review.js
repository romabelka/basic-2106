import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { reviewSelector, userSelector } from "../selectors";

function Review({ review, user }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={user.name}
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
    id: PropTypes.string,
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  review: reviewSelector(state, ownProps),
  user: userSelector(state, ownProps)
});

export default connect(mapStateToProps)(Review);
