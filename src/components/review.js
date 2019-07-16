import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { connect } from "react-redux";
import { reviewSelector } from "../selectors";
import { userContext, Consumer } from "../contexts/username";

function Review({ review }) {
  const username = useContext(userContext);
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={username}
      content={review.text}
      actions={[
        <div>
          <Rate
            disabled
            defaultValue={review.rating}
            style={{ marginLeft: "24px" }}
          />
          <Consumer>{username => <h3>{username}</h3>}</Consumer>
        </div>
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

export default connect((state, ownProps) => ({
  review: reviewSelector(state, ownProps)
}))(Review);
