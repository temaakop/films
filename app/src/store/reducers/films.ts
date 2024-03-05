import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/films-api";

const initialState = {
  films: {},
  favorite_films: {},
  genres: [],
  loading: false,
  search: false,
};

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async ({
    filterCategory,
    page,
  }: {
    filterCategory: "top_rated" | "popular";
    page: number;
  }) => {
    const response = await filmsAPI.getFilms(filterCategory, page);
    return response;
  },
);

export const fetchFavoriteFilms = createAsyncThunk(
  "films/fetchFavoriteFilms",
  async (id: number) => {
    const response = await filmsAPI.getFavoriteFilms(id);
    return response;
  },
);

export const fetchSearchedFilms = createAsyncThunk(
  "films/fetchSearchedFilms",
  async (searchText: string) => {
    const response = await filmsAPI.getSearchedFilms(searchText);
    return response;
  },
);

export const fetchGenres = createAsyncThunk("films/fetchGenres", async () => {
  const response = await filmsAPI.getGenres();
  return response;
});

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
    builder.addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favorite_films = action.payload;
    });
    builder.addCase(fetchSearchedFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
    });
  },
});

export const { actions, reducer } = filmsSlice;

export const { loading, search } = actions;
export const films = reducer;
