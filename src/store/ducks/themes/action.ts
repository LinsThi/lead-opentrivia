import { action } from 'typesafe-actions';

import type { ToggleThemeProps } from './types';
import { ThemesTypes } from './types';

export const toogleThemeAction = (): ToggleThemeProps =>
  action(ThemesTypes.THEME_TOGGLE);
