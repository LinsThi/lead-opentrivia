import { combineReducers } from 'redux';

import theme from './themes';
import user from './user';

export default combineReducers({ theme, user });
