import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { restaurants } from "../fixtures";
import React from "react";
import Dish from "./../components/dish";

Enzyme.configure({ adapter: new Adapter() });

describe("Dish", () => {
  it("the only counter should be present per dish", () => {
    const dish = restaurants[0].menu[0];
    const container = mount(
      <Dish
        price={dish.price}
        name={dish.name}
        ingredients={dish.ingredients}
      />
    );

    expect(container.find("[data-id='counter']").length).toEqual(1);
  });

  it("counter should be 0 by default", () => {
    const dish = restaurants[0].menu[0];
    const container = mount(
      <Dish
        price={dish.price}
        name={dish.name}
        ingredients={dish.ingredients}
      />
    );

    expect(
      container
        .find("[data-id='counter']")
        .at(0)
        .text()
    ).toEqual("0");
  });

  it("counter should be incremented after + have been clicked", () => {
    const dish = restaurants[0].menu[0];
    const container = mount(
      <Dish
        price={dish.price}
        name={dish.name}
        ingredients={dish.ingredients}
      />
    );
    const counterElement = container.find("[data-id='counter']").at(0);

    const beforeValue = parseInt(counterElement.text(), 10);

    container
      .find("[data-id='plus']")
      .at(0)
      .simulate("click");

    const afterValue = parseInt(counterElement.text(), 10);
    expect(afterValue).toEqual(beforeValue + 1);
  });

  it("counter should be decremented after - have been clicked", () => {
    const dish = restaurants[0].menu[0];
    const container = mount(
      <Dish
        price={dish.price}
        name={dish.name}
        ingredients={dish.ingredients}
      />
    );
    const counterElement = container.find("[data-id='counter']").at(0);
    container
      .find("[data-id='plus']")
      .at(0)
      .simulate("click");
    const beforeValue = parseInt(counterElement.text(), 10);

    container
      .find("[data-id='minus']")
      .at(0)
      .simulate("click");

    const afterValue = parseInt(counterElement.text(), 10);
    expect(afterValue).toEqual(beforeValue - 1);
  });

  it("counter shouldn't be less than 0", () => {
    const dish = restaurants[0].menu[0];
    const container = mount(
      <Dish
        price={dish.price}
        name={dish.name}
        ingredients={dish.ingredients}
      />
    );
    const counterElement = container.find("[data-id='counter']").at(0);

    container
      .find("[data-id='minus']")
      .at(0)
      .simulate("click");

    const afterValue = parseInt(counterElement.text(), 10);
    expect(afterValue).toEqual(0);
  });
});
