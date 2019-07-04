import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  rating: state.rating
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
            rating={this.props.rating}
          />
        );
      }
    }
  );
