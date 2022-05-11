import { ADD_GROUPDATA } from '../constants';


const initialState = {
    gropudata: ""
};
const groupReducer = (state = initialState, action) => {
   
    switch (action.type) {
       
        case ADD_GROUPDATA:
            console.log("#########",action)
            return {
                ...state,
                gropudata: action.payload
            };
    
        default:
            return state;
    }
}
export default groupReducer;