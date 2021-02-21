import {all} from 'redux-saga/effects';
import {loginSaga} from '../features/login/sagas';
import {weatherSaga} from '../features/weather/sagas';

export default function* rootSaga() {
  yield all([...loginSaga, ...weatherSaga]);
}
