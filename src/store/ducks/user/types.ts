import type { Action } from 'redux';

import type { GenderProps } from '~/@types/Entity/Gender';

export enum UserType {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGOUT = '@user/USER_LOGOUT',
  USER_UPDATE_AVATAR = '@user/USER_UPDATE_AVATAR',
  USER_UPDATE = '@user/USER_UPDATE',
}

export interface UserProps {
  username: string;
  password: string;
  avatar: string;
  email: string;
  dateBirth: string;
  gender: GenderProps;
}

export interface UserState {
  currentUser: UserProps;
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

export interface UpdateAvatarActionProps extends Action {
  type: UserType.USER_UPDATE_AVATAR;
  payload: {
    avatar: string;
  };
}

export interface UpdateUserActionProps extends Action {
  type: UserType.USER_UPDATE;
  payload: { currentUser: UserProps };
}
