import { action } from 'typesafe-actions';

import type { LoginActionProps, LogoutActionProps } from './types';
import { UserType } from './types';

export const loginAction = (
  username: string,
  password: string,
): LoginActionProps => action(UserType.USER_LOGIN, { username, password });

export const logoutAction = (): LogoutActionProps =>
  action(UserType.USER_LOGOUT);
