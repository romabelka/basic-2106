import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";

Enzyme.configure({ adapter: new Adapter() });

const parameters = {
  id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
  name: "Chicken tikka masala",
  price: 12,
  ingredients: ["chicken", "rice"]
};

describe("Dish", () => {
  it("Should increment value by pressing a plus button", () => {
    const container = mount(<Dish {...parameters} />);
    expect(container.find('[data-id="count"]').text()).toEqual("0");
    container
      .find('[data-id="plus-btn"]')
      .at(0)
      .simulate("click");
    expect(container.find('[data-id="count"]').text()).toEqual("1");
    container
      .find('[data-id="plus-btn"]')
      .at(0)
      .simulate("click");
    expect(container.find('[data-id="count"]').text()).toEqual("2");
  });
  it("Should decrement value by pressing a minus button but not if value is 0", () => {
    const container = mount(<Dish {...parameters} />);
    expect(container.find('[data-id="count"]').text()).toEqual("0");
    container
      .find('[data-id="minus-btn"]')
      .at(0)
      .simulate("click");
    expect(container.find('[data-id="count"]').text()).toEqual("0");
    container
      .find('[data-id="plus-btn"]')
      .at(0)
      .simulate("click");
    expect(container.find('[data-id="count"]').text()).toEqual("1");
    container
      .find('[data-id="minus-btn"]')
      .at(0)
      .simulate("click");
    expect(container.find('[data-id="count"]').text()).toEqual("0");
  });
});
