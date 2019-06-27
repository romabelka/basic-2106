import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isVisible: false
    };

    toggleVisibility = () => () => {
      this.setState(prevState => {
        return { isVisible: !prevState.isVisible };
      });
    };

    render = () => (
      <OriginalComponent
        {...this.props}
        toggleVisibility={this.toggleVisibility}
        isVisible={this.state.isVisible}
      />
    );
  };
