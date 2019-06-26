import React from 'react'
import {Button} from 'antd'
import Review from "./review";
import {useToggleOpen} from "./custom-hooks/use-toggle-open";

//uses custom hook "use-toggle-open"
export default function ReviewsListOld({reviews}) {
    const {isListOpen, setListOpen} = useToggleOpen(false);

    const data = isListOpen && (
        reviews.map(review => (
            <Review key={review.id} review={review.text} user={review.user} rating={review.rating}/>)
        )
    )

    return (
        <div>
            <p>Reviews</p>
            {data}
            <Button onClick={() => setListOpen(!isListOpen)} type="default">{isListOpen ? 'hide reviews' : 'show reviews'}</Button>
        </div>
    )
}