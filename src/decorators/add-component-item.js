import React from "react";

export default OriginalComponent =>
  class AddComponent extends React.Component {
    state = {
      newComponentProps: this.props
    };

    render() {
      return <OriginalComponent {...this.props} />;
    }
  };
