import React from "react";
import Menu from "./components/menu";
import { Button, Col, Row } from "antd";
import Reviews from "./components/reviews";
import GeneralInfo from "./components/generalinfo";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div style={{ padding: '30px'}}>
    <Row gutter={16}>
      <Col span={8}>
        <GeneralInfo restaurant={restaurant} />
      </Col>
      <Col span={8}>
        <Menu restaurant={restaurant} />
      </Col>
      <Col span={8}>
        <Reviews data={restaurant} />
      </Col>
    </Row>
    </div>
  );

  return (
    <div style={{ padding: '30px', margin: '10px', border: '1px solid' }}>
      <Row gutter={16}>
        <Col span={2}>
          <h3>{restaurant.name}</h3>
        </Col>
        <Col span={1}>
          <Button onClick={onBtnClick} type="primary">
            {isOpen ? "Close" : "Open"}
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          {body}
        </Col>
      </Row>
    </div>
  );
}