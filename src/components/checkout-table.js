import React from "react";
import {connect} from "react-redux";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import {totalOrderSelector, totalPriceSelector} from "../selectors";

function CheckoutTable ({totalOrder, totalSum}) {
     const columns = [
       {
         title: "Dish name",
         dataIndex: "name",
         key: "name",
         render: (text, record) => (
            <NavLink 
                title ="click to see this dish in the restaurant menu" 
                to={{pathname: `/restaurants/${record.restId}`, search: `dishId=${record.dishId}`}}>{text}
            </NavLink>)
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
        dataSource={totalOrder} 
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
    totalOrder: totalOrderSelector(state),
    totalSum: totalPriceSelector(state)
  });
  
  
  export default connect(
    mapStateToProps
  )(CheckoutTable);