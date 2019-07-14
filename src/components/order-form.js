import React from "react";
import { Button, Input, List } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { connect } from "react-redux";
import {
  dishSelector,
  ordersSelector,
  restaurantIdByDishSelector
} from "../selectors";
import { NavLink } from "react-router-dom";

function OrderForm({ orders, dishes, getRestaurantByDish }) {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  let data = dishes.length !== 0 && (
    <>
      <h2>your order is: </h2>
      <List
        dataSource={dishes}
        renderItem={dish => (
          <List.Item key={dish.id}>
            <NavLink to={`/restaurants/${getRestaurantByDish(dish.id)}`}>
              {dish.name} : {orders.get(dish.id)}
            </NavLink>
          </List.Item>
        )}
      />
    </>
  );

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };

  return (
    <div>
      {data}
      <form onSubmit={handleSubmit}>
        Name: <Input value={name} onChange={setName} />
        Tel: <Input value={telephone} onChange={setTelephone} />
        Address: <Input.TextArea value={address} onChange={setAddress} />
        <Button type="primary" htmlType="submit">
          Order
        </Button>
      </form>
    </div>
  );
}

export default connect(state => ({
  orders: ordersSelector(state),
  dishes: [...ordersSelector(state).keys()].map(item =>
    dishSelector(state, { id: item })
  ),
  getRestaurantByDish: restaurantIdByDishSelector(state)
}))(OrderForm);
