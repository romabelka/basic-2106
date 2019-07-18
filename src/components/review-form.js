import React, { useState } from "react";
import { Button, Input, Rate } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { connect } from "react-redux";
import { addReview } from "../ac";
import { Consumer } from "../contexts/context";

function ReviewForm({ submitReview }) {
  const [text, setText] = useInputValue();
  const [rating, setRating] = useState();

  const handleSubmit = ev => {
    ev.preventDefault();
    submitReview({ text, rating });
  };

  return (
    <Consumer>
      {context => (
        <form onSubmit={handleSubmit}>
          {context.localization.TEXT}: <Input value={text} onChange={setText} />
          <Rate onChange={setRating} value={rating} />
          <Button type="primary" htmlType="submit">
            {context.localization.SUBMIT_REVIEW}
          </Button>
        </form>
      )}
    </Consumer>
  );
}

export default connect(
  null,
  (dispatch, { restaurantId }) => ({
    submitReview: review => dispatch(addReview(review, restaurantId))
  })
)(ReviewForm);
