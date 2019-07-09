import uuidv4 from 'uuid/v4';
import { ADD_REVIEW } from '../constants';

export default () => next => action => {
    
    switch (action.type) {
        case ADD_REVIEW: 
            let reviewId = uuidv4(),
                  userId = uuidv4();
            const newAction = {
              type: "ADD_REVIEW",
              payload: {
                ...action.payload,
                reviewId: reviewId,
                userId: userId
              }
            };
            return next(newAction); 
            
        default:
            return next(action);
    } 
  };