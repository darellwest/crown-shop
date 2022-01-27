import { UserActionTypes } from './user.types';
//reducer is just a fuction that takes two args, first arg is the current state which is an object
//and the second is the action which is an object too that has a property of type which takes string value
//and also might or mightn't have another property called payload and it could be of any 

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    //we use action.type to know if the action is related to this reducer so we don't WANT TO UPDATE STATE HERE
    // when another action type fires
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser : action.payload
            }  
            break;
    
        default:
            return state;
    }
}

export default userReducer;