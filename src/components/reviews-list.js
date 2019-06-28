import React from "react";
import toggleDecorator from "../decorators/toggle";
import Review from "./review";
import { Button } from "antd";

function ReviewsList({ reviews, isShown, toggleShown }) {
  const body = isShown && (
    <section className="reviews">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );

  return (
    <>
      <Button type="dashed" onClick={toggleShown}>
        {isShown ? "hide all" : "show all"}
      </Button>
      {body}
    </>
  );
}

export default toggleDecorator(ReviewsList);
