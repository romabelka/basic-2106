import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { totalAmountSelector, totalPriceSelector } from "../selectors";

function Cart({ totalAmount, totalPrice }) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t("cart-checkout.total")} {totalAmount} {t("cart-checkout.items")}{" "}
      {t("cart-checkout.from")} {totalPrice}$
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
