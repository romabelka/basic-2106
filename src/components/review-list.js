import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, List, Icon } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";
import { loadRestaurantReviews } from "../reducer/reviews/actions";
import { reviewSelector } from "../selectors";

function ReviewList({
  restaurantId,
  reviews,
  areReviewsLoading,
  loadRestaurantReviews
}) {
  useEffect(() => {
    loadRestaurantReviews();
  }, [loadRestaurantReviews]);

  const { isOpen, toggleOpen } = useToggler();

  const loadingBody = areReviewsLoading && (
    <div style={{ textAlign: "center" }}>
      <Icon type="loading" style={{ fontSize: 24, color: "#40a9ff" }} spin />
    </div>
  );

  const body = isOpen && (
    <>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item key={review.id}>
            <Review review={review} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurantId} />
    </>
  );
  return (
    <>
      {loadingBody}
      {body}
      <Button onClick={toggleOpen}>
        {isOpen ? "hide reviews" : "show reviews"}
      </Button>
    </>
  );
}

ReviewList.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      areReviewsLoading: state.reviews.get("loading"),
      reviews: reviewSelector(state, ownProps) || []
    };
  },
  {
    loadRestaurantReviews
  }
)(ReviewList);
