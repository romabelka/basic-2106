import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {reviewSelector,userSelector} from "../selectors"
import { Comment, Rate } from "antd";

function Review({ review, user }) {
  //console.log(review);
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
/*  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired*/
  review: PropTypes.object.isRequired
};

//export default Review;
const mapStateToProps = (state, ownProps) => {
  let review = reviewSelector(state, ownProps.id);
  let user = userSelector(state, review.userId);
  //console.log(user);
  return {
  /*amount: state.order[ownProps.id] || 0,*/
  review: review,
  user: user

}};

/*const mapDispatchToProps = {
  handleIncrease: addItem,
  handleDecrease: removeItem
};*/

export default connect(mapStateToProps)(Review);