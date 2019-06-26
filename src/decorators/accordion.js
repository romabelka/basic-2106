import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      openItem: {
        id: null
      }
    };

    toggleOpenItem = id => () => {
      if (this.state.openItem.id === id) {
        this.setState({
          "openItem": {
            id: null
          }
        });
      } else {
        this.setState({
          "openItem": {
            id: id
          }
        });
      }
    }

    isItemOpen = id => this.state.openItem.id === id;

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
