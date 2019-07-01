import React from "react";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import PropTypes from 'prop-types';

function ReviewList({ reviews }) {

  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <div>
      {reviews.map(review => (
        <List key={review.id}>
          <Review review={review} />
        </List>
      ))}
    </div>
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

  reviews : PropTypes.arrayOf(PropTypes.object)
}

export default ReviewList;