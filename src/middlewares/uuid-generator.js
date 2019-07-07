import uuidv4 from 'uuid/v4';
import { ADD_REVIEW } from '../constants';

export default store => next => action => {
    
    switch (action.type) {
        case ADD_REVIEW: 
            console.log("ADD_REVIEW");
            let reviewId = uuidv4(),
                  userId = uuidv4();
            console.log(reviewId);
            console.log(userId);
           /* const newAction = {
              ...action,
              reviewId: reviewId,
              userId: userId
            }*/
            const newAction = {
              type: "ADD_REVIEW",
              payload: {...action.payload,
              reviewId: reviewId,
              userId: userId
              }

            };
            console.log("NEW_ACTION");
            console.log(newAction);
            return next(newAction);
        default:
            return next(action);
    } 
  };
//console.log(uuidv4()); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'