import React, { Component } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

class Dish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsCount: 0
    };
  }

  addItem = () => {
    this.setState(state => ({
      itemsCount: this.state.itemsCount + 1
    }));
  };

  removeItem = () => {
    this.setState(state => ({
      itemsCount: this.state.itemsCount > 0 ? this.state.itemsCount - 1 : 0
    }));
  };

  render() {
    return (
      <Card
        bordered
        actions={[
          `$${this.props.price}`,
          <>
            <span style={{ margin: "0 12px" }} data-id="itemsCount">
              {this.state.itemsCount}
            </span>
            <Button.Group>
              <Button
                type="primary"
                shape="circle"
                icon="minus"
                data-id="dish-btn-minus"
                onClick={this.removeItem}
              />
              <Button
                type="primary"
                shape="circle"
                icon="plus"
                data-id="dish-btn-plus"
                onClick={this.addItem}
              />
            </Button.Group>
          </>
        ]}
      >
        <Card.Meta
          title={this.props.name ? this.props.name : ""}
          description={
            this.props.ingredients ? this.props.ingredients.join(", ") : []
          }
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
