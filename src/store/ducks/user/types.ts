import type { Action } from 'redux';

export enum UserType {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGOUT = '@user/USER_LOGOUT',
}

export interface UserState {
  username: string;
  password: string;
  avatar: string;
  isLogged: boolean;
}

export interface LoginActionProps extends Action {
  type: UserType.USER_LOGIN;
  payload: {
    username: string;
    password: string;
  };
}

export interface LogoutActionProps extends Action {
  type: UserType.USER_LOGOUT;
}
