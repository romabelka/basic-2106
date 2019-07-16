import React from "react";
import OrderForm from "../../order-form";
import CartCheckout from "../../cart-checkout";

export default function OrderPage() {
  return (
    <div>
      <CartCheckout />
      <OrderForm />
    </div>
  );
}
