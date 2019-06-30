import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Restaurant from "./restaurant";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Restaurant", () => {
  const restaurantMock = restaurants[0];

  it("should render a restaurant average rate based on reviews", () => {
    const container = mount(<Restaurant restaurant={restaurantMock} />);

    expect(
      container.find('[data-id="restaurant-rate"]').get(0).props.defaultValue
    ).toEqual(4);
  });

  it("should not render a restaurant rate if there is no reviews", () => {
    const restaurantMockClone = { ...restaurantMock };
    restaurantMockClone.reviews = [];

    const container = mount(<Restaurant restaurant={restaurantMockClone} />);

    expect(container.find('[data-id="restaurant-rate"]').length).toEqual(0);
  });
});
