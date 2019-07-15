import React from "react";
import {connect} from "react-redux";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import {allDishesSelect, dishSelector1} from "../selectors";

function CheckoutTable ({totalOrder, dishes}) {
    let totalOrderArray=[];
    let totalSum=0;

     for (let restId of Object.keys(totalOrder)) {
        for (let [dishId, amount] of Object.entries(totalOrder[restId])) {
             let {name, price} = dishSelector1(dishes, dishId);
            totalOrderArray.push({restId, dishId, amount, name, price} );
            totalSum+=amount*price;
       }
    }
   
     const columns = [
       {
         title: "Dish name",
         dataIndex: "name",
         key: "name",
         render: (text, record) => <NavLink to={{pathname: `/restaurants/${record.restId}`, search: `dishId=${record.dishId}`}}>{text}</NavLink>
       },
       {
         title: "Price, $",
         dataIndex: "price",
         key: "price"
       },
       {
         title: "Amount",
         dataIndex: "amount",
         key: "amount"
       }, 
       {
         title: "Sum, $",
         render: (record) => record.amount * record.price
       }
     ];
     
     return (
        <Table 
        dataSource={totalOrderArray} 
        columns={columns} 
        pagination={false}
        bordered 
        title={() => 'Your Order:'} 
        footer={() => `Total order sum: $${totalSum}`}
        rowKey={record => record.dishId}    
        />
     );

}
const mapStateToProps = (state) => ({
    totalOrder: state.order.toJS(),
    dishes: allDishesSelect(state)
  });
  
  
  export default connect(
    mapStateToProps
  )(CheckoutTable);