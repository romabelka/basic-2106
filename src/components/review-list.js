import React from "react";
import PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";
import { Consumer } from '../contexts/languauge'

function ReviewList({ restaurant }) {
  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <div>
      <List
        dataSource={restaurant.reviews}
        renderItem={reviewId => (
          <List.Item key={reviewId}>
            <Review id={reviewId} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurant.id} />
    </div>
  );
  return (
    <div>
      {body}
      <Button onClick={toggleOpen}>
        {
          isOpen ? 
            <Consumer>{ currentLocalize => currentLocalize.hideReview }</Consumer> : 
            <Consumer>{ currentLocalize => currentLocalize.showReview }</Consumer> 
        }
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default ReviewList;
