import type { Action } from 'redux';

export enum QuestionQuizTypes {
  GET_QUESTION = '@QuestionQuiz/GET_QUESTION',
  GET_QUESTION_SUCCESS = '@QuestionQuiz/GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = '@QuestionQuiz/GET_QUESTION_ERROR',
}

export interface QuestionQuizState {
  questionListQuiz: any[];
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
