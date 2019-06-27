import React from "react";
import Review from "../review/index.jsx";
import useToggleOpen from "../../custom-hooks/useToggleOpen";
import { Button } from "antd";

function ReviewList({reviews}){

  const { isOpen, toggleOpenItem, openButName } = useToggleOpen();

  console.log(isOpen);

  const body = isOpen && reviews.map( item => (
    <Review 
      key={item.id} 
      reviewData = {item} 
    />
  ))

  return (
    <div>
      <Button onClick={toggleOpenItem()} >
        {openButName()}
      </Button>
      {body}
    </div> 
  )
}

export default ReviewList;