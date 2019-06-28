import React from "react";

export default OriginalComponent =>
  class ToggleOpen extends React.Component {
    state = {
      isOpen: false
    };

    toggleOpen = () =>
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    /*
    toggleOpen = () =>
      this.setState({
        isOpen: !this.state.isOpen
      });
*/

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
