import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish: test cases", () => {
  let item = restaurants.pop().menu.pop();
  let container = mount(<Dish {...item} />);
  let itemsCount = container.find('[data-id="itemsCount"]');
  let addBtn = container.find('[data-id="dish-btn-plus"]');
  let removeBtn = container.find('[data-id="dish-btn-minus"]');

  it("test default items count", () => {
    expect(itemsCount.text()).toEqual("0");
  });

  it("test on positive items count", () => {
    removeBtn
      .at(0)
      .simulate("click")
      .simulate("click");

    expect(itemsCount.text()).toEqual("0");
  });

  it("test items count on 'add button' clicks", () => {
    addBtn.at(0).simulate("click");

    expect(itemsCount.text()).toEqual("1");

    addBtn.at(0).simulate("click");

    expect(itemsCount.text()).toEqual("2");
  });

  it("test items count on 'remove button' clicks", () => {
    removeBtn.at(0).simulate("click");

    expect(itemsCount.text()).toEqual("1");

    removeBtn.at(0).simulate("click");

    expect(itemsCount.text()).toEqual("0");
  });
});
