import type { Reducer } from 'redux';

import type { QuestionQuizState } from './types';
import { QuestionQuizTypes } from './types';

const INITIAL_STATE: QuestionQuizState = {
  categoryId: 0,
  questionListQuiz: [],
  questionListQuizOld: [],
  loadingQuestionQuiz: false,
  errorGetQuestion: false,
};

const reducer: Reducer<QuestionQuizState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case QuestionQuizTypes.GET_QUESTION:
      return {
        ...state,
        loadingQuestionQuiz: true,
        categoryId: payload.idCategory,
      };
    case QuestionQuizTypes.GET_QUESTION_SUCCESS:
      return {
        ...state,
        questionListQuiz: payload.questionListQuiz,
        loadingQuestionQuiz: false,
        errorGetQuestion: false,
      };
    case QuestionQuizTypes.GET_QUESTION_ERROR:
      return {
        ...state,
        questionListQuiz: [],
        loadingQuestionQuiz: false,
        errorGetQuestion: true,
      };
    case QuestionQuizTypes.SET_QUESTION_OLD:
      return {
        ...state,
        questionListQuizOld: payload.questionListQuiz,
      };
    default:
      return state;
  }
};

export default reducer;
