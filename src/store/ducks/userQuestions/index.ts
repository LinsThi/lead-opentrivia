import type { Reducer } from 'redux';

import type { UserQuestionState } from './types';
import { UserQuestionTypes } from './types';

const INITIAL_STATE: UserQuestionState = {
  correctQuestionEasy: 0,
  correctQuestionMedium: 0,
  correctQuestionHard: 0,
};

const reducer: Reducer<UserQuestionState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  const { correctQuestionEasy, correctQuestionMedium, correctQuestionHard } =
    state;

  switch (type) {
    case UserQuestionTypes.USER_QUESTION_INCREMENT_EASY:
      return {
        ...state,
        correctQuestionEasy: correctQuestionEasy + payload.quantity,
      };
    case UserQuestionTypes.USER_QUESTION_INCREMENT_MEDIUM:
      return {
        ...state,
        correctQuestionMedium: correctQuestionMedium + payload.quantity,
      };
    case UserQuestionTypes.USER_QUESTION_INCREMENT_HARD:
      return {
        ...state,
        correctQuestionHard: correctQuestionHard + payload.quantity,
      };
    case UserQuestionTypes.RESTORE_QUESTION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
