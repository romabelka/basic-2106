import React from "react";
import CartItems from "../../cart-items";
import OrderForm from "../../order-form";

const CheckoutPage = () => {
  return (
    <div>
      <CartItems />
      <OrderForm />
    </div>
  );
};

export default CheckoutPage;
