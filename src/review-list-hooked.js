import React from "react";
import Review from "./review";
import { Button } from "antd";
import { useToggleItem } from "./custom-hooks/use-toogle-item";

export default function ReviewList({ reviews }) {
  const { isOpened, toggleItem } = useToggleItem();
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
