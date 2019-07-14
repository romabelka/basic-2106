import React from "react";
import OrderForm from "../../order-form";
import CartDetailed from "../../cart-detailed";

export default function OrderPage() {
  return (
    <div>
      <CartDetailed />
      <OrderForm />
    </div>
  );
}
