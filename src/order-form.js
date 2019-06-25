import React, { useState } from "react";
import { Button, Input } from "antd";

export default function OrderForm() {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };

  return (
    <form onSubmit={handleSubmit}>
      Name: <Input value={name} onChange={setName} />
      Tel: <Input value={telephone} onChange={setTelephone} />
      Address: <Input.TextArea value={address} onChange={setAddress} />
      <Button type="primary" htmlType="submit">
        Order
      </Button>
    </form>
  );
}

function useInputValue(initialValue) {
  const [state, setState] = useState(initialValue);
  const onChange = ev => setState(ev.target.value);

  return [state, onChange];
}
