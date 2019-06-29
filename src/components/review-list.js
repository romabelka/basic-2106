import React from "react";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired
  };
  const { isOpen, toggleOpen } = useToggler();

  const body = isOpen && (
    <List>
      {reviews.map(review => (
        <List.Item key={review.id}>
          <Review key={review.id} review={review} />
        </List.Item>
      ))}
    </List>
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

export default ReviewList;
