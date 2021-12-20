import type { Reducer } from 'redux';

import type { CategoryThemesState } from './types';
import { CategoryThemesTypes } from './types';

const INITIAL_STATE: CategoryThemesState = {
  categoryListThemes: [],
  loadingCategoryThemes: false,
  errorGetCategory: false,
};

const reducer: Reducer<CategoryThemesState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryThemesTypes.GET_CATEGORY:
      return {
        ...state,
        loadingCategoryThemes: true,
      };
    case CategoryThemesTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryListThemes: payload.categoryListThemes,
        loadingCategoryThemes: false,
        errorGetCategory: false,
      };
    case CategoryThemesTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        categoryListThemes: [],
        loadingCategoryThemes: false,
        errorGetCategory: true,
      };
    default:
      return state;
  }
};

export default reducer;
