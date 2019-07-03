import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "antd";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  const ListItem = item => (
    <Restaurant
      restaurant={item}
      isOpen={isItemOpen(item.id)}
      onBtnClick={toggleOpenItem(item.id)}
      data-id="restaurant"
    />
  );

  return <List dataSource={restaurants} renderItem={ListItem} />;
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

const mapStateToProps = ({ filter }) => ({ restaurants: filter.restaurants });

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
