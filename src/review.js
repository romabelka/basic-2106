import React from 'react'


export default function Review ({ review, user, rating }) {

    return (
        <div>
            <p>{user}: {rating} Stars</p>
            <p>Review: {review}</p>
        </div>
    )
}