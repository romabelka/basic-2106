import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "antd";
import Dish, { Quantity } from "./dish";

Enzyme.configure({ adapter: new Adapter() });

const dishItem = {
  name: "Flat Iron Steak",
  price: 10,
  ingredients: ["beef"]
};

describe("<Dish />", () => {
  let dish, button, minus, plus;

  beforeEach(() => {
    dish = mount(
      <Dish
        ingredients={dishItem.ingredients}
        price={dishItem.price}
        name={dishItem.name}
      />
    );

    button = dish.find(Button);
    minus = button.at(0);
    plus = button.at(1);
  });

  it("Должно быть две кнопки", () => {
    expect(button).toHaveLength(2);
  });

  it("У первой кнопки есть иконка `minus`", () => {
    expect(minus.find("i").hasClass("anticon-minus")).toBe(true);
  });

  it("У второй кнопки есть иконка `plus`", () => {
    expect(plus.find("i").hasClass("anticon-plus")).toBe(true);
  });

  it("Начальное количество равно нулю", () => {
    expect(dish.find(Quantity).props().quantity).toBe(0);
  });

  it("Если начальное количество равно нулю, кнопка `-` должна быть заблокирована", () => {
    expect(dish.find(Quantity).props().quantity).toBe(0);
    expect(minus.props().disabled).toBe(true);
  });

  it("При нажатии на кнопку `-`, если количество равно нулю, количестов не должно измениться", () => {
    expect(dish.find(Quantity).props().quantity).toBe(0);
    minus.simulate("click");
    expect(dish.find(Quantity).props().quantity).toBe(0);
  });

  it("При нажатии на кнопку `+`, если количество равно нулю, количестов не должно стать 1", () => {
    expect(dish.find(Quantity).props().quantity).toBe(0);
    plus.simulate("click");
    expect(dish.find(Quantity).props().quantity).toBe(1);
  });

  it("При двойном нажатии на кнопку `+`, если количество равно нулю, количестов должно стать 2", () => {
    expect(dish.find(Quantity).props().quantity).toBe(0);
    plus.simulate("click");
    plus.simulate("click");
    expect(dish.find(Quantity).props().quantity).toBe(2);
  });

  // noinspection LongLine
  it("При двойном нажатии на кнопку `+`, а затем при одиночном нажатии на кнопку минус, если количество равно нулю, количестов должно стать 1", () => {
    plus.simulate("click");
    plus.simulate("click");
    minus.simulate("click");
    expect(dish.find(Quantity).props().quantity).toBe(1);
  });
});
