import React, { Fragment } from "react";
import { Avatar, Card } from "antd";
import ToggleButton from "./toggle-button";
import ReviewsList from "./reviews-list-with-hooks";

const { Meta } = Card;

const Img = ({ alt, src }) => <Avatar shape="square" alt={alt} src={src} />;

const Restaurant = ({ name, image, menu, reviews, isOpen, onBtnClick }) => (
  <Card
    title={name}
    extra={<ToggleButton onBtnClick={onBtnClick} isOpen={isOpen} />}
    bodyStyle={{ display: isOpen ? "block" : "none" }}
  >
    {isOpen && (
      <Fragment>
        <Meta
          avatar={<Img alt={name} src={image} />}
          title={`Ресторан ${name}`}
          description={`Позиций меню: ${menu.length}`}
        />
        <div className="clearfix" />
        <ReviewsList reviews={reviews} />
      </Fragment>
    )}
  </Card>
);

export default Restaurant;
