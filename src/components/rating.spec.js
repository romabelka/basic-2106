import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Rating from "./rating";

Enzyme.configure({ adapter: new Adapter() });

describe("Rating", () => {
  it("should render rating list", () => {
    const container = mount(<Rating />);

    expect(container.exists()).toEqual(true);
  });

  it("should change state to 1 on first star click", () => {
    const container = mount(<Rating />);

    container
      .find("li")
      .at(1)
      .find("div")
      .at(0)
      .simulate("click");

    expect(container.state("rating")).toEqual(1);
  });

  it("should change state to 5 on fifth star click", () => {
    const container = mount(<Rating />);

    container
      .find("li")
      .at(5)
      .find("div")
      .at(0)
      .simulate("click");

    expect(container.state("rating")).toEqual(5);
  });
});
