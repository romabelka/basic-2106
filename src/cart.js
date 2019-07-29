import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import { List } from 'antd'
import { totalAmountSelector, totalPriceSelector, dishPriceList } from "../selectors";

function Cart({ totalAmount, totalPrice, dishPriceList }) {
  
  return (
    <div>
      <List
        dataSource={dishPriceList}
        renderItem={ dishElem => (
          <List.Item>
            <NavLink to={`/restaurants/${dishElem.id}`}>
              {`${dishElem.name}, ${dishElem.cnt}`}
            </NavLink>
          </List.Item>
        )}
      />
      <br/>
      total : {totalAmount} items from {totalPrice}$
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state),
  dishPriceList : dishPriceList(state),
}))(Cart);
