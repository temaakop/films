import { StateType } from ".";

export const selectSearchedFilmsText = (state: StateType) =>
  state.filters.searchText;
export const selectFilmsPage = (state: StateType) => state.filters.pages;
export const selectFilterCategory = (state: StateType) =>
  state.filters.category;
export const selectUserId = (state: StateType) => state.user.id;

export const selectGenres = (state: StateType) => state.films.genres;

export const selectFilmList = (state: StateType) => state.films.films.results;

export const selectFilmsIsSearch = (state: StateType) => state.films.search;

export const selectRequestIsLoading = (state: StateType) => state.films.loading;

export const selectFavoriteFilms = (state: StateType) =>
  state.films.favorite_films ? state.films.favorite_films.results : [];

export const selectFilmInfo = (state: StateType) => state.film_details.details;

export const selectFilmCast = (state: StateType) =>
  state.film_details.cast.cast;

export const selectFilmDetailsLoading = (state: StateType) =>
  state.film_details.loading;
