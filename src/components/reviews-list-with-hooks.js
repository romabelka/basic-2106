import React, { Fragment } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import Wrapper from "./wrapper";
import Review from "./review";
import ToggleButton from "./toggle-button";

const ReviewsList = ({ reviews }) => {
  const { toggleVisibility, isVisible } = useToggle(false);

  return (
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
};

export default ReviewsList;
