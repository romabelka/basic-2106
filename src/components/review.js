import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {reviewSelector,userSelector} from "../selectors"
import { Comment, Rate } from "antd";

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
  review: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let review = reviewSelector(state, ownProps.id);
  let user = userSelector(state, review.userId);

  return {
  review: review,
  user: user
}};

export default connect(mapStateToProps)(Review);