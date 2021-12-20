import { all, fork } from 'redux-saga/effects';

import categoryThemes from '../ducks/category/sagas';

export default function* rootSaga() {
  yield all([fork(categoryThemes)]);
}
