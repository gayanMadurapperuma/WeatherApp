import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as loginActions from '../../../actions/login';
import {loginUser} from '../../../actions/services/weather';
import * as RootNavigation from '../../../navigations/RootNavigation';

export function* loginAsync(payload) {
  try {
    const {info} = payload;
    const {data} = yield call(loginUser, info);
    yield call(AsyncStorage.setItem, '@token', data.token);
    yield call(RootNavigation.navigate, 'Weather');
    yield put(loginActions.loginSuccess(data));
  } catch (error) {
    yield put(loginActions.loginFailed());
  }
}
