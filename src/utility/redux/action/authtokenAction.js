import { SET_TOKEN, REMOVE_TOKEN } from '../constants';


export const addtoken =(res) => {
   
    return {
        type:SET_TOKEN,
        payload: res
    }
}