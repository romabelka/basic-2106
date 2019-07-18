import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Input, Rate } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { addReview } from "../reducer/reviews/actions";

function ReviewForm({ submitReview }) {
  const [text, setText] = useInputValue();
  const [rating, setRating] = useState();
  const { t, i18n } = useTranslation();

  const handleSubmit = ev => {
    ev.preventDefault();
    submitReview({ text, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      {t("review-form.label-text")}: <Input value={text} onChange={setText} />
      <Rate onChange={setRating} value={rating} />
      <Button type="primary" htmlType="submit">
        {t("button.reviews-submit")}
      </Button>
    </form>
  );
}

export default connect(
  null,
  (dispatch, { restaurantId }) => ({
    submitReview: review => dispatch(addReview(review, restaurantId))
  })
)(ReviewForm);
