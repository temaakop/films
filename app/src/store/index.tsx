import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filters } from "./reducers/filters";

import {
  FilmType,
  Genre,
  FilmsListType,
  FilmsActorsType,
  FilmsInfoType,
} from "../types/film-type";
import { user } from "./reducers/user";
import { films } from "./reducers/films";
import { film_details } from "./reducers/films-details";

const rootReducer = combineReducers({
  user,
  filters,
  films,
  film_details,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type StateType = {
  user: { id: number; token: string; loading: boolean };
  filters: {
    category: "top_rated" | "popular";
    pages: number;
    searchText: string;
    reset: {
      category: "top_rated";
      pages: number;
      searchText: string;
    };
  };
  genres: Genre[];

  films: {
    search: boolean;
    loading: boolean;
    films: {
      page: number;
      results: FilmType[];
      total_pages: number;
      total_results: number;
    };
    favorite_films: FilmsListType;
    genres: Genre[];
  };
  film_details: {
    details: FilmsInfoType;
    cast: FilmsActorsType;
    loading: boolean;
  };
};
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
