import { combineReducers } from 'redux';

import category from './category';
import font from './font';
import theme from './themes';
import user from './user';

export default combineReducers({ theme, user, font, category });
