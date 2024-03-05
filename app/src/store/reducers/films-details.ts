import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/films-api";

const initialState = {
  details: {},
  cast: {},
  loading: false,
};

export const fetchFilmDetails = createAsyncThunk(
  "filmsDetails/fetchFilmDetails",
  async (id: number) => {
    const response = await filmsAPI.getFilmsDetails(id);
    return response;
  },
);

export const fetchFilmCast = createAsyncThunk(
  "filmsDetails/fetchFilmCast",
  async (id: number) => {
    const response = await filmsAPI.getFilmCast(id);
    return response;
  },
);

const filmsDetailsSlice = createSlice({
  name: "filmsDetails",
  initialState,
  reducers: {
    loadingDetails(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(fetchFilmCast.fulfilled, (state, action) => {
      state.cast = action.payload;
    });
  },
});

export const film_details = filmsDetailsSlice.reducer;
export const { loadingDetails } = filmsDetailsSlice.actions;
