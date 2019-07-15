import React from "react";
import { Button, Input} from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import CheckoutTable from "./checkout-table";

export default function OrderForm({totalOrder, state }) {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };
    
  return (
    <>
    <CheckoutTable/>
    
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