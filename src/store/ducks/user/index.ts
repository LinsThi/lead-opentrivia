import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserType } from './types';

const INITIAL_STATE: UserState = {
  username: '',
  password: '',
  avatar: '',
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserType.USER_LOGIN:
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        avatar: '',
        isLogged: true,
      };
    case UserType.USER_LOGOUT:
      return {
        ...state,
        username: '',
        password: '',
        avatar: '',
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
