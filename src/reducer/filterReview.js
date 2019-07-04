import { CHANGE_ITEM } from '../constants';

export default ( minRating = 2, action ) => {
    const { type, payload } = action;

    switch( type ) {

        case CHANGE_ITEM : 
            return  payload;

        default : 
            return minRating;
    }
}