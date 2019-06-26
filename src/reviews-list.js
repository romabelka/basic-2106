import React, { useState } from "react";
import Review from "./review";
import { Button, List } from "antd";

export default function ReviewsList({ reviews }) {
  const [isShown, toggleShown] = useState(false);

  const body = isShown && (
    <List bordered>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
  return (
    <>
      <Button onClick={() => toggleShown(!isShown)}>
        {isShown ? "hide reviews" : "show reviews"}
      </Button>
      {body}
    </>
  );
}
