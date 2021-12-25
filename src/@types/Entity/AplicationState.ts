import type { CategoryThemesState } from '~/store/ducks/category/types';
import type { FontState } from '~/store/ducks/font/types';
import type { QuestionQuizState } from '~/store/ducks/questions/types';
import type { ThemeState } from '~/store/ducks/themes/types';
import type { UserState } from '~/store/ducks/user/types';
import type { UserQuestionState } from '~/store/ducks/userQuestions/types';

export interface AplicationState {
  theme: ThemeState;
  user: UserState;
  userQuestions: UserQuestionState;
  font: FontState;
  category: CategoryThemesState;
  question: QuestionQuizState;
}
