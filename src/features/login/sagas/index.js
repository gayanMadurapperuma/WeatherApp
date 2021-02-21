import {takeLatest} from 'redux-saga/effects';
import * as types from '../../../constants/actionTypes';
import {loginAsync} from './loginSaga';

export const loginSaga = [takeLatest(types.LOGIN_REQUEST, loginAsync)];
