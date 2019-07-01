import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewList from "./review-list";

Enzyme.configure({ adapter: new Adapter() });

const reviews = [
  {
    id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
    user: "Antony",
    text: "Not bad",
    rating: 5
  },
  {
    id: "429dea85-11dd-4054-a31e-c60c92e17255",
    user: "Sam",
    text: "No burgers",
    rating: 3
  }
];
let container, rate;

beforeEach(() => {
  container = mount(<ReviewList reviews={reviews} isOpen={true} />);
  rate = container
    .find('[data-id="review-list"]')
    .find('[data-id="user-rating"]')
    .at(0);
});
describe("New user rating", () => {
  it("renders with Zero rating by default", () => {
    expect(rate.props().value === 0).toBe(true);
  });

  it("Changes rating properly", () => {
    rate.setState({ value: 5 });
    expect(rate.find("li.ant-rate-star").length === 5).toBe(true);
  });
});
