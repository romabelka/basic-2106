import React from "react";
import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useInputValue } from "../custom-hooks/use-input-value";

export default function OrderForm() {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();
  const { t, i18n } = useTranslation();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };

  return (
    <form onSubmit={handleSubmit}>
      {t("order-form.label-name")}: <Input value={name} onChange={setName} />
      {t("order-form.label-phone")}:{" "}
      <Input value={telephone} onChange={setTelephone} />
      {t("order-form.label-address")}:{" "}
      <Input.TextArea value={address} onChange={setAddress} />
      <Button type="primary" htmlType="submit">
        {t("button.cart-order")}
      </Button>
    </form>
  );
}
