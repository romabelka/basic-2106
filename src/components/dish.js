import React, { Component } from 'react';
import { Card, Button } from 'antd';
import PropTypes from 'prop-types';

class Dish extends Component {

  constructor( props ){

    super(props);
    this.state = {
      dishItem : this.props,
      itemCnt  : 0
    }
  }

  static defaultProps = {
    name : 'Unknown'
  };

  static propTypes = {
    isAdd : PropTypes.bool,
    dishItem : PropTypes.shape({
      price       : PropTypes.number.isRequired,
      name        : PropTypes.string,
      ingredients : PropTypes.arrayOf(PropTypes.string).isRequired
    })
  };

  render() {

    const ingridentList = this.state.dishItem.ingredients || [];
    const ingrideientStr = ingridentList.join(", ");

    return (
      <Card
        bordered actions={[
          `$${this.state.dishItem.price}`,
          <>
            <span data-id="itemCnt" style={{ margin: "0 12px" }}>{this.state.itemCnt}</span>
            <Button.Group>
              <Button type="primary" data-id="removeItem" shape="circle" icon="minus" onClick={()=>this.setChangeMenuItem(false)} />
              <Button type="primary" data-id="addItem" shape="circle" icon="plus"  onClick={()=>this.setChangeMenuItem(true)} />
            </Button.Group>
          </>
        ]}
      >
        <Card.Meta
          title={this.state.dishItem.name}
          description={ingrideientStr} 
        />
      </Card>
    );
  }

  setChangeMenuItem = (isAdd) => {

    let finItemCnt = this.state.itemCnt;
    finItemCnt = isAdd ? ++finItemCnt : --finItemCnt;
    finItemCnt = finItemCnt > 0 ? finItemCnt : 0;
    this.setState( { itemCnt : finItemCnt } );
  }
}

export default Dish;