import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish", () => {
  const dishMock = restaurants[0].menu[0];

  it("should render a dish with default zero count", () => {
    const container = mount(<Dish {...dishMock} />);

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");
  });

  it("should increment dish count on click '+'", () => {
    const container = mount(<Dish {...dishMock} />);

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");

    container
      .find('[data-id="dish-add-btn"]')
      .first()
      .simulate("click");

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("1");
  });

  it("should decrement dish count on click '-'", () => {
    const container = mount(<Dish {...dishMock} />);

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");

    container
      .find('[data-id="dish-add-btn"]')
      .first()
      .simulate("click");

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("1");

    container
      .find('[data-id="dish-remove-btn"]')
      .first()
      .simulate("click");

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");
  });

  it("should not decrease dish count to value less than 0", () => {
    const container = mount(<Dish {...dishMock} />);

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");

    container
      .find('[data-id="dish-remove-btn"]')
      .first()
      .simulate("click");

    expect(container.find('[data-id="dish-counter"]').text()).toEqual("0");
  });
});
