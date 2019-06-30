import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish", () => {
  const dish = restaurants[0].menu[0];
  const container = mount(<Dish {...dish} />);
  const count = container.find('[data-id="dish-count"]');
  const btnPlus = container.find('[data-id="dish-btn-plus"]');
  const btnMinus = container.find('[data-id="dish-btn-minus"]');

  it("should render a zero count of dish by default", () => {
    expect(count.text()).toEqual("0");
  });
  it("should render a count of dish on add / remove buttons click", () => {
    btnPlus.at(0).simulate("click");

    btnPlus.at(0).simulate("click");

    expect(count.text()).toEqual("2");

    btnMinus.at(0).simulate("click");

    expect(count.text()).toEqual("1");
  });
  it("a count can't be negative", () => {
    btnMinus.at(0).simulate("click");

    expect(count.text()).toEqual("0");
  });
});
