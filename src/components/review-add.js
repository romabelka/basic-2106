import React, {Component} from 'react'
import { Button, Input, Rate } from "antd";
import {connect} from 'react-redux';
import { setAddReview } from '../ac'

class ReviewAdd extends Component{
   
    constructor(props){

        super(props);
        console.log(props);   
    }

    state = {
        comment : '',
        review : 0
    };

    render(){
        return (
            <>
                <br/>
                <br/>
                <Input value={this.state.comment} onChange={e => this.setState({ comment : e.target.value })} />
                <Rate
                    value={this.state.review} 
                    onChange={e => this.setState({ review : e })}
                />
                <br/>
                <br/>
                <Button onClick={ ()=>setAddReview({ comment : this.state.comment, review : this.state.review}) } >
                    {"Add review"}
                </Button>
            </>
        );
    }

    // setAddData = ()=> {
    //     setAddReview({ comment : this.state.comment, review : this.state.review});
    // }
}
  
export default connect(
    state => ({s:state}), {setAddReview}
)(ReviewAdd);