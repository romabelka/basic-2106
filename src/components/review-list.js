import React from "react";
import PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { reviewSelector } from "../selectors";

function ReviewList({ restaurantId, reviews }) {
  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <div>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item key={review.id}>
            <Review review={review} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
  return (
    <div>
      {body}
      <Button onClick={toggleOpen}>
        {isOpen ? "hide reviews" : "show reviews"}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      reviews: reviewSelector(state, ownProps) || []
    };
  },
  {}
)(ReviewList);
