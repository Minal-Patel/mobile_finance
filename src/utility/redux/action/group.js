import {ADD_GROUPDATA} from '../constants'

export const Addgroupdata = (res) =>{

    return {
        type : ADD_GROUPDATA,
        payload : res
    }
}