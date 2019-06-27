import React from "react";
import { Card, Icon } from "antd";

const MAX_STARS = 5;
const MIN_STARS = 0;

const Rating = ({ reviewId, rating }) => {
  let floorValue = Math.floor(rating);

  if (floorValue > MAX_STARS) {
    floorValue = MAX_STARS;
  } else if (floorValue < MIN_STARS) {
    floorValue = MIN_STARS;
  }

  let stars = [];

  for (let filledIndex = 0; filledIndex < floorValue; filledIndex++) {
    stars.push(
      <Icon key={`${filledIndex}-f-${reviewId}`} type="star" theme="filled" />
    );
  }

  const unfilledLength = MAX_STARS - stars.length;

  for (let unfilledIndex = 0; unfilledIndex < unfilledLength; unfilledIndex++) {
    stars.push(
      <Icon
        key={`${unfilledIndex}-u-${reviewId}`}
        type="star"
        theme="outlined"
      />
    );
  }

  return <div>{stars.map(star => star)}</div>;
};

const Review = ({ id, user, text, rating }) => (
  <Card
    type="inner"
    title={`Отзыв пользвателя: ${user}`}
    extra={<Rating reviewId={id} rating={rating} />}
  >
    {text}
  </Card>
);

export default Review;
