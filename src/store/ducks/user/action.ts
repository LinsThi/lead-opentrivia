import { action } from 'typesafe-actions';

import type {
  LoginActionProps,
  LogoutActionProps,
  UpdateAvatarActionProps,
  UpdateUserActionProps,
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
  username: string,
  password: string,
  avatar: string,
): UpdateUserActionProps =>
  action(UserType.USER_UPDATE, { username, password, avatar });
