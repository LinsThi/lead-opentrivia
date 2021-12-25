import type { Action } from 'redux';

export enum UserQuestionTypes {
  USER_QUESTION_INCREMENT_EASY = '@userQuestion/USER_QUESTION_INCREMENT_EASY',
  USER_QUESTION_INCREMENT_MEDIUM = '@userQuestion/USER_QUESTION_INCREMENT_MEDIUM',
  USER_QUESTION_INCREMENT_HARD = '@userQuestion/USER_QUESTION_INCREMENT_HARD',
  RESTORE_QUESTION = '@userQuestion/RESTORE_QUESTION',
}

export interface UserQuestionState {
  correctQuestionEasy: number;
  correctQuestionMedium: number;
  correctQuestionHard: number;
}

export interface IncrementEasyQuestionProps extends Action {
  type: UserQuestionTypes.USER_QUESTION_INCREMENT_EASY;
  payload: { quantity: number };
}

export interface IncrementMediumQuestionProps extends Action {
  type: UserQuestionTypes.USER_QUESTION_INCREMENT_MEDIUM;
  payload: { quantity: number };
}

export interface IncrementHardQuestionProps extends Action {
  type: UserQuestionTypes.USER_QUESTION_INCREMENT_HARD;
  payload: { quantity: number };
}

export interface RestoreQuestionAction extends Action {
  type: UserQuestionTypes.RESTORE_QUESTION;
}
