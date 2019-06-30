import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Rate } from "antd";
import Review from "./review";

Enzyme.configure({ adapter: new Adapter() });

const reviewItem = {
  user: "Sam",
  text:
    "Finally! This place is amazing place for breakfast, lunch, dinner and supper",
  rating: 0
};

describe("<Review />", () => {
  let review, rate;

  beforeEach(() => {
    review = mount(<Review review={reviewItem} />);
    rate = review.find(Rate);
  });

  describe("<Rate />", () => {
    it("Компонент отзыва имеет один компонент рейтинга", () => {
      expect(rate).toHaveLength(1);
    });

    it("Максимальное значение рейтинга состоит из 5 звёзд по умолчанию", () => {
      expect(rate.find("li.ant-rate-star").length <= 5).toBe(true);
    });

    it("Значение рейтинга по умолчанию равно нулю", () => {
      expect(rate.props().value === 0).toBe(true);
    });
  });
});
