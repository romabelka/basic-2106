import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    };

    toggleOpenItem = openItemId => () =>
      this.setState(state => ({
        openItemId: state.openItemId === openItemId ? null : openItemId
      }));

    isItemOpen = id => this.state.openItemId === id;

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isItemOpen={this.isItemOpen}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
