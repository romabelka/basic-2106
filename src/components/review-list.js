import React from "react";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import * as PropTypes from "prop-types";

function ReviewList({ reviews }) {
  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <List
      dataSource={reviews}
      renderItem={item => (
        <List.Item key={item.id}>
          <Review review={item} />
        </List.Item>
      )}
    />
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

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  )
};

export default ReviewList;
