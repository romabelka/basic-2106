import React from "react";
import Review from "./review";
import togglerDecorator from "./decorators/toggler";
import { Button, List } from "antd";

function ReviewsList({ reviews, isShown, toggleShown }) {
  const body = isShown && (
    <List bordered>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
  return (
    <>
      <Button onClick={toggleShown}>
        {isShown ? "hide reviews" : "show reviews"}
      </Button>
      {body}
    </>
  );
}

export default togglerDecorator(ReviewsList);
