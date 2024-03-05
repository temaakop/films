import { FiltersForType } from "../../types/film-type";

export const FiltersActionType = {
  FILTER: "FILTER",
  PAGES: "PAGES",
  SEARCH_TEXT: "SEARCH_TEXT",
  RESET: "RESET",
};

export const FILTERS_FOR: FiltersForType = [
  { title: "Высокий рейтинг", name: "top_rated" },
  { title: "По полпулярности", name: "popular" },
];
