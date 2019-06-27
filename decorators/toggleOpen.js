import React from "react";

export default ToggleComponent =>

  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    };

    toggleOpenItem = openItemId => () =>
      this.setState({
        openItemId
      });

    isItemOpen = id => this.state.openItemId === id;

    render() {
      return (
        <ToggleComponent 
          {...this.props}
          isItemOpen={this.isItemOpen}
          openName = {this.isItemOpen ? "close" : "open"}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
