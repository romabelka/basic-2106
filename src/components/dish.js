import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

class Dish extends React.Component {
  state = {
    count: 0
  };

  addDish = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  removeDish = () => {
    this.setState(state => ({
      count: state.count === 0 ? 0 : state.count - 1
    }));
  };

  render() {
    return (
      <Card
        bordered
        actions={[
          `$${this.props.price}`,
          <>
            <span style={{ margin: "0 12px" }} data-id="dish-count">
              {this.state.count}
            </span>
            <Button.Group>
              <Button
                type="primary"
                shape="circle"
                icon="minus"
                data-id="dish-btn-minus"
                onClick={this.removeDish}
              />
              <Button
                type="primary"
                shape="circle"
                icon="plus"
                data-id="dish-btn-plus"
                onClick={this.addDish}
              />
            </Button.Group>
          </>
        ]}
      >
        <Card.Meta
          title={this.props.name}
          description={this.props.ingredients.join(", ")}
        />
      </Card>
    );
  }
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dish;
