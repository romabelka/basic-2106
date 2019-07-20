import React from "react";
import { Button, Input } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { Consumer } from "../contexts/locale";

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
      <Consumer>{locale => locale.name + ":"}</Consumer>
      <Input value={name} onChange={setName} />
      <Consumer>{locale => locale.phoneAbbr + ":"}</Consumer>
      <Input value={telephone} onChange={setTelephone} />
      <Consumer>{locale => locale.address + ":"}</Consumer>
      <Input.TextArea value={address} onChange={setAddress} />
      <Button type="primary" htmlType="submit">
        <Consumer>{locale => locale.toOrder}</Consumer>
      </Button>
    </form>
  );
}
