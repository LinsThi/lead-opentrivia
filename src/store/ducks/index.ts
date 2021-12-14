import { combineReducers } from 'redux';

import font from './font';
import theme from './themes';
import user from './user';

export default combineReducers({ theme, user, font });
