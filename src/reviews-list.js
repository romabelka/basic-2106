import React from 'react'
import Review from "./review";
import toggleDecorator from './decorators/toggle-open'
import {Button} from "antd";


//uses decorator toggle-open
function ReviewList({reviews, isItemOpen, toggleOpen}) {
    const data =
    <>
        {reviews.map(review => (
            <Review key={review.id} user={review.user} rating={review.rating} review={review.text}/>
        ))}
    </>

    return (
        <div>
            <p>Reviews</p>
            {isItemOpen() ? data : null}
            <Button onClick={()=> toggleOpen(isItemOpen())} type="default">{isItemOpen() ? 'hide reviews' : 'show reviews'}</Button>

        </div>
    )
}

export default toggleDecorator(ReviewList)


