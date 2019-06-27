import React, { Fragment } from "react";
import toggleDecorator from "../decorators/toggle";
import Wrapper from "./wrapper";
import Review from "./review";
import ToggleButton from "./toggle-button";

const ReviewsList = ({ reviews, toggleVisibility, isVisible }) => (
  <Fragment>
    <ToggleButton
      onBtnClick={toggleVisibility()}
      isOpen={isVisible}
      collapseText="Свернуть отзывы"
      expandText="Показать отзывы"
    />
    {isVisible && (
      <Wrapper>
        {reviews.map(review => (
          <Review key={review.id} {...review} />
        ))}
      </Wrapper>
    )}
  </Fragment>
);

export default toggleDecorator(ReviewsList);
