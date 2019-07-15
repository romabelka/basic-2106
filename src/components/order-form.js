import React from "react";
import { Button, Input, Table } from "antd";
import {connect} from "react-redux";
import { useInputValue } from "../custom-hooks/use-input-value";
import { Route, NavLink, Switch } from "react-router-dom";
import { element } from "prop-types";
import {dishSelector} from "../selectors";

function OrderForm({totalOrder, state }) {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };
  
 let totalOrderArray=[];
  for (let restId of Object.keys(totalOrder)) {
   
    for (let [dishId, amount] of Object.entries(totalOrder[restId])){
      let {name, price} = dishSelector(state,{dishId});
      totalOrderArray.push({restId, dishId, amount, name, price} );

    }}
    const orderBody = totalOrderArray.map((elem) => 
     <li>RESTID={elem.restId} DISHID={elem.dishId} amount={elem.amount}</li>
    );
  let columns = [
    {
      title: "Dish name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <NavLink to={{pathname: `/restaurants/${record.restId}`}}>{text}</NavLink>
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount"
    }, 
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    }
  ];
  
  return (
    <>
    <Table dataSource={totalOrderArray} columns={columns} title={() => 'Your Order:'}/>;
    <form onSubmit={handleSubmit}>
      Name: <Input value={name} onChange={setName} placeholder ="Input your name"  />
      Tel: <Input value={telephone} onChange={setTelephone} placeholder ="+7 (XXX) XXX-XX-XX" />
      Address: <Input.TextArea value={address} onChange={setAddress} placeholder ="Input your adress" />
      <Button type="primary" htmlType="submit">
        Order
      </Button>
    </form>
    </>
  );
}
const mapStateToProps = (state) => ({
  totalOrder: state.order.toJS(),
  state: state
});


export default connect(
  mapStateToProps
)(OrderForm);