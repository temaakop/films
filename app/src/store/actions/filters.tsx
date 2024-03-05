import { FiltersActionType } from "./const";

export const filterCategory = (category: string) => ({
  type: FiltersActionType.FILTER,
  category,
});

export const filmsPage = (pages: number) => ({
  type: FiltersActionType.PAGES,
  pages,
});

export const filmsSearch = (searchText: string) => ({
  type: FiltersActionType.SEARCH_TEXT,
  searchText,
});

export const filterReset = (reset: {
  category: "top_rated";
  pages: number;
  searchText: string;
}) => ({
  type: FiltersActionType.RESET,
  reset,
});
