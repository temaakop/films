import {
  FiltersActionTypes,
  FilterCategoryType,
  FilmsPageType,
  FilmsSearchType,
  FilterResetType,
} from "../../types/action-types";
import { FiltersActionType } from "../actions/const";

import { initialFilterState } from "./const";

export const filters = (
  state = initialFilterState,
  action: FiltersActionTypes,
) => {
  switch (action.type) {
    case FiltersActionType.FILTER:
      return {
        ...state,
        category: (action as FilterCategoryType).category,
      };
    case FiltersActionType.PAGES:
      return {
        ...state,
        pages: (action as FilmsPageType).pages,
      };
    case FiltersActionType.SEARCH_TEXT:
      return {
        ...state,
        searchText: (action as FilmsSearchType).searchText,
      };
    case FiltersActionType.RESET:
      return {
        ...(action as FilterResetType).reset,
      };
    default: {
      return state;
    }
  }
};
