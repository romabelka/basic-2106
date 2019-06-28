import React from "react";
import { Button, Input } from "antd";
import useInputValue from "../custom-hooks/use-input-value";

export default function OrderForm() {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  const handleSubmit = event => {
    event.preventDefault();

    console.log("---", name, telephone, address);
  };

  return (
    <form onSubmit={handleSubmit}>
      Name: <Input value={name} onChange={setName} placeholder="Ilia Kniazev" />
      Tel:{" "}
      <Input
        value={telephone}
        onChange={setTelephone}
        placeholder="phone number"
      />
      Address:{" "}
      <Input.TextArea
        value={address}
        onChange={setAddress}
        placeholder="address"
      />
      <Button type="primary" htmlType="submit">
        Order
      </Button>
    </form>
  );
}
