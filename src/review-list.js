import React from "react";
import Review from "./review";
import { Button } from "antd";
import toggleDecorator from "./decorators/toggle-item";

function ReviewList({ reviews, isOpened, toggleItem }) {
  const body =
    isOpened &&
    reviews.map(review => <Review review={review} key={review.id} />);
  return (
    <div>
      <h4>Reviews:</h4>
      {body}
      <Button onClick={toggleItem} type="primary">
        {isOpened ? "hide reviews" : "show reviews"}
      </Button>
    </div>
  );
}

export default toggleDecorator(ReviewList);
