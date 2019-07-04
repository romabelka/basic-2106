import React from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { changeItem } from '../ac';

function FilterReview( props ) {
    
    return(
        <div style={{textAlign:'center'}} >
            <br/>
            <Rate 
                value = { props.rateVal }
                onChange = { props.setChangeRating }
                style = {{ marginLeft: '24px' }}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    rateVal : state.filterReview
});

const mapDispatchToProps = {
    setChangeRating : changeItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterReview);
  