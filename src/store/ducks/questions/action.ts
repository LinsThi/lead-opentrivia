import { action } from 'typesafe-actions';

import type {
  GetQuestionQuizActionProps,
  GetQuestionQuizSuccessActionProps,
  GetQuestionQuizErrorActionProps,
  SetQuestionListOldQuizProps,
} from './types';
import { QuestionQuizTypes } from './types';

export const getQuestionQuizAction = (
  idCategory: number,
  difficulty: string,
): GetQuestionQuizActionProps =>
  action(QuestionQuizTypes.GET_QUESTION, { idCategory, difficulty });

export const getQuestionQuizSuccessAction = (
  questionListQuiz: any[],
): GetQuestionQuizSuccessActionProps =>
  action(QuestionQuizTypes.GET_QUESTION_SUCCESS, {
    questionListQuiz,
  });

export const getQuestionQuizErrorAction = (): GetQuestionQuizErrorActionProps =>
  action(QuestionQuizTypes.GET_QUESTION_ERROR);

export const setQuestionListOldQuizAction = (
  questionListQuiz: any[],
): SetQuestionListOldQuizProps =>
  action(QuestionQuizTypes.SET_QUESTION_OLD, {
    questionListQuiz,
  });
