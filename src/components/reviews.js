import React from "react";
import { Button, Card, Divider } from "antd";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReviewsOpen: false
    };

    this.handleReviewsState = this.handleReviewsState.bind(this);
  };

  getBody() {
    return (this.state.isReviewsOpen && (
      this.props.data.reviews.map(function(review, index) {
        return (
          <React.Fragment key={"review_" + review.id}>
            { (index !== 0 ? <Divider key={"divider_" + review.id}></Divider> : '')}
            <p key={review.id} nowrap="nowrap">
              - {review.text}
            </p>
          </React.Fragment>
        )
      }))
    )
  };

  handleReviewsState() {
    this.setState({
      "isReviewsOpen": !this.state.isReviewsOpen
    });
  };

  render() {
    return (
      <Card
        title="Reviews"
        extra={
          <Button key={"revButton_" + this.props.data.id} onClick={this.handleReviewsState} type="primary">
            {this.state.isReviewsOpen ? "Close" : "Open"}
          </Button>
        }>
        {this.getBody()}
      </Card>
  );
    }
};

export default Reviews