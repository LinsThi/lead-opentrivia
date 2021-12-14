import { action } from 'typesafe-actions';

import type {
  LoginActionProps,
  LogoutActionProps,
  UpdateAvatarActionProps,
  UpdateUserActionProps,
  UserProps,
} from './types';
import { UserType } from './types';

export const loginAction = (
  username: string,
  password: string,
): LoginActionProps => action(UserType.USER_LOGIN, { username, password });

export const logoutAction = (): LogoutActionProps =>
  action(UserType.USER_LOGOUT);

export const updateAvatarAction = (avatar: string): UpdateAvatarActionProps =>
  action(UserType.USER_UPDATE_AVATAR, { avatar });

export const updateUserAction = (
  currentUser: UserProps,
): UpdateUserActionProps => action(UserType.USER_UPDATE, { currentUser });
