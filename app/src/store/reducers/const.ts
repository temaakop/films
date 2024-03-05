import { Genre } from "../../types/film-type";
import { FILTERS_FOR } from "../actions/const";

export const initialState: Genre[] = [{ name: "", id: 0 }];

export const initialFilterState = {
  category: FILTERS_FOR[0].name,
  pages: 1,
  searchText: "",
};

export const baseUrl = "https://api.themoviedb.org/3/movie/";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTY2NGM1ZTZlMzUxMzI4ZTliOWM3NmY3OTIyMDA1YSIsInN1YiI6IjY1NTUyMjhlNjdiNjEzNDVjYjRkYjFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_H6Vr13l2t3_2BbgC8pbMBcqo0jB2B_0mZC5vEFz6s",
    
  },
};
