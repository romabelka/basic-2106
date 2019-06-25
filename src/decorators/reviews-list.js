import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      expanded: false
    };

    toggleExpandCollapse = () =>
      this.setState({
        expanded: !this.state.expanded
      });
    isExpanded = () => this.state.expanded;

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleExpandCollapse={this.toggleExpandCollapse}
          isExpanded={this.isExpanded}
        />
      );
    }
  };
