import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { connect } from 'react-redux';
import {reviewSelector} from '../selectors/index';

function Review({ review }) {
  
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

const mapStateToProps = (state, ownProps) =>({
  review : reviewSelector(state, ownProps)
});

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
};

export default connect(mapStateToProps)(Review);
