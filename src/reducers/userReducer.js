<<<<<<< HEAD
import userTypes from './userTypes';

const initialState = {
    currentUser: null
};

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            default:
                return state;
    } 
};

=======
import userTypes from './userTypes';

const initialState = {
    currentUser: null
};

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            default:
                return state;
    } 
};

>>>>>>> e60820b (beta version)
export default userReducer;