import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";

function ReviewList({ restaurant }) {
  const { t, i18n } = useTranslation();

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
        {isOpen ? `${t("button.reviews-hide")}` : `${t("button.reviews-show")}`}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default ReviewList;
