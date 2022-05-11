import {ADD_USER} from '../constants'

export const Adduser = (data) =>{

    return {
        type : ADD_USER,
        payload : data
    }
}