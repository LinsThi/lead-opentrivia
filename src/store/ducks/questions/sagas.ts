import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getQuestion } from '~/services/questions';

import {
  getQuestionQuizSuccessAction,
  getQuestionQuizErrorAction,
} from './action';
import type { GetQuestionQuizActionProps } from './types';
import { QuestionQuizTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getQuestionQuizSagas(action: GetQuestionQuizActionProps) {
  try {
    const response: ResponseGenerator = yield call(
      getQuestion,
      action.payload.idCategory,
      action.payload.difficulty,
    );

    if (response.status >= 200 && response.status < 300) {
      const questionListQuiz = response.data.results;
      yield put(getQuestionQuizSuccessAction(questionListQuiz));
    } else {
      yield put(getQuestionQuizErrorAction());
    }
  } catch {
    yield put(getQuestionQuizErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(QuestionQuizTypes.GET_QUESTION, getQuestionQuizSagas)]);
}
