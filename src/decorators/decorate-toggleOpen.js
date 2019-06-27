import React from "react";

export default OriginalComponent =>
  class DecorateToggleOpen extends React.Component {
    state = {
      isOpened: false
    };

    toggleOpen = () =>
      this.setState({
        isOpened: !this.state.isOpened
      });

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpened={this.state.isOpened}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
