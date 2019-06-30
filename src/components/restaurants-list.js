import React from "react";
import * as PropTypes from "prop-types";
import { List } from "antd";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  const ListItem = item => (
    <Restaurant
      key={item.id}
      restaurant={item}
      isOpen={isItemOpen(item.id)}
      onBtnClick={toggleOpenItem(item.id)}
      data-id="restaurant"
    />
  );

  return <List dataSource={restaurants} renderItem={ListItem} />;
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ),
  toggleOpenItem: PropTypes.func,
  isItemOpen: PropTypes.func
};

// noinspection JSUnusedGlobalSymbols
RestaurantsList.defaultProps = {
  restaurants: [],
  toggleOpenItem: () => null,
  isItemOpen: () => false
};

export default accordionDecorator(RestaurantsList);
