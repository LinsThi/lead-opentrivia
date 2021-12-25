import { action } from 'typesafe-actions';

import type {
  IncrementEasyQuestionProps,
  IncrementMediumQuestionProps,
  IncrementHardQuestionProps,
  RestoreQuestionAction,
} from './types';
import { UserQuestionTypes } from './types';

export const incrementEasyQuestionAction = (
  quantity: number,
): IncrementEasyQuestionProps =>
  action(UserQuestionTypes.USER_QUESTION_INCREMENT_EASY, { quantity });

export const incrementMediumQuestionAction = (
  quantity: number,
): IncrementMediumQuestionProps =>
  action(UserQuestionTypes.USER_QUESTION_INCREMENT_MEDIUM, { quantity });

export const incrementHardQuestionAction = (
  quantity: number,
): IncrementHardQuestionProps =>
  action(UserQuestionTypes.USER_QUESTION_INCREMENT_HARD, { quantity });

export const restoreQuestionAction = (): RestoreQuestionAction =>
  action(UserQuestionTypes.RESTORE_QUESTION);
