import userReducer from './userdataReducer'
import tokenReducer from './authtoken'
import groupReducer from './group'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer: userReducer,
  tokenReducer: tokenReducer,
  groupReducer : groupReducer
});

export default rootReducer;