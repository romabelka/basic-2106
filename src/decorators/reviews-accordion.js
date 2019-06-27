import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    };

    toogleOpenReviews = () =>
      this.setState({
        isOpen: !this.state.isOpen
      });

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpenReviews={this.state.isOpen}
          toogleOpenReviews={this.toogleOpenReviews}
        />
      );
    }
  };
