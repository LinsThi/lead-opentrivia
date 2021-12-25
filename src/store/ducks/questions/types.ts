import type { Action } from 'redux';

import type { ResultQuestionProps } from '~/dtos/arrayoption';

export enum QuestionQuizTypes {
  GET_QUESTION = '@QuestionQuiz/GET_QUESTION',
  GET_QUESTION_SUCCESS = '@QuestionQuiz/GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = '@QuestionQuiz/GET_QUESTION_ERROR',
  SET_QUESTION_OLD = '@QuestionQuizz/SET_QUESTION_OLD',
}

export interface QuestionQuizState {
  categoryId: number;
  questionListQuiz: ResultQuestionProps[];
  questionListQuizOld: ResultQuestionProps[];
  loadingQuestionQuiz: boolean;
  errorGetQuestion: boolean;
}

export interface GetQuestionQuizActionProps extends Action {
  type: QuestionQuizTypes.GET_QUESTION;
  payload: { idCategory: number; difficulty: string };
}

export interface GetQuestionQuizSuccessActionProps extends Action {
  type: QuestionQuizTypes.GET_QUESTION_SUCCESS;
  payload: { questionListQuiz: any[] };
}

export interface GetQuestionQuizErrorActionProps extends Action {
  type: QuestionQuizTypes.GET_QUESTION_ERROR;
}

export interface SetQuestionListOldQuizProps extends Action {
  type: QuestionQuizTypes.SET_QUESTION_OLD;
  payload: { questionListQuiz: any[] };
}
