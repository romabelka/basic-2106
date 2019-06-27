import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpened: false
    };

    toggleItem = () => this.setState({ isOpened: !this.state.isOpened });

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpened={this.state.isOpened}
          toggleItem={this.toggleItem}
        />
      );
    }
  };
