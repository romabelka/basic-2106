import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish", () => {
  it("should render menu item", () => {
    const menu = restaurants[0].menu[0];
    const container = mount(<Dish {...menu} />);

    expect(container.exists()).toEqual(true);
  });

  it("should render a zero count of dish by default", () => {
    const menu = restaurants[0].menu[0];
    const container = mount(<Dish {...menu} />);

    expect(
      container
        .find('[data-id="dish-count"]')
        .at(0)
        .text()
    ).toEqual("0");
  });

  it("should increment value on plus-button click", () => {
    const menu = restaurants[0].menu[0];
    const container = mount(<Dish {...menu} />);

    container
      .find('[data-id="plus-btn"]')
      .at(0)
      .simulate("click");

    expect(
      container
        .find('[data-id="dish-count"]')
        .at(0)
        .text()
    ).toEqual("1");
  });

  it("should not decrement value below zero", () => {
    const menu = restaurants[0].menu[0];
    const container = mount(<Dish {...menu} />);

    container
      .find('[data-id="minus-btn"]')
      .at(0)
      .simulate("click");

    expect(
      container
        .find('[data-id="dish-count"]')
        .at(0)
        .text()
    ).toEqual("0");
  });

  it("should decrement value greater than zero", () => {
    const menu = restaurants[0].menu[0];
    const container = mount(<Dish {...menu} />);

    container
      .find('[data-id="plus-btn"]')
      .at(0)
      .simulate("click")
      .simulate("click");

    container
      .find('[data-id="minus-btn"]')
      .at(0)
      .simulate("click");

    expect(
      container
        .find('[data-id="dish-count"]')
        .at(0)
        .text()
    ).toEqual("1");
  });
});
