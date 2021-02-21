import * as types from '../../constants/actionTypes';

export function loginRequest(info) {
  return {
    type: types.LOGIN_REQUEST,
    info,
  };
}

export function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}
