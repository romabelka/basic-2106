import React from "react";
import { useState } from "react";
import { Button, List, Rate } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  const { isOpen, toggleOpen } = useToggler();
  const [rate, changeRate] = useState(0);
  const desc = ["ужасно", "плохо", "норм", "хорошо", "прекрасно"];
  const body = (
    /*isOpen && */ <>
      <List data-id="review-list">
        {reviews.map(review => (
          <List.Item key={review.id}>
            <Review review={review} />
          </List.Item>
        ))}
        <h4>Rate this restaraunt here:</h4>

        <Rate
          tooltips={desc}
          value={rate}
          onChange={changeRate}
          data-id="user-rating"
        />
        {rate ? (
          <span data-id="user-rating-span" className="ant-rate-text">
            {desc[rate - 1]}
          </span>
        ) : (
          ""
        )}
      </List>
    </>
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
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default ReviewList;
