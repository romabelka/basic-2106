import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isReviewsOpen: false
    };

    toggleOpenReviews = () =>
      this.setState({
        isReviewsOpen: !this.isReviewsOpen
      });

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isReviewsOpen={this.isReviewsOpen}
          toggleOpenReviews={this.toggleOpenReviews}
        />
      );
    }
  };
