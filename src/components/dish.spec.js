import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish", () => {
  let menu = restaurants[0].menu[0];
  const container = mount(<Dish {...menu} />);
  const span = container.find('[data-id="span"]');
  const plusBtn = container.find('[data-id="plus-btn"]').at(0);
  const minusBtn = container.find('[data-id="minus-btn"]').at(0);
  it("should increase amount of dishes by one(1) when clicked on + button", () => {
    expect(span.text()).toEqual("0");

    plusBtn.simulate("click");
    expect(span.text()).toEqual("1");

    plusBtn.simulate("click");
    expect(span.text()).toEqual("2");
  });

  it("should decrease amount of dishes by one(1) when clicked on - button, but only when amount > 0", () => {
    minusBtn.simulate("click");
    expect(span.text()).toEqual("1");

    minusBtn.simulate("click");
    expect(span.text()).toEqual("0");

    minusBtn.simulate("click");
    expect(span.text()).toEqual("0");
  });
});
