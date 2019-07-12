import React, { Component } from "react";
import Dish from "./dish";
import { Row, Col, Spin } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadMenu } from "../ac";
import { menuLoadedSelector, menuLoadingSelector } from "../selectors";

class RestaurantMenu extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    return {};
  }

  state = {
    error: null
  };

  /*
       getSnapshotBeforeUpdate(prevProps, prevState) {}
        componentWillReceiveProps(nextProps, nextContext) {
        }

        componentWillUpdate(nextProps, nextState, nextContext) {
        }

        componentWillMount() {

        }
    */

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
  }

  componentDidMount() {
    const { loaded, loading, loadMenu, restaurant } = this.props;
    if (!loaded && !loading) loadMenu(restaurant.id);
  }

  render() {
    if (this.state.error) return <h3>Oooops....</h3>;
    const { restaurant, loaded } = this.props;

    if (!loaded)
      return (
        <div>
          <Spin />
        </div>
      );

    return (
      <div style={{ padding: "16px" }}>
        <Row gutter={16}>
          {restaurant.menu.map(id => (
            <Col key={id} span={8}>
              <Dish id={id} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loading: menuLoadingSelector(state, ownProps),
    loaded: menuLoadedSelector(state, ownProps)
  }),
  { loadMenu }
)(RestaurantMenu);
