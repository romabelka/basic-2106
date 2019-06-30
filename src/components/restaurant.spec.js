import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Restaurant from "./restaurant";
import { restaurants } from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Restaurant", () => {
  const restaurant = restaurants[0];
  const container = mount(<Restaurant restaurant={restaurant} />);
  const rating = container.find('[data-id="restaurant-rating"]');
  const stars = rating.find(".ant-rate-star");

  it("should render a rating of five no-filled stars", () => {
    expect(stars.length).toEqual(5);
    expect(rating.find(".ant-rate-star-full").length).toEqual(0);
  });
});
