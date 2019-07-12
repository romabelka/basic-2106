import React from "react";
import { mount } from "enzyme";
import RestaurantRate from "./restaurant-rate";
import { restaurants } from "../fixtures";

describe("RestaurantRate", () => {
  it("should render default rate", () => {
    const container = mount(<RestaurantRate restaurant={restaurants[0]} />);
    expect(container.find(".ant-rate-star-full").length).toBe(4);
  });

  it("should render change rate on click", () => {
    const newRate = 2;
    const container = mount(<RestaurantRate restaurant={restaurants[0]} />);

    expect(container.find(".ant-rate-star-full").length).toBe(4);

    container
      .find(".ant-rate-star")
      .at(newRate - 1)
      .find("div")
      .at(0)
      .simulate("click");

    expect(container.find(".ant-rate-star-full").length).toBe(newRate);
  });
});
