import type { Action } from 'redux';

export enum ThemesTypes {
  THEME_TOGGLE = '@theme/THEME_TOGGLE',
}

export interface ThemeState {
  theme: string;
}

export interface ToggleThemeProps extends Action {
  type: ThemesTypes.THEME_TOGGLE;
}
