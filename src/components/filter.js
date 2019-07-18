import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { setMinRating } from "../reducer/filters/actions";

function Filter({ minRating, setMinRating }) {
  const { t, i18n } = useTranslation();

  return (
    <Select value={minRating} onChange={setMinRating}>
      <Select.Option value={0}>{t("button.restaurants-filter")}</Select.Option>
      <Select.Option value={1}>1*</Select.Option>
      <Select.Option value={2}>2*</Select.Option>
      <Select.Option value={3}>3*</Select.Option>
      <Select.Option value={4}>4*</Select.Option>
      <Select.Option value={5}>5*</Select.Option>
    </Select>
  );
}

export default connect(
  state => ({
    minRating: state.filters.minRating
  }),
  { setMinRating }
)(Filter);
