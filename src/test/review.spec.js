import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { restaurants } from "../fixtures";
import React from "react";
import Review from "../components/review";

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("rate component should be rendered", () => {
    const review = restaurants[0].reviews[0];
    const container = mount(<Review review={review} />);

    expect(container.find("[data-id='rating']").exists()).toEqual(true);
  });

  it("clicking rate component should set rating", () => {
    const review = restaurants[0].reviews[0];
    const container = mount(<Review review={review} />);

    container
      .find("[data-id='rating']")
      .find(".ant-rate-star")
      .at(0)
      .simulate("click");

    expect(container.state("rating")).toEqual(1);
  });
});
