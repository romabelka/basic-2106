import React, { useState } from "react";
import { Rate, List } from "antd";

export default function Rating() {
  const [rating, setRating] = useState(3);
  const desc = ["terrible", "bad", "ok", "good", "awesome"];

  return (
    <List.Item data-id="vote">
      <List.Item.Meta
        title="Rate this restaurant"
        description={
          <span>
            <Rate
              tooltips={desc}
              onChange={handleRating}
              defaultValue={rating}
              rating={rating}
            />
            {rating ? (
              <span className="ant-rate-text">{desc[rating - 1]}</span>
            ) : (
              ""
            )}
          </span>
        }
      />
    </List.Item>
  );

  function handleRating(rating) {
    setRating(rating);
  }
}
