import createReducer from '../../utils/createReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
  test: true,
  user: null,
  token: null,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_TEST_SAGA_SUCCESS](state, action) {
    return {
      ...state,
      test: false,
    };
  },
  [types.LOGIN_SUCCESS](state, action) {
    const {
      data: {token, user},
    } = action;
    return {
      ...state,
      user,
      token,
    };
  },
});
