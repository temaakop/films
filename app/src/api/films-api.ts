import { getSearchedFilmsApi } from "../store/utils";
import { baseUrl } from "../store/reducers/const";
import { OPTIONS } from "./const";

export const filmsAPI = {
  getFilms: async (filterCategory: "top_rated" | "popular", page: number) => {
    const validFilterCategories = ["top_rated", "popular"];

    if (!validFilterCategories.includes(filterCategory)) {
      console.error("Invalid filter category");
    }

    const requestParams:
      | string
      | {
          top_rated: string;
          popular: string;
        } = {
      top_rated: `top_rated?language=ru-US&page=${page}`,
      popular: `popular?language=ru-US&page=${page}`,
    };

    const url = `${baseUrl}${requestParams[filterCategory]}`;
    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();
      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
  getSearchedFilms: async (searchText: string) => {
    const url = getSearchedFilmsApi(searchText);

    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();
      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
  getFilmsDetails: async (id: number) => {
    const url = `${baseUrl}${id}?language=ru-US`;

    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();

      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
  getFilmCast: async (id: number) => {
    const url = `${baseUrl}${id}/credits?language=ru-US`;

    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();
      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
  getFavoriteFilms: async (id: number) => {
    const url = `https://api.themoviedb.org/3/account/${id}/favorite/movies`;
    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();
      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
  getGenres: async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=ru`;
    try {
      const request = await fetch(url, OPTIONS);
      const requestJson = await request.json();
      return requestJson;
    } catch (error) {
      return console.error(error);
    }
  },
};
