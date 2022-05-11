import { SET_TOKEN, REMOVE_TOKEN } from '../constants';


const initialState = {
    token: ""
};
const tokenReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}
export default tokenReducer;