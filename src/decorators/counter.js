import React from "react";

export default OriginalComponent =>
  class Counter extends React.Component {
    state = {
      count: 0
    };

    increment = () =>
      this.setState(state => ({
        count: state.count + 1
      }));

    decrement = () => {
      if (!this.state.count) return;

      this.setState(state => ({
        count: state.count - 1
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    }
  };
