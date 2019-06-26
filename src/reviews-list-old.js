import React from "react";
import Review from "./review";
import { useToggler } from "./custom-hooks/use-toggler";
import { Button, List } from "antd";

export default function ReviewsList({ reviews }) {
  const { toggleShown, isShown } = useToggler(false);

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
