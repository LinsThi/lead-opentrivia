import { combineReducers } from 'redux';

import category from './category';
import font from './font';
import question from './questions';
import theme from './themes';
import user from './user';
import userQuestions from './userQuestions';

export default combineReducers({
  theme,
  user,
  font,
  category,
  question,
  userQuestions,
});
