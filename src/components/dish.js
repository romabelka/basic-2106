import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, removeItem } from "../ac";
import { dishSelector, dishLoadingSelector } from "../selectors";

function Dish({ dish, loading, amount, handleDecrease, handleIncrease }) {
  
  return (
    <Card loading={loading}
      bordered
      actions={[
        `$${loading? 0: dish.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-id="dish-amount">
            {amount}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              data-id="dish-minus"
              onClick={() => handleDecrease(dish.id)}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={() => handleIncrease(dish.id)}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={loading? "": dish.name} description={loading? "": dish.ingredients.join(", ")} />
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  dish: PropTypes.object,
  amount: PropTypes.number,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  //console.log('mapStateToProps');
  //console.log(ownProps);
  return {
  amount: state.order[ownProps.id] || 0,
  dish: dishSelector(state, ownProps),
  loading: dishLoadingSelector(state, ownProps)
}};

const mapDispatchToProps = {
  handleIncrease: addItem,
  handleDecrease: removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dish);
