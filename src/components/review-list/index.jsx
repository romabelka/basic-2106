import React, { Component } from "react";
import Review from "../review/index.jsx";

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: props.reviews
    };
  }

  render() {
    console.log(this.state.reviewList);

    const reviewElem = this.state.reviewList.map(item => (
      <Review key={item.id} />
    ));

    return <div>{reviewElem}</div>;
  }
}

export default ReviewList;
