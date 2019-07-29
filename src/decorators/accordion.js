import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  currentThreshold: state.threshold
});

export default OriginalComponent =>
  connect(
    mapStateToProps,
    {}
  )(
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
            ratingThreshold={this.props.currentThreshold}
          />
        );
      }
    }
  );
