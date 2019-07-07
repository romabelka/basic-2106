import React from "react";
import * as PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";

function ReviewList({ reviews }) {
  const { isOpen, toggleOpen } = useToggler();

  return (
    <div>
      {isOpen && (
        <List
          dataSource={reviews}
          renderItem={review => (
            <List.Item key={review}>
              <Review review={review} />
            </List.Item>
          )}
        />
      )}
      <Button onClick={toggleOpen}>
        {isOpen ? "hide reviews" : "show reviews"}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

export default ReviewList;
