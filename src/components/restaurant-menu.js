import React, { Component } from "react";
import Dish from "./dish.js";
import { Row, Col } from "antd";
import PropTypes from 'prop-types'

class RestaurantMenu extends Component {

  static getDerivedStateFromProps( props, state ) {
    
    return {};
  }

  state = {
    
    error : null
  };

  componentDidCatch( error, errorInfo ) {
    this.setState({ error });
  }

  render() {
    
    if (this.state.error) return <h3>Oooops....</h3>;
    const { menu } = this.props;
    
    return (
      <div style={{ padding: "16px" }} ref={this.setContainerRef}>
        <Row gutter={16}>
          {menu.map(dish => (
            <Col key={dish.id} span={8}>
              <Dish {...dish} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  setContainerRef = element => console.log(element);
}

RestaurantMenu.propTypes = {
  dish : PropTypes.shape({
    id : PropTypes.string.isRequired,
    ingridients : PropTypes.arrayOf(PropTypes.string),
    name  : PropTypes.string,
    price : PropTypes.number
  }) 
}

export default RestaurantMenu;
