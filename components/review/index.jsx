import React, { Component } from "react";
import { Input, Row, Col } from 'antd'

class Review extends Component {

  constructor(props){

    console.log(props);

    super(props);
    this.state = {
      reviewData: props.reviewData
    };
  }

  render() {
    
    const reviewItem = this.state.reviewData;

    const reviewDataList = (
      <Row gutter={6}>
        <Col span={2}>
          User
          <Input value={reviewItem.user} disabled />
        </Col>
        <Col span={10}>
          Comment
          <Input value={reviewItem.text} disabled />
        </Col>
        <Col span={2}>
          Rating
          <Input value={reviewItem.rating} disabled />
        </Col>
      </Row>
    );
    
    return (
      <div>
        <br/>
        <div>
          {reviewDataList}
        </div>
      </div>
    )
  }
}

export default Review;
