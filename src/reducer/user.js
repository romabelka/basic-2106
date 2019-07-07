import {normalizedUsers} from "../fixtures"
import { ADD_REVIEW } from "../constants";


const defaultUsers = normalizedUsers.reduce (
    (acc, item) => (
        {
            ...acc,
            [item.id]: item
        }
    ),
    {}
);
//payload: { rating, username, reviewtext }
export default (users = defaultUsers, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_REVIEW:
                let newUser = {
                    [payload.userId]: {id: payload.userId, name: payload.username},
                                               
                    }
                
             return {
                ...users,
                ...newUser
             };
        default: 
            return users;
    }
};