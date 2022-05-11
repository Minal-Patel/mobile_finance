import { put, takeEvery ,all} from 'redux-saga/effects'
import {INCREMENT} from '../constants'

export function* helloSaga() {

  }

  export function* incrementAsync(users) {
  //  yield delay(1000)
 
    yield put({ type: 'DECREMENT', payload: users })
  }

  export default function* rootSaga() {
    yield all(incrementAsync())
  }