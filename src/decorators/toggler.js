import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isShown: false
    };

    toggleShown = () => {
      this.setState({ isShown: !this.state.isShown });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isShown={this.state.isShown}
          toggleShown={this.toggleShown}
        />
      );
    }
  };
