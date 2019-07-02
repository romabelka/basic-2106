import React from "react";
import { mount } from "enzyme";
import Dish from "./dish";
import { restaurants } from "../fixtures";

const dish = restaurants[0].menu[0];
const getAmount = container => container.find('[data-id="dish-amount"]').text();
const getPlusBtn = container => container.find('[data-id="dish-plus"]').at(0);
const getMinusBtn = container => container.find('[data-id="dish-minus"]').at(0);

describe("Dish", () => {
  it("should render 0 amount by default", () => {
    const container = mount(<Dish {...dish} />);

    expect(getAmount(container)).toEqual("0");
  });

  it("should increase on plus", () => {
    const container = mount(<Dish {...dish} />);

    expect(getAmount(container)).toEqual("0");

    getPlusBtn(container).simulate("click");

    expect(getAmount(container)).toEqual("1");
  });

  it("should decrease on minus", () => {
    const container = mount(<Dish {...dish} />);

    expect(getAmount(container)).toEqual("0");

    getPlusBtn(container).simulate("click");

    expect(getAmount(container)).toEqual("1");

    getMinusBtn(container).simulate("click");

    expect(getAmount(container)).toEqual("0");
  });

  it("should not decrease if amount <= 0", () => {
    const container = mount(<Dish {...dish} />);

    expect(getAmount(container)).toEqual("0");

    getMinusBtn(container).simulate("click");

    expect(getAmount(container)).toEqual("0");
  });
});
