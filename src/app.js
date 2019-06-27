import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { restaurants } from "./fixtures";
import Wrapper from "./components/wrapper";
import RestaurantsList from "./components/restaurants-list";
import OrderForm from "./components/order-form";

const { Header, Content } = Layout;

const Title = styled.h1`
  color: white;
`;

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Title>Delivery App</Title>
      </Header>
      <Content>
        <RestaurantsList restaurants={restaurants} />
        <Wrapper>
          <OrderForm />
        </Wrapper>
      </Content>
    </Wrapper>
  );
}
