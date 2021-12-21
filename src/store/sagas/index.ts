import { all, fork } from 'redux-saga/effects';

import categoryThemes from '../ducks/category/sagas';
import questionQuizz from '../ducks/questions/sagas';

export default function* rootSaga() {
  yield all([fork(categoryThemes)]);
  yield all([fork(questionQuizz)]);
}
