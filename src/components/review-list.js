import React from "react";
import * as PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";

function ReviewList({ reviews }) {
  const { isOpen, toggleOpen } = useToggler();

  const ListItem = item => (
    <List.Item>
      <Review review={item} />
    </List.Item>
  );

  return (
    <div>
      {isOpen && <List dataSource={reviews} renderItem={ListItem} />}
      <Button onClick={toggleOpen}>
        {isOpen ? "hide reviews" : "show reviews"}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};

ReviewList.defaultProps = {
  reviews: []
};

export default ReviewList;
