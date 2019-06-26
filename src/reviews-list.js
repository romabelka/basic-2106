import React from "react";
import Review from "./review";
import { Button, List } from "antd";

export default class ReviewsList extends React.Component {
  state = {
    isShown: false
  };

  toggleShown = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    const { reviews } = this.props;
    const { isShown } = this.state;

    const body = isShown && (
      <List bordered>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </List>
    );

    return (
      <>
        <Button onClick={this.toggleShown}>
          {isShown ? "hide reviews" : "show reviews"}
        </Button>
        {body}
      </>
    );
  }
}

// export default function ReviewsList({ reviews }) {
//   return (
//     <List bordered>
//       {reviews.map(review => (
//         <Review key={review.id} review={review} />
//       ))}
//     </List>
//   );
// }
