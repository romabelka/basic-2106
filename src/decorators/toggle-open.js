import React from "react";

export default OriginalComponent =>
    class DecoratedElement extends React.Component{

   state = {
       isOpen: false,
    }

    isItemOpen = () => this.state.isOpen;

    toggleOpenList = isOpen => {
       this.setState({isOpen:!isOpen});
    }


    render() {
        return (
            <OriginalComponent {...this.props} isItemOpen={this.isItemOpen} toggleOpen={this.toggleOpenList} />
        )
    }

}