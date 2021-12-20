import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getCategory } from '~/services/category';

import {
  getCategoryThemesSuccessAction,
  getCategoryThemesErrorAction,
} from './action';
import { CategoryThemesTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getCategoryThemesSagas() {
  try {
    const response: ResponseGenerator = yield call(getCategory);

    if (response.status >= 200 && response.status < 300) {
      const categoryListcategoryThemes = response.data.trivia_categories;
      yield put(getCategoryThemesSuccessAction(categoryListcategoryThemes));
    } else {
      yield put(getCategoryThemesErrorAction());
    }
  } catch {
    yield put(getCategoryThemesErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(CategoryThemesTypes.GET_CATEGORY, getCategoryThemesSagas),
  ]);
}
