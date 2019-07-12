import React, { useEffect } from "react";
import Dish from "./dish";
import { Row, Col, Spin } from "antd";
import { connect } from "react-redux";
import { loadMenu } from "../ac";
import { menuLoadedSelector, menuLoadingSelector } from "../selectors";

function RestaurantMenu({ restaurant, loaded, loading, loadMenu }) {
  useEffect(() => {
    if (!loaded && !loading) loadMenu(restaurant.id);
  }, [restaurant.id]);

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

/*
class RestaurantMenu extends Component {
  componentDidMount() {
    const { loaded, loading, loadMenu, restaurant } = this.props;
    if (!loaded && !loading) loadMenu(restaurant.id);
  }

  componentDidUpdate() {
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
*/

export default connect(
  (state, ownProps) => ({
    loading: menuLoadingSelector(state, ownProps),
    loaded: menuLoadedSelector(state, ownProps)
  }),
  { loadMenu }
)(RestaurantMenu);
