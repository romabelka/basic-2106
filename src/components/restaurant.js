import React from "react";
import { Button } from "antd";
import ReviewsList from "./reviews-list";
import MenuList from "./menu-list";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <>
      <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="restaurant__logo">
          <img src={restaurant.image} width={64} height={64} alt="" />
        </div>
        <div className="restaurant__desc">
          <div className="restaurant__menu">
            <h2>Menu positions: ({restaurant.menu.length})</h2>
            <MenuList menuItems={restaurant.menu} />
          </div>
          <div className="restaurant__reviews">
            <h2>Restaurant Reviews: ({restaurant.reviews.length})</h2>
            <ReviewsList reviews={restaurant.reviews} />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </>
  );
  return (
    <li className="restaurant__item">
      <h3 onClick={onBtnClick}>{restaurant.name}</h3>
      {body}
      <Button onClick={onBtnClick} type="primary">
        {isOpen ? "close" : "open"}
      </Button>
    </li>
  );
}
