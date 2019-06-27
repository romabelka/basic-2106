import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    };

    isItemOpen = id => this.state.openItemId === id;

    toggleOpenItem = openItemId => () =>
      this.setState({
        openItemId: this.isItemOpen(openItemId) ? null : openItemId
      });

    render = () => (
      <OriginalComponent
        {...this.props}
        toggleOpenItem={this.toggleOpenItem}
        isItemOpen={this.isItemOpen}
      />
    );
  };
