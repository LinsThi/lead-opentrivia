import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserType } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    username: '',
    password: '',
    avatar: '',
    email: '',
    dateBirth: '',
    gender: {
      id: 0,
      label: '',
    },
  },
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
        currentUser: {
          username: payload.username,
          password: payload.password,
        },
        isLogged: true,
      };
    case UserType.USER_LOGOUT:
      return INITIAL_STATE;
    case UserType.USER_UPDATE_AVATAR:
      return {
        ...state,
        currentUser: {
          avatar: payload.avatar,
        },
      };
    case UserType.USER_UPDATE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };
    default:
      return state;
  }
};

export default reducer;
