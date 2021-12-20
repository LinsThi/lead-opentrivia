import type { Action } from 'redux';

export enum CategoryThemesTypes {
  GET_CATEGORY = '@categoryThemes/GET_CATEGORY',
  GET_CATEGORY_SUCCESS = '@categoryThemes/GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR = '@categoryThemes/GET_CATEGORY_ERROR',
}

export interface CategoryThemesState {
  categoryListThemes: any[];
  loadingCategoryThemes: boolean;
  errorGetCategory: boolean;
}

export interface GetCategoryThemesActionProps extends Action {
  type: CategoryThemesTypes.GET_CATEGORY;
}

export interface GetCategoryThemesSuccessActionProps extends Action {
  type: CategoryThemesTypes.GET_CATEGORY_SUCCESS;
  payload: { categoryListThemes: any[] };
}

export interface GetCategoryThemesErrorActionProps extends Action {
  type: CategoryThemesTypes.GET_CATEGORY_ERROR;
}
