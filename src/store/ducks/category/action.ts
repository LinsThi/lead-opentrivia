import { action } from 'typesafe-actions';

import type {
  GetCategoryThemesActionProps,
  GetCategoryThemesSuccessActionProps,
  GetCategoryThemesErrorActionProps,
} from './types';
import { CategoryThemesTypes } from './types';

export const getCategoryThemesAction = (): GetCategoryThemesActionProps =>
  action(CategoryThemesTypes.GET_CATEGORY);

export const getCategoryThemesSuccessAction = (
  categoryListThemes: any[],
): GetCategoryThemesSuccessActionProps =>
  action(CategoryThemesTypes.GET_CATEGORY_SUCCESS, {
    categoryListThemes,
  });

export const getCategoryThemesErrorAction =
  (): GetCategoryThemesErrorActionProps =>
    action(CategoryThemesTypes.GET_CATEGORY_ERROR);
