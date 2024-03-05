import { FiltersActionType } from "../store/actions/const";

export interface FilterCategoryType {
  type: typeof FiltersActionType.FILTER;
  category: string;
}

export interface FilmsPageType {
  type: typeof FiltersActionType.PAGES;
  pages: number;
}

export interface FilmsSearchType {
  type: typeof FiltersActionType.SEARCH_TEXT;
  searchText: string;
}

export interface FilterResetType {
  type: typeof FiltersActionType.RESET;
  reset: {
    category: "top_rated";
    pages: number;
    searchText: string;
  };
}

export type FiltersActionTypes =
  | FilterCategoryType
  | FilmsPageType
  | FilmsSearchType
  | FilterResetType;
