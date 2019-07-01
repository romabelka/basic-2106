import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantsList from "./restaurants-list";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("RestaurantsList", () => {
  it("should render a list of restaurants", () => {
    const container = mount(<RestaurantsList restaurants={restaurants} />);

    expect(container.find('[data-id="restaurant"]').length).toEqual(
      restaurants.length
    );
  });
  it("should render restaurants closed by default", () => {
    const container = mount(<RestaurantsList restaurants={restaurants} />);

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(0);
  });
  it("should render restaurants open restaurant body on click", () => {
    const container = mount(<RestaurantsList restaurants={restaurants} />);

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(0);

    container
      .find('[data-id="menu-btn"]')
      .at(0)
      .simulate("click");

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(1);
  });
  it("should render restaurants close restaurant body on click when open", () => {
    const container = mount(<RestaurantsList restaurants={restaurants} />);

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(0);

    container
      .find('[data-id="menu-btn"]')
      .at(0)
      .simulate("click");

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(1);

    container
      .find('[data-id="menu-btn"]')
      .at(0)
      .simulate("click");

    expect(container.find('[data-id="restaurant-body"]').length).toEqual(0);
  });
});
