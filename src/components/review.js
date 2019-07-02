import React from "react";
import { Comment, Rate } from "antd";
import * as PropTypes from "prop-types";

class Review extends React.PureComponent {
  state = {
    rating: this.props.review.rating
  };

  onChange = value => {
    this.setState({ rating: value });
  };

  render() {
    return (
      <Comment
        style={{
          margin: "16px",
          backgroundColor: "white"
        }}
        author={this.props.review.user}
        content={this.props.review.text}
        actions={[
          <Rate
            data-id="rating"
            onChange={this.onChange}
            defaultValue={this.state.rating}
            value={this.state.rating}
            style={{ marginLeft: "24px" }}
          />
        ]}
      />
    );
  }
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
};

export default Review;
